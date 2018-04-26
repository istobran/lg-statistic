<template>
  <v-container id="guangzhou">
    <v-layout row wrap>
      <v-flex lg12>
        <v-data-table :headers="headers" :items="list" hide-actions :loading="!!dataLoading" class="elevation-1">
          <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <td>
              <v-flex xs12 align-center>
                <v-avatar :size="24" :tile="true" class="grey lighten-4">
                  <img :src="'//www.lgstatic.com/thumbnail_100x100/' + props.item.companyLogo" alt="avatar">
                </v-avatar>
                <span class="ml-1">{{ props.item.companyShortName }}</span>
              </v-flex>
            </td>
            <td class="text-xs-right">{{ props.item.companySize }}</td>
            <td class="text-xs-right">{{ props.item.positionName }}</td>
            <td class="text-xs-right">{{ props.item.salary }}</td>
            <td class="text-xs-right">{{ props.item.workYear }}</td>
            <td class="text-xs-right">{{ props.item.district }}</td>
            <td class="text-xs-right">{{ props.item.industryField }}</td>
            <td class="text-xs-right">{{ props.item.formatCreateTime }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex class="mt-1 text-xs-right" xs12>
        <v-pagination :length="pLength" v-model="pagination.page" @input="hit"></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
</style>

<script>
import * as API from "service/index";
export default {
  name: 'guangzhou',
  computed: {
    pLength() {
      return Math.ceil(this.pagination.total / this.pagination.size);
    }
  },
  watch: {
    ["pagination.page"](value) {
      this.fetchList(value);
    }
  },
  data() {
    return {
      dataLoading: null,
      list: [],
      headers: [
        {
          text: 'Company Name',
          align: 'left',
          sortable: false,
          value: 'companyShortName'
        },
        { text: 'Size', value: 'companySize' },
        { text: 'Position', value: 'positionName' },
        { text: 'Salary', value: 'salary' },
        { text: 'Experience', value: 'workYear' },
        { text: 'District', value: 'district' },
        { text: 'Field', value: 'industryField' },
        { text: 'Createtime', value: 'formatCreateTime' }
      ],
      pagination: {
        page: 1,
        total: 1,
        size: 15,
      }
    }
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList(page) {
      if (this.dataLoading) return;
      this.dataLoading = API.GuangZhou({ kw: "前端", page: page || this.pagination.page }).then(res => {
        this.list = res.result;
        this.pagination.total = res.totalCount;
      }).catch(console.error).then(() => {
        this.dataLoading = null;
      });
    }
  }
}
</script>
