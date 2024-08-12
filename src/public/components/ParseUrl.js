import React from "react";
import "./ParseUrl.css";
import { Input, Button, Tooltip, UserOutlined, InfoCircleOutlined } from "antd";
import { EditOutlined } from "@ant-design/icons";
export default function ParseUrl() {
  return (
    <div className="parse-url-box">
      <div className="parse-url-input-wrapper">
        <h4>Url string</h4>
        <Input.Group compact>
          <Input
            size="medium"
            style={{ width: "calc(100% - 200px)" }}
            prefix={<EditOutlined />}
            placeholder="Insert a url string"
          />
          <Button type="primary">Submit</Button>
        </Input.Group>
        <h4>parsed Url components</h4>
        <Input.Group compact style={{ marginBottom: "20px" }}>
          <Input
            size="medium"
            style={{ width: "80%" }}
            placeholder="parsed url"
          />
        </Input.Group>
      </div>
    </div>
  );
}
