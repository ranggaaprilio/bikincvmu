<template>
  <div>
    <h4>Paling banyak di download</h4>
    <hr>
    <b-row>
      <b-col cols="12">
        <carousel :per-page="4">
          <slide v-for="(item, key) in cardLoops" :key="key" class="p-2">
            <b-card title="Card Title 1" :img-src="item.pic"
             img-alt="Image" img-top tag="article"
             data-aos="zoom-in-up" :data-aos-delay="item.delay">
              <b-card-text>
                Some quick example text to build on the card title
                and make up the bulk of the card's content.{{ item.delay }}
              </b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel';
const data = [
  {no: 1, text: 'lorem ipsum', delay: 700, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 2, text: 'lorem ipsum 2', delay: 1000, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 3, text: 'lorem ipsum 3', delay: 1300, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 4, text: 'lorem ipsum 4', delay: 1600, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 5, text: 'lorem ipsum 5', delay: 1900, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 6, text: 'lorem ipsum 6', delay: 2200, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 7, text: 'lorem ipsum 7', delay: 2500, pic: 'https://picsum.photos/600/300/?image=25'},
  {no: 8, text: 'lorem ipsum 8', delay: 2800, pic: 'https://picsum.photos/600/300/?image=25'},
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
  },
};
</script>

<style>


</style>
