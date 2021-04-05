<template>
  <div>首页</div>
</template>

<script>
import { indexApi } from '@/request/api'

export default {
  name: 'Index',
  mounted () {
    console.log(indexApi)
    indexApi.getIndexList({}).then(res => {
      console.log(res)
    })
    indexApi.postStuTable({}).then(res => {
      console.log(res)
    })
    // this.$get('http://localhost:3333/data/login.json', {}).then(res => {
    //   console.log(res)
    // })
  }
}
</script>

<style scoped>

</style>
