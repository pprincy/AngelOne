import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';
import  Buyedgecases from '../buy-edge-cases/buy-edge-cases.vue';

export default {
  name: 'portfolio-holdings',
  components: { mCustomScrollBar, Buyedgecases },
  props: [],
  data () {
    return {
      HoldingTab:"",
      holdingList: [
        {
          key: 1,
          name: 'RELIANCE',
          badge: 'BSE',
          price1: '- ₹34.56',
          price2: '-13.45%', 
          amt1: '1508.10',
          amt2: '+20.90',
          amt3: '+0.07%',
          invested: '56,428.67',
          quantity: '10,00,000',
          marketValue: '85,335.89'
        },
        {
          key: 2,
          name: 'HEROMOTORS',
          badge: 'NSE',
          price1: '₹428.67',
          price2: '+123.90%', 
          amt1: '1508.10',
          amt2: '+20.90',
          amt3: '+0.07%',
          invested: '56,428.67',
          quantity: '567',
          marketValue: '85,335.89'
        }
      ]
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
    this.HoldingTab = this.$route.params.HoldingListTab;
    console.log(this.HoldingTab)
    $(".holding-table").DataTable({
      "paging":   false,
      "info":     false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });

    setTimeout(function(){
     // var holdingTbl = $(".holding-table").outerWidth();
     // $(".holding-table").find("thead").width(holdingTbl);
    },1000);
    $(".nav-tabs .nav-item:nth-child(3) .nav-link").on('shown.bs.tab', function() {

      $('.holding-article').removeClass('stickyTop');
      var headerHgt = $('.header').outerHeight();
    console.log("heder",headerHgt)
    var tabHeight = $('.main-nav .nav-link').outerHeight();
    console.log("tab",tabHeight)
    var element_position2 = $('.holding-article-wrap').offset().top - headerHgt - tabHeight  ;
    console.log("pos", element_position2);

    $(".portfolio-holdings_tab").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      //mouseWheelPixels: 200,
      callbacks:{
        whileScrolling:function(){
          holdingArticle(this);
        },
        onInit:function(){
          holdingArticle(this);
        }
      }
    });

    function holdingArticle(el){
       var value = Math.abs(el.mcs.top);
       console.log("1",value)
       if(value > element_position2){
         $('.holding-article').addClass('stickyTop');
       }
       else{
        $('.holding-article').removeClass('stickyTop');
       }
    }
    });
    // var headerHgt = $('.header').outerHeight();
    // console.log("heder",headerHgt)
    // var tabHeight = $('.main-nav .nav-link').outerHeight();
    // console.log("tab",tabHeight)
    // var ele = $('.openOrderTableWrap').offset().top;
    // console.log("ele", ele)
    // var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight  ;
    // console.log(element_position);
    // var element_position2 = $('.holding_status').offset().top;
    // console.log("pos2", element_position2);
    // $(".portfolio-holdings_tab").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   //mouseWheelPixels: 200,
    //   callbacks:{
    //     whileScrolling:function(){
    //       holdingArticle(this);
    //     },
    //     onInit:function(){
    //       holdingArticle(this);
    //     }
    //   }
    // });

    // function holdingArticle(el){
    //    var value = Math.abs(el.mcs.top);
    //    console.log("1",value)
    //    if(value > element_position2){
    //      $('.holding-article').addClass('stickyTop');
    //    }
    //    else{
    //     $('.holding-article').removeClass('stickyTop');
    //    }
    // }
    // $(".portfolio-holdings_tab").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   mouseWheelPixels: 200,
    //   callbacks:{
    //     whileScrolling:function(){
    //       holdingArticle(this);
    //     }
    // }
    // });
    

    // function holdingArticle(el){
    //     var value = Math.abs(el.mcs.top);
    //    console.log("1",value)
    //    if(value > element_position2){
    //      $('.holding-article').addClass('stickyTop');
    //    }
    //    else{
    //     $('.holding-article').removeClass('stickyTop');
    //    }
    // }
    
  
  },
  methods: {

  }
}


