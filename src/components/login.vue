<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Username</label>
                        <input type="text" v-model="username" class="form-control">
                    </div>
                    <div class="col-md-12">
                        <label for="">Password</label>
                        <input type="text" v-model="password" class="form-control">
                    </div><br><br><br>
                    <div class="mt3">
                        <button class="btn btn-primary " @click="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"Login",
    components:{},
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        login(){
            // console.log(this.username)
            // console.log(this.password)
            axios.get("http://localhost:7777/login", {
                params:{
                    username: this.username,
                    password: this.password,
                },
            headers: {
            "Content-Type": "application/json",
            }
        }).then((response) => {
            // this.datas = response.data
            console.log(response);
            console.log(response.data);
            if(response.data.data.length>0){
                alert("login success");
            }else{
                alert("login fail");
            }
        })
       .catch(function (error) {
             console.log(error);
        });
        }
    }
}
</script>