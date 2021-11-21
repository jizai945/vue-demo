# note

## yarn

相比npm，优点：

+ 速度快

yarn是同步执行所有任务安装，提高性能

+ 离线模式
+ 安装版本同一 : 有一个锁文件记录
+ 更简洁的输出
+ 多注册来源处理
+ 更好的语义化

命令对比：

| npm                        | yarn                 |
| -------------------------- | -------------------- |
| npm install                | yarn                 |
| npm install react --save   | yarn add react       |
| npm uninstall react --save | yarn remove react    |
| npm install --save-dev     | yarn add react --dev |
| nppm update --save         | yarn upgrade         |



## Vue-cli4 脚手架搭建

好处：可以快速使用vue开发

步骤:

+ 安装nodejs

输入命令 `npm -v` `node -v`检测安装

+ 安装cnpm 或者 安装yarn

`npm install -g cnpm --registry=https://registry.npm.taobao.org`

`npm install -g yarn`

可以修改yarn的源 ：`yarn config set registry https://registry.npm.taobao.org -g`

+ 安装vue-cli脚手架构建工具

命令:`cnpm install -g @vue/cli`

检测是否安装成功:`vue -V`

+ 创建项目

输入命令:`vue create {project_name}` {project_name}换成自己项目名称

安装步骤中选择`Manually select features` 自己选择安装库，使用空格键选中选项



![](vue_create_1.png)



![](vue_create_2.png)





+ 启动项目

```shell
cd vue-cli
yarn serve
```



## element

单例的使用:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
```



## element-ui在脚手架中使用

+ cd到vue项目工程中

+ 安装：`npm i element-ui -S`

+ 使用： 参考: `[组件 | Element](https://element.eleme.io/#/zh-CN/component/quickstart)`

![](element_ui.png)



+ 引入后运行 `yarn run serve` 会报extra的错误

  解决: 新建 vue.config.js  写入：

  ```js
  module.exports = {
      lintOnSave: false
  }
  ```

  

+ 在 App.vue中就可以使用element-ui， 不过这种方式是全部引用



## element-ui按需引入

参考：  [组件 | Element](https://element.eleme.io/#/zh-CN/component/quickstart)

+ 安装：`cnpm install babel-plugin-component -D`

+ 在`babel.config.js`中添加:

  ```js
  "plugins": [
      [
        "component",
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]
    ]
  ```

+ 在main.js中按需求引入:

```js
import { Button, Select } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
```

