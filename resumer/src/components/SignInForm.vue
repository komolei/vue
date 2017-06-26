<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密 码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交" class="submit">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn () {
      let {username, password} = this.formData
      AV.User.logIn(username, password).then(() => {
        this.$emit('success', getAVUser())
      }, (error) => {
        this.errorMessage = getErrorMessage(error)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .row{
    margin-bottom: 10px;
  }
  label{
    display: inline-block;
    width: 48px;
  }
  .submit{
    padding: 4px 6px;
    float: right;
  }
  .errorMessage{
    color: red;
  }
</style>