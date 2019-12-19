import React from 'react';
import logo from '../../logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{textAlign:'center'}}>
          baby张的React Router 4+ 路由统一配置管理
          <p>Github地址：
            <a href="https://github.com/babybrotherzb" target="_blank">
              https://github.com/babybrotherzb
            </a>
          </p>
          <p>博客地址：
            <a
              href="https://blog.csdn.net/weixin_43648947"
              target="_blank"
            >
            https://blog.csdn.net/weixin_43648947
            </a>
          </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Home;
