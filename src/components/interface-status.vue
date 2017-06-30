<template lang="pug">
  li
    .inline
      i.fa.fa-plug(aria-hidden='true') 
      | {{ interface.name }}
</template>
//h4.media-heading {{ interface.name }}
//label.small {{ interface.rxBytesPerSecond }} b/s {{ interface.txBytesPerSecond }} b/s up
<script>
  export default {
    props: ['interface']
  }
</script>

<style lang="stylus">
  li
    padding-left: 1em
</style>
