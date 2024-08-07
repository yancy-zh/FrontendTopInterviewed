import React from "react";

const curry = (fn) => {
  return _curry.call(this, fn, fn.length);
};
const _curry = (fn, len, ...args) => {
  return function (...params) {
    const _args = args.concat(params);
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, ..._args);
    }
  };
};
const add = (a, b, c, d) => {
  return a + b + c + d;
};
const addCurry = curry(add);
function CurryFunction() {
  return <div>{addCurry(1, 2, 3, 4)}</div>;
}

export default CurryFunction;
