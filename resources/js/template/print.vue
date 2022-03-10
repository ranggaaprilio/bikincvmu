<template>
<div class="page">
    <General v-if="param==1" />
    <Formal v-if="param==2" />
    <Active v-if="param==3" />
</div>
</template>

<script>
import {General, Formal, Active} from './index';
export default {
  name: 'printPage',
  created() {
    setTimeout(()=>{
      window.print();
    }, 1000)
    ;
  },
  data() {
    return {
      param: this.$route.params.id,
    };
  },
  components: {
    General,
    Formal,
    Active,
  },
};
</script>

<style>
  .page {
        width: 210mm;
        min-height: 297mm;
        padding: 10mm;
        margin: 10mm auto;
        border: 1px #D3D3D3 solid;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        overflow: hidden;
    }
    .subpage {
        padding: 1cm;
        border: 5px red solid;
        height: 257mm;
        outline: 2cm #FFEAEA solid;
    }
    @page {
        size: A4;
        margin: 0;
    }
    @media print {
        html, body {
            max-width: 210mm;
            max-height: 297mm;
            background-color: white !important;
        }
        .page {
            margin-bottom : 0;
            border: none;
            border-radius: none;
            min-width: initial;
            min-height: initial;
            /* box-shadow: initial; */
            /* background: initial; */
            page-break-after: unset;
        }
    }
</style>
