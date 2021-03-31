<template>
  <div id="app">
    <!--    <el-container>-->
    <!--      <el-header>Header</el-header>-->
    <!--      <el-container>-->
    <!--        <el-aside width="200px">Aside</el-aside>-->
    <!--        <el-main>Main</el-main>-->
    <!--      </el-container>-->
    <!--    </el-container>-->
    <router-view/>
    <router-link to="/Parent">Parent</router-link>
    <button @click="toParent">toParent</button>
    {{ a }}
    <Parent :msgA="a" :msgB="b" :msgC="c" @showCL="qqwe1wqe"/>
  </div>
</template>
<script>
import Parent from '@/views/Parent'

export default {
  components: {
    Parent
  },
  data () {
    return {
      a: 'aaaaaa',
      b: 'bbb',
      c: 'ccc'
    }
  },
  methods: {
    qqwe1wqe (val) {
      console.log('listeners', val)
      this.a = val
    },
    toParent () {
      // this.$router.push('/Parents')
      this.$router.push({
        path: '/Parents',
        query: { a: 'asd' }
      })
    }
  },
  mounted () {
    console.log('listeners', this.$listeners)
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
