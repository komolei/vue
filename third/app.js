import bar from './bar';
import Vue from 'vue';
var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
        done: false,
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
            // this.todoList = this.todoList.splice(index, 1);
            this.todoList.splice(index, 1);
        },
        // store: function(todo) {
        //     let index = this.todoList.indexOf(todo);
        //     localStorage.setItem(index, todo);
        // }

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