<template>
    <div class="container">
        <h1>sudkuon</h1>
        <div class="row">
            <table>
                <thead>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                </thead>
                <tbody>
                    <tr v-for="(value, index) in user" :key="value">
                        <td>{{++index}}</td>
                        <td>{{value.f_name + " " + value.l_name }}</td>
                        <td>{{value.phone}}</td>
                        <td>{{value.email}}</td>
                        <td>{{value.password}}</td>
                    </tr>
                </tbody>
            </table>
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
                user:[],
               
            };
        },
        mounted(){
            axios.get("http://localhost:7777/getData", {
            headers: {
            'Authorization': 'Bearer' + 'Your Bearer Pssword',
            "Content-Type": "application/json",
            }
        })
        .then((response) => {
            // this.datas = response.data
            console.log(response);
            console.log(response.data);
            this.user = response.data;
        })
       .catch(function (error) {
             console.log(error);
        });
        },
        methods:{},
    }
</script>
