<template>
  <div>
    <h2>1234</h2>
    <h3>{{ chlidCL }}</h3>
    <Child :msgg="asd1234" @showCL="childClick" ref="childRef"  v-bind="$attrs" v-on="$listeners"></Child>
  </div>
</template>

<script>
import Child from '@/views/Child'

export default {
  name: 'Parent',
  components: {
    Child
  },
  data () {
    return {
      asd1234: 'asd1234',
      chlidCL: ''
    }
  },
  methods: {
    childClick (aaa) {
      console.log(aaa)
      this.chlidCL = aaa
    }
  },
  mounted () {
    console.log(this.$children)
    console.log(this.$children[0].childMsgg)
    console.log('ref', this.$refs.childRef)
    console.log('ref', this.$refs.childRef.childMsgg)
  }
}
</script>

<style scoped>
</style>
