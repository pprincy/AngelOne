import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'pledge-holding',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      price: '0',
      topSec: true,
    }
  },
  computed: {

  },
  mounted() {
    $("#no-transaction").hide();
    
    if(navigator.userAgent.indexOf('Mac') > 0){
      $('body').addClass('mac-os');
    }
  },
  methods: {

  }
}