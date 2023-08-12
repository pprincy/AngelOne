

import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import ipoclosed from '../ipo-closed/ipo-closed.vue';
export default {
    name: 'live-upcoming',
    components: {
        mCustomScrollBar, ipoclosed
    },
    props: [],
    data () {
      return {
        headerHeight: 0,
        isShow: true,
        activeTooltip: false
      }
    },
    computed: {
      
    },
    created(){
      
    },
    mounted () {
    //console.log(this.$refs.portfolioholdingData.HoldingTab);
    var headerHgt = $('.header').outerHeight();
    console.log("header", headerHgt);
    var ttlHeight= $('.sec_title_wrap').outerHeight();
    console.log("ttl", ttlHeight);
    var tabHeight = $('#tab-links').outerHeight();
    console.log("tab" , tabHeight)
    //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
    var element_position = $('.liveipo-table-wrapper').offset().top - headerHgt - tabHeight - ttlHeight;
    console.log("elm" , element_position);

    var element_position1 = $('.upcomingipo-table-wrapper').offset().top - headerHgt - tabHeight - ttlHeight;
    console.log("elm1" , element_position1);

        $(".liveupcoming-tab ").mCustomScrollbar({ 
            alwaysShowScrollbar: 0,
            mouseWheelPixels: 50,
            callbacks:{
              whileScrolling:function(){
                  myCustomFn(this);
                  myCustomFn1(this);
              },
              onInit:function(){
               // console.log("Scrollbars initialized");
                myCustomFn(this);
                myCustomFn1(this);
              }
          }
          });
          function myCustomFn(el){
             var value = Math.abs(el.mcs.top);
           //  console.log(value);
             if(value > element_position){
               console.log('abc')
               //$('.stickyTabWrap').addClass('stickyTop');
             }
             else{
               // $('.stickyTabWrap').removeClass('stickyTop');
             } 
        }
        function myCustomFn1(el){
          var value = Math.abs(el.mcs.top);
        //  console.log(value);
          if(value > element_position1){
            console.log('abc')
            //$('.upcomingipo-table-wrapper').addClass('stickyHead');
          }
          else{
             //$('.upcomingipo-table-wrapper').removeClass('stickyHead');
          } 
     }
     $('.side-section').removeClass('slide');
    $('.side-section .btn-sideToggle').removeClass('enableSliding');
    
    },
    methods: {
      
    }
  }