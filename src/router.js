import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from './views/ListArticle.vue'
import CreateArticle from './views/CreateArticle.vue'
import EditArticle from './views/EditArticle.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/', redirect: '/articles/index'
    },
    {
      path: '/articles/index', name: 'listArticle', component: ListArticle
    },
    {
      path: '/articles/create', name: 'createArticle', component: CreateArticle
    },
    {
      path: '/articles/:id/edit', name: 'editArticle', component: EditArticle
    },

  ]
})
