

<template>
     <div>
      <label class="notes">
        {{value}}
        <span class="name">备注</span>
        <input type="text" 
        v-model="value"
         placeholder="在这里输入备注">
      </label>
    </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
    export default class notes extends Vue{
      value='';
    
    }

</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }
  ;

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }

  ;
}
</style>