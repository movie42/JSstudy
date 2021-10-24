# Call Stack & Event Loop

> [JSConf 어쨌든 이벤트 루프는 무엇입니까? | Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

1. 자바스크립트는 싱글 스레드 프로그래밍 언어이다.  
   그래서 동시에 여러 코드가 실행될 수 없다. (하나의 코드만 실행할 수 있다.)
   Call Stack은 Data Structure로 할일을 기억한다.(STACK : LIFO)

2. 블로킹

   느리게 실행되는 코드.(정확한 정의는 없다.) 동기로 실행되는 코드가 있다면 해당 데이터를 전부 불러올 때 까지 다른 동작은 실행을 하지 못하게 된다. 왜냐하면 자바스크립트는 싱글 스레드 프로그래밍 언어이기 때문에 스텍에 실행해야하는 함수가 쌓여있고 데이터를 다 불러올때까지 Call Stack에서 지워지지 않기 때문이다.

3. 비동기(acynchronous callbacks)  
   "어떤 코드를 실행하면 결국 콜백을 받고 이것을 나중에 실행한다."  
   [영상 10분 39초](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=639)

   - 예제 코드

   ```Javascript
       console.log("something");

       setTimeout(()=>console.log("later"), 5000);

       console.log("happen");
   ```

   setTimeout 함수가 5초 뒤에 실행되도록 명령을 내렸는데, happen이 나중에 실행되지 않고 먼저 실행되고 5초 뒤에 setTimeout 함수가 실행되는 이유는 setTimeout 함수 호출 자체는 완료되었다고 보기 때문이다. (실행될때 stack에서 webaip로 이동한다.)
   [영상 13분 19초](https://youtu.be/8aGhZQkoFbQ?t=799)

4. 이벤트 루프
   "이벤트 루프의 역할은 call stack과 task queue를 주시하는 것이다." task queue에 실행해야할 무언가가 있으면 이벤트 루프는 call stack으로 실행 함수를 보내서 브라우저에서 실행하도록 한다.  
   비동기 함수 실행 방법도 이와 같다.

5. 유동적인 UI
   이벤트 루프를 막아서 스텍에 느린 코드들이 쌓이게 되면 사용자가 브라우저에서 UI를 조작해도 반응하지 않을 수 있다.(콜 스텍에 쌓인 실행 함수들이 다 지워질때까지 기다려야 하기 때문에)
