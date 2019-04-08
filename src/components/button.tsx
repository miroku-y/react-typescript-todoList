/**
 * 编写一个button组件
 * type:primary、default、danger
 * size:large、default、small
 */
import * as React from "react";
import './button.css';


export interface ButtonOptions {
  type?: "primary" | "default" | "danger";
  size?: "large" | "default" | "small";
  text?: string;
  onClick (event:any): void;
  dataId?:number
}
export default class Button extends React.Component<ButtonOptions, any> {
  constructor(props: ButtonOptions) {
    super(props);
    this.state = {
      type: "default",
      size: "default",
      text: props.text || "",
      onClick:props.onClick,
      dataId:props.dataId
    };
  }
  public render() {
    let { type, size, text ,onClick,dataId} = this.props;
    console.log(this.props, type, size, text,onClick,dataId ,dataId,"-------");
    return <button className={type} onClick={onClick} data-id={dataId}>{text}</button>;
  }
}
