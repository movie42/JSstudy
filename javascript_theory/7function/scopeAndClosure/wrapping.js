// function wrap(obj, method, wrapper) {
//   const fn = obj[method];

//   return (obj[method] = function () {
//     return wrapper.apply(
//       this,
//       [fn.bind(this)].concat(Array.prototype.slice.call(arguments)),
//     );
//   });

//   if (Prototype.Browser.Oprea) {
//     wrap(Element.method, "readAttribute", function (original, elem, attr) {
//       return attr == "title" ? elem.title : original(elem, attr);
//     });
//   }
// }
