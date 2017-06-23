import bar from './bar';
import Vue from 'vue';
var app = new Vue({
    el: '#komo',
    data: {
        message: 'Hello World!',
        show: true,
        name: name,
        todo: "",
        todoList: [],

    },
    methods: {
        sayName: function() {
            console.log(this.name);
            if (this.show) {
                this.show = !this.show;
                console.log(this.show);
            }
        },
        addTodoList: function() {
            this.todoList.push({
                title: this.todo,
                created: new Date(),
            })
            this.todo = "";
            console.log(this.todoList);
        }
    }
})