<template>
   
 <div class="nav">
    <router-link to="/money">
      <icon name="money"/>
        记账
    </router-link>
    <router-link to="/labels">
        <icon name="tags"/>
        标签
        </router-link>
    <router-link to="/statistics">
        <icon name="statistics"/>
        统计
        </router-link>
  </div>
   
</template>

<script lang="ts">

export default{
    name:'Nav'
}
</script>

<style lang="scss" scoped>
    .nav{
        border:1px red solid;
    }
</style>