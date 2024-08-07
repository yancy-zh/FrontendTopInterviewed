import React, { lazy } from "react";
import "./ScrollWindowListener.css";
import dog from "./img/1.jpg";
import panda from "./img/2.jpg";
import dog2 from "./img/3.jpg";
import short from "./img/4.jpg";
import sleepInClass from "./img/5.jpg";
import missU from "./img/6.jpg";
import snopy from "./img/7.jpg";
import baby from "./img/8.jpg";

function ScrollWindowListener() {
  // fn();
  window.onscroll = lazyLoad(fn, true);
  let imgs = document.getElementsByTagName("img");
  function fn() {
    let clietH =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    console.log(clietH, scrollTop);
    for (let i = 0; i < imgs.length; i++) {
      let x = scrollTop + clietH - imgs[i].offsetTop;
      if (x > 0) {
        imgs[i].src = imgs[i].getAttribute("src");
      }
    }
  }
  function lazyLoad(fn) {
    let timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this);
          timer = null;
        }, 200);
      }
    };
  }
  return (
    <div className="window-wrapper">
      <img src={dog} alt="xxx" loading="lazy" />
      <img src={panda} alt="xxx" loading="lazy" />
      <img src={dog2} alt="xxx" loading="lazy" />
      <img src={short} alt="xxx" loading="lazy" />
      <img src={sleepInClass} alt="xxx" loading="lazy" />
      <img src={missU} alt="xxx" loading="lazy" />
      <img src={snopy} alt="xxx" loading="lazy" />
      <img src={baby} alt="xxx" loading="lazy" />
    </div>
  );
}

export default ScrollWindowListener;
