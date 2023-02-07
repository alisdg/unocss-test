<script setup>
import {ref} from "vue";

const someCondition = ref(true)
</script>

<template>
  <div>

    <p :bg-blue="someCondition"> blue paragraph! ( not working) </p>


    <p :bg-red="someCondition"> red paragraph! (working)</p>
    <div bg-red hidden></div>


    <button btn @click="someCondition = !someCondition">change condition</button>
    <br>
    condition: {{someCondition}}
  </div>
</template>

