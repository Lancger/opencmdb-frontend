import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 登录
const login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login')

// home
const layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'layout')

// 模型管理
const model = r => require.ensure([], () => r(require('@/views/model/index.vue')), 'model')

// 资源管理
const  resource = r => require.ensure([], () => r(require('@/views/resource/index.vue')), 'resource')

// 视图管理
const  view = r => require.ensure([], () => r(require('@/views/view/index.vue')), 'view')

// 分组管理
const groupManage = r => require.ensure([], () => r(require('@/views/model/modelManagement/index.vue')), 'groupManage')

// 模型模板
const modelTemplate = r => require.ensure([], () => r(require('@/views/model/modelTemplate/index.vue')), 'modelTemplate')

// 模型关系
const modelRelationship = r => require.ensure([], () => r(require('@/views/model/modelRelationship/index.vue')), 'modelRelationship')

// 属性列表
const propertyList = r => require.ensure([], () => r(require('@/views/model/modelManagement/propertyList.vue')), 'propertyList')

// 仓库配置
const repositoryConfig = r => require.ensure([], () => r(require('@/views/resource/repositoryConfig/index.vue')), 'repositoryConfig')

// 仓库概览
const repositoryOverview = r => require.ensure([], () => r(require('@/views/resource/repositoryOverview/index.vue')), 'repositoryOverview')

// 仓库列表
const repositoryList = r => require.ensure([], () => r(require('@/views/resource/repositoryConfig/repositoryList.vue')), 'repositoryList')

// 404
const error404 = r => require.ensure([], () => r(require('@/components/ErrorPage/error404.vue')), 'error404')

// 401
const error401 = r => require.ensure([], () => r(require('@/components/ErrorPage/error401.vue')), 'error401')

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/model',
      component: layout,
      name: '模型管理',
      children: [
        {
          path: '/model/:modelManageType',
          component: model,
          name: '资源层',
          redirect: '/model/:modelManageType/group',
          children: [
            {
              path: '/model/:modelManageType/group',
              component: groupManage,
              name: '分组管理',
              children: [
                {
                  path: '/model/:modelManageType/group/:groupIndex/:modelId',
                  component: propertyList,
                  name: ''
                }
              ]
            },
            {
              path: '/model/:modelManageType/template',
              component: modelTemplate,
              name: '模型模板'
            },
            {
              path: '/model/:modelManageType/relation',
              component: modelRelationship,
              name: '模型关系'
            }
          ]
        }
      ]
    },
    {
      path: '/resource',
      component: layout,
      name: '仓库管理',
      children: [
        {
          path: '/resource/:repositoryManageType',
          component: resource,
          name: '资源层',
          redirect: '/resource/:repositoryManageType/list',
          children: [
            {
              path: '/resource/:repositoryManageType/list',
              component: repositoryConfig,
              name: '仓库配置',
              children: [
                {
                  path: '/resource/:repositoryManageType/list/:groupIndex/:modelId',
                  component: repositoryList,
                  name: ''
                }
              ]
            },
            {
              path: '/resource/:repositoryManageType/overview',
              component: repositoryOverview,
              name: '仓库总览'
            }
          ]
        }
      ]
    },
    {
      path: '/',
      component: layout,
      children: [
        {
          path: '/view',
          component: view,
          name: '视图管理'
        }
      ]
    }
  ]
})
export default router
