import { definePlugin } from '@ucenter/ui/src/plugin'
import { useTitle, useFavicon } from '@vueuse/core'

const title = useTitle()
title.value = 'PKU332'
const icon = useFavicon()
icon.value = 'https://asset.zisu.dev/img/332_180x180.png'

export default definePlugin({
  name: 'pku332',
  index: () => import('./IndexPage.vue')
})
