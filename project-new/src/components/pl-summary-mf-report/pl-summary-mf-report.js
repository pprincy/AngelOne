import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'pl-summary-mf-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      plSummaryMfReport: [
        {
          key: 1,
          fundName: 'Motilal Oswal Long Term Equity Fund Direct Growth',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          caValue: '24,725.76',
          shortTermValue: '24,725.76',
          longTermValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 2,
          fundName: 'Axis Bluechip Fund Direct Growth',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          caValue: '24,725.76',
          shortTermValue: '24,725.76',
          longTermValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 3,
          fundName: 'Mirae Asset Emerging Bluechip Fund Direct Growth',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          caValue: '24,725.76',
          shortTermValue: '24,725.76',
          longTermValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 4,
          fundName: 'HFDC Index Sensex Fund Direct Plan Growth',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          caValue: '24,725.76',
          shortTermValue: '24,725.76',
          longTermValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    // $('.leftPosition').siblings('.watchlist-side-section ').addClass('hideSection')
    $("#pl-mf-table").DataTable({
      "paging":   false,
      "info":     false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });
    // $('.pl-mf-table-wrap').mCustomScrollbar({
    //   axis:"x",
    //   alwaysShowScrollbar: 0,
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-mf-table-wrap .fundCol').addClass("stickyCol");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-mf-table-wrap .fundCol').removeClass("stickyCol");
    //     }
    // }
    // });
    // $('.pl-mf-table-wrap .table tbody').mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   axis:"Y",
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-mf-table-wrap thead').addClass("stickyHead");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-mf-table-wrap thead').removeClass("stickyHead");
    //     }
    // }
    // });
  },
  methods: {

  }
}