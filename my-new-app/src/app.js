import React  from "react";
// import View from './view';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


// App组件申明方式：
// 1、函数式申明
// 2、类的方式申明


// 1、通过函数方式申明一个名为App的组件，内容是This is App
// const App = () => (
//     <div> This is App </div>
// )

// 2、通过类来申明
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: 'This is Text',
        }
    }
    render(){
        // let text = this.state.text;

        // <View/>标签，并在其中添加语句 text={text}，
        // 意思是将上面的let text变量传输到view 组件中。
        // return (<View text = {text} />)
        return (
            // Router只能有一个子组件，所以要把所有Route标签用一个div包裹起来
            // component属性，其中储存了组件名称，当我们访问特定地址时就会渲染该组件
            // 也可以称其为这一个路由的入口组件，可以有这个组件延伸开来搭建页面
            <Router> 
                <div>
                    {/* path用于储存路径，就是网站主页路径后面的内容，
                    loaclhost:3000后面的字符串就是path属性 */}
                    {/* <Route path ='/' component = {Home}/> */}
                    <Route exact path ='/' component = {Home}/>
                    <Route path = '/Page1' component = {Page1}/>
                    <Route path = '/Page2' component = {Page2}/>
                    <Route path = '/Page3' component = {Page3}/>
                </div>
            </Router>
        )

    }
}

// 将App组件发布出去，其他文件可通过App这个名称从该文件中获取App组件
export default App; 