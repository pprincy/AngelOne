

import $ from 'jquery';
//import '../../assets/datatables/datatables.min.js';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
    name: 'stock',
    components: {
        mCustomScrollBar
    },
    props: [],
    data () {
      return {
        headerHeight: 0,
        activeTooltip:false,
        selected: [],
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
      // var holdHeight = $('.hold').outerHeight();
      // console.log("holder" , holdHeight)
      //var element_position = $('.openOrderTableWrap').offset().top - headerHgt - tabHeight ;
      var element_position = $('.table-hold').offset().top - headerHgt - ttlHeight ;
    console.log("elm" , element_position);
      
      $(".equity-category-wrap").mCustomScrollbar({
        alwaysShowScrollbar: 0,
        mouseWheelPixels: 40,
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
      function myCustomFn(el) {
        var value = Math.abs(el.mcs.top);
        //  console.log(value);
        if (value > element_position) {
          console.log('abc')
          $('.stickyTabWrap').addClass('stickyTop');
        }
        else {
          $('.stickyTabWrap').removeClass('stickyTop');
        }
      }


      // $(".equity-category-wrap").mCustomScrollbar({
      //   alwaysShowScrollbar: 0
      // });
      $('.drop-cnt select').selectpicker({ });
    $(function() {
      $( 'ul.filterblock li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
    });

    $("#stockaction").DataTable({
      "paging": false,
      "info": false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
    columnDefs: [
    {
        "orderable": true,
        "targets": 1,
    },
    {
      orderable: false,
      targets: "mt-head"
    }]
    });

    },
    methods: {
      choosewatchlist: function () {
        if(this.selected.length > 0) {
          this.selected.pop()
        }else {
          this.selected.push(1)
        }
      }
    }
  }