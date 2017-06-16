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
        window.onbeforeunload = () => {
            let dataString = JSON.stringify(this.todoList);
            window.localStorage.setItem("todo", dataString);
        }
        let oldDataString = window.localStorage.getItem("todo");
        let oldData = JSON.parse(oldDataString);
        this.todoList = oldData || [];

    },
    methods: {
        addTodo: function() {
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: this.done,

            })
            console.log(this.todoList);
            this.newTodo = "";
        },
        remove: function(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        },
        signUp: function() {
            let user = new AV.User();
            // 设置用户名
            user.setUsername(this.formData.username);
            // 设置密码
            user.setPassword(this.formData.password);
            // 设置邮箱
            // user.setEmail('944545149@qq.com');
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
        logOut: function() {

        },

        getCurrentUser: function() {
            let { id, createdAt, attributes: { username } } = AV.User.current();
            return { id, username, createdAt }
        }


    }
})


// if (!window.localStorage) {
//     localStorage.setItem(app);
// }
// var example = new Vue({
//     el: "#example",
//     data: {
//         counter: 0
//     }
// })

// var example2 = new Vue({
//         el: "#example2",
//         data: {
//             name: "Vue.js"
//         },
//         methods: {
//             greet: function() {
//                 alert(this.name);
//                 // alert(event.target.tagName);
//             }
//         }
//     })
//     // example2.greet = function() {
//     //     alert("hello ")
//     // }

// var example3 = new Vue({
//     el: "#example3",
//     data: {

//     },
//     methods: {
//         Say: function(message) {
//             alert(message);
//         },
//         warn: function(message, event) {
//             if (event) event.preventDefault()
//             alert(message);
//         },
//         warn1: function(message) {
//             // if (event) event.preventDefault()
//             alert(message);
//         },
//         warn2: function(message) {
//             // if (event) event.preventDefault()
//             alert(message);
//         }
//     }
// })

// var example1 = new Vue({
//     el: '#example-1',
//     data: {
//         items: [
//             { message: 'Foo' },
//             { message: 'Bar' },
//             { message: 'Bar' }
//         ]
//     }
// })

// var example2 = new Vue({
//     el: '#example-2',
//     data: {
//         parentMessage: 'Parent',
//         items: [
//             { message: 'Foo' },
//             { message: 'Bar' }
//         ]
//     }
// })