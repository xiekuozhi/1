<template>
  <Layout>
    <Tabs classPrefix="type" :dataSource="recordTypeList" :value.sync="type" />
   
    <ol>
      <li v-for="(group,index) in groupedList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>
<style>
</style>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";

import { recordTypeList } from "@/constants/recordTypeList";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";
import clone from "@/lib/clone";

@Component({ components: { Tabs } })
export default class Statistics extends Vue {
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天";
    } else if (day.isSame(now.subtract(1, "day"), 'day')) {
      return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), 'day')) {
      return "前天";
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  }
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }
  type = "-";
  recordTypeList = recordTypeList;
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupedList() {
    const { recordList } = this;
    if (recordList.length === 0) { return [] }
    const newList = clone(recordList).sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())
    const result = [{ title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]] }]
    for (let i = 0; i < newList.length; i++) {
      const current = newList[i]
      const last = result[result.length - 1]
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({ title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current] })
      }
    }
    return result

  }
  mounted(): void {
    this.$store.commit("fetchRecords");
  }
}
</script>
<style scoped lang="scss">
%item {
  padding: 8 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  background: #f5f4f5;
}

.title {
  @extend %item;
}

.record {
  @extend %item;
  background: white;
}

.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

::v-deep {
  .type-tabs-item {

       background: #c4c4c4;

    &.selected {
       background: white;

      &::after {
        display: none;
      }
    }
  }

  .interval-tabs-item {
    height: 48px;
  }
}
</style>
