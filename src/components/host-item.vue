<template lang="pug">
  li.media
    .media-left.text-primary
      a(href='#')
        i.fa.fa-desktop.fa-2x(aria-hidden='true')       
    .media-body
      h4.media-heading {{ host.name }}
      label.small {{ host.ipAddress }}
</template>

<script>
  export default {
    props: ['host']
  }
</script>

<style>
</style>