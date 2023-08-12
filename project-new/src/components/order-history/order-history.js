import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'order-history',
  components: { mCustomScrollBar },
  props: [],
  data () {
    return {
      todayOrderTitle: false,
      pastOrderArticle: false,
      todayOrderCount: true,
      viewPastOrderArticle: true,
      historyDetailModal: false,
    }
  },
  computed: {

  },
  mounted () {

    $(".past_order-table").dataTable({
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

    // setTimeout(function(){
    //   var todayOrderTbl = $(".todays_order-table").outerWidth();
    //   $(".todays_order-table").find("thead").width(todayOrderTbl);

    //   var pastOrderTbl = $(".past_order-table").outerWidth();
    //   $(".past_order-table").find("thead").width(pastOrderTbl);
    // },2000);

    // var StickyPointPos = $('.sticky_point').offset().top + 40;
    // console.log(StickyPointPos)
    // var todayOrderPosition = 120;
    //var todayOrderPosition = $('.sticky_point').offset().top;
    //console.log(todayOrderPosition);
   
    var headerHgt = $('.header').outerHeight();
    //console.log("heder",headerHgt)
    var ttlHeight = $('.sec_title_wrap').outerHeight();
    //console.log("tab",ttlHeight)
    var element_position1 = $('.todays_order-article .table-wrapper').offset().top - headerHgt - ttlHeight;
    //console.log("pos1", element_position1);
    var element_position2 = $('.past_order-sticky_point').offset().top - headerHgt - ttlHeight;
    //console.log("pos2", element_position2);
    $(".main-content-wrapper").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 200,
      callbacks:{
        whileScrolling:function(){
          todayOrderArticle(this);
          pastOrderArticle(this);
        }
    }
    });
    function todayOrderArticle(el1){
         
       //var todayOrderValue = $('.todays_order-article .table-wrapper').offset().top;
       //var pastOrderValue = $('.past_order-sticky_point').offset().top;
       var value1 = Math.abs(el1.mcs.top);
       console.log("1",value1)
       if(value1 > element_position1){
         $('.todays_order-article').addClass('stickyTop');
       }
       else{
        $('.todays_order-article').removeClass('stickyTop');
       }
    }
    function pastOrderArticle(el2){
      // var pastOrderValue = $('.past_order-sticky_point').offset().top + 160;
      var value2 = Math.abs(el2.mcs.top);
       console.log("2",value2)
       if(value2 > element_position2){
        $('.past_order-article').addClass('stickyTop');
      }
      else{
       $('.past_order-article').removeClass('stickyTop');
      }
   }

  },
  methods: {
    showPastArticle(){
      this.pastOrderArticle = true;
      this.todayOrderCount = false;
      this.todayOrderTitle = true;
      this.viewPastOrderArticle = false;

      setTimeout(function(){
        var pastOrderTbl = $(".past_order-table").outerWidth();
        $(".past_order-table").find("thead").width(pastOrderTbl);
      },200);
    }
  }
}


