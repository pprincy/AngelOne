

import $ from 'jquery';
import '../../assets/datatables/datatables.min.js';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
    name: 'ipo-closed',
    components: {
        mCustomScrollBar
    },
    props: [],
    data () {
      return {
        headerHeight: 0,
        activeTooltip:false
      }
    },
    computed: {
      
    },
    created(){ 
      
    },
    mounted () {
      var headerHgt = $('.header').outerHeight();
      console.log("header", headerHgt);
      var ttlHeight= $('.sec_title_wrap').outerHeight();
      console.log("ttl", ttlHeight);
      //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
      var element_position = $('.liveipo-table-wrapper').offset().top - headerHgt - ttlHeight;
    console.log("elm" , element_position);
      
      $(".liveipo-table-wrapper").mCustomScrollbar({
        alwaysShowScrollbar: 0,
        callbacks: {
          whileScrolling: function () {
            myCustomFn(this);
          },
          onInit: function () {
            // console.log("Scrollbars initialized");
            myCustomFn(this);
          }
        }

      });
      function myCustomFn(el){
        var value = Math.abs(el.mcs.top);
      //  console.log(value);
        if(value > element_position){
          console.log('abc')
          //$('.stickyTabWrap').addClass('stickyTop');
          $('.scrollTop').addClass('show');
          setTimeout( function () {
            $("#hideMe").css('display', 'none');
          }, 3000);
          
        }
        else{
          // $('.stickyTabWrap').removeClass('stickyTop');
          $('.scrollTop').removeClass('show');
        } 
   }
          
        
      
      
  
      // $(".main-content-wrapper").mCustomScrollbar({
        
        
        
        
      // });
      //$('.stickyTabWrap').addClass('stickyTop');

      
      /*Back to top Function start*/
	
	
	$(document).on('click', '.scrollTop', function() {
			// $('body,html').animate({scrollTop: 0}, 800);
      $('.mCSB_container').css('top', '0');
      $('.mCSB_dragger').css('top', '0');
      $('.scrollTop').removeClass('show');
      $("#hideMe").css('display', 'block');
	});
	/*Back to top Function End*/

        // $("#ipoclosed-data").DataTable({
        //   "paging": true,
        //   "info": false,
        //   "searching": false,
        //   "autoWidth": false,
        //   "order": [[ 0, "desc" ]],
        //   "aLengthMenu": [[3, 5, 10, 20, -1], [3, 5, 10, 20, "All"]],
        //   "iDisplayLength": 3,
        //   "language": {
        //     "lengthMenu": "Showing _MENU_ Entries of 20",
        // },
        //   columnDefs: [{
        //     orderable: true,
        //     targets: "sort_enable"
        //   }]
        // });

        // $('.closeipotable').removeClass('dataTable');
    
    },
    methods: {
    }
  }