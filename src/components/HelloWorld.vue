<template>
  <div>
    <div class="bg">
      <div
        v-for="item in 300"
        v-animated="{
            className :'animated fadeInUp'
        }">
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>


<style scoped lang="scss">
  .bg{
    width: 200vw;
    background: black;
    >div{
      width: calc(5% - 15px);
      height: 100px;
      line-height: 100px;
      margin: 30px;
      display: inline-block;
      text-align: center;
      align-items: center;
      border-radius: 5px;
      border: 2px dashed white;
      box-shadow: 0 0 0 5px #606266;
      color: white;
      background: #606266;
    }
  }
</style>
