import React from "react";
import "./NineCells.css";
function NineCells() {
  return (
    <div className="ninecellbox">
      <div className="grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
      <div className="ninecelltable">
        <ul>
          <li>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </li>
          <li>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </li>
          <li>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NineCells;
