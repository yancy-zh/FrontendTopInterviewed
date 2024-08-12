import React from "react";
import "./Promise.css";
//声明一个 Promise 对象
const isHandsome = true;

const createPromise = new Promise(function (resolve, reject) {
  console.log("begin proposal");
  console.log("......");
  console.log("thinking it over");
  setTimeout(function () {
    if (isHandsome || isRich) {
      resolve("agreed");
    } else {
      reject("no, I can't");
    }
  }, 2000);
});
export default function Promise() {
  return <div className="msg-output">{createPromise}</div>;
}
