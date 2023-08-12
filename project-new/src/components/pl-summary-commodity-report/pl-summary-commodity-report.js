import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'pl-summary-commodity-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      plSummaryCommodityReport: [
        {
          key: 1,
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 2,
          scripName: 'Gold',
          badge: 'NCDEX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 3,
          scripName: 'COPPER',
          badge: 'NCDEX',
          date: '27 Feb 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 4,
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '31 May 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 4,
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '31 May 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 4,
          scripName: 'Naturalgas',
          badge: 'MCX',
          date: '31 May 2020',
          instrument: 'FUTCOM',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
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
    $("#pl-commodity-table").DataTable({
      "paging":   false,
      "info":     false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      scrollY: 300,
      scrollX: true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });
    // $('.pl-commodity-table-wrap .table tbody').mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   axis:"Y",
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-commodity-table-wrap thead').addClass("stickyHead");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-commodity-table-wrap thead').removeClass("stickyHead");
    //     }
    // }
    // });
  },
  methods: {

  }
}