<template>

  <!--<div class="wrapper-in logedIn">-->
  <div class="wrapper-in">
    <Header></Header>
    <Menu></Menu>
    <Watchlistsidesection :companyDetails="companyDetails"></Watchlistsidesection>
    <router-view />
  </div>

</template>

<script>
import Header from './components/header/header.vue';
import Menu from './components/menu/menu.vue';
import Watchlistsidesection from './components/watchlist-side-section/watchlist-side-section.vue';



export default {
  name: 'App',
  components: {
   Header, Menu, Watchlistsidesection
  },
  data () {
      return {
        companyDetails:true
    }
  }
}
</script>

