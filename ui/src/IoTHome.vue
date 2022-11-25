<template>
  <div class="p-16 w-full flex justify-center items-start">
    <NLayout class="border">
      <NLayoutHeader bordered class="p-4">
        <div class="text-lg">{{ $t('iot') }}</div>
      </NLayoutHeader>
      <NLayout has-sider>
        <NLayoutSider bordered width="128">
          <NMenu :options="menuOptions" />
        </NLayoutSider>
        <NLayoutContent class="p-4">
          <!--  -->
        </NLayoutContent>
      </NLayout>
    </NLayout>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import {
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  MenuOption,
  NLayoutContent
} from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/iot/'
        },
        () => t('overview')
      ),
    key: 'overview'
  }
]
</script>
