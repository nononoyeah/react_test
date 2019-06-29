import React from 'react';  // 框架基础依赖包
import ReactDom from 'react-dom';  // 提供渲染函数
import App from "./app";


// render 函数将内容渲染到上下文中讲的index.html中id为root 的标签中
// ReactDom.render(<div>Hello World !</div>, document.getElementById('root'));
ReactDom.render(<App/>, document.getElementById('root'));