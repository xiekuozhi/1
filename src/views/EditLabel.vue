<template>
  <layout>
    <div class="navBar">
      <icon class="leftIcon" name="left" @click="goBack" />
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="Notes-wrapper">
      <Notes
        :value="tag.name"
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
import store from "@/store/index2";

@Component({
  components: { Notes, Buttoned },
})
export default class EditLabel extends Vue {
  tag?:Tag=undefined;
  
  created() {
    this.tag= store.findTag(this.$route.params.id);
    if (!this.tag) {
      this.$router.replace("/404");
    }
  }
  update(name: string) {
    if (this.tag) {
      store.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      if (store.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
    }
  }
  goBack() {
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
