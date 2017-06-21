<template>
    <div id="ResumerPreview">
        <p>{{text}}</p>
    </div>
</template>
<script>
export default {
    name: "ResumerPreview",
    data: function () {
        return {
            text: "I am RESUMERPREVIEW"
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