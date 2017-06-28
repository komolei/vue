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

        // if (ID.find(this.currentUser)){}
        this.fetchTodos();

    },
    methods: {
        fetchTodos: function() {
            if (this.currentUser) {
                var query = new AV.Query('AllTodos');
                query.find().then((todos) => {
                    let avAllTodos = todos[0];
                    let id = avAllTodos.id;
                    this.todoList = JSON.parse(avAllTodos.attributes.content);
                    this.todoList.id = id;
                }, function(error) {
                    // 异常处理
                    console.log("error:", error);
                });
            } else {
                // this.saveTodos();
            }
        },
        updateTodos: function() {
            let dataString = JSON.stringify(this.todoList);
            let avTodos = AV.Object.createWithoutData('AllTodos', this.todoList.id);
            avTodos.set('content', dataString);
            avTodos.save().then(() => {
                console.log('更新成功');
            })
        },
        saveTodos: function() {
            let dataString = JSON.stringify(this.todoList)
            var AVTodos = AV.Object.extend('AllTodos');
            var avTodos = new AVTodos();
            var acl = new AV.ACL();
            // acl.setPublicReadAccess(true);
            // acl.setPublicWriteAccess(false);
            acl.setWriteAccess(AV.User.current(), true);
            acl.setReadAccess(AV.User.current(), true);
            // var administartorRole = new AV.Role('Administrator', acl)
            avTodos.setACL(acl);
            // avTodos.save().then(function() {}).catch(function(error) {
            //     console.log(error);
            // })
            avTodos.set('content', dataString);
            // avTodos.save().then(function(todo) {
            avTodos.save().then((todo) => {
                    this.todoList.id = todo.id;
                    // alert("保持成功")
                    console.log('保存成功');

                    // alert('保存成功');
                    // var objectId = avTodos.id;
                    // console.log(objectId);
                    // return objectId;
                },
                function(error) {
                    alert('保存失败');
                });

        },
        saveOrUpdateTodos: function() {
            if (this.todoList.id) {
                this.updateTodos()
            } else {
                this.saveTodos();
            }
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
            // this.saveTodos()
            this.saveOrUpdateTodos();
        },
        remove: function(todo) {
            let index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
            // this.saveTodos()
            this.saveOrUpdateTodos();

        },
        signUp: function() {
            let user = new AV.User();
            user.setUsername(this.formData.username);
            user.setPassword(this.formData.password);
            user.signUp().then((loginedUser) => {
                this.currentUser = this.getCurrentUser();
                console.log(loginedUser);
                // this.ad();
            }, (error) => {
                alert("注册失败")
                console.log(error);
            })

        },
        logIn: function() {
            let username = this.formData.username;
            let password = this.formData.password;
            AV.User.logIn(username, password).then((loginedUser) => {
                // console.log(loginedUser, "success");
                this.currentUser = this.getCurrentUser();
                // this.isUser = true;
                this.fetchTodos();
            }, function(error) {
                alert("登录失败")
                console.log(error);

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
        // ad: function() {
        //     var roleAcl = new AV.ACL();
        //     roleAcl.setPublicReadAccess(true);
        //     roleAcl.setPublicWriteAccess(false);

        //     // 当前用户是该角色的创建者，因此具备对该角色的写权限
        //     roleAcl.setWriteAccess(AV.User.current(), true);

        //     //新建角色
        //     var administratorRole = new AV.Role('Administrator', roleAcl);
        //     administratorRole.save().then(function(role) {
        //         // 创建成功
        //     }).catch(function(error) {
        //         console.log(error);
        //     });
        // }
        User: function() {
            var query = new AV.Query('Todo');
            query.find().then(function(todos) {
                todos.forEach(function(todo) {
                    todo.set('status', 1);
                });
                return AV.Object.saveAll(todos);
            }).then(function(todos) {
                // 更新成功
            }, function(error) {
                // 异常处理
            });
        }
    }
})