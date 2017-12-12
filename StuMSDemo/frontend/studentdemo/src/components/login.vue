<template>
	<div>
		<img class="fullwidth" src="../assets/banner.jpg">
		<div class="login">
			<el-row>
				<el-col :span="6" :offset="9">
					<div>
						<el-input placeholder="请输入用户名" clearable v-model="form.username">
						</el-input>
					</div>
				</el-col>
			</el-row>
			<br>
			<el-row>
				<el-col :span="6" :offset="9">
					<div>
						<el-input type="password" placeholder="请输入密码" clearable v-model="form.password">
						</el-input>
					</div>
				</el-col>
			</el-row>
			<br><br>
			<el-row margin-buttom>
				<el-col :span="6" :offset="9">
					<div class="tr">
						<el-button type="primary" @click="loginPost">登录</el-button>
						<el-button type="primary" @click="cancel">取消</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>

</template>


<style scoped>
.fullwidth{max-width: 100%;overflow: hidden;}
.login{margin-top: 50px}


</style>


<script >
	export default{
		data(){
			return{
				form: {
		          username:'root',
		          password:'123456'
		        }
			}
		},
		methods:{
			loginPost(){
			  this.$http.post('/backend/login',this.form)
			  .then((response) => {
			  	var loginFlag = response.data.loginFlag;
			  	if(loginFlag == "success"){
			  		this.$router.push('/main');
			  	}else{
			  		alert("error");
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			},
			cancel(){
				this.form.username='';
				this.form.password='';
			}
		}
	}
</script>

