<template>
    <Layout>
      <Tabs  classPrefix="type" :dataSource="typeList"  :value.sync="type"/>
      <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval"/>
    </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Tabs.vue';
import Vue from 'vue'
import { Component } from "vue-property-decorator";
import Types from "../components/Money/Types.vue";

@Component({ components: { Types,Tabs} })
export default class Statistics extends Vue {
interval='day'
type='-'
intervalList=[
  {text:'按天',value:'day'},
  {text:'按周',value:'week'},
  {text:'按月',value:'month'},
]
typeList=[
  {text:'支出',value:'-'},
  {text:'收入',value:'+'},
]

}
</script>
<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>

