
import Fundssummary from '../../components/funds-summary/funds-summary.vue';
import Addbank from '../../components/add-bank/add-bank.vue'
export default {
    name: 'watchlist',
    components: {
      Fundssummary, Addbank
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
  
  
  