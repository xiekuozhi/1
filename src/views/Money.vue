<template>
  <Layout classPrefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes-wrapper">
      <Notes field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNote" />
    </div>

    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from "vue";
import Component from "vue-class-component";
import store from "@/store/index2";



@Component({
  components: { Notes, NumberPad, Types, Tags },
})
export default class Money extends Vue {
  tags = store.tagList;
  recordList=store.recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

  onUpdateTags(value: string[]): void {
    this.record.tags = value;
  }
  onUpdateNote(value: string): void {
    this.record.notes = value;
  }
  saveRecord(): void {
   store.createRecord(this.record)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes-wrapper{
  padding:12px 0;
}
</style>
