<h4>使用方式指南</h4> 

<h5>git clone</h5>

    git clone git@github.com:komolei/vue.git

    cd fourth
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
