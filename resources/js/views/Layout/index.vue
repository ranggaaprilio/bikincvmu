<template>
  <div>
    <topbar />
    <MainApp />
    <Footer />
  </div>
</template>

<script>

import {Topbar, MainApp, Footer} from './components';
export default {
  name: 'Layout',
  components: {
    Topbar,
    MainApp,
    Footer,
  },
};
</script>
