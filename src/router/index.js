import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: () => import('../components/page/Dashboard.vue'),
          meta: { title: '系统首页' }
        },
        {
          path: '/user',
          component: () => import('../components/page/SystemUser.vue'),
          meta: { title: '用户管理' }
        },
        {
          path: '/menu',
          component: () => import('../components/page/SystemUser.vue'),
          meta: { title: '组织管理' }
        },
        {
          path: '/auth',
          component: () => import('../components/page/SystemAuth.vue'),
          meta: { title: '权限管理' }
        },
        {
          path: '/role',
          component: () => import('../components/page/SystemRole.vue'),
          meta: { title: '角色管理' }
        },
        {
          path: '/person',
          component: () => import('../components/page/Person.vue'),
          meta: { title: '编辑信息' }
        },
        {
          path: '/personview',
          component: () => import('../components/page/PersonView.vue'),
          meta: { title: '查看个人' }
        },
        {
          path: '/tabs',
          component: () => import('../components/page/Tabs.vue'),
          meta: { title: '查看公告' }
        },
        {
          path: '/newtabs',
          component: () => import('../components/page/NewTabs.vue'),
          meta: { title: '发布公告' }
        },
        {
          path: '/form',
          component: () => import('../components/page/BaseForm.vue'),
          meta: { title: '基本表单' }
        },
        {
          // 富文本编辑器组件
          path: '/editor',
          component: () => import('../components/page/VueEditor.vue'),
          meta: { title: '富文本编辑器' }
        },
        {
          // markdown组件
          path: '/markdown',
          component: () => import('../components/page/Markdown.vue'),
          meta: { title: 'markdown编辑器' }
        },
        {
          // 图片上传组件
          path: '/upload',
          component: () => import('../components/page/Upload.vue'),
          meta: { title: '文件上传' }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: () => import('../components/page/DragList.vue'),
          meta: { title: '拖拽列表' }
        },
        {
          // 拖拽Dialog组件
          path: '/dialog',
          component: () => import('../components/page/DragDialog.vue'),
          meta: { title: '拖拽弹框' }
        },
      ]
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/register',
      component: () => import('../components/page/Register.vue'),
      meta: { title: '注册' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});
