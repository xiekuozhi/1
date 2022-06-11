<template>
  <Layout classPrefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Money/Notes.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";

export default {
  components: { Notes, NumberPad, Types, Tags,},
  name: "Money",
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

