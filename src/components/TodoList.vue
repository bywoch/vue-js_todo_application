<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  // 상위 컴포넌트로부터 전달받은 할 일 목록 데이터
  props: ['propsdata'], 

  methods: {
    // 할 일 제거 메서드
    removeTodo(todoItem, index) {
      this.$emit('removeTodo', todoItem, index);  // 부모 컴포넌트로 제거할 할 일과 인덱스를 전달
    }
  }
}
</script>


<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}


.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-move {
  transition: transform 1s;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}</style>
