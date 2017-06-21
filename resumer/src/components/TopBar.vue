<template>
    <div id="topBar">
        <!--<p>{{text}}</p>-->
        <div class="wrapper">
            <span class="logo">Resumer</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "TopBar",
    data: function () {
        return {
            text: "Resumer"
        }
    }
}
</script>

<style lang="scss">
#topBar {
    // font-family: 'Avenir', Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // color: #2c3e50; 
    // height: 64px;    
    background: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    .wrapper {
        min-width: 1024px;
        max-width: 1440px;
        margin: 0 auto;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 16px;
    }
    .logo {
        font-size: 24px;
        color: #000000;
    }
}

// #topBar p {
//     text-align: left;
//     font-size: 24px;
//     line-height: 64px;
//     color: goldenrod;
//     margin-left: 22px;
// }
</style>
