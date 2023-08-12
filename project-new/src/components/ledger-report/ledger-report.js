import $ from 'jquery';
import '../../assets/datatables/datatables.min.js';
import floatThead from 'floatthead';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
  name: 'ledger-report',
  components: {floatThead, mCustomScrollBar},
  props: [],
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {
    $(function() {
      var elem = $('table tbody td');
      $.each(elem, function() {
        if( $(this).text().length > 50 ) {
          $(this).css('height', '96px');
        }
        else{
          $(this).css('height', '67px');
        }
      });
    });


    // $('.ledger-table-wrapper').mCustomScrollbar({
    //   axis:"x",
    //   alwaysShowScrollbar: 0
    // });
   
    $(".ledger-table").dataTable({
      "fnDrawCallback": function () {
        $('.ledger-table-wrapper').mCustomScrollbar("scrollTo","top",{
          scrollInertia:1000
        });
        },
      
      fixedHeader: true,
      "paging": true,
      "info": false,
      "searching": false,
      // "autoWidth": false,
      "ordering": false,
      "lengthMenu": [[5, 10, 15, 20], [5, 10, 15, 20]],
      "language": {
        "lengthMenu": "Showing _MENU_ Entries of 20",
    },
    
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }],
      
    });

    $('.ledger-table-wrapper').mCustomScrollbar({
      alwaysShowScrollbar: 0,
      axis:"Y",
      callbacks:{
        onScrollStart:function(){
          $('.ledger-table-wrapper thead').addClass("stickyHead");
        },
        onTotalScrollBack:function(){
          $('.ledger-table-wrapper thead').removeClass("stickyHead");
        }
    }
    });

    $('.ledger-table').on( 'page.dt', function () {
      document.body.scrollTop = 0;
     // document.documentElement.scrollTop = 0;
      //alert("hi");
    //  $('.ledger-table-wrapper').mCustomScrollbar("scrollTo","top",{
    //     scrollEasing:"linear",
    //     scrollInertia:500
    // });
      // var info = table.page.info();
      // $('#pageInfo').html( 'Showing page: '+info.page+' of '+info.pages );
  } );
  //   var $table = $('.table-wrapper .table');
  //   $table.floatThead({
  //       scrollContainer: function($table){
  //           return $table.closest('.table-wrapper');
  //       }
  // });
  },
  methods: {

  }
}