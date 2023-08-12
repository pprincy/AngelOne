import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'mtf-pledge',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      topSec: true,
      showAuthentication: true,
      showCompleted: true,
      showPending: true,
      hide: true,
    }
  },
  computed: {

  },
  mounted () {
    
    
    if(navigator.userAgent.indexOf('Mac') > 0){
      $('body').addClass('mac-os');
    }
  },
  methods: {
    showAuthenticationList() {
      this.showAuthentication = !this.showAuthentication;
    },
    showCompletedList() {
      this.showCompleted = !this.showCompleted;
    },
    showPendingList() {
      this.showPending = !this.showPending;
    },
    closeMtf() {
      this.hide = !this.hide;
    }
  }
}


