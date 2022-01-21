// import { assert } from "./test.js";
import { asyncTest } from "./asyncTest.js";

window.onload = function () {
  asyncTest.test("Async Test #1", function () {
    asyncTest.pause();
    setTimeout(function () {
      asyncTest.assert(true, "First test completed");
      asyncTest.resume();
    }, 1000);
  });

  asyncTest.test("Async Test #2", function () {
    asyncTest.pause();
    setTimeout(function () {
      asyncTest.assert(true, "Second test completed");
      asyncTest.resume();
    }, 1000);
  });
};
