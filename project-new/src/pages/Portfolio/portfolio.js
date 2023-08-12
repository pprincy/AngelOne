
 import Header from '../../components/header/header.vue';
 import Menu from '../../components/menu/menu.vue';
import Watchlistsidesection from '../../components/watchlist-side-section/watchlist-side-section.vue';
import Portfoliocont from '../../components/portfolio-cont/portfolio-cont.vue';
import  Buyedgecases from '../../components/buy-edge-cases/buy-edge-cases.vue'

export default {
    name: 'watchlist',
    components: {
      Header ,Menu , Watchlistsidesection, Portfoliocont, Buyedgecases
    },
    props: [],
    data () {
      return {
        headerHeight: 0
      }
    },
    computed: {
      
    },
    created(){
      
    },
    mounted () {
     // console.log('watchlist')
    // if(navigator.userAgent.indexOf('Mac') > 0){
    //   $('body').addClass('mac-os');
    // }
    },
    methods: {
  
    }
  }
  
  
  