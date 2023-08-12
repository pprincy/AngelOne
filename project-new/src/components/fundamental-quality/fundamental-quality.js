import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js';
export default {
  name: 'fundamental-quality',
  components: {mCustomScrollBar},
  props: [],
  data () {
      return {
        moreInfo:false,
        qty1:'Poor',
        qty2:'Average',
        qty3:'Good',
        viewMoreLink:true,
    }
  },
  computed: {

  },
  mounted () {
    $(".fundamental-quality .right-sec   .scrollable-info").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      updateOnContentResize:true
    });
  },
  methods: {
    showMoreInfo(){
      this.moreInfo = true;
      this.viewMoreLink = false;
    }
  }
}


