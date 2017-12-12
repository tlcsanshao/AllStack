<template>
	<div>
		<el-table :data="tableData" height="600" stripe style="width: 100%"  border>
      <el-table-column prop="id"  label="序号"> </el-table-column>
      <el-table-column prop="name"  label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="age"  label="年龄"> </el-table-column>
      <el-table-column prop="cardno"  label="学号"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="updateRow(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.row)" type="text" size="small">刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="tr buttondiv">
      <router-link to="/add"><el-button type="primary" >添加</el-button></router-link>
      <el-button type="primary" >查询</el-button>
    </div>
  </div>
</template>

<style scoped>
.buttondiv{
  margin-top:20px;
  margin-right: 10px;
}
</style>


<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods:{
    updateRow(row){
      this.$router.push({
        // path:'/edit',
        name:'Edit',
        query:row　
      });
    }, 
    deleteRow(row){
      let _this = this;
      this.$http.get('/backend/deleteStudentInfo',{
        params:{
          id:row.id
        }
      })
      .then(function(response){
        if(response.data.deleteFlag == "failed"){
        }else{
          _this.tableData = response.data;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  },
  created(){
    let _this = this;
    this.$http.get('/backend/getStudentInfoList')
    .then(function(response){
      _this.tableData = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>