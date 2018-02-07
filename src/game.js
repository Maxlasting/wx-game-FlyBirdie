// coding by ...

import Main from './main.js'
import './assets/css/main.css'

new Main()


// --------------------------------------------------------------------
// 无刷新热加载 与业务逻辑无关，开发完毕打包前删掉即可
if(module.hot) module.hot.accept()
