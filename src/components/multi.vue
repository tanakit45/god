<template>
    <div class="container">
        <h1>sudkuon</h1>
        <div class="row">
            <input type="number" name="" id="" class="form-control" v-model="max_multiplier">
            <div v-for="n in max_multi" v-bind:key="n">
            <div class="col-md-5"> {{max_multiplier}} * {{n}} = {{max_multiplier*n}}</div>
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
                max_multi:12,
                max_multiplier:"",
               
            };
        },
    }
</script>
