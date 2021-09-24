<!--eslint-disable max-len -->
<template>
  <div>
    <h4>Paling banyak di unduh</h4>
    <hr>
    <b-row>
      <b-col cols="12">
        <carousel :per-page="4">
          <slide v-for="(item, key) in cardLoops" :key="key" class="p-2">
            <div>
               <b-card :title='item.title' :img-src="item.pic"
             img-alt="Image" img-top tag="article"
             data-aos="zoom-in-up" :data-aos-delay="item.delay" img-width="270" img-height="350">
              <b-button @click="routeme('detail',item.no)"
              variant="primary" >Preview</b-button>
            </b-card>
            </div>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
import router from '../../../routes';
const data = [
  {no: 1, text: 'lorem ipsum', delay: 700,
    pic: '../storage/template/download.png', title: 'Formal 1'},
  {no: 2, text: 'lorem ipsum 2', delay: 1000,
    pic: '../storage/template/formal.png', title: 'Formal 2'},
  {no: 3, text: 'lorem ipsum 3', delay: 1300,
    pic: '../storage/template/download.png', title: 'Formal 3'},
  {no: 4, text: 'lorem ipsum 4', delay: 1600,
    pic: '../storage/template/download.png', title: 'Formal 4'},
  {no: 5, text: 'lorem ipsum 5', delay: 1900,
    pic: '../storage/template/download.png', title: 'Formal 5'},
  {no: 6, text: 'lorem ipsum 6', delay: 2200,
    pic: '../storage/template/download.png', title: 'Formal 6'},
  {no: 7, text: 'lorem ipsum 7', delay: 2500,
    pic: '../storage/template/download.png', title: 'Formal 7'},
  {no: 8, text: 'lorem ipsum 8', delay: 2800,
    pic: '../storage/template/download.png', title: 'Formal 8'},
];
export default {
  name: 'Content',
  components: {
    Carousel,
    Slide,
  },
  data: () => {
    return {
      cardLoops: data,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    routeme(name, id) {
      const isAunteticated= this.$store.getters.isAunteticated;
      if (!isAunteticated) {
        {this.$swal({icon: 'warning',
          title: 'Upss,kamu belum login nih!'});}
      } else {
        router.push({name, params: {id: id}});
      }
    },
  },
};
</script>

<style>


</style>
