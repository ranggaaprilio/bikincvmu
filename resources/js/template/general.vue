<!--eslint-disable max-len -->
<template>
 <!-- <b-card > -->
          <div class="canvas" id="print-this">
            <div class="main">
              <div class="leftside"></div>
              <div class="box-data">
                <div class="main-box">
                  <div class="box-left">
                    <div class="pl-4 pt-3">
                      <b-avatar variant="info" :src="profilPic" size="150px"></b-avatar>
                    </div>
                     <div class="pl-2  " style=" margin-top:40px ;">
                      <p class="text-uppercase left-title" style="letter-spacing: 3px;">Contact</p>
                      <ul class="contact-box">
                        <li v-if="profileData.phone">
                          <p class="text-contact"> <font-awesome-icon icon="phone-square-alt" style="margin-right:10px;color:#b7a85b;font-size:18px"/>{{profileData.phone}}</p>
                        </li>
                        <li v-if="profileData.facebook">
                          <p class="text-contact"><font-awesome-icon :icon="['fab', 'facebook-square']" style="margin-right:10px;color:#b7a85b;font-size:18px"/>{{profileData.facebook}}</p>
                        </li>
                        <li v-if="profileData.twitter">
                          <p class="text-contact"><font-awesome-icon :icon="['fab', 'twitter-square']" style="margin-right:10px;color:#b7a85b;font-size:18px"/>{{profileData.twitter}}</p>
                        </li>
                         <li v-if="profileData.instagram">
                           <p class="text-contact"><font-awesome-icon :icon="['fab', 'instagram-square']" style="margin-right:10px;color:#b7a85b;font-size:18px"/>{{profileData.instagram}}</p>
                          </li>
                      </ul>
                      <div>
                         <p class="text-uppercase pt-3 mb-1 left-title" style="letter-spacing: 3px;">About Me</p>
                       <p class="text-desc">{{profileData.desc}}</p>
                      </div>
                      <div>
                          <p class="text-uppercase pt-3 mb-1 left-title" style="letter-spacing: 3px;">Expertise</p>
                          <ul class="contact-box">
                            <li v-for="item in profileData.ability"
                            :key="item.id">
                            <span>
                              <p class="text-contact d-inline">{{item.skill}}</p>
                               <small><b-icon-star-fill
                               v-for="a in item.value" :key="a"
                                variant="info" /></small>
                            </span>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                  <div class="box-right">
                    <div class="mt-4">
                      <h2 class="ml-5 mb-5 name font-weight-bold">{{profileData.name}}</h2>
                        <div class="border-title mx-auto">
                           <p class="Title-effect">EDUCATION</p>
                        </div>
                         <div v-for="item in profileData.education"
                           :key="item.id" class="ml-5 mb-2">
                              <h5 class="text-educate text-uppercase font-weight-bold mt-4" style="margin:0">{{item.name}}</h5>
                              <p class="text-educate" style="display:inline;margin:0">{{item.type}}</p>
                              <p class="text-educate " style="display:inline">{{item.year}}</p>
                           </div>
                          <div class="border-title mx-auto mt-5">
                           <p class="Title-effect">Experience</p>
                        </div>
                         <div v-for="item in profileData.exp"
                           :key="item.id" class="ml-5 mb-2">
                              <h5 class="text-educate text-uppercase font-weight-bold mt-4" style="margin:0">{{item.position}}</h5>
                              <p class="text-educate" style="margin:0">{{item.company}}</p>
                              <p class="text-educate ">{{item.joindate}}s/d{{item.outdate==null?' Sekarang':item.outdate}}</p>
                           </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rightside"></div>
            </div>
          </div>
        <!-- </b-card> -->
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core';
import {faPhoneSquareAlt}
  from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare,
  faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {userdetailFetch,
  getEducationFetch,
  getSkillFetch,
  getWorkingFetch} from '../utils/apiUtils';

library.add(
    faPhoneSquareAlt,
    faFacebookSquare,
    faTwitterSquare,
    faInstagramSquare);
