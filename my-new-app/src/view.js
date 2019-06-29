import React from "react";

class View extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        // this.props.text意思是获取并显示上一个组件
        // 传到这个组件的数据中名称为text的属性值
        return (<div>{this.props.text}</div>)
    }
}

export default View;