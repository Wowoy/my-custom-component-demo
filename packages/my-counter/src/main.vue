<!-- 自定义组件的v-model：只需要在组件中声明一个name为value的props，并且通过触发input事件传入一个值，就能修改这个value -->
<template>
    <div>
        <h2>{{value}}</h2>
        <button  :value="value" @click="plus($event.target.value)">+</button>
        <button  :value="value" @click="minu($event.target.value)">-</button>
    </div>
</template>

<script>
  export default {
    name: "MyCounter",
    props: ['value'],
    methods:{
        plus(val) {
            this.$emit('input',++val);
        },
        minu(val) {
            if(val>0) {
             this.$emit('input',--val);
            }
        }
    }
}
</script>
<style>

</style>