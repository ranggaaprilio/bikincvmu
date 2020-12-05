<template>
  <b-col md="3">
    <b-card
      :img-src="profilPic"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-5"
    >
      <b-button v-b-modal.modal-1
      variant="primary" class="mb-2">Ganti Foto</b-button>
      <b-list-group>
        <b-list-group-item button @click="cliking('personalinfo')">
          Informasi Umum
        </b-list-group-item>
        <b-list-group-item button @click="cliking('education')">
          Pedidikan
        </b-list-group-item>
        <b-list-group-item button @click="cliking('working')">
          Riwayat Pekerjaan
        </b-list-group-item>
        <b-list-group-item button @click="cliking('ability')">
          Keahlian
          </b-list-group-item>
      </b-list-group>
    </b-card>
    <b-modal id="modal-1" title="BootstrapVue"
     ok-title="Upload" @ok="handleupload">
      <b-form-file
        v-model="file1"
        accept="image/*"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      />
      <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    </b-modal>
  </b-col>

</template>

<script>
import {postProfilPic, userdetailFetch} from '../../../utils/apiUtils';
export default {
  name: 'Sidebarinfo',
  props: {
    callback: {
      type: Function,
      default: () => 1,
    },
  },
  data() {
    return {
      file1: null,

    };
  },
  computed: {
    profilPic: function() {
      const {ProfilePic} = this.$store.getters;
      if (ProfilePic) {
        return `../storage/profilPic/${ProfilePic}`;
      }
      return '../storage/profilPic/origin.jpg';
    },
  },
  methods: {
    cliking(a) {
      if (this.callback) {
        this.callback(a);
      }
    },
    handleupload: async function() {
      const id = localStorage.getItem('@id');
      const formData = new FormData();
      formData.append('file', this.file1);
      formData.append('_method', 'PUT');
      const sendApi = await postProfilPic(formData, id);
      console.log(sendApi, 'new send api');
      if (sendApi.success === 'false') {
        this.showAlert('Upload Failed', 'failed');
      } else {
        this.showAlert('Upload Success', 'success');
        this.getUserDetail();
      }
    },
    async getUserDetail() {
      try {
        const id = localStorage.getItem('@id');
        const sendapi = await userdetailFetch(id);
        if (sendapi.data.general_detail != null) {
          this.$store.dispatch('info/setDetailState', sendapi.data);
        }
        // console.log('DOB VUEX', this.$store.getters.DOB);
      } catch (error) {
        console.log(error, 'errPersonal');
        this.showAlert('Uppss,Internal Server Error', 'failed');
      }
    },
    showAlert(msg, stat) {
      if (stat === 'success') {
        this.$bvModal.msgBoxOk(msg, {
          title: 'Confirmation',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        })
            .then((value) => {
              console.log('true');
            });
      } else {
        this.$bvModal.msgBoxOk(msg, {
          title: 'Failed',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'danger',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        })
            .then((value) => {
              console.log('false');
            });
      }
    },
  },
};
</script>

<style>

</style>
