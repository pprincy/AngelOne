import $ from 'jquery';
import '../../assets/datatables/datatables.min.js';
import '../../assets/datatables/dataTables.fixedColumns.min.js';

export default {
  name: 'trade-history-scrip-report',
  components: {},
  props: [],
  data() {
    return {
      totalBuyValue: '15,116.00',
      totalSellValue: '15,646.00',
      totalOpenPositionValue: '15,626.00',
      totalNetValue: '13,348.30',
      tradeScripHistoryReport: [{
          key: 1,
          scripName: 'RELI',
          badge: 'NSE',
          group: 'Reliance Global Group',
          series: 'EQ',
          buyQty: '100',
          buyAvgPrice: '188.21',
          buyValue: '15,116.00',
          sellQty: '100',
          sellAvgPrice: '188.21',
          sellValue: '15,646.00',
          openQty: '100',
          openAvgPrice: '188.21',
          openValue: '15,626.00',
          netValue: '13,348.30'
        },
        {
          key: 2,
          scripName: 'HEROMOTOCORP',
          badge: 'NSE',
          group: 'Hero Motocorp Limited',
          series: 'EQ',
          buyQty: '100',
          buyAvgPrice: '162.21',
          buyValue: '14,538.00',
          sellQty: '100',
          sellAvgPrice: '163.21',
          sellValue: '14,738.00',
          openQty: '100',
          openAvgPrice: '165.21',
          openValue: '14,238.00',
          netValue: '13,348.30'
        },
        {
          key: 3,
          scripName: 'TATAMOTORS',
          badge: 'NSE',
          group: 'Tata Motors Limited',
          series: 'EQ',
          buyQty: '100',
          buyAvgPrice: '124.21',
          buyValue: '12,218.00',
          sellQty: '100',
          sellAvgPrice: '125.21',
          sellValue: '12,418.00',
          openQty: '100',
          openAvgPrice: '126.21',
          openValue: '12,318.00',
          netValue: '13,348.30'
        },
        {
          key: 4,
          scripName: 'BAJAJFINSV',
          badge: 'BSE',
          group: 'Bajaj Finserv Ltd.',
          series: 'EQ',
          buyQty: '100',
          buyAvgPrice: '188.21',
          buyValue: '15,116.00',
          sellQty: '100',
          sellAvgPrice: '188.21',
          sellValue: '15,646.00',
          openQty: '100',
          openAvgPrice: '188.21',
          openValue: '15,626.00',
          netValue: '13,348.30'
        },
        {
          key: 5,
          scripName: 'PVR',
          badge: 'MCX',
          group: 'PVR Cinemas',
          series: 'EQ',
          buyQty: '100',
          buyAvgPrice: '162.21',
          buyValue: '13418.00',
          sellQty: '100',
          sellAvgPrice: '161.21',
          sellValue: '13820.00',
          openQty: '100',
          openAvgPrice: '163.21',
          openValue: '13,810.00',
          netValue: '12,348.30'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    $("#trade-scrip").DataTable({
      "paging": false,
      "info": false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      "scrollY": 300,
      scrollX:        true,
      scrollCollapse: true,
      // fixedColumns:   {
      //     left: 1,
      // },
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });
    setTimeout(function(){
      $(".dataTables_scroll").mCustomScrollbar({
        axis:"x",
        mouseWheel:{ enable: true },
      });
    },500);
    $('.nsecm-table-wrap').mCustomScrollbar({
      axis:"x",
      alwaysShowScrollbar: 0,
      callbacks:{
        onScrollStart:function(){
          $('.nsecm-table-wrap .scripCol').addClass("stickyCol");
        },
        onTotalScrollBack:function(){
          $('.nsecm-table-wrap .scripCol').removeClass("stickyCol");
        }
    }
    });
    $('.nsecm-table-wrap .table tbody').mCustomScrollbar({
      alwaysShowScrollbar: 0,
      axis:"Y",
      callbacks:{
        onScrollStart:function(){
          $('.nsecm-table-wrap thead').addClass("stickyHead");
        },
        onTotalScrollBack:function(){
          $('.nsecm-table-wrap thead').removeClass("stickyHead");
        }
    }
    });
  },
  methods: {
    
  }
}