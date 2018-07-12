<template>
  <v-container id="list">
    <v-layout row wrap>
      <v-flex lg12>
        <v-data-table :headers="headers" :items="list" hide-actions :loading="$root.loading" class="elevation-1">
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
        <v-pagination :length="pLength" v-model="pagination.page" @input="fetchList"></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
</style>

<script>
import API from "service/index";
import bus from "../bus";

export default {
  name: "list",
  computed: {
    pLength() {
      return Math.ceil(this.pagination.total / this.pagination.size);
    }
  },
  data() {
    return {
      list: [],
      headers: [
        {
          text: "Company Name",
          align: "left",
          sortable: false,
          value: "companyShortName"
        },
        { text: "Size", value: "companySize" },
        { text: "Position", value: "positionName" },
        { text: "Salary", value: "salary" },
        { text: "Experience", value: "workYear" },
        { text: "District", value: "district" },
        { text: "Field", value: "industryField" },
        { text: "Createtime", value: "formatCreateTime" }
      ],
      pagination: {
        page: 1,
        total: 1,
        size: 15
      }
    };
  },
  mounted() {
    console.log("vm: ", this);
    this.fetchList();
    bus.$on("cityChanged", _ => {
      this.pagination.page = 1;
      this.fetchList();
    });
  },
  methods: {
    fetchList() {
      this.$root.loading = true;
      API(this).fetch({ kw: "前端", page: this.pagination.page }).then(
        res => {
          this.list = res.result;
          this.pagination.total = res.totalCount;
          this.$root.loading = false;
        }
      );
    }
  }
};
</script>
