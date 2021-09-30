// Vue 라이브러리와 App 컴포넌트를 가져옴
import Vue from 'vue'
import App from './App.vue'

// Vue 인스턴스를 생성
new Vue({
  el: '#app', // 인스턴스를 마운트할 요소를 지정
  render: h => h(App) // App 컴포넌트를 렌더링하는 함수를 지정
})
