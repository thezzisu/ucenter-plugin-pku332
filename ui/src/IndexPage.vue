<template>
  <div class="p-6 w-full">
    <div class="w-full flex flex-col items-center">
      <div>
        <img class="p-logo" src="https://asset.zisu.dev/img/332_512x512.png" />
      </div>
      <div class="font-bold text-5xl pt-8">45乙332寝室</div>
      <div v-if="isLoggedIn" class="text-2xl py-2">
        欢迎您的到来，尊敬的
        <b>{{ userInfo.attributes.nickname ?? userInfo.attributes.name }}</b>
        。
      </div>
      <div v-else>请登录以使用更多功能。</div>
      <div>
        <iframe
          class="p-desc-video"
          src="//player.bilibili.com/player.html?aid=553982621&bvid=BV1Dv4y1P72j&cid=716733007&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isLoggedIn, userInfo } from '@ucenter/ui/src/api'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style>
.p-logo {
  width: 128px;
  height: 128px;
}

.p-desc-video {
  height: 640px;
  width: 960px;
  max-width: 100%;
}
</style>
