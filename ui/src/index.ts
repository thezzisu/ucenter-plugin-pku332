import { definePlugin } from '@ucenter/ui/src/plugin'
import { isLoggedIn } from '@ucenter/ui/src/api'
import { useTitle, useFavicon } from '@vueuse/core'
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const title = useTitle()
title.value = 'PKU332'
const icon = useFavicon()
icon.value = 'https://asset.zisu.dev/img/332_180x180.png'

export default definePlugin({
  name: 'pku332',
  routes: [
    {
      path: '/',
      component: () => import('./IndexPage.vue')
    },
    {
      path: '/iot',
      component: () => import('./IoTHome.vue'),
      beforeEnter(to, from, next) {
        if (isLoggedIn.value) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ],
  mainMenu: () => {
    const { t } = useI18n()
    return [
      {
        key: 'iot',
        label: () => h(RouterLink, { to: '/iot' }, () => t('iot'))
      }
    ]
  },
  locales: {
    en: {
      iot: 'IoT'
    },
    zh: {
      iot: '物联网'
    }
  },
  policies: ['center:iot']
})
