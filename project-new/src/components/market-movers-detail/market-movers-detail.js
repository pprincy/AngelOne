import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';
export default {
  name: 'market-movers-detail',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      selected: [],
    }
  },
  computed: {

  },
  mounted () {
    $(".table-hold").mCustomScrollbar({
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

  }
}


