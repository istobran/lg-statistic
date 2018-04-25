<template>
  <div id="guangzhou">{{ list }}</div>
</template>

<style>
#guangzhou { color: red }
</style>

<script>
import * as API from "service/index";
export default {
  name: 'guangzhou',
  data () {
    return {
      list: ""
    }
  },
  mounted() {
    API.GuangZhou("前端").then(res => {
      this.list = res;
    });
  }
}
</script>
