<template>
  <Layout classPrefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :dataSource="recordTypeList" :value.sync="record.type" />
    <div class="notes-wrapper">
      <Notes field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNote" />
    </div>
    <Tags />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import Component from "vue-class-component";
import { recordTypeList } from "@/constants/recordTypeList";
import Tabs from "../components/Tabs.vue";


@Component({components: { Notes, NumberPad, Tags,Tabs }})
export default class Money extends Vue {
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
recordTypeList=recordTypeList

  get recordList() {
      return this.$store.state.recordList;
    }
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNote(value: string): void {
    this.record.notes = value;
  }
  saveRecord(): void {
    this.$store.commit('createRecord', this.record)
  }
}
</script>

<style scoped lang="scss" >
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes-wrapper {
  padding: 12px 0;
}
</style>
