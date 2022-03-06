<template>
  <b-col md="9">
    <b-row>
      <b-col md="6" class="mb-3">
        <b-card
          header="Form Input"
          header-tag="header"
        >
          <div class="mb-2">
            <b-form-group
              id="fieldset-1"
              label="Posisi"
              label-for="input-1"
            >
              <b-form-input v-model="form.position"
              placeholder="Masukan nama posisi jabatan" />
            </b-form-group>

          </div>
          <div class="mb-2">
            <b-form-group
              id="fieldset-1"
              label="Perusahaan"
              label-for="input-1"
            >
              <b-form-input v-model="form.company"
              placeholder="Masukan nama Perusahaan" />
            </b-form-group>
          </div>
          <div>
            <label for="example-datepicker">Bekerja Sejak</label>
            <b-form-datepicker
            id="example-datepicker" v-model="form.joindate" class="mb-2" />
          </div>
          <div class="mb-2">
            <b-form-checkbox v-model="form.isActive" name="check-button" switch>
              Masih Bekerja Disini?
            </b-form-checkbox>
          </div>
          <div v-if="form.isActive===false">
            <label for="example-datepicker">Berakhir Pada</label>
            <b-form-datepicker
             id="example-datepicker2" v-model="form.outdate" class="mb-2" />
          </div>
          <b-row>
            <b-col cols="auto" class="p-3">
              <b-button href="#" variant="primary" @click="post">Save</b-button>
              </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          header="Riwayat Pekerjaan"
          header-tag="header"
        >
          <b-list-group style="max-height:430px;overflow:auto">
            <b-list-group-item v-for="item in listdata" :key="item.id"
             href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ item.position }}</h5>
                <small>{{ item.joindate }}
                   s/d {{ item.isActive === 'yes'? 'sekarang' : item.outdate }}
                  </small>
              </div>

              <div class="flex-button">
                <p class="mb-1">
                  Perusahaan:{{ item.company }}
                </p>
                <span style="cursor:pointer" @click="()=>hapus(item.id)">
                  <b-icon-trash-fill />
                  </span>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>
    </b-row>
  </b-col>

</template>

<script>
import {
  getWorkingFetch,
  postWorking,
  destroyWorking,
} from '../../../utils/apiUtils';
export default {
  name: 'WorkingHistory',
  data() {
    return {
      listdata: [],
      form: {
        user_id: localStorage.getItem('@id'),
        joindate: '',
        outdate: '',
        position: '',
        company: '',
        isActive: false,
      },
    };
  },
  created() {
    this.list();
  },
  methods: {
    list: async function() {
      const {exp} = this.$store.getters;
      if (exp.length===0 || mode==='forced') {
        const sendApi = await getWorkingFetch(this.form.user_id);
        if (sendApi.success) {
          this.listdata = sendApi.data;
          this.$store.dispatch('info/SET_EXP',
              sendAPI.data);
        } else {
          console.log('failed2');
          this.showAlert(`Uppss,ada yang salah : ${sendAPI.error}`, 'failed');
          return false;
        }
      } else {
        this.listdata =exp;
      }
    },
    post: async function() {
      const jsonData = JSON.parse(JSON.stringify(this.form));
      jsonData.isActive = jsonData.isActive === true ? 'yes' : 'no';
      const sendApi = await postWorking(jsonData);
      console.log(jsonData, 'newjson', sendApi);
      if (sendApi.success === true) {
        alert('success');
        this.form.joindate = '';
        this.form.outdate = '';
        this.form.position = '';
        this.form.company = '';
        this.form.isActive = false;
        this.list();
      } else {
        alert('failed');
      }
    }, hapus: async function(id) {
      // console.log(id, 'this');
      const sendApi = await destroyWorking(id);
      if (sendApi.success === true) {
        alert('success');
        this.list();
      } else {
        alert('failed');
      }
    },
  },
};
</script>

<style>
.flex-button{
  display: flex;
  justify-content: space-between;
}
</style>
