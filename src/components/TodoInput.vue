<template>
  <div class="inputBox shadow">
    <!-- 할 일 입력란 -->
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
    
    <!-- 할 일 추가 버튼 -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>

    <!-- 입력 경고 모달 -->
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">할 일을 입력하세요.
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
  </div>
</template>

<script>
import Modal from '../common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: '',  // 새로운 할 일을 입력하는 데이터
      showModal: false   // 경고 모달의 표시 여부를 관리하는 데이터
    }
  },
  methods: {
    addTodo() {
      // 새 할 일 추가 처리
      if (this.newTodoItem !== "") {  // 입력한 할 일이 비어있지 않은 경우
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);  // 부모 컴포넌트로 새 할 일을 전달
        this.clearInput();  // 입력 칸 초기화
      } else {
        // 할 일이 비어있을 때 경고 모달 표시
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';  // 입력 칸 초기화 메서드
    }
  },
  components: {
    Modal: Modal  // Modal 컴포넌트를 지역 컴포넌트로 등록
  }
}
</script>


<style scoped>
/* 포커스 시 아웃라인 제거 */
input:focus {
  outline: none;
}

/* 입력 박스 스타일 */
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

/* 입력 필드 스타일 */
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

/* 할 일 추가 컨테이너 스타일 */
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

/* 할 일 추가 버튼 스타일 */
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