export default {
  name: 'general',
  created() {
    this.getUserDetail();
    this.loadEducate();
    this.loadExp();
    this.list();
  },
  computed: {
    profilPic: function() {
      const {ProfilePic} = this.$store.getters;
      if (ProfilePic) {
        return `../storage/profilPic/${ProfilePic}`;
      }
      return '../storage/profilPic/origin.jpg';
    },
    profileData: function() {
      const {
        name, email,
        facebook,
        instagram,
        twitter,
        phone,
        desc,
        ability,
        education,
        exp} = this.$store.getters;
      if (name) {
        return {name, email, facebook, instagram,
          twitter, phone, desc, ability, education,
          exp};
      }
      return null;
    },
  },
  methods: {
    async getUserDetail() {
      console.log(this.$store.getters.DOB, 'naminan');
      if (this.$store.getters.DOB === '') {
        try {
          const id = localStorage.getItem('@id');
          const sendapi = await userdetailFetch(id);
          this.$store.dispatch('info/setDetailState', sendapi.data);
          // console.log('DOB VUEX', this.$store.getters.DOB);
        } catch (error) {
          console.log(error, 'errPersonal');
          this.showAlert('Uppss,Internal Server Error', 'failed');
        }
      } else {
        // const { name, email } = sendapi.data;
        console.log('vuex data');
      }
    },
    async loadEducate(mode = '') {
      const {education}=this.$store.getters;
      if (education.length === 0|| mode==='forced' ) {
        const sendAPI = await getEducationFetch(localStorage.getItem('@id'));
        console.log(sendAPI, 'space');
        if (sendAPI.success === true) {
          if (sendAPI.data.options.length !== 0) {
            this.spaceField = sendAPI.data.options;
            this.$store.dispatch('info/setDetailPendidikan',
                sendAPI.data.options);
          }
        } else {
          console.log('failed2');
          this.showAlert(`Uppss,ada yang salah : ${sendAPI.error}`, 'failed');
          return false;
        }
      } else {
        const {education}=this.$store.getters;
        this.spaceField =education;
      }
    },
    list: async function() {
      const sendApi = await getSkillFetch(localStorage.getItem('@id'));
      if (sendApi.success) {
        console.log(sendApi.data, 'list data');
        this.$store.dispatch('info/setDetailAbility',
            sendApi.data);
      }
    },
    loadExp: async function() {
      const sendApi = await getWorkingFetch(localStorage.getItem('@id'));
      console.log(sendApi);
      if (sendApi.success) {
        this.$store.dispatch('info/setDetailExp',
            sendApi.data);
      }
    },
    print: function(params) {
      // Pass the element id here
      this.$htmlToPaper('print-this');
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
  .canvas{
   max-width: 210mm;
   max-height: 297mm;
    /* background-color: whitesmoke; */
  }

.main{
  position: fixed;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  z-index:1 ;
  box-sizing: border-box;
}
.leftside{
  width: 30%;
  background-color: rgb(189, 193, 230);
}
.box-data{
  position :absolute;
  width: 85%;
  height: 95%;
  margin-top: 20px;
  padding: 0;
  /* background-color: whitesmoke; */
  z-index: 20;
}
.main-box{
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  z-index:21 ;
}

.left-title{
  font-size: 20px;
}

.box-left{
  width: 40%;
  height: 100%;
  /* border: thin solid black; */
  /* border-style: groove; */
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: rgb(255, 255, 255);

}
.box-right{
  width: 60%;
   height: 100%;
}

.contact-box{
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}
.text-contact{
  margin: 0;
  font-size: 18px;
}
.text-desc{
  margin: 0;
  font-size: 18px;
  padding-right: 10px;
}
.rightside{
  width: 60%;
  background-color: whitesmoke;
  overflow:hidden
}

.name{
  letter-spacing: 2px;
  color: rgb(126, 126, 126);
  /* text-shadow: 1px 1px #2e2e2e; */
}

.border-title{
  width: 200px;
  /* background-color: red; */
  height: 40px;
  position: relative;
  border: 1px solid #b7a85b  ;
}

.Title-effect{
  font-size: 20px;
  letter-spacing: 2px;
  position: absolute;
  left: 46px;
  top: 7px;
}

.text-educate{
  letter-spacing: 2px;
  font-size: 14px;
}

page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
page[size="A4"] {
  width: 210mm;
  height: 297mm;
}
</style>
