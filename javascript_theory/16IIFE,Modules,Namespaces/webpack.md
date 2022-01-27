# 결코 피해갈 수 없는 WebPack

> 읽기 전
>
> - 이 글은 webpack 공식 문서를 읽으면서 천천히 뜯어보고 알게된 사실을 정리한 글이다. 뭔가 새로운 사실을 알았거나 어떤 오류를 해결하기 위한 글이 아니다. 그래서 webpack을 공부하는 모든 사람이 이 포스트를 읽을 필요가 없다. 그냥 바로 [공식 문서 : webpack documentation](https://webpack.js.org/concepts/)을 천천히 읽어보는 것을 추천한다.
> - 부록에서 module, module patterns, module formats, module loader, module builder에 대해서 다루기는 하지만 그것 역시 다른 아티클을 읽고 정리한 내용에 불과하다. 참고한 아티클은 링크를 달아 놓았기 때문에 그 아티클을 읽어보는 것을 추천한다.
> - 이 포스트가 쓸모 있으려면 module이 중요한데 모듈을 모른다면 [IIFE, Modules, Namespaces](https://github.com/yjs03057/33-js-concepts#8-iife-modules-namespaces)에 대해서 공부해보기를 추천한다.

나는 webpack이 너무 무섭다. 프론트 앤드 개발을 하면서 webpack으로 부터 파생된 에러를 만나면 최소 하루를 날렸다. 처음에는 나의 검색하는 능력을 의심하게 되고, 자책과 자괴감을 느끼며 마지막에는 프론트 앤드 개발자로써 실격이 아닐까 하는 생각과 함께 결국 해결하지 못하고 하루를 마감하곤 했다. 사실 지금도 별반 다르지는 않지만 그래도 이전보다 빠르게 해결하는 것을 보면 그래도 검색 능력은 많이 향상된 듯 하다.(webapck이 아니라.)

사실 나는 React를 쓰면 webpack을 쓸 필요 없다는 신화에 빠져있었다. 나중에 알게 된 사실이지만 내가 그렇게 자주 쓰던 create-react-app은 webpack이 포함된 패키지 모음이었다. 그러니까 결국 어떻게 되든지 간에 webpack은 피해갈 수 없는 것이다. 나중에 react를 커스텀하게 될지도? 게다가 javascript module을 공부하다가 결국 webpack을 다시 만나게 되었다.

## 웹팩이란?

웹팩의 컨셉은 module을 entry로 한데 모아 하나 이상의 파일로 build 한다. 웹팩은 런타임으로 실행되지 않는다. 정적이다. 웹팩이 필요한 이유는 자바스크립트 개발자가 module을 사용해서 코드를 작성하기 때문이다. 흔히 보통 module을 통해 코드를 나누고 전역 공간을 오염시키지 않으며 종속성을 통해 코드를 재사용하고 효율적인 개발을 한다. 어찌됐든 이렇게 되면 자바스크립트 파일이 여러개로 나뉘는데 이런 수많은 자바스크립트 파일을 한데 모아 어플리케이션을 보다 효율적으로 운영할 수 있도록 하게 한다.

## 웹팩 세팅

나는 웹팩을 설치하고 나면 패키지를 마구 설치하기 바빴다. 잘 모르기 때문이다. 하지만 이전에 작성했던 웹팩 코드를 살펴보면서 웹팩 컨셉을 다시 읽어보면서 어느 부분이 어떤 역할을 하는지 이해해보려고 한다.

```javascript
const path = require("path");
const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const dirApp = path.join(__dirname, "app");
const dirShared = path.join(__dirname, "shared");
const dirStyles = path.join(__dirname, "styles");
const dirNode = "node_modules";

module.exports = {
  entry: [
    path.join(dirApp, "index.js"),
    path.join(dirStyles, "index.scss")
  ],

  resolve: {
    modules: [dirApp, dirShared, dirStyles, dirNode]
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./shared",
          to: ""
        }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 8 }]
          ]
        }
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ""
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
        loader: "file-loader",
        options: {
          name(file) {
            return "[hash].[ext]";
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader
          }
        ]
      },
      {
        test: /\.(glsl|frag|vert)$/,
        loader: "raw-loader",
        exclude: /node_modules/
      },

      {
        test: /\.(glsl|frag|vert)$/,
        loader: "glslify-loader",
        exclude: /node_modules/
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
```

## Appendix : modules, module formats, module loader and module bundlers

> 이 아티클을 읽자.
> [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)

webpack은 모듈 번들러이다. module bundler라는 컨셉을 이해하기 위해 위의 아티클을 정리해보았다.

### module이란?

모듈은 캡슐화된 코드다. 단순히 캡슐화만 하여 글로벌 스페이스를 오염시키지 않는 역할로 끝나지 않고 코드를 재사용 할 수 있도록 돕는 훌륭한 도구다. 모듈이 없었을 때는 javascript design pattern이 있었다. 디자인 패턴이 유효하지 않다는 것은 아니지만 현대 자바스크립트는 모듈로 인해 디자인 패턴이 제공하는 캡슐화 보다 훨씬 더 편하게 자바스크립트 코드를 작성하고 관리하고 재사용할 수 있게 되었다.

ES5에서 모듈 패턴은 대표적으로 IIFE와 Revealing Module이 있다. 캡슐화를 할 수 있다는 장점이 있지만 종속성을 제공하지 않았다. 이 한계를 극복하기 위해서 module formats이 생겨났다.

## module formats

ES6 이전에 공식적인 모듈 구문이 없었다. 그래서 개발자들은 여러 module 형식을 만들었다. 여러 가지가 있지만 그냥 내가 지금도 보고 있는 구문은 CommonJS format과 ES6 module이다.

### CommonJS format 예시

```javascript
const button = require("button.js");

module.exports = function () {
  // something do
};
```

### ES6 module 예시

```javascript
import button from "button.js";

function buttonHandler() {
  // something do
}

export default buttonHandler;
```

공식적으로 ES6 모듈이 생겨났다. 그러나 우리는 Babel을 사용해서 ES5 모듈 포멧으로 번역을 해야한다. 아마도 아직 모든 브라우저에서 ES6 모듈을 지원하지 않기 때문일 것이다.

## moudle loader

moule loaders는 특정 모듈 형식으로 쓰인 코드를 번역하는 역할을 하고 런타임으로 실행된다. 나는 써본적이 없다.

## module bundler

드디어 모듈 번들러 이야기가 나왔다. module bundler는 module loader를 대체하기 위해 나왔다. 모듈 번들러는 모듈 로더와 다르게 코드를 미리 build한다. 런타임으로 실행하지 않고 여러 모듈을 enrty로 모아 컴파일링을 한다. 그래서 모든 코드는 번들러에서 모아 브라우저가 이해할 수 있도록(현대 문법을 지원하지 않는 브라우저도 있으니까) build한다.
