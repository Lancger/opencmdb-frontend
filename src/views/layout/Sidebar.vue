<template>
  <scroll-bar>
    <div class="sidebar theme-sidebar">
      <!-- 非折叠 -->
      <el-menu
        v-if="!isCollapse"
        :default-active="'/' + $route.path.split('/')[1] + '/' + $route.path.split('/')[2]"
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        :router="true">
        <!-- item 分组 -->
        <el-menu-item-group>
          <template slot="title">
            <span class="title-icon">
              <i class="el-icon-menu"></i>
            </span>
            <span>模型管理</span>
          </template>
          <el-menu-item index="/model/res">资源层</el-menu-item>
          <el-menu-item index="/model/app">应用层</el-menu-item>
        </el-menu-item-group>
        <!-- item 分组 -->
        <el-menu-item-group>
          <template slot="title">
            <span class="title-icon">
              <i class="el-icon-document"></i>
            </span>
            <span>仓库管理</span>
          </template>
          <el-menu-item index="/resource/res">资源层</el-menu-item>
          <el-menu-item index="/resource/app">应用层</el-menu-item>
        </el-menu-item-group>
        <el-menu-item index="/view">
          <i class="el-icon-location"></i>
          <span slot="title">视图管理</span>
        </el-menu-item>
      </el-menu>
      <!-- 折叠 -->
      <el-menu 
        v-else
        :default-active="'/' + $route.path.split('/')[1] + '/' + $route.path.split('/')[2]"
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse"
        :router="true">
        <el-submenu index="model">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">模型管理</span>
          </template>
          <el-menu-item index="/model/res">资源层</el-menu-item>
          <el-menu-item index="/model/app">应用层</el-menu-item>
        </el-submenu>
        <el-submenu index="resource">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">仓库管理</span>
          </template>
          <el-menu-item index="/resource/res">资源层</el-menu-item>
          <el-menu-item index="/resource/app">应用层</el-menu-item>
        </el-submenu>
        <el-menu-item index="/view">
          <i class="el-icon-location"></i>
          <span slot="title">视图管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </scroll-bar>
</template>

<script>
  import ScrollBar from '@/components/ScrollBar'
  import {mapMutations,mapGetters} from 'vuex'

  export default {
    name: 'Sidebar',
    components: { 
      ScrollBar 
    },
    computed: {
      ...mapGetters([
        'isCollapse'
      ])
    },
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>

<style type="text/css" lang="less">
  .sidebar {
    .el-menu {
      border-right: 0 none;
    }
    .el-menu-item-group {
      .el-menu-item-group__title {
        font-size: 14px;
        white-space: nowrap;
        padding: 0 0 0 20px !important;
        height: 56px;
        line-height: 56px;
      }
      ul {
        margin-left: 30px;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }
</style>

<style  lang="less" scoped>
  .title-icon {
    margin-right: 5px;
    font-size: 18px;
    vertical-align: middle;
    width: 24px;
    text-align: center;
  }
</style>
