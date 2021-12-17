<template>
    <div class="container">
        <h1>sudkuon</h1>
        <div class="row">
            <label for="">f_name</label>
            <div class=""><input type="text" class="form-control" v-model="fName"></div>
            <label for="">l_name</label>
            <div class=""><input type="text" class="form-control" v-model="lName"></div>
            <label for="">phone</label>
            <div class=""><input type="text" class="form-control" v-model="Phone"></div>
            <label for="">email</label>
            <div class=""><input type="text" class="form-control" v-model="Email"></div>
            <label for="">password</label>
            <div class=""><input type="text" class="form-control" v-model="Password"></div><br><br>
            <button class="btn btn-success" @click="register">Sing up</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        name:"App",
        components:{},
        data(){
            return{
                fName:"",
                lName:"",
                Phone:"",
                Email:"",
                Password:"",
               
            };
        },
        methods:{
            register(){
                console.log(this.fName)
                console.log(this.lName)
                console.log(this.Phone)
                console.log(this.Email)
                console.log(this.Password)
                axios.get("http://localhost:7777/insertf", {
                params:{
                    fName: this.fName,
                    lName: this.lName,
                    Phone: this.Phone,
                    Email: this.Email,
                    Password: this.Password,
                },
            headers: {
            "Content-Type": "application/json",
            }
        })
        .then((response) => {
            // this.datas = response.data
            console.log(response);
            console.log(response.data);
        })
       .catch(function (error) {
             console.log(error);
        });
            }
        },mounted(){
            
        },
    }
</script>
