<template>
  <div>
    <b-jumbotron style="background-color:#042549" text-variant="white" fluid>
      <b-row>
        <b-col md="6">
          <!-- <h2 class="font-dancing">Bikin curriculum vitae mu </h2> -->
          <hr style="background-color:white">
          <h4 class="font-varela">
            Disini tempatnya kamu bisa bikin cv mu
            menjadi menarik dengan sangat mudah.
            semudah mengisi biodata hanya dengan 5 menit.
            </h4>
          <hr style="background-color:white">
          <b-button variant="warning">
              <a href="#tabs-category"
              style="text-decoration:none;color:rgb(4, 37, 73)">
                  Ayo mulai
                </a></b-button>
        </b-col>
        <b-col md="6">
          <div data-aos="fade-left" data-aos-duration="1000">
            <img :src="pic" alt="banner" width="85%" height="255vh">
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <!-- </b-container> -->
  </div>

</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      pic: '../svg/bannner.svg',
      show: true,
    };
  },
};
</script>

<style>
.font-dancing{
   font-family: 'Dancing Script', cursive ;
}

.font-varela{
  font-family: 'Varela Round', sans-serif;
}
</style>

