import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import slickCarousal from 'slick-carousel';
import '../../assets/datatables/datatables.min.js';
import SectorPerfomance from '../../components/equity-sector-perfomance/equity-sector-perfomance.vue';


export default {
  name: 'equity-tab-content',
  components: {slickCarousal, mCustomScrollBar, SectorPerfomance},
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
    $('.drop-cnt select').selectpicker({ });
    $(function() {
      $( 'ul.filterblock li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
    });
    $('.variable-width-carousel').slick({
      dots: false,
      infinite: false,
      speed: 300,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      outerEdgeLimit: true,
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


