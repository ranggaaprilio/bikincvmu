<template>
<div>
    <Banner/>
  <b-container>
    <Minicontent/>
  </b-container>
</div>
</template>

<script>
import {Banner, Minicontent} from './components';
export default {
  name: 'dashboard',
  components: {
    Banner,
    Minicontent,
  },
};
</script>

<style>

</style>
