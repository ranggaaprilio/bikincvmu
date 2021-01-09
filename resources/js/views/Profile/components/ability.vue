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
              label="Skill"
              label-for="input-1"
            >
              <b-form-input v-model="form.skill"
              placeholder="masukan skill anda" />
            </b-form-group>

          </div>
          <div class="mb-2">
            <div>
              <label for="range-1">Range Skill</label>
              <b-form-input id="range-1" v-model="form.value" type="range"
              min="0" max="5" />
              <div class="mt-2">Value: {{ form.value }}</div>
            </div>
          </div>
          <div>
            <label for="description">Description</label>
            <b-form-textarea
              id="description"
              v-model="form.desc"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            />
          </div>
          <b-row>
            <b-col cols="auto" class="p-3"><b-button href="#"
            variant="primary" @click="post">Save</b-button></b-col>
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
                <h5 class="mb-1">{{ item.skill }}</h5>
                <small><b-icon-star-fill v-for="a in item.value" :key="a"
                variant="warning" /></small>
              </div>

              <div class="flex-button">
                <p class="mb-1">
                  Deskripsi:{{ item.desc }}
                </p>
                <span style="cursor:pointer"
                 @click="()=>hapus(item.id)"><b-icon-trash-fill /></span>
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
  getSkillFetch,
  postSkill,
  destroySkill} from '../../../utils/apiUtils';
export default {
  name: 'Ability',
  data() {
    return {
      listdata: [],
      form: {
        user_id: localStorage.getItem('@id'),
        skill: '',
        value: '0',
        desc: '',
      },
    };
  },
  created() {
    this.list();
  },
  methods: {
    list: async function() {
      const sendApi = await getSkillFetch(this.form.user_id);
      if (sendApi.success) {
        console.log(sendApi.data, 'list data');
        this.listdata = sendApi.data;
        this.$store.dispatch('info/setDetailAbility',
            sendApi.data);
      }
    },
    post: async function() {
      const jsonData = JSON.parse(JSON.stringify(this.form));
      const sendApi = await postSkill(jsonData);
      console.log(jsonData, 'newjson', sendApi);
      if (sendApi.success === true) {
        alert('success');
        this.form.skill = '';
        this.form.value = 0;
        this.form.desc = '';
        this.list();
      } else {
        alert('failed');
      }
    }, hapus: async function(id) {
      // console.log(id, 'this');
      const sendApi = await destroySkill(id);
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
