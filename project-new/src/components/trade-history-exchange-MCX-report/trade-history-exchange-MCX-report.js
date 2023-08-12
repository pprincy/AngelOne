import $ from 'jquery';
import '../../assets/datatables/datatables.min.js';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'trade-history-exchange-mcx-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      tradeExchangeHistoryMCXReport: [
        {
          key: 1,
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
          scripName: 'Gold',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
          scripName: 'COPPER',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
        },
        {
          key: 6,
          scripName: 'Gold',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
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
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    $("#trade-MCX").DataTable({
      "paging": false,
      "info": false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });
    $('.mcx-table-wrap').mCustomScrollbar({
      axis:"x",
      alwaysShowScrollbar: 0,
      callbacks:{
        onScrollStart:function(){
          $('.mcx-table-wrap .scripCol').addClass("stickyCol");
        },
        onTotalScrollBack:function(){
          $('.mcx-table-wrap .scripCol').removeClass("stickyCol");
        }
    }
    });
    $('.mcx-table-wrap .table tbody').mCustomScrollbar({
      alwaysShowScrollbar: 0,
      axis:"Y",
      callbacks:{
        onScrollStart:function(){
          $('.mcx-table-wrap thead').addClass("stickyHead");
        },
        onTotalScrollBack:function(){
          $('.mcx-table-wrap thead').removeClass("stickyHead");
        }
    }
    });

  },
  methods: {

  }
}