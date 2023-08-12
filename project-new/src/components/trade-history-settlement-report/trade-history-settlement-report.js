import $ from 'jquery';
import '../../assets/datatables/datatables.min.js';
import '../../assets/datatables/dataTables.fixedColumns.min.js';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'trade-history-settlement-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      tradeSettlementHistoryReport: [
        {
          key: 1,
          scripName: 'RELI',
          badge: 'NSE',
          group: 'Reliance Global Group',
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
          key: 2,
          exchangeName: 'Settlement No. : 2345623',
          date: '13 Mar 2021',
          exchange: 'NSECM',
          exchangeGroup: 'Total for Settlement',
          series: '',
          buyQty: '',
          buyAvgPrice: '',
          buyValue: '14,538.00',
          sellQty: '',
          sellAvgPrice: '',
          sellValue: '14,738.00',
          openQty: '',
          openAvgPrice: '',
          openValue: '14,238.00',
          netValue: '13,348.30'
        },
        {
          key: 3,
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
          key: 4,
          exchangeName: 'Settlement No. : 2345623',
          date: '13 Mar 2021',
          exchange: 'NSECM',
          exchangeGroup: 'Total for Settlement',
          series: '',
          buyQty: '',
          buyAvgPrice: '',
          buyValue: '14,538.00',
          sellQty: '',
          sellAvgPrice: '',
          sellValue: '14,738.00',
          openQty: '',
          openAvgPrice: '',
          openValue: '14,238.00',
          netValue: '13,348.30'
        },
        {
          key: 5,
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
          key: 6,
          exchangeName: 'Settlement No. : 2345623',
          date: '13 Mar 2021',
          exchange: 'NSECM',
          exchangeGroup: 'Total for Settlement',
          series: '',
          buyQty: '',
          buyAvgPrice: '',
          buyValue: '14,538.00',
          sellQty: '',
          sellAvgPrice: '',
          sellValue: '14,738.00',
          openQty: '',
          openAvgPrice: '',
          openValue: '14,238.00',
          netValue: '13,348.30'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {

    // $("#tradeSettlementReport").DataTable({
    //   "paging": false,
    //   "info": false,
    //   "searching": false,
    //   "autoWidth": false,
    //   "ordering": false,
    //   "scrollY": 300,
    //   scrollX:        true,
    //   scrollCollapse: true,
    //   // fixedColumns:   {
    //   //     left: 1,
    //   // },
    //   columnDefs: [{
    //     orderable: false,
    //     targets: "sort_enable"
    //   }]
    // });

    $('.trade-table-wrapper').mCustomScrollbar({
      axis:"x",
      alwaysShowScrollbar: 0,
    });
    $('.trade-table-wrapper .table tbody').mCustomScrollbar({
      alwaysShowScrollbar: 0,
      axis:"Y",
    });

  },
  methods: {

  }
}