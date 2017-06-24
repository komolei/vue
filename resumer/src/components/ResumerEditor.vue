<template>
    <div id="ResumerEditor">
        <!--<p>{{text}}</p>-->
        <nav>
            <ol>
                <!--<li class="active"> x</li>
                                <li v-for="(item,index) in resume.visibleItems" :class="{active:item===selected}" @click="selected=item">{{index}}</li>-->
                <li v-for="(item,index) in resume.config" :class="{active:item.field===selected}" @click="selected=item.field">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" v-show="item.field===selected">
                <!--<div class="resumeField" v-for="(value , key) in resume[item.field]">-->
                <div v-if="resume[item.field] instanceof Array">
                    <div class="subitem" v-for="subitem in resume[item.field]">
                        <div class="resumeField" v-for="(value,key) in subitem">
                            <label> {{ key }}</label>
                            <input type="text" :value="value">
                        </div>
                    </div>
                </div>
                <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
                    <label> {{ key }}</label>
                    <input type="text" v-model="resume[item.field][key]">
                </div>
            </li>
            <!--<li> {{count}} <button @click="add">test</button></li>-->
        </ol>
    </div>
</template>
<script>
export default {
    name: "ResumerEditor",
    // data() {

    // return {
    // selected: 'profile',
    // resume: {
    //     // visibleItems: ['profile', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
    //     config: [
    //         { field: 'profile', icon: 'id' },
    //         { field: 'work', icon: 'work' },
    //         { field: 'education', icon: 'book' },
    //         { field: 'projects', icon: 'heart' },
    //         { field: 'awards', icon: 'cup' },
    //         { field: 'contacts', icon: 'phone' },
    //     ],
    //     profile: {
    //         name: 'komolei',
    //         city: 'ningbo',
    //         title: 'komolei say hi',
    //     },
    //     work: [
    //         { company: 'AL', content: '我的第二份工作是' },
    //         { company: 'TX', content: '我的第一份工作是' },
    //     ],
    //     education: [
    //         { school: '浙江万里学院', content: '文字' },
    //         // { school: '', content: '文字' },
    //     ],
    //     projects: [
    //         { name: 'project A', content: '文字' },
    //         { name: 'project B', content: '文字' },
    //     ],
    //     awards: [
    //         { name: 'awards A', content: '文字' },
    //         { name: 'awards B', content: '文字' },
    //     ],
    //     contacts: [
    //         { contact: 'Phone', content: '15057474067' },
    //         { contact: 'QQ', content: '944545149' },
    //     ],
    //     // others: []
    // }

    // }

    // },

    computed: {
        // count(){
        //     return this.$store.state.count
        // }
        // data(){
        //     return this.$store.state
        // }

        selected:{
            get() {
                return this.$store.state.selected
            },
            set: function (value) {
                return this.$store.commit('switchTab', value)
            }

        },
        resume() {
            return this.$store.state.resume;
        }

    },
    methods: {
        // add(){
        //     this.$store.commit('increment')
        // }
    }
}
</script>
<style lang="scss" scoped>
#ResumerEditor {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // height: 925px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    >.panels {
        flex-grow: 1;
        >li {
            padding: 24px;
        }
    }

    >nav {
        width: 80px;
        background: #1f2126;
        color: #fff;
        >ol {
            >li {
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 16px;
                margin-bottom: 16px;
                &.active {
                    background: #fff;
                    color: black;
                }
            }
        }
    }
}

svg.icon {
    width: 24px;
    height: 24px;
}

ol {
    list-style: none;
}

.resumeField {
    >label {
        display: block;
    }
    input[type=text] {
        margin: 16px 0;
        border: 1px solid #ddd;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 40px;
        padding: 0 8px;
    }
}

hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
}

// #ResumerEditor P {
//     color: aqua;
// }
</style>
