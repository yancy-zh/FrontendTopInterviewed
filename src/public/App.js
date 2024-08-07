import React, { Component } from "react";
import "./App.css";
import MultiCols from "./components/MultiCols.js";
import MultiCols1 from "./components/MultiCols1.js";
import MultiCols2 from "./components/MultiCols2.js";
import MultiCols3 from "./components/MultiCols3.js";
import MultiCols4 from "./components/MultiCols4.js";
import MultiCols5 from "./components/MultiCols5.js";
import MultiCols6 from "./components/MultiCols6.js";
import MultilineOverflow from "./components/MultilineOverflow.js";
import MultilineOverflow2 from "./components/MultilineOverflow2.js";
import NineCells from "./components/NineCells.js";
import CurryFunction from "./components/CurryFunction.js";
import ScrollWindowListener from "./components/ScrollWindowListener.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A React app</h1>
        <p>
          Edit <code>src/App.js</code>, save and reload.
        </p>
        {/* <MultiCols></MultiCols> */}
        {/* <MultiCols1></MultiCols1> */}
        {/* three cols */}
        {/* using float */}
        {/* <MultiCols2></MultiCols2> */}
        {/* using absolute */}
        {/* <MultiCols3></MultiCols3> */}
        {/* using float and negative margin */}
        {/* <MultiCols4></MultiCols4> */}
        {/* using flex */}
        {/* <MultiCols5></MultiCols5> */}
        {/* using grid */}
        {/* <MultiCols6></MultiCols6> */}
        {/*实现多行文本溢出的省略  */}
        {/* <MultilineOverflow></MultilineOverflow> */}
        {/*实现多行文本溢出的省略  使用定位伪元素遮盖末尾文字*/}
        {/* <MultilineOverflow2></MultilineOverflow2> */}
        {/* <NineCells></NineCells> */}
        <CurryFunction></CurryFunction>
        <ScrollWindowListener></ScrollWindowListener>
      </div>
    );
  }
}

export default App;
