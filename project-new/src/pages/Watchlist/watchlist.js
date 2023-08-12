import Companydetails from '../../components/company-details/company-details.vue';
import  Buyedgecases from '../../components/buy-edge-cases/buy-edge-cases.vue'
//import Loader from '../../components/loader/loader.vue';
export default {
    name: 'watchlist',
    components: {
      Companydetails, Buyedgecases,
       //Loader
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
  
  
  