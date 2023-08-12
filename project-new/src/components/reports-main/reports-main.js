import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import TransactionReport from '../../components/transaction-report/transaction-report.vue';

export default {
  name: 'reports-main',
  components: {
    mCustomScrollBar, TransactionReport
  },
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
    console.log("abc")
     $(".reports-section").siblings('.watchlist-side-section').hide();
    // $('.main-content.leftPosition').siblings('.watchlist-side-section ').addClass('hideSection')
    // $(".reports-section .tab-content").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    // });

    
  },
  methods: {

  }
}