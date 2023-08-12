import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'pl-summary-equity-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      plSummaryReport: [
        {
          key: 1,
          scripName: 'RELI',
          badge: 'NSE',
          group: 'Reliance Global Group',
          buyValue: '170.65',
          sellValue: 100,
          others: '188.21',
          plShort: '100',
          plLong: '15,218.00',
          gl: '14,218.00',
          percent: '230.43%',
          intraday: '15,218.00',
          plDeliveryValue: '13,348.30'
        },
        {
          key: 2,
          scripName: 'HEROMOTOCORP',
          badge: 'NSE',
          group: 'Hero Motocorp Limited',
          buyValue: '70.97',
          sellValue: 40,
          others: '188.21',
          plShort: '100',
          plLong: '15,218.00',
          gl: '11,218.00',
          percent: '130.43%',
          intraday: '15,218.00',
          plDeliveryValue: '13,348.30'
        },
        {
          key: 3,
          scripName: 'TATAMOTORS',
          badge: 'NSE',
          group: 'Tata Motors Limited',
          buyValue: '140.30',
          sellValue: 10,
          others: '188.21',
          plShort: '100',
          plLong: '11,218.00',
          gl: '15,218.00',
          percent: '230.43%',
          intraday: '15,218.00',
          plDeliveryValue: '13,348.30'
        },
        {
          key: 4,
          scripName: 'BAJAJFINSV',
          badge: 'NSE',
          group: 'Bajaj Finserv Ltd.',
          buyValue: '170.65',
          sellValue: 70,
          others: '188.21',
          plShort: '100',
          plLong: '16,218.00',
          gl: '12,218.00',
          percent: '120.63%',
          intraday: '15,218.00',
          plDeliveryValue: '13,348.30'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    // $('.leftPosition').siblings('.watchlist-side-section ').addClass('hideSection')


    $("#pl-equity-table").DataTable({
      "paging":   false,
      "info":     false,
      "searching": false,
      "autoWidth": false,
      scrollY: 300,
      scrollX:true,
      "scrollCollapse": true,
      "fixedColumns":   {
          left: 1,
      },
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }],
    });
    // $(".pl-equity-table-wrap .dataTables_scroll").mCustomScrollbar({
    //   axis:"x",
    //   mouseWheel:{ enable: true },
    // });

    
    // $('.pl-equity-table-wrap').mCustomScrollbar({
    //   axis:"x",
    //   alwaysShowScrollbar: 0,
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-equity-table-wrap .scripCol').addClass("stickyCol");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-equity-table-wrap .scripCol').removeClass("stickyCol");
    //     }
    // }
    // });
    // $('.pl-equity-table-wrap .table tbody').mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   axis:"Y",
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-equity-table-wrap thead').addClass("stickyHead");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-equity-table-wrap thead').removeClass("stickyHead");
    //     }
    // }
    // });
  },
  methods: {

  }
}