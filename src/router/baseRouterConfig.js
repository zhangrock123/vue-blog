const INDEX = r => require.ensure([], () => r(require('@/pages/index.vue')), 'index');


/**
 * 路由meta参数配置说明
 *  auth  是否需要用户登录验证
 *  title 改变浏览器标题名称
 *  template 使用模版名称
 *  menuTag 左侧栏菜单项激活
 */

export default [
  // 缺省页面重定向主页面
  {
    path: '/',
    redirect: { name: 'index' }
  },
  // 主页面
  {
    path: '/index',
    name: 'index',
    meta: {
      auth: true,
      title: '首页',
      template: 'appLayout',
      menuTag: 'hotel'
    },
    component: INDEX
  }
];
