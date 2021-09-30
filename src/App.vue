
<!-- 
- <template>: Todo 애플리케이션의 화면 구성을 나타냄.
TodoHeader, TodoInput, TodoList, TodoFooter 컴포넌트를 렌더링
각 컴포넌트와의 통신을 위해 이벤트와 프롭스를 사용

- <script>: Vue 컴포넌트의 JavaScript 코드를 포함
데이터(todoItems)와 메서드(clearAll, addTodo, removeTodo)를 정의
로컬스토리지와의 상호작용을 처리
또한, 생성 시 로컬스토리지에서 TodoItem을 가져와 초기화

- <style>: 애플리케이션의 스타일을 설정, 페이지의 스타일과 요소들의 디자인을 정의
 -->

<template>
  <!-- Todo 애플리케이션의 기본 구조 -->
  <div id="app">
    <!-- TodoHeader 컴포넌트 -->
    <TodoHeader></TodoHeader>
    <!-- TodoInput 컴포넌트, addTodo 이벤트로 TodoItem 추가 -->
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <!-- TodoList 컴포넌트, propsdata 전달, removeTodo 이벤트로 TodoItem 제거 -->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <!-- TodoFooter 컴포넌트, removeAll 이벤트로 모든 TodoItem 제거 -->
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '../components/TodoHeader.vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'
import TodoFooter from '../components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: [] // TodoItem들을 저장하는 배열
    }
  },
  methods: {
    // 모든 TodoItem을 삭제하고 로컬스토리지 초기화
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    // TodoItem을 추가하고 로컬스토리지에 저장
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    // TodoItem을 제거하고 로컬스토리지에서 삭제
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  // 생성 시 로컬스토리지에서 TodoItem을 가져와 초기화
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
/* 스타일 설정 */
body {
  text-align: center;
  background-color: #F6F6F8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
