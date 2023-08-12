import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'ipo-faq',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    $(".faq-cont-wrap").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
  },
  methods: {

  }
}


