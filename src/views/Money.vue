<template>
  <Layout classPrefix="layout">
    <NumberPad :value.sync="record.amount" />
    <Types :value.sync="record.type" />
    <Notes @update:value="onUpdateNote" />
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Vue from 'vue'
import Component from "vue-class-component";

type Record = {
  type: string;
  amount: number;
  notes: string;
  tags: string[];
}

@Component({
  components: { Notes, NumberPad, Types, Tags, },
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行']
  record: Record = { tags: [], notes: '', type: '-', amount: 0 }

  onUpdateTags(value: string[]): void {
    this.record.tags = value
  }
  onUpdateNote(value: string): void {
    this.record.notes = value
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

