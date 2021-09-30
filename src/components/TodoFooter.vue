<template>
  <div class="clearAllContainer">
    <!-- "Clear All" 버튼 -->
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      // "Clear All" 버튼 클릭 시 부모 컴포넌트로 이벤트 전달
      this.$emit('removeAll');   }
  }
}
</script>

<style scoped>
/* 전체 할 일 삭제 컨테이너 스타일 */
.clearAllContainer {width: 8.5rem; height: 50px; line-height: 50px; background-color: white; border-radius: 5px; margin: 0 auto;}

/* "Clear All" 버튼 스타일 */
.clearAllBtn {color: #e20303; display: block;}
</style>
