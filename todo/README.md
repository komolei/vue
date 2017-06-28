# 基于Vue的在线Todo应用


为什么自己要做Todo? 因为初学框架Vue,正好通过这个小项目来进行巩固和总结。

[预览](https://komolei.github.io/vue/todo/page.html)

## Function

- 在线注册账号，数据存储于LearnCloud
- TodoItem事项增删改，数据同步到云
- 根据完成情况，切换视图

## Technology Stack

- **Vue**: 采用ES6语法，使用箭头函数，模块化加载等
- **Webpack2.0**: 自动化构建工作流程
- **learncloud**: 与云端进行数据交互
- **CSS3**: 使用CSS3相关属性，来优化体验
- **rem**: 来打造移动端，Pc的响应式体验

## 总结

1. 不知道怎么使用框架，所以先要跑通文档上的例子，然后实际运用 
2. 学的太少，想得太多，且多用功做项目
3. 要了解怎么去使用，多看文档
##使用方式
<h4>git clone</h4>

    git clone git@github.com:komolei/vue.git

    cd todo
<h4>npm install</h4>

    npm install
<h4>或是</h4>
<h5>安装依赖 </h5>

    npm i -S webpack vue babel-loader babel-core babel-preset-es2015 babel-preset-react
    
    webpack || ./node_modules/.bin/webpack (两者选其一输入)
**注意点**
    在当前文件夹中使用webpack
    输入: ./node_modules/.bin/webpack ==>这样就可以卸载webpack了，卸载方式：npm uninstall webpack

<h5>.gitignore的使用方式</h5>
    相对大的文件，并不希望上传到github上
    touch .gitignore
    vi .gitignore
    node_modules
    .DS_Store
    .idea
