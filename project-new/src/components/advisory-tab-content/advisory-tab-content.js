import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'advisory-tab-content',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      shortTermVal: 69,
      intraDayVal: 83,
      commodityVal:52,
      currencyVal:36,
      topPickUpVal:20,
      midCapReturn:3,
      
    }
  },
  computed: {

  },
  mounted () {
    $(".advisory-investofolio-page .tab-content").mCustomScrollbar({
      alwaysShowScrollbar: 0
    });
    
  },
  methods: {
    
  }
}


