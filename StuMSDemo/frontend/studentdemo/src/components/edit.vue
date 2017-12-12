<template>
  <el-row class="add">
    <el-col :span="8" :offset="8">
      <div class="tl">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" ></el-radio>
              <el-radio label="女" ></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="form.cardno"></el-input>
          </el-form-item>

          <el-form-item class="tr">
            <el-button type="primary" @click="edit">修改</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.add{margin-top:50px;}
</style>


<script>
export default {
  data() {
    return {
      form: {
        name:'',
        sex:'男',
        age:'',
        cardno:''
      }
    }
  },
  created(){
  	this.form = this.$route.query;

  },
  methods: {
    edit(){
      this.$http.post('/backend/updateStudentInfo',this.form)
      .then((response) => {
        var updateFlag = response.data.updateFlag;
        console.log(updateFlag);
        if(updateFlag == "success"){
          this.$alert('修改成功', '提示', {
            confirmButtonText: '确定'
          });
        }else{
          this.$alert('修改失败', '提示', {
            confirmButtonText: '确定'
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>