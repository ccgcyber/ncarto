<template lang="pug">
  div
    status-header
    .container.inset
      .row.buffer-top
        .col-md-12.pagination-centered
          button.btn.btn-default.btn-lg(type='button' v-on:click='scan' v-show='!isScanning') Scan&nbsp;
            i.fa.fa-search(aria-hidden='true')
      .row.buffer-top
        .col-md-12
          ul.media-list(v-show='!isScanning')
            host-item(v-for='host in hosts' v-bind:host='host' v-bind:key='host.ipAddress')
          spinner(size='massive' message='Scanning...' line-fg-color='#A7BED3' spinner-text-fg-color='#C6E2E9' v-show='isScanning')
</template>

<script>
  import spinner from 'vue-simple-spinner'
  import hostItem from '../components/host-item.vue'
  import statusHeader from '../components/status-header.vue'

  export default {
    data() {
      return { 
        hosts: [
          {
            name: 'BEN-MBP-2017',
            ipAddress: '192.168.2.10',
            ports: [ 80, 22 ]
          },
          {
            name: 'BEN-MBP-2017',
            ipAddress: '192.168.2.11',
            ports: [ 443 ]            
          }
        ],
        isScanning: false
      }
    },
    methods: {
      scan () {
        this.isScanning = true
        this.hosts.push({
            name: 'BEN-MBP-2017',
            ipAddress: '192.168.2.11',
            ports: [ 443 ]            
          })
      }
    },
    components: {
      spinner,
      statusHeader,
      hostItem
    }
  }
</script>

<style lang="stylus">
  .inset
    padding: 1em 4em 1em 4em
  .buffer-top
    margin-top: 1em
  .pagination-centered
    text-align: center
</style>
