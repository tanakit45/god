                <template>
    <div class="container">
        <h1>sudkuon</h1>
        <div class="row">
            <input type="number" name="" id="" class="form-control" v-model="max_multiplier">
            <div v-for="n in person" :key="n">
            <!-- <div class="col-md-5"> {{max_multiplier}} * {{n}} = {{max_multiplier*n}}</div> -->
            
            <table border="1">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{n.name}}</td>
                    <td>{{n.age}}</td>
                    <td>{{n.id}}</td>
                </tr>
                </tbody>
            </table>
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
                person:[{
                    name:"AAA",
                    age:"16",
                    id:"0001",
                },{
                    name:"AAB",
                    age:"17",
                    id:"0002",
                },{
                    name:"ABC",
                    age:"17",
                    id:"0003",
                }]
            };
        },
    }
</script>
