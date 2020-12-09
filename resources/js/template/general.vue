<template>
   <b-col md="6">
        <b-card >
            <div class="header-Temp">
                <b-avatar variant="info" :src="profilPic"
                 size="200px"></b-avatar>
                 <h4>Rangga Aprilio Utama</h4>
            </div>
        </b-card>
    </b-col>
</template>

<script>
export default {
  name: 'general',
  computed: {
    profilPic: function() {
      const {ProfilePic} = this.$store.getters;
      if (ProfilePic) {
        return `../storage/profilPic/${ProfilePic}`;
      }
      return '../storage/profilPic/origin.jpg';
    },
  },
};
</script>

<style>
.header-Temp{
    display: flex;
    justify-content: space-between;
}
</style>
