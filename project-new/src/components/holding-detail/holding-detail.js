import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';
import  Buyedgecases from '../buy-edge-cases/buy-edge-cases.vue';

export default {
  name: 'holding-detail',
  components: { mCustomScrollBar, Buyedgecases },
  props: [],
  data () {
    return {
      todayOrderTitle: false,
      pastOrderArticle: false,
      todayOrderCount: true,
      viewPastOrderArticle: true,
    }
  },
  computed: {

  },
  mounted () {
    $('.btn-buy, .btn-sell').click(function(){
      $('body').find('.buySideBar').show();
      $('body').find('.main-content').addClass('leftPosition');
      $('body').find('.side-section').addClass('hideSection');
    });

    $(".past_order-table").DataTable({
      "paging":   true,
      "info":     false,
      "searching": true,
      language: {
        searchPlaceholder: "Search stocks, options & futures"
      },
      "autoWidth": false,
      "ordering": true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });

    setTimeout(function(){
      var transHistoryTbl = $(".transaction_history-table").outerWidth();
      $(".transaction_history-table").find("thead").width(transHistoryTbl);

    },2000);

    $(".main-content-wrapper").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 200,
      callbacks:{
        whileScrolling:function(){
          transHistoryArticle(this);
        }
    }
    });
    function transHistoryArticle(){
       var transHisValue = $('.transaction_history-article .table-wrapper').offset().top;
       if(transHisValue <= 120){
         $('.transaction_history-article').addClass('stickyTop');
       }
       else{
        $('.transaction_history-article').removeClass('stickyTop');
       }
    }

  },
  methods: {
    goBackToHolding() {
     // console.log(this.$parent.previousMenu)
      console.log('back function')
      this.$router.push({ name: 'Portfolio', params: { HoldingListTab: "HoldingTab"}});
    },
  }
}


