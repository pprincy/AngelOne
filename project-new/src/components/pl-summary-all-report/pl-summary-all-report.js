import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import '../../assets/datatables/datatables.min.js';


import PLSummaryEquityReport from '../../components/pl-summary-equity-report/pl-summary-equity-report.vue';
import PLSummaryFOReport from '../../components/pl-summary-fo-report/pl-summary-fo-report.vue';
import PLSummaryCurrencyReport from '../../components/pl-summary-currency-report/pl-summary-currency-report.vue';
import PLSummaryCommodityReport from '../../components/pl-summary-commodity-report/pl-summary-commodity-report.vue';
import PLSummaryMfReport from '../../components/pl-summary-mf-report/pl-summary-mf-report.vue';
export default {
  name: 'pl-summary-all-report',
  components: {PLSummaryEquityReport,
    PLSummaryFOReport,
    PLSummaryCurrencyReport,
    PLSummaryCommodityReport,
    PLSummaryMfReport, mCustomScrollBar},
  props: [],
  data () {
    return {
      mainTab: '',
      pl_summary_equity_report: true,
      pl_summary_fo_report: false,
      pl_summary_currency_report: false,
      pl_summary_commodity_report: false,
      pl_summary_mf_report: false,
    }
  },
  computed: {

  },
  mounted () {
    $('#summaryType').change(function () {
      if ($('#summaryType').val() == 'equity') {
        $('#pl_summary_equity_report_all').show();
        $('#pl_summary_fo_report_all').hide();
        $('#pl_summary_currency_report_all').hide();
        $('#pl_summary_commodity_report_all').hide();
        $('#pl_summary_mf_report_all').hide();
        //$('#pl-equity-table').destroy();
        $('#pl-equity-table').DataTable().destroy();
        
        //$('#pl-equity-table tbody').empty();
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

      } else if ($('#summaryType').val() == 'fo') {
        $('#pl_summary_equity_report_all').hide();
        $('#pl_summary_fo_report_all').show();
        $('#pl_summary_currency_report_all').hide();
        $('#pl_summary_commodity_report_all').hide();
        $('#pl_summary_mf_report_all').hide();

      } else if ($('#summaryType').val() == 'currency') {
        $('#pl_summary_equity_report_all').hide();
        $('#pl_summary_fo_report_all').hide();
        $('#pl_summary_currency_report_all').show();
        $('#pl_summary_commodity_report_all').hide();
        $('#pl_summary_mf_report_all').hide();

      } else if ($('#summaryType').val() == 'commodity') {
        $('#pl_summary_equity_report_all').hide();
        $('#pl_summary_fo_report_all').hide();
        $('#pl_summary_currency_report_all').hide();
        $('#pl_summary_commodity_report_all').show();
        $('#pl_summary_mf_report_all').hide();
      }
     else if ($('#summaryType').val() == 'mf') {
      $('#pl_summary_equity_report_all').hide();
        $('#pl_summary_fo_report_all').hide();
        $('#pl_summary_currency_report_all').hide();
        $('#pl_summary_commodity_report_all').hide();
        $('#pl_summary_mf_report_all').show();

    }
    });
  },
  methods: {
  //   cascade: function(e){
  //    // console.log("Show "+e.target.value+ " fields")
  //     if (e.target.value == 'equity'){
  //       this.pl_summary_equity_report = true;
  //       this.pl_summary_fo_report = false;
  //       this.pl_summary_currency_report = false;
  //       this.pl_summary_commodity_report = false;
  //       this.pl_summary_mf_report= false;
  //     }
  //     else if (e.target.value == 'fo') {
  //       this.pl_summary_equity_report = false;
  //       this.pl_summary_fo_report = true;
  //       this.pl_summary_currency_report = false;
  //       this.pl_summary_commodity_report = false;
  //       this.pl_summary_mf_report= false;
  //     } 
  //     else if (e.target.value == 'currency') {
  //       this.pl_summary_equity_report = false;
  //       this.pl_summary_fo_report = false;
  //       this.pl_summary_currency_report = true;
  //       this.pl_summary_commodity_report = false;
  //       this.pl_summary_mf_report= false;
  //     }
  //     else if (e.target.value == 'commodity') {
  //       this.pl_summary_equity_report = false;
  //       this.pl_summary_fo_report = false;
  //       this.pl_summary_currency_report = false;
  //       this.pl_summary_commodity_report = true;
  //       this.pl_summary_mf_report= false;
  //     }
  //     else if (e.target.value == 'mf') {
  //       this.pl_summary_equity_report = false;
  //       this.pl_summary_fo_report = false;
  //       this.pl_summary_currency_report = false;
  //       this.pl_summary_commodity_report = false;
  //       this.pl_summary_mf_report= true;
  //     }
  // }
  }
}


