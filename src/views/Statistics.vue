<template>
    <Layout>
      <Tabs  classPrefix="type" :dataSource="recordTypeList"  :value.sync="type"/>
      <Tabs classPrefix="interval" :dataSource="intervalList" :value.sync="interval"/>
    </Layout>
</template>

<script lang="ts">
import Tabs from '@/components/Tabs.vue';
import { intervalList } from '@/constants/intervalList';
import { recordTypeList } from '@/constants/recordTypeList';
import Vue from 'vue'
import { Component } from "vue-property-decorator";
import Types from "../components/Money/Types.vue";

@Component({ components: { Types,Tabs} })
export default class Statistics extends Vue {
interval='day'
type='-'
intervalList=intervalList;
recordTypeList=recordTypeList

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

