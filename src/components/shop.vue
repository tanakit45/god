<template>
    <div class="container">
        <div class="list-group">
            <div class="list-group-item" style="border-bottom-right-radius: unset;
    border-bottom-left-radius: unset;border-top-left-radius: unset;
    border-top-right-radius: unset;">
    
    <div class="container">
  <div class="row">
        
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              <img src="https://www.jib.co.th/img_master/product/medium/20210924170902_48787_352_1.jpg?v=487871636359078" style="width:90%" alt="">
              
              <p>MONITOR (จอมอนิเตอร์) ACER QG241YSBMIIPX 23.8" VA SPEAKERS 165Hz FREESYNC</p>
              <button class="btn btn-success">BUY</button>
              <div class="h3">ราคา 3,000.-</div>
          </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              asdasd
          </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              asdasd
          </div>
      </div>
    </div>
    <br><br>
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              asdasd
          </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              asdasd
          </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="list-group">
          <div class="list-group-item">
              asdasd
          </div>
      </div>
    </div>
  </div>
</div>

    </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"shop",
    components:{},
    data(){
        return{
            
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