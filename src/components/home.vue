<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <!-- {{ name }}
                <div class="text-primary">{{name}}</div> -->
               <label for=""> input score: </label> <input class="form-control" type="text" name="" id="" v-model="number">
               <button @click="calGrade(number)">ENTER</button>
                
            </div>
            <div class="col-md-4"><label for="" v-text="grade"> Grade: </label>
            <!-- <span v-if="number >= 50 && number <=54">D</span>
            <span v-else-if="number >=  55 && number <=59">D+</span>
            <span v-else-if="number >=60 && number <=64 ">C</span>
            <span v-else-if="number >=65 && number <=69  ">C+</span>
            <span v-else-if="number >=70 && number <=74  ">B</span>
            <span v-else-if="number >=75 && number <=79  ">B+</span>
            <span v-else-if="number >=80">A</span> -->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:"App",
        components:{},
        data(){
            return{
                name: "Tanakit",
                number:0,
                grade:"F",
            };
        },
        methods:{
            calGrade(number){
                if(number < 49){
                    this.grade = "F";
                }else if(number >= 50 && number <=54){
                    this.grade = "D";
                }else if(number >= 55 && number <=59){
                    this.grade = "D+";
                }else if(number >= 60 && number <=64){
                    this.grade = "C";
                }else if(number >= 65 && number <=69){
                    this.grade = "C+";
                }else if(number >= 70 && number <=74){
                    this.grade = "B";
                }else if(number >= 75 && number <=79){
                    this.grade = "B+";
                }else if(number >= 80 && number <=99){
                    this.grade = "A";
                }else{
                    this.grade = "ERORR";
                }
            }
        }
    }
</script>