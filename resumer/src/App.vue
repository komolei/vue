<template>
  <!--<div id="app">
                        <img src="./assets/logo.png">
                          <router-view></router-view>
                        <TopBar/>
                        <ResumerEditor/>
                        <ResumerPreview/>
                        <p>{{ text}} </p>
                      </div>-->
  <div class="page">
    <header>
      <TopBar/>
    </header>
    <main>
      <ResumerEditor/>
      <ResumerPreview/>
    </main>
  </div>
</template>

<script>
import './assets/reset.css'
import 'normalize.css/normalize.css'
import TopBar from './components/TopBar.vue'
import ResumerEditor from './components/ResumerEditor.vue'
import ResumerPreview from './components/ResumerPreview.vue'

export default {
  name: 'app',
  data: function () {
    return {
      // text: 'hello app!'
    }
  },
  components: { TopBar, ResumerEditor, ResumerPreview },
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}*/

.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #eaebec;
  /*display: flex;
  justify-content: center;*/
}

.page>main {
  flex-grow: 1;
}

.page>main {
  min-width: 1024px;
  max-width: 1440px;
  /*margin: 0;*/
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: space-around;
  justify-content: space-between;
  padding: 0 16px;
  align-self: center;
}

#ResumerEditor {
  width: 35%;
  background: #444;
}

#ResumerPreview {
  /*width: 61.6666667%;*/
  flex-grow: 1;
  margin-left: 16px;
  background: #777;
}
</style>
