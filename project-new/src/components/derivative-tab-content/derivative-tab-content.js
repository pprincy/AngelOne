
import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'derivative-tab-content',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      shortTermVal: 69,
      intraDayVal: 83,
      commodityVal:52,
      currencyVal:36,
      topPickUpVal:20,
      midCapReturn:3,
      selected: [],
    }
  },
  computed: {

  },
  mounted () {
    
    $(".markets-page .tab-content").mCustomScrollbar({
      alwaysShowScrollbar: 0
    });

    $(function() {
      $( 'ul.filterblock li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
    });
   
    $("#buildups-table").DataTable({
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
      orderable: true,
      targets: "mt-head"
    }]
    });

    
    $("#market-moves-table").DataTable({
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
      orderable: true,
      targets: "mt-head"
    }]
    });
  },
  methods: {
    // choosewatchlist: function () {
    //   if(this.selected.length > 0) {
    //     this.selected.pop()
    //   }else {
    //     this.selected.push(1)
    //   }
    // }
  }
}


