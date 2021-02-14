<template>
<b-col md="7">
    <General v-if="param==1" />
    <Formal v-if="param==2" />
</b-col>
</template>

<script>
import {General, Formal} from '../../../template';
import router from '../../../routes';
export default {
  name: 'rightcard',
  components: {
    General,
    Formal,
  },
  data() {
    return {
      param: this.$route.params.id,
    };
  },
  methods: {
    routeme(name) {
      router.push({name});
    },
  },
};
</script>

<style>

</style>
