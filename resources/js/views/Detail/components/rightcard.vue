<template>
<b-col md="6">
    <div class="maxWidth">
    <General v-if="param==1" />
    <Formal v-if="param==2" />
    <Active v-if="param==3" />
    </div>
</b-col>
</template>

<script>
import {General, Formal, Active} from '../../../template';
import router from '../../../routes';
export default {
  name: 'rightcard',
  components: {
    General,
    Formal,
    Active,
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
.maxWidth {
    max-width: 99%;
    overflow: hidden;
}
</style>
