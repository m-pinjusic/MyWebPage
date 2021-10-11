
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'photos', component: () => import('pages/Photos.vue') },
      { path: 'videos', component: () => import('pages/Videos.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
