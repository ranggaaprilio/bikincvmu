<template>
  <b-col md="9">
    <div>
      <b-card title="Personal Infromation" sub-title="Show Us Your Identity">
        <div class="mt-5">
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" v-model="form.name"
              type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input id="exampleInputEmail1"
              v-model="form.email" type="email"
              class="form-control" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">DOB</label>
                  <input id="name"
                  v-model="form.DOB" type="text"
                  class="form-control">
                </div></div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">POB</label>
                  <input id="name"
                  v-model="form.POB" type="text" class="form-control">
                </div>
              </div>
            </div>
            <div class="form-group">
              <div>
                <label for="gender">Jenis kelamin</label>
              </div>
              <div class="form-check form-check-inline">
                <input id="inlineRadio1" v-model="form.gender"
                class="form-check-input" type="radio"
                name="inlineRadioOptions" value="laki-laki">
                <label class="form-check-label"
                for="inlineRadio1">laki laki</label>
              </div>
              <div class="form-check form-check-inline">
                <input id="inlineRadio2"
                v-model="form.gender" class="form-check-input"
                type="radio" name="inlineRadioOptions" value="perempuan">
                <label class="form-check-label"
                for="inlineRadio2">perempuan</label>
              </div>
            </div>
            <div class="form-group">
              <label for="alamat">Alamat</label>
              <textarea id="alamat" v-model="form.address"
              name="alamat" cols="10" rows="4" class="form-control"
              placeholder="masukan alamat mu" />
            </div>
            <div class="form-group">
              <label for="alamat">No Telepon</label>
              <input id="name" v-model="form.phone"
              type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="alamat">Facebook</label>
              <input id="name" v-model="form.facebook"
              type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="alamat">Instagram</label>
              <input id="name" v-model="form.instagram"
              type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="alamat">Twitter</label>
              <input id="name" v-model="form.twitter"
              type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="Deskripsi">Deskripsi</label>
              <textarea id="Deskripsi" v-model="form.desc"
              name="Deskripsi" cols="10"
              rows="4" class="form-control" placeholder="Deskripsikan dirimu" />
            </div>

            <button class="btn btn-primary" @click="(e)=>save(e)">
              Submit
              </button>
          </form>
        </div>
      </b-card>
    </div>

  </b-col>
</template>

<script>
import {
  userdetailFetch,
  UpdateuserdetailFetch as updateuserdetailFetch,
} from '../../../utils/apiUtils';
export default {
  name: 'Personal',
  data() {
    return {
      show: true,
      form: {
        name: '',
        email: '',
        DOB: '',
        POB: '',
        gender: '',
        address: '',
        phone: '',
        facebook: '',
        twitter: '',
        instagram: '',
        desc: '',
      },
    };
  },
  created() {
    this.getUserDetail();
  },
  methods: {
    async getUserDetail() {
      console.log(this.$store.getters.DOB, 'naminan');
      if (this.$store.getters.DOB === '') {
        try {
          const id = localStorage.getItem('@id');
          const sendapi = await userdetailFetch(id);
          const {name, email} = sendapi.data;
          this.form.name = name;
          this.form.email = email;
          if (sendapi.data.general_detail != null) {
            const {DOB, POB, gender,
              address, phone,
              facebook, instagram,
              twitter, desc} = sendapi.data.general_detail;
            this.form.DOB = DOB;
            this.form.POB = POB;
            this.form.gender = gender;
            this.form.address = address;
            this.form.phone = phone;
            this.form.facebook = facebook;
            this.form.instagram = instagram;
            this.form.twitter = twitter;
            this.form.desc = gender;
            this.form.address = address;
            this.form.phone = phone;
            this.form.facebook = facebook;
            this.form.instagram = instagram;
            this.form.twitter = twitter;
            this.form.desc = desc;
          }
          this.$store.dispatch('info/setDetailState', sendapi.data);
          // console.log('DOB VUEX', this.$store.getters.DOB);
        } catch (error) {
          console.log(error, 'errPersonal');
          this.showAlert('Uppss,Internal Server Error', 'failed');
        }
      } else {
        // const { name, email } = sendapi.data;
        console.log('vuex data');
        const {name, email, DOB, POB, gender,
          address, phone, facebook, instagram,
          twitter, desc} = this.$store.getters;
        this.form.name = name;
        this.form.email = email;
        this.form.DOB = DOB;
        this.form.POB = POB;
        this.form.gender = gender;
        this.form.address = address;
        this.form.phone = phone;
        this.form.facebook = facebook;
        this.form.instagram = instagram;
        this.form.twitter = twitter;
        this.form.desc = desc;
      }
    },
    async save(e) {
      e.preventDefault();
      const data = JSON.parse(JSON.stringify(this.form));
      // console.log(data, 'json save');
      const id = localStorage.getItem('@id');
      const sendAPI = await updateuserdetailFetch(id, data);
      // console.log(sendAPI, 'send apu');
      if (sendAPI.success === true) {
        this.showAlert('Succes Submit', 'success');
        this.$store.dispatch('info/setDetailState', data);
      } else {
        this.showAlert(`Uppss,ada yang salah : ${sendAPI.result.error}`,
            'failed');
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
