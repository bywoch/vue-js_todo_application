<template lang="html">
  <!-- 모달 컴포넌트 템플릿 -->
  <transition name="modal">
    <div class="modal-mask" @keyup.esc="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!-- 헤더 슬롯 영역 -->
          <div class="modal-header">
            <slot name="header">
              <!-- 헤더 슬롯이 비어 있을 때의 내용 -->
            </slot>
          </div>

          <!-- 푸터 슬롯 영역 -->
          <div class="modal-footer">
            <slot name="footer">
              <!-- 푸터 슬롯이 비어 있을 때의 내용 -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="css">
/* 모달 닫기 버튼 스타일 */
.closeModalBtn {color: #62acde;}

/* 모달 배경 스타일 */
.modal-mask {position: fixed; z-index: 9998; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, .5); display: table; transition: opacity .3s ease;}

/* 모달 내용을 가운데 정렬하기 위한 스타일 */
.modal-wrapper {display: table-cell; vertical-align: middle;}

/* 모달 컨테이너 스타일 */
.modal-container {width: 300px; margin: 0px auto; padding: 20px 30px; background-color: #fff; border-radius: 2px; box-shadow: 0 2px 8px rgba(0, 0, 0, .33); transition: all .3s ease; font-family: Helvetica, Arial, sans-serif;}

/* 모달 헤더 스타일 */
.modal-header h3 {margin-top: 0; color: #62acde;}

/* 모달 내용 스타일 */
.modal-body {margin: 20px 0;}

/* 모달 내부 기본 버튼 스타일 */
.modal-default-button {float: right;}

/*
 * 모달 진입 애니메이션 스타일
 * 모달이 나타날 때 적용되는 스타일
 */
.modal-enter {opacity: 0;}

/*
 * 모달 떠나는 애니메이션 스타일
 * 모달이 사라질 때 적용되는 스타일
 */
.modal-leave-active {opacity: 0;}

/*
 * 모달 진입 애니메이션 스타일
 * 모달이 나타날 때 모달 컨테이너 크기 변화
 */
.modal-enter .modal-container,
.modal-leave-active .modal-container {-webkit-transform: scale(1.1); transform: scale(1.1);}
</style>
