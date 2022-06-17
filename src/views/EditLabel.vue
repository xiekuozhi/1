<template>
  <layout>
    <div class="navBar">
      <icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"/>
    </div>
    <div class="Notes-wrapper">
      <Notes
        :value="currentTag.name"
        @update:value="update"
        fieldName="标签名"
        placeholder="请输入标签名"
      />
    </div>
    <div class="button-wrapper">
      <Buttoned @click="remove">删除标签</Buttoned>
    </div>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Notes from "@/components/Money/Notes.vue";
import Buttoned from "@/components/Button.vue";

@Component({
  components: { Notes, Buttoned },
})
export default class EditLabel extends Vue {
  get currentTag(){
    return this.$store.state.currentTag;
  }
  created() :void {
    const id =this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag',id)
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }
    update(name: string) :void {
      if (this.currentTag) {
        this.$store.commit('updateTag',{id:this.currentTag.id,name} );
      }
    }
  remove() :void{
    if (this.currentTag) {
      this.$store.commit('removeTag',this.currentTag.id)
    }
  }
  goBack() :void{
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .leftIcon {
    widows: 24px;
    height: 24px;
  }
  > .rightIcon {
    widows: 24px;
    height: 24px;
  }
}
.Notes-wrapper {
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>
