<template>
    <div class="container">
    <h1>Workshop #2 preview image</h1>
    <hr />
    <div class="row">
      <div class="col-md-5">
      <div v-if="!image">
          <input type="file" class="form-control" @change="onFileChange">
     <hr> 
      </div>
      
      <div v-else>
          <img :src="image" class="img-fluid"><hr>
          <button class="btn btn-danger" @click="removeImage">Remove</button>
      </div>
      </div>
    </div>

     <div class="row">
      <div class="col-md-5">
      <div v-if="!image1">
          <input type="file" class="form-control" @change="previewFiles">
     <hr> 
      </div>
      <div v-else>
          <img :src="image1" class="img-fluid"><hr>
          <button class="btn btn-danger" @click="removeImage1">Remove</button>
      </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      image:"",
      image1:""

    }
  },
  methods:{
      onFileChange(e){
        //   console.log(e.target.files);
        var files=e.target.files
        if (!files.length)
        return
        this.createImage(files[0]);
      },
      createImage(files){
          var reader =new FileReader();
          reader.onload=(e)=>{
              this.image=e.target.result;
          }
          reader.readAsDataURL(files);
      },
      removeImage(){
          this.image="";
      },

      previewFiles(e){
        var files=e.target.files
        if (!files.length)
        return
        this.createImage1(files[0]);
      },
      createImage1(files){
          var reader =new FileReader();
          reader.onload=(e)=>{
              this.image1=e.target.result;
          }
          reader.readAsDataURL(files);
      },
       removeImage1(){
          this.image1="";
      },

  }


}
</script>