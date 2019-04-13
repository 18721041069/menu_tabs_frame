import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import store from './store/index.js';
import Index from './page/MenuFarme';

class App extends Component {
  render() {
    return (
        <LocaleProvider locale={zh_CN}>
            <Provider store={store}>
                <Index />
            </Provider>
        </LocaleProvider>
    );
  }
}

export default App;
