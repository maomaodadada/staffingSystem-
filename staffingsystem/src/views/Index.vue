<template>
  <div>首页</div>
</template>

<script>

export default {
  name: 'Index',
  mounted () {
    this.$get('http://localhost:3333/data/login.json', {}).then(res => {
      console.log(res)
      // localStorage.setItem('token', this.phone)
      // this.$router.push({
      //   name: 'Home'
      // })
    })
    // axios.get('http://localhost:3333/data/login.json ').then(response => {
    //   console.log(response.data)
    // }, response => {
    //   console.log('error')
    // })
  }
}
</script>

<style scoped>

</style>
