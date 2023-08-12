
import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
    name: 'advisory-staytune',
    components: {
      mCustomScrollBar
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
      $(".blockpage").mCustomScrollbar({
        //axis:"x",
      });
    },
    methods: {
    }
  }
  
  
  