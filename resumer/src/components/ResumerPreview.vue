<template>
    <div id="ResumerPreview">
        <!--<p> {{resume}}</p>-->
        <section data-name="profile" v-show="resume.profile">
            <h1>
                {{resume.profile.name}}
            </h1>
            <h2>{{resume.profile.title}}</h2>
            <p>
                <small>{{resume.profile.city}}</small>
                <small>{{resume.profile.birthday}}</small>
            </p>
        </section>
        <section data-name="work" v-show="resume.work">
            <h2>工作经历</h2>
            <ol>
                <li v-for="item in resume.work">
                    <h3>{{item.company}}</h3>
                    <p v-show="item.content"> {{item.content}} </p>
                </li>
            </ol>
        </section>
        <section data-name="education" v-show="resume.education">
            <h2>教育经历</h2>
            <ol>
                <li v-for="item in resume.education">
                    <h3>{{item.school}}</h3>
                    <p v-show="item.content">{{item.content}}</p>
                </li>
            </ol>
        </section>
     
    
    </div>
</template>
<script>
export default {
    name: "ResumerPreview",
    // data: function () {
    //     return {
    //         text: "I am RESUMERPREVIEW"
    //     }
    // }
    // data() {
    //     return {
    //         text: {
    //             get() {
    //                 return this.$store.state.selected;
    //             }
    //         }
    //     }
    // }
    computed: {

        resume() {
            return this.$store.state.resume;
        }
    }
}
</script>
<style lang="scss">
#ResumerPreview {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
    background: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25)
}

// #ResumerPreview p {
//     color: antiquewhite;
// }
</style>