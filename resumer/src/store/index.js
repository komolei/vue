// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
//     // const store = new Vuex.Storse({
// export default new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path'

Vue.use(Vuex)
const state = {
    // count: 0,
    user: {
        id: '',
        username: ''
    },
    selected: 'profile',
    resume: {
        // visibleItems: ['profile', 'work history', 'education', 'projects', 'awards', 'contacts', 'others'],
        config: [
            { field: 'profile', icon: 'id' },
            { field: 'work', icon: 'work' },
            { field: 'education', icon: 'book' },
            { field: 'projects', icon: 'heart' },
            { field: 'awards', icon: 'cup' },
            { field: 'contacts', icon: 'phone' },
        ],
        profile: {
            name: 'komolei',
            city: 'ningbo',
            title: '学习',
            birthday: '1994-1-31',
        },
        work: [{
                company: '宁波澳纽投资有限公司',
                content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug。`
            },
            { company: '狗急跳墙责任有限公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug` },
        ],
        education: [
            { school: '浙江万里学院', content: '文字' },

        ],
        projects: [
            { name: 'project A', content: '文字' },
            { name: 'project B', content: '文字' },
        ],
        awards: [
            { name: 'no', content: '文字' },
            // { name: 'awards B', content: '文字' },
        ],
        contacts: [
            { contact: 'Phone', content: '1505747406*' },
            { contact: 'QQ', content: '944545149' },
        ],
        // others: []
    }
};
// const mutations = {
//     // increment(state) {
//     //     state.count++;
//     // },
//     switchTab(state, payload) {
//         state.selected = payload,
//     }
// }
export default new Vuex.Store({
    state,
    mutations: {

        initState(state, payload) {
            Object.assign(state, payload)
        },
        switchTab(state, payload) {
            state.selected = payload;
            localStorage.setItem('state', JSON.stringify(state))
        },
        // updateResume(state, {
        //     field,
        //     subfield,
        //     value
        // }) {
        //     state.resume[field][subfield] = value;
        // },
        updateResume(state, {
            path,
            value
        }) {
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state))

        },
        setUser(state, payload) {
            Object.assign(state.user, payload)
            console.log(state.user)
        },
        // switchTab(state, payload) {
        //     state.selected = payload, //错误,;打成逗号,
        // }
        removeUser(state) {
            state.user.id = "";
        },
        addResumeSubfield(state, { field }) {
            let empty = {}
            state.resume[field].push(empty)

            state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
                Vue.set(empty, key, "")
            })
        },
        delResumeField(state, { path }) {
            objectPath.del(state.resume, path)
        }
    }
})