import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';

export default {
  name: 'pl-summary-fo-report',
  components: {mCustomScrollBar},
  props: [],
  data() {
    return {
      plSummaryCurrencyReport: [
        {
          key: 1,
          scripName: 'NIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '22,258.75',
          sellValue: '24,725.76',
          gl: '2,378.53',
          percent: '110.63%'
        },
        {
          key: 2,
          scripName: 'bankNIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '48,556.76',
          sellValue: '14,340.52',
          gl: '1080.59',
          percent: '65.25%'
        },
        {
          key: 3,
          scripName: 'NIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '10,782.30',
          sellValue: '11,410.56',
          gl: '10,570.63',
          percent: '200.63%'
        },
        {
          key: 4,
          scripName: 'bankNIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '7,325.97',
          sellValue: '311.25',
          gl: '12,218.00',
          percent: '120.63%'
        },
        {
          key: 4,
          scripName: 'bankNIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '7,325.97',
          sellValue: '311.25',
          gl: '12,218.00',
          percent: '120.63%'
        },
        {
          key: 4,
          scripName: 'bankNIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '7,325.97',
          sellValue: '311.25',
          gl: '12,218.00',
          percent: '120.63%'
        },
        {
          key: 4,
          scripName: 'bankNIfty',
          badge: 'NSE FO',
          date: '27 Feb 2020',
          ce: 'CE',
          total: '1300',
          instrument: 'optidx',
          buyValue: '7,325.97',
          sellValue: '311.25',
          gl: '12,218.00',
          percent: '120.63%'
        }
      ]
    }
  },
  computed: {

  },
  mounted() {
    // $('.leftPosition').siblings('.watchlist-side-section ').addClass('hideSection')
    $("#pl-fo-table").DataTable({
      "paging":   false,
      "info":     false,
      "searching": false,
      "autoWidth": false,
      "ordering": true,
      //"aaSorting": [[ 1, "desc" ]],
      //"aaSorting": [[ 1, "desc" ]],
      scrollY: 300,
      scrollX: true,
      columnDefs: [{
        orderable: true,
        targets: "sort_enable"
      }]
    });
    // $('.pl-fo-table-wrap .table tbody').mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   axis:"Y",
    //   callbacks:{
    //     onScrollStart:function(){
    //       $('.pl-fo-table-wrap thead').addClass("stickyHead");
    //     },
    //     onTotalScrollBack:function(){
    //       $('.pl-fo-table-wrap thead').removeClass("stickyHead");
    //     }
    // }
    // });
  },
  methods: {

  }
}