<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import { start } from 'qiankun'
import { injectMicroApps } from './qinakun-config/index.js'
import actions from './actions/index.js'
const toMicroMsg = (msg)=>{
  console.log('actions',actions)
  actions.setGlobalState({ msg })
}
onMounted(() => {
  console.log(window)
  if (!window.qiankunStarted) {
    // 是否启用qiankun
    window.qiankunStarted = true
    injectMicroApps()
    // 开启qiankun
    start({
      // sandbox: {
      //   // sandbox: { strictStyleIsolation: true } // 严格隔离
      //   // experimentalStyleIsolation: true // 样式隔离
      // }
    })
  }
})
</script>

<template>
  <div style="border: 1px solid red;">
    <h3>基座盒子</h3>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <button type="button" @click="toMicroMsg('你好，我是基座主组件')">向子组件通信</button>
  </div>
  <div id="app-child"></div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
