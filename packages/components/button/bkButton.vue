<template>
  <button :class="bkClass" :disabled="disabled">
    <span><slot></slot></span>
  </button>
</template>

<scritp lang="ts">
export default {
  name:"bkButton"
};
</scritp>

<script lang="ts" setup>
import {computed} from "vue";
const props=defineProps({
  type:{
    type:String,
    default:"default"
  },
  disabled:Boolean,
  round:Boolean,
})

const bkClass=computed(()=>{
  return[
      'bk-button',
      `bk-button-${props.type}`,
      props.disabled?'bk-button-disabled':'',
      props.round?'bk-button-round':''
  ]
})
</script>

<style lang="less" scoped>
.bk-button{
  border: 0;
  padding: 12px 24px;
  outline:none;
  background:none;
  line-height: 1;
  font-size:14px;
  box-sizing:border-box;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  &:hover,&:focus{
    opacity: .8;
  }
}
.bk-button-default{
  color:#333;
  border: 1px solid #dcdfe6;
  &:hover,&:focus{
    color:@imitation;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.bk-button-imitation{
  color:#000;
  background:@imitation;
  border-color: @imitation;
  box-shadow:2px 2px 5px #000000,
    -2px -2px 3px #ffffff;
}

.bk-button-disabled{
  opacity: .4;
  cursor:no-drop;
  &:hover,&:focus{
    opacity: .4;
  }
}
</style>


