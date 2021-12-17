<template>
  <div class="container">
      <div class="row">
        <div class="col-md-4">
          <label for="">กรุณาใส่ไม่เกิน {{ max }} ตัวอักษร</label>
          <div class="input-group">
          <span class="input-group-text" v-text="max-message.length">20</span>
          <input type="text" name="" id="" class="form-control" v-model="message" :maxlength="max">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4"> 
          <label for="">กำหนดขนาดความจุตัวอักศร</label>
          <input type="text" name="" id="" class="form-control" v-model="max">
        </div>
      </div>
    
    </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      message : "",
      max:20
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
