<template>
  <el-container style="height: 100%">
    <el-aside width="200px">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import CommonAside from '@/components/CommonAside'

export default {
  name: 'Main',
  components: {
    CommonHeader,
    CommonAside
  }
}
</script>

<style scoped lang="scss">
.el-container{
  background-color: #f0f2f5;
  .el-header{
    background-color: #fff;
  }
}
</style>
