<template>
  <div class="login">
    <div class="login-container">
      <div class="login-form-card">
        <div class="login-title">
          open cmdb
        </div>
        <div class="login-form">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" >
            <el-form-item  prop="email" class="login-form-item">
              <div class="item-icon">
                <i class="fa fa-user" aria-hidden="true" ></i>
              </div>
              <el-input v-model.trim="ruleForm.email"  type="email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item  prop="password" class="login-form-item">
              <div class="item-icon">
                <i class="fa fa-lock" aria-hidden="true"></i>
              </div>
              <el-input v-model.trim="ruleForm.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="submit" @click="login('ruleForm')" :loading="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { login } from '@/api/login.js'
  import { checkEmail } from '@/utils/validator'
  import { mapMutations } from 'vuex'
  export default {
    name: 'login',
    data() {
      const validateEmail = (rule, value, callback) => {
        if (value == '') {
          callback(new Error('请输入邮箱'))
        } else {
          if (!checkEmail(value)) {
            callback(new Error('请输入正确的邮箱地址'))
          } else {
            callback()
          }
        }
      }
      return {
        ruleForm: {
          email: '',
          password: ''
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        loading: false
      }
    },
    created() {
    },
    methods: {
      login (formName) {
        let self = this;
        let obj = {
          email: self.ruleForm.email,
          password: self.ruleForm.password,
        };
        self.$refs[formName].validate( (valid) => {
          if (valid) {
            self.loading = true
            login(obj).then(res => {
              self.loading = false;
              if (res.status == 200) {
                let userinfo = res.data
                this.setUserInfo(userinfo);
                self.$message({
                  message: '登录成功',
                  type: 'success'
                })
                self.$router.push({path: '/model/res'})
              }
            },err => {
              self.loading = false
              console.log('error',err)
            })
          } else {
            self.$message({
              message: '用户名或密码有误',
              type: 'warning'
            })
            return false
          }
        })
      },
      ...mapMutations ({
        'setUserInfo': 'SET_USER_INFO'
      })
    },
  }
</script>

<!-- 覆盖element的样式 -->
<style type="text/css" lang="less">
 .login {
   .login-form-item {
      input {
        padding-left: 40px;
        border: none;
        -webkit-box-shadow: 0 0 0 40px #fff inset;
      }
    }
 }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .login {
    @include relative;
    background: linear-gradient(to bottom right,#4a69d8,#52b3c6);
    .login-container {
      height: 100%;
      background-image: url('../../../src/assets/home_images/home-bg.png');
      background-repeat: no-repeat;
      background-position: 50% 50px;
    }
    .login-form-card {
      width: 500px;
      background: rgba(225,243,255,.2);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      padding: 20px 40px;
      .login-form {
        width: 80%;
        margin: 0 auto;
      }
      .login-title {
        text-align: center;
        font-size: 28px;
        color: #fff;
        margin-bottom: 20px;
      }
      .login-form-item {
        position: relative;
      }
      .submit {
        width: 100%;
      }
    }
    .item-icon {
      position: absolute;
      left: 12px;
      top: 0px;
      font-size: 20px;
      color: #6791CE;
      z-index: 100;
    }
  }
</style>
