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





