<template>
    <b-col md="6">
        <b-card class="wrap-card" >
          <h5>Formal</h5>
          <hr>
             <b-img v-for="(item, key) in thumbnail" :key="key"
            :src="item" fluid alt="Fluid image" class="pl-3 mb-2 mr-3"></b-img>
        </b-card>
    </b-col>

</template>

<script>


export default {
  name: 'leftcard',
  data() {
    return {
      thumbnail: [
        '../storage/template/download.png',
        '../storage/template/download.png',
        '../storage/template/download.png',
        '../storage/template/download.png',
      ],
    };
  },

};
</script>

<style>
.wrap-card{
  max-height: 90vh;
  overflow-y: auto;
}
</style>
