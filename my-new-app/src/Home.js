import React from 'react'
import { Link } from 'react-router-dom'
import UploadPut from './UploadPut';


class Home extends React.Component{
    render(){
        return (
            <div>
                <div>This is Home</div>
                <div>
                    <Link to = '/Page1' style = {{color:'block'}}>
                        <div>点击跳转到Page1</div>
                    </Link>
                    <Link to = '/Page2' style = {{color:'block'}}>
                        <div>点击跳转到Page2</div>
                    </Link>
                    <Link to = '/Page3' style = {{color:'block'}}>
                        <div>点击跳转到Page3</div>
                    </Link>
                    <UploadPut
                        text="上传文件"
                        tips={
                          <span>
                            请上传营业执照扫描件并加盖公章，格式：jpg、png、pdf 大小不超过1MB
                          </span>
                        }
                        limitNum={1}
                        listType="picture"
                        acceptOther="image/jpeg,image/png"
                      />,
                </div>
            </div>
        )
    }
}

export default Home;