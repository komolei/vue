<template>
    <div id="ResumerEditor">
        <!--<p>{{text}}</p>-->
        <nav>
            <ol>
                <!--<li class="active"> x</li>
                                                        <li>x</li>
                                                        <li>x</li>
                                                        <li>x</li>
                                                        <li>x</li>
                                                        <li>x</li>
                                                        <li>x</li>-->
                <!--<li v-for="(item,index) in resume.visibleItems" :class="{active:item===selected}" @click="selected=item">{{index}}</li>-->
                <li v-for="(item,index) in resume.config" :class="{active:item.field===selected}" @click="selected=item.field">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panels">
            <!--<li>1</li>
                                                <li>2</li>
                                                <li>3</li>
                                                <li>4</li>
                                                <li>5</li>
                                                <li>6</li>
                                                <li>7</li>-->
            <!--<li v-for="item in resume.visibleItems" v-show="item===selected">{{resume[item]}}</li>-->
            <li v-for="item in resume.config" v-show="item.field===selected">{{resume[item.field]}}</li>
        </ol>
    </div>
</template>
<script>

// export default {

//     name: "ResumerEditor",
//     data: function () {
//         return {
//             text: "xixi RESUMEREDITOR"
//         }
//     }
// }
export default {
    name: "ResumerEditor",
    data() {
        return {
            selected: 'profile',
            resume: {
                // visibleItems: ['profile', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
                config: [
                    { field: 'profile', icon: 'id' },
                    { field: 'work history', icon: 'work' },
                    { field: 'education', icon: 'book' },
                    { field: 'projects', icon: 'heart' },
                    { field: 'awards', icon: 'cup' },
                    { field: 'contacts', icon: 'phone' },
                ],
                profile: {
                    name: '',
                    city: '',
                    title: ''
                },
                'work history': [],
                education: [],
                projects: [],
                awards: [],
                contacts: [],
                // others: []
            }
        }
    }
}
</script>
<style lang="scss">
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
    >nav {
        width: 80px;
        background: black;
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

// #ResumerEditor P {
//     color: aqua;
// }
</style>
