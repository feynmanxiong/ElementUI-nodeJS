<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容" width="320"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  fetch() {},

  methods: {
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(res => {
        this.$message({
          message: "文章已删除",
          type: "success"
        });
        this.fetch();
        console.log(res.data)
      });
    },
    fetch() {
      this.$http.get("/articles").then(res => {
        this.articles = res.data;
      });
    }
  },
  created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped>
</style>
