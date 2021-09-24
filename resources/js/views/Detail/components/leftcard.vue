<template>
    <b-col md="5">
        <b-card class="wrap-card" >
          <h5>Formal</h5>
          <hr>
             <b-img v-for="(item, key) in thumbnail" :key="key"
            :src="item.src" fluid alt="Fluid image"
            class="pl-3 mb-2 mr-1" @click="routeme('detail',item.id)"
            width="189px" height="267px"></b-img>
        </b-card>
    </b-col>

</template>

<script>

import router from '../../../routes';
export default {
  name: 'leftcard',
  data() {
    return {
      thumbnail: [
        {src: '../storage/template/download.png', id: 1},
        {src: '../storage/template/formal.png', id: 2},
        {src: '../storage/template/download.png', id: 3},
        {src: '../storage/template/download.png', id: 4},
      ],
    };
  },
  methods: {
    routeme(name, id) {
      console.log('asdfggfg');
      router.push({name, params: {id: id}});
    },
  },

};
</script>

<style>
.wrap-card{
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
}
</style>
