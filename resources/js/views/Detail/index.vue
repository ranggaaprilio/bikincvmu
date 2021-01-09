<template>
 <div class="pt-2">
     <b-container>
        <b-row>
                <Leftcard/>
                <Rightcard/>
                <button class="float" @click="routeme('print')">
                  <font-awesome-icon icon="file-download"
                  style="margin-top:22px;font-size:30px"/>
                </button>
        </b-row>
     </b-container>
 </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core';
import {Leftcard, Rightcard} from './components';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';
import router from '../../routes';

library.add(
    faFileDownload,
);
export default {
  name: 'detail',
  components: {
    Leftcard,
    Rightcard,
  },
  methods: {
    routeme(name) {
      const id=this.$route.params.id;
      router.push({name, params: id});
    },
  },
};
</script>

<style>
.float{
position: fixed;
    width: 78px;
    height: 60px;
    bottom: 40px;
    right: 75px;
    background-color: #0C9;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    /* padding: 0px; */
    padding-bottom: 74px;
    margin: 0;
    z-index: 100;
}

.my-float{
margin-top:22px;
}
</style>
