<template>
  <div class="navbar clearfix">
    <div class="logo fl">
      OpenCMDB
    </div>
    <div class="collapse fl" @click="toggleCollapse" :class="{'collapse-rotate': isCollapse}">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="user-info fr">
      <div class="user-li navbar-item-hover" >
        <el-dropdown trigger="click" @command="getCommand">
          <div class="el-dropdown-link">
            <a href="javascript:void(0)">
              <span style="font-size: 20px;"><i class="fa fa-user-circle-o" aria-hidden="true"></i></span>
              <span class="user-name">{{userinfo.email}}</span>
              <span><i class="fa fa-caret-down" aria-hidden="true"></i></span>
            </a>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="skin">
              <i class="fa fa-adjust" aria-hidden="true"></i>
              <span>换肤</span>
            </el-dropdown-item>
            </a>
            <el-dropdown-item command="logout">
              <i class="fa fa-sign-out" aria-hidden="true"></i> 
              <span>退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
    
<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    name: 'Navbar',
    computed: {
      ...mapGetters([
        'userinfo'
      ])
    },
    data() {
      return {
        isCollapse: false,
        isToggleClass: false
      }
    },
    created() {
    },
    methods: {
      toggleCollapse () {
        this.isCollapse = !this.isCollapse
        let left = document.getElementById("left")
        if (left) {
          if (this.isCollapse) {
            left.style.flex = '0 0 60px'
          } else {
            left.style.flex = '0 0 180px'
          }
        }
        this.setCollapse(this.isCollapse)
      },
      isShowItem (list, f){
        if(list && list.length === 0) return
        if (list && list.length !== 0) {
          for (let i = 0; i < list.length; i++) {
            let item = list[i];
            item.style.display = f ? "none" : 'block';
          }
        }
      },
      getCommand (command) {
        if (command === 'skin') { // 换肤
          let className = '';
          this.isToggleClass = ! this.isToggleClass;
          className = this.isToggleClass ? 'dark-theme' : 'light-theme';
          this.setSkin(className); 
        } else { // 退出
          this.$router.push({path: '/login'})
        }
      },
      ...mapMutations({
        setCollapse : 'SET_COLLAPSE',
        setSkin : 'SET_SKIN',
      })
    },
    watch: {
      'isCollapse'(v) {
      }
    }
  }
</script>

<style type="text/css" lang="scss">
  .navbar {
    .el-dropdown {
      color: #fff;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .navbar {
     @include relative;
     padding: 0 15px;
     color: #fff;
     .collapse {
        font-size: 18px;
        transition: all .28s ease-out;
        cursor: pointer;
        margin-left: 20px;
     }
     .collapse-rotate {
        transform: rotate(90deg);
        transition: all .28s ease-out;
     }
     .logo {
        display: block;
        width: 100px;
        height: 100%;
        cursor: pointer;
        text-align: center;
     }
     .user-info {
        height: 100%;
        .user-li {
          position: relative;
          padding: 0 15px;
          a {
            display: block;
            height: 100%;
            height: 100%;
          }
          .user-name {
            margin: 0 6px;
          }
        }
     }
  }
</style>
