<template>
  <div id="topBar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <a class="button" href="#" @click.prevent="signOut">登出</a>
          <!--<a class="button primary" href="#">保存</a>
                        <a class="button" href="#">预览</a>-->
        </div>
        <div v-else class="userActions">
          <a class="button primary" href="#" @click.prevent="signUpDialogVisible = true">注册</a>
          <a class="button" href="#" @click.prevent="signInDialogVisible = true">登录</a>
        </div>
      </div>
    </div>
    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <SignUpForm></SignUpForm @success="signIn($event)">
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
      <SignInForm @success="signIn($event)" />
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  name: 'Topbar',
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    logined() {
      return this.user.id
    }
  },
  components: {
    MyDialog, SignUpForm, SignInForm
  },
  methods: {
    signOut() {
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user) {
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    }
  }
}
</script>

<style scoped lang="scss">
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
    padding: 0 16px; // .button {
    //     width:
    // }
  }
  .logo {
    font-size: 24px;
    color: #000000;
  }
}

.button {
  width: 72px;
  height: 32px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  background: #ddd;
  color: #222;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
  }
  &.primary {
    background: #02af5f;
    color: #ffffff;
  }
}

.actions {
  display: flex;
  .userActions {
    margin-right: 3em;
    .welcome {
      margin-right: .5em;
    }
  }
} // #topBar p {
//     text-align: left;
//     font-size: 24px;
//     line-height: 64px;
//     color: goldenrod;
//     margin-left: 22px;
// }
</style>
