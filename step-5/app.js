import bar from './bar';
import Vue from 'vue';
import AV from 'leancloud-storage'
var APP_ID = 't8mMm6CSj3JpRrLmNXNjyoOe-gzGzoHsz';
var APP_KEY = '2BvDA1Vx7kXXNNFKaNUm19dP';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })

var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
        done: false,
        actionType: 'signUp',
        formData: {
            username: '',
            password: '',
        },
        // isUser: false,
        currentUser: null,
    },
    // created: function() {
    //     let i = 0
    //     setInterval(() => {
    //         // this.newTodo = i;
    //         // i += 1
    //         console.log(this.newTodo);
    //     }, 1000)
    // },

    created: function() {
        // window.onbeforeunload = () => {
        //         let dataString = JSON.stringify(this.todoList);
        //         window.localStorage.setItem("todo", dataString);
        //         // var AVTodos = AV.Object.extend('AllTodos');
        //         // var avTodos = new AVTodos();
        //         // avTodos.set('content', dataString);
        //         // avTodos.save().then(function(todo) {
        //         //     // 成功保存之后，执行其他逻辑.
        //         //     console.log('保存成功');
        //         // }, function(error) {
        //         //     // 异常处理
        //         //     console.error('保存失败', error);
        //         // });

        //     }
        // let oldDataString = window.localStorage.getItem("todo");
        // let oldData = JSON.parse(oldDataString);
        // this.todoList = oldData || [];
        this.currentUser = this.getCurrentUser();

    },
    methods: {
        saveTodos: function() {
            let dataString = JSON.stringify(this.todoList)
            var AVTodos = AV.Object.extend('AllTodos');
            var avTodos = new AVTodos();
            avTodos.set('content', dataString);
            avTodos.save().then(function(todo) {
                alert('保存成功');
            }, function(error) {
                alert('保存失败');
            });
        },
        addTodo: function() {
            this.todoList.push({
                    title: this.newTodo,
                    createdAt: new Date(),
                    done: this.done,

                })
                // let Todo = AV.Object.extend("Todo");
                // let todo = new Todo();
            console.log(this.todoList, "todo");
            this.newTodo = "";
            this.saveTodos()
        },
        remove: function(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
            this.saveTodos()
        },
        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => {
                this.currentUser = this.getCurrentUser();
                console.log(loginedUser);
            }, (error) => {
                alert("注册失败")
            })
        },
        logIn: function() {
            let username = this.formData.username;
            let password = this.formData.password;
            AV.User.logIn(username, password).then((loginedUser) => {
                // console.log(loginedUser, "success");
                this.currentUser = this.getCurrentUser();
                // this.isUser = true;
            }, function(error) {
                alert("登录失败")
            });
        },
        getCurrentUser: function() {
            // let { id, createdAt, attributes: { username } } = AV.User.current();
            // return { id, username, createdAt };
            let current = AV.User.current()
            if (current) {
                let { id, createdAt, attributes: { username } } = current
                return { id, username, createdAt }
            } else {
                return null
            }
        },
        logOut: function logOut() {
            AV.User.logOut();
            // this.currentUser = null;
            // this.actionType = "logIn";
            window.location.reload();
        },
    }
})