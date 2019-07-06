import React from 'react';
import { Icon, Upload, Button } from 'antd';
// import { getUrlByfileName } from '@/services/contractor';
import request from 'superagent';

class UploadPut extends React.Component {
  state = {
    hweiAction: '',
    limitfileList: [],
  };

  componentDidMount() {
    const { defaultFileList } = this.props;
    if (defaultFileList) {
      this.setState({ limitfileList: defaultFileList });
    }
  }

  componentDidUpdate(nextProps) {
    const { defaultFileList } = this.props;
    if (nextProps.defaultFileList !== defaultFileList) {
      this.setState({ limitfileList: defaultFileList });
    }
  }

  onChange = info => {
    const { limitNum } = this.props;
    let fileList = [...info.fileList];
    if (limitNum) {
      fileList = fileList.slice(-limitNum);
    }
    this.setState({ limitfileList: fileList });
    this.props.onChange && this.props.onChange();
  };

  onRemove = () => {
    const { setUploadName } = this.props;
    if (setUploadName) {
      setUploadName(null);
    }
  };
  setPercent = ({ percent }, file) => {
    // console.log('onProgress', `${percent}%`, file.name);
    const { id } = this.props;
    // 设置进度条
    if (document.querySelector(`#${id} .ant-progress-bg`)) {
      document.querySelector(`#${id} .ant-progress-bg`).style.width = `${Number(percent)}%`;
    }
  };

  beforeUpload = async (file, fileList) => {

    const getUrlByfileNameRes = {
      "url": {
        "hostname": "scfp-test.obs.cn-south-1.myhuaweicloud.com",
        "href": "https://scfp-test.obs.cn-south-1.myhuaweicloud.com:443/haha.txt?AccessKeyId=J0OSSINRQBZFVZGHHY0Q&Expires=1562383981&Signature=pahxvQKi5dV3Ni7GR%2BvQsKz1/Sg%3D",
        "path": "/haha.txt?AccessKeyId=J0OSSINRQBZFVZGHHY0Q&Expires=1562383981&Signature=pahxvQKi5dV3Ni7GR%2BvQsKz1/Sg%3D",
        "pathname": "/haha.txt",
        "port": "443",
        "protocol": "https:",
        "query": "AccessKeyId=J0OSSINRQBZFVZGHHY0Q&Expires=1562383981&Signature=pahxvQKi5dV3Ni7GR%2BvQsKz1/Sg%3D"
      },
      "header": {
          "Host": "scfp-test.obs.cn-south-1.myhuaweicloud.com"
      }
    };
    if (getUrlByfileNameRes) {
      this.setState({
        hweiAction: getUrlByfileNameRes.url.href,
      });

    }
  };
  render() {
    const { hweiAction, limitfileList } = this.state;
    const { text, tips, id, listType, acceptOther } = this.props;
    const businessProps = {
      action: hweiAction,
      headers: {
        'Content-Type': 'text/plain',
      },
      // 上传文件类型 默认允许 pdf, 需要别的格式可以用字符串的格式添加, 比如图片 acceptOther='image/jpeg,'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document
      accept: `application/pdf,${acceptOther ? acceptOther : ''}`,
      listType: listType ? listType : 'text',
      onChange: this.onChange,
      onProgress: this.setPercent,
      onRemove: this.onRemove,
      customRequest({
        action,
        file,
        filename,
        headers,
        onError,
        onProgress,
        onSuccess,
        withCredentials,
      }) {
        request
          .put(action)
          .attach(filename, file)
          .set(headers)
          .on('progress', ({ total, loaded }) => {
            onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
          })
          .then(({ data: response }) => {
            onSuccess(response, file);
          })
          .catch(onError);
        return {
          abort() {
            // console.log('upload progress is aborted.');
          },
        };
      },
    };
    return (
      <div id={id}>
        <Upload beforeUpload={this.beforeUpload} fileList={limitfileList} {...businessProps}>
          <Button>
            <Icon type="upload" /> {text}
          </Button>
          {tips}
        </Upload>
      </div>
    );
  }
}

export default UploadPut;
