import PLSummaryEquityReport from '../../components/pl-summary-equity-report/pl-summary-equity-report.vue';
import PLSummaryFOReport from '../../components/pl-summary-fo-report/pl-summary-fo-report.vue';
import PLSummaryCurrencyReport from '../../components/pl-summary-currency-report/pl-summary-currency-report.vue';
import PLSummaryCommodityReport from '../../components/pl-summary-commodity-report/pl-summary-commodity-report.vue';
import PLSummaryMfReport from '../../components/pl-summary-mf-report/pl-summary-mf-report.vue';

export default {
  name: 'pl-summary-all-tab-report',
  components: {
    PLSummaryEquityReport,
    PLSummaryFOReport,
    PLSummaryCurrencyReport,
    PLSummaryCommodityReport,
    PLSummaryMfReport
  },
  props: [],
  data() {
    return {
      mainTab: '',
      pl_summary_equity_report: true,
      pl_summary_fo_report: false,
      pl_summary_currency_report: false,
      pl_summary_commodity_report: false,
      pl_summary_mf_report: false,

      tabs: [
        {
          key: 1,
          name: 'Equity',
          clickName: "showEquityReport",
          className: 'equity',
        },
        {
          key: 2,
          name: 'F&O',
          clickName: "showFoReport",
          className: 'fo',
        },
        {
          key: 3,
          name: 'Currency',
          clickName: "showCurrencyReport",
          className: 'currency',
        },
        {
          key: 2,
          name: 'Commodity',
          clickName: "showCommodityReport",
          className: 'commodity',
        },
        {
          key: 2,
          name: 'MF',
          clickName: "showMfReport",
          className: 'mf',
        },
      ]
    }
  },

  computed: {

  },
  mounted() {},
  methods: {
    showEquityReport() {
      this.pl_summary_equity_report = true;
      this.pl_summary_fo_report = false;
      this.pl_summary_currency_report = false;
      this.pl_summary_commodity_report = false;
      this.pl_summary_mf_report = false;
    },
    showFoReport() {
      this.pl_summary_fo_report = true;
      this.pl_summary_equity_report = false;
      this.pl_summary_currency_report = false;
      this.pl_summary_equity_report = false;
      this.pl_summary_mf_report = false;
    },
    showCurrencyReport() {
      this.pl_summary_currency_report = true;
      this.pl_summary_equity_report = false;
      this.pl_summary_fo_report = false;
      this.pl_summary_commodity_report = false;
      this.pl_summary_mf_report = false;
    },
    showCommodityReport() {
      this.pl_summary_commodity_report = true;
      this.pl_summary_equity_report = false;
      this.pl_summary_fo_report = false;
      this.pl_summary_currency_report = false;
      this.pl_summary_mf_report = false;
    },
    showMfReport() {
      this.pl_summary_mf_report = true;
      this.pl_summary_equity_report = false;
      this.pl_summary_fo_report = false;
      this.pl_summary_currency_report = false;
      this.pl_summary_commodity_report = false;
    },
    submit(function_name, index) {
      this[function_name]()
      this.mainTab = index;
    }
  }
}