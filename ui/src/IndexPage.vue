<template>
  <div class="p-6 w-full">
    <div class="w-full flex flex-col items-center">
      <div>
        <img class="p-logo" src="https://asset.zisu.dev/img/332_512x512.png" />
      </div>
      <div class="font-bold text-5xl pt-8">摆带小助手</div>
      <div v-if="isLoggedIn" class="text-2xl py-2">
        欢迎您的到来，尊敬的
        <b>{{ userInfo.attributes.nickname ?? userInfo.attributes.name }}</b>
        。
      </div>
      <div v-else>请登录以使用更多功能。</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { isLoggedIn, userInfo } from '@ucenter/ui/src/utils'
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
