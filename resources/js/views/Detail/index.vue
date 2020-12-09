<template>
 <div class="pt-2">
     <b-container>
        <b-row>
                <Leftcard/>
                <Rightcard/>
        </b-row>
     </b-container>
 </div>
</template>

<script>
import {Leftcard, Rightcard} from './components';
export default {
  name: 'detail',
  components: {
    Leftcard,
    Rightcard,
  },
};
</script>

<style>

</style>
