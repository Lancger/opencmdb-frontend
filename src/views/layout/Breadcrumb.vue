<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
        <span class="theme-breadcrumb-item">{{ item.name }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script>

export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let self = this
      let matched = this.$route.matched.filter(item => item.name)
      let modelManageType = this.$route.params.modelManageType
      let repositoryManageType = this.$route.params.repositoryManageType
      if ((modelManageType && modelManageType === 'res') || (repositoryManageType && repositoryManageType === 'res')) {
        matched[1].name = '资源层'
      } else if ((modelManageType && modelManageType === 'app') || (repositoryManageType && repositoryManageType === 'app')){
        matched[1].name = '应用层'
      }
      this.levelList = matched
    }
  }
}
</script>

<style  lang="less" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 16px;
    margin-left: 15px;
  }
</style>

<style  lang="less" >
  .el-breadcrumb__inner span, .el-breadcrumb__inner.is-link {
    font-weight: 400;
  }
</style>