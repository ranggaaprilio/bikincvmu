<template>
  <b-col md="9">
    <b-card
      header="Riwayat Pendidikan"
      header-tag="header"
      class="setMinHeight"
    >
      <div class="add-btn-plus mb-4">
        <b-button variant="primary" sm="2" class="mr-3"
        @click="plusnewfield">Tambah field</b-button>
        <b-button variant="success" sm="2"
        @click="onSave">Simpan Data</b-button>
      </div>
      <hr>
      <!-- <b-card-text>Header and footers using props.</b-card-text> -->
      <b-row v-for="(item,index) in spaceField" :key="item.id" class="mb-2">
        <b-col md="3">
          <b-form-select v-model="spaceField[index].type" :options="options" />
        </b-col>
        <b-col md="4">
          <b-form-input v-model="spaceField[index].name"
          placeholder="Masukan Nama Instansi Pendidikan" />
        </b-col>
        <b-col md="3">
          <b-form-input v-model="spaceField[index].year"
          placeholder="Tahun Lulus" />
        </b-col>
        <b-col md="2">
          <b-button variant="danger" size="sm"
          @click="onDelete(index)">Hapus</b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-col />
  </b-col>
</template>

<script>
import {
  getEducationFetch,
  updateEducationFetch,
} from '../../../utils/apiUtils';
export default {
  name: 'Education',
  data() {
    return {
      // jumlah looping untuk field
      spaceField: [{id: 1, type: null, name: '', year: null}],
      selected: null,
      text: '',
      options: [
        {value: null, text: 'Please select an option'},
        {value: 'Universitas', text: 'Universitas'},
        {value: 'SMA', text: 'SMA'},
        {value: 'SMP', text: 'SMP'},
        {value: 'SD', text: 'SD'},
      ],
    };
  },
  created() {
    this.loadEducate();
  },
  methods: {
    plusnewfield() {
      const lenghtArr = this.spaceField.length - 1;
      const newdata = {id: parseInt(this.spaceField[lenghtArr].id + 1),
        type: null, name: '', year: null};
      this.spaceField.push(newdata);
    },
    onDelete(param) {
      this.spaceField.splice(param, 1);
      this.onSave();
    },
    async onSave() {
      const id = localStorage.getItem('@id');
      const jsonData = {data: JSON.parse(JSON.stringify(this.spaceField))};
      const sendAPI = await updateEducationFetch(id, jsonData);
      if (sendAPI.success === true) {
        this.showAlert(`update success`, 'success');
        this.loadEducate();
      } else {
        this.showAlert(`Uppss,ada yang salah : ${sendAPI.error}`, 'failed');
        return false;
      }
    },
    async loadEducate() {
      const sendAPI = await getEducationFetch(localStorage.getItem('@id'));
      console.log(sendAPI, 'space');
      if (sendAPI.success === true) {
        if (sendAPI.data.options.length !== 0) {
          this.spaceField = sendAPI.data.options;
        }
      } else {
        console.log('failed2');
        this.showAlert(`Uppss,ada yang salah : ${sendAPI.error}`, 'failed');
        return false;
      }
    },
    showAlert(msg, stat) {
      console.log('failed1');
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
        console.log('failed');
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

.add-btn-plus{
  display:flex;
  justify-content:space-between;
}

.setMinHeight{
  min-height: 405px;
}
</style>
