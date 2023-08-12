
// import  liveupcoming from '../live-upcoming/live-upcoming.vue';
// import $ from 'jquery';
// import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

// export default {
//     name: 'ipo-main',
//     components: {
//         mCustomScrollBar, liveupcoming
//     },
//     props: [],
//     data () {
//       return {
//         headerHeight: 0
//       }
//     },
//     computed: {
      
//     },
//     created(){
      
//     },
//     mounted () {
//         //console.log(this.$refs.portfolioholdingData.HoldingTab);
//     var headerHgt = $('.header').outerHeight();
//     console.log(headerHgt);
//     var tabHeight = $('.nav-tabs .nav-link').outerHeight();
//     console.log(tabHeight)
//     //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
//     var element_position = $('.liveipo-table-wrapper').offset().top - headerHgt - tabHeight ;
//     console.log(element_position);

//         $(".liveupcoming-tab ").mCustomScrollbar({
//             alwaysShowScrollbar: 0,
//             callbacks:{
//               whileScrolling:function(){
//                   myCustomFn(this);
//               },
//               onInit:function(){
//                // console.log("Scrollbars initialized");
//                 myCustomFn(this);
//               }
//           }
//           });
//           function myCustomFn(el){
//              var value = Math.abs(el.mcs.top);
//            //  console.log(value);
//              if(value > element_position){
//                console.log('abc')
//                $('.stickyTabWrap').addClass('stickyTop');
      
//              }
//              else{
//                 $('.stickyTabWrap').removeClass('stickyTop');
//              }
           
//         }
    
//     },
//     methods: {
//     }
//   }


 


import  liveupcoming from '../live-upcoming/live-upcoming.vue';
import  ipoorders from '../ipo-orders/ipo-orders.vue';
// import $ from 'jquery';
// import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
    name: 'ipo-main',
    components: {
        liveupcoming, ipoorders
    },
    props: [],
    data () {
      return {
        headerHeight: 0
      }
    },
    computed: {
      
    },
    created(){
      
    },
    mounted () {
      
    
    },
    methods: {
    }
  }