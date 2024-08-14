import React, { useState } from "react";
import "./ParseUrl.css";
import { Input, Button, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import JsonDisplay from "./JsonDisplay";
export default function ParseUrl() {
  const [inputVal, setInputVal] = useState("");
  const [outputVal, setOutputVal] = useState("");
  function queryURLparamsRegEs5(url) {
    let obj = {};
    let reg = /([^?=&]+)=([^?=&]+)/g;
    url.replace(reg, (...arg) => {
      obj[arg[1]] = arg[2];
    });
    return obj;
  }
  const handleClick = (e) => {
    let obj = queryURLparamsRegEs5(inputVal);
    for (const [key, value] of Object.entries(obj)) {
      console.log(`${key}: ${value}`);
    }
    setOutputVal(obj);
  };
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div className="parse-url-box">
      <div className="parse-url-input-wrapper">
        <h4>Url String</h4>
        <Input.Group compact>
          <Input
            size="medium"
            style={{ width: "calc(100% - 200px)" }}
            prefix={<EditOutlined />}
            placeholder="Insert a url string"
            onChange={handleChange}
          />
          <Button type="primary" onClick={handleClick}>
            Parse
          </Button>
        </Input.Group>
        <h4>Parsed Url Components</h4>
        <JsonDisplay data={outputVal}></JsonDisplay>
      </div>
    </div>
  );
}
