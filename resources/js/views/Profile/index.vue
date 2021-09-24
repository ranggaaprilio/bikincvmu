<template>
  <div style="padding-top:20px">
    <b-container>
      <b-row>
        <Sidebar :callback="(a)=>Changeactive(a)" />
        <Personal v-if="activeSide==='personalinfo'" />
        <Education v-if="activeSide==='education'" />
        <Working v-if="activeSide==='working'" />
        <Ability v-if="activeSide==='ability'" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import {Personal, Sidebar, Education, Working, Ability} from './components';
export default {
  name: 'Profile',
  components: {
    Personal,
    Sidebar,
    Education,
    Working,
    Ability,
  },
  data() {
    return {
      activeSide: 'personalinfo',
    };
  },
  methods: {
    Changeactive(a) {
      this.activeSide = a;
    },
  },
};
</script>

<style>

</style>
