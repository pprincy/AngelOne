import $ from 'jquery';
import FloatLabel from 'vue-float-label/components/FloatLabel'

import LedgerReport from '../../components/ledger-report/ledger-report.vue';
import TradeHistoryScripReport from '../../components/trade-history-scrip-report/trade-history-scrip-report.vue';
import TradeHistorySettlementReport from '../../components/trade-history-settlement-report/trade-history-settlement-report.vue';
import TradeHistoryExchangeNSEFOReport from '../../components/trade-history-exchange-NSEFO-report/trade-history-exchange-NSEFO-report.vue';
import TradeHistoryExchangeNSECURFOReport from '../../components/trade-history-exchange-NSECURFO-report/trade-history-exchange-NSECURFO-report.vue';
import TradeHistoryExchangeMCXReport from '../../components/trade-history-exchange-MCX-report/trade-history-exchange-MCX-report.vue';
import TradeHistoryExchangeNCDEXReport from '../../components/trade-history-exchange-NCDEX-report/trade-history-exchange-NCDEX-report.vue';
import PLSummaryEquityReport from '../../components/pl-summary-equity-report/pl-summary-equity-report.vue';
import PLSummaryCurrencyReport from '../../components/pl-summary-currency-report/pl-summary-currency-report.vue';
import PLSummaryFOReport from '../../components/pl-summary-fo-report/pl-summary-fo-report.vue';
import PLSummaryALLReport from '../../components/pl-summary-all-report/pl-summary-all-report.vue';
import PLSummaryALLTabReport from '../../components/pl-summary-all-tab-report/pl-summary-all-tab-report.vue';
import ContractNotesReport from '../../components/contract-notes-report/contract-notes-report.vue';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

import '../../assets/jquery-date-range-picker-master/src/jquery.daterangepicker.js';
import '../../assets/jquery-date-range-picker-master/dist/daterangepicker.css';

export default {
  name: 'transaction-report',
  components: {
    FloatLabel,
    LedgerReport,
    TradeHistoryScripReport,
    TradeHistorySettlementReport,
    TradeHistoryExchangeNSEFOReport,
    TradeHistoryExchangeNSECURFOReport,
    TradeHistoryExchangeMCXReport,
    TradeHistoryExchangeNCDEXReport,
    PLSummaryEquityReport,
    PLSummaryCurrencyReport,
    PLSummaryFOReport,
    PLSummaryALLReport,
    PLSummaryALLTabReport,
    ContractNotesReport,
    mCustomScrollBar
  },
  props: [],
  data() {
    return {}
  },
  computed: {},
  mounted() {
    $('select').selectpicker();

    document.getElementById("plShowEquity").style.display = "flex";
    document.getElementById("plShowFo").style.display = "flex";
    document.getElementById("plShowCurrency").style.display = "flex";

    $('#ledger_report').hide();
    $('#trade_history_scrip_report').hide();
    $('#trade_history_settlement_report').hide();
    $('#trade_history_exchange_NSEFO_report').hide();
    $('#trade_history_exchange_NSECURFO_report').hide();
    $('#trade_history_exchange_MCX_report').hide();
    $('#trade_history_exchange_NCDEX_report').hide();
    $('#pl_summary_equity_report').hide();
    $('#pl_summary_currency_report').hide();
    $('#pl_summary_fo_report').hide();
    $('#pl_summary_all_report').hide();
    $('#pl_summary_all_tab_report').hide();
    $('#contract_notes_report').hide();

    $("#exchange").hide();
    $("#sort").hide();
    $("#plAll").hide();

    $("#view-report").show();
    $("#no-report").hide();

    $('#reportType').change(function () {
      // function myCustomFn(el) {
      //   var value = Math.abs(el.mcs.top);
      //   //console.log("val3", value)
      //   var element_position = $('.visibleContent .table-wrapper').offset().top + 16;
      //   //console.log("pos1", element_position)
      //   if (value > element_position) {
      //     $('.stickyTabWrap').addClass('stickyElement');

      //   } else {
      //     $('.stickyTabWrap').removeClass('stickyElement');
      //   }

      // }
      if ($('#reportType').val() == 'ledger') {
        $('#ledger_report').siblings().removeClass('visibleContent');
        $('#ledger_report').addClass('visibleContent').show();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#contract_notes_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $("#view-report").hide();
        $("#no-report").hide();

        $("#year").show();
        $("#date").show();
        $("#segment").show();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();
        $('.stickyTabWrap').removeClass('stickyElement');

        $("#form-lbl-year").removeClass("select-disabled").css("opacity", "1");
        $("#yearType").removeClass("select-disabled").selectpicker();
        $('#year .filter-option-inner-inner').css("color", "#1d1e20");
        $('#yearType option[value="y2021"]').prop('selected', true);
        $('#yearType').selectpicker('refresh');

        $("#form-lbl-date").removeClass("select-disabled").css("opacity", "1");
        $("#dateType").css("color", "#1d1e20");
        document.getElementById("dateType").value = "01 Feb 2020-28 Feb 2021";
        
        $("#form-lbl-segment").removeClass("select-disabled").css("opacity", "1");
        $("#segmentType").removeClass("select-disabled").selectpicker();
        $('#segment .filter-option-inner-inner').css("color", "#1d1e20");
        $('#segmentType option[value="segments"]').prop('selected', true);
        $('#segmentType').selectpicker('refresh');


      } else if ($('#reportType').val() == 'funds') {
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").show();

        $("#year").hide();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#reportType').val() == 'dp') {
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").show();

        $("#year").hide();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#reportType').val() == 'auction') {
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").show();

        $("#year").hide();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#reportType').val() == 'trade') {
        $('#trade_history_scrip_report').siblings().removeClass('visibleContent');
        $('#trade_history_scrip_report').addClass('visibleContent').show();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#ledger_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").hide();

        $("#year").show();
        $("#date").show();
        $("#exchange").show();
        $("#sort").show();
        $("#segment").hide();
        $("#plAll").hide();

        $("#form-lbl-exchange").removeClass("select-disabled").css("opacity", "1");
        $("#exchangeType").removeClass("select-disabled").selectpicker();
        $('#exchange .filter-option-inner-inner').css("color", "#1d1e20");
        $('#exchangeType option[value="nsecm"]').prop('selected', true);
        $('#exchangeType').selectpicker('refresh');

        $("#form-lbl-year").removeClass("select-disabled").css("opacity", "1");
        $("#yearType").removeClass("select-disabled").selectpicker();
        $('#year .filter-option-inner-inner').css("color", "#1d1e20");
        $('#yearType option[value="y2021"]').prop('selected', true);
        $('#yearType').selectpicker('refresh');

        $("#form-lbl-date").removeClass("select-disabled").css("opacity", "1");
        $("#dateType").css("color", "#1d1e20");
        document.getElementById("dateType").value = "01 Feb 2020-28 Feb 2021";

        $("#form-lbl-sort").removeClass("select-disabled").css("opacity", "1");
        $("#sortType").removeClass("select-disabled").selectpicker();
        $('#sort .filter-option-inner-inner').css("color", "#1d1e20");
        $('#sortType option[value="scrip"]').prop('selected', true);
        $('#sortType').selectpicker('refresh');


        // var element_position = $('.trade-table-wrapper').offset().top
        // console.log("top", element_position);



      } else if ($('#reportType').val() == 'pl') {
        //$('#pl_summary_equity_report').show();
        $('#pl_summary_equity_report').siblings().removeClass('visibleContent');
        $('#pl_summary_equity_report').addClass('visibleContent').show();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").hide();

        $("#year").show();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").show();

        $("#form-lbl-plAll").removeClass("select-disabled").css("opacity", "1");
        $("#productType").removeClass("select-disabled").selectpicker();
        $('#plAll .filter-option-inner-inner').css("color", "#1d1e20");
        $('#productType option[value="equity"]').prop('selected', true);
        $('#productType').selectpicker('refresh');

        $("#form-lbl-year").removeClass("select-disabled").css("opacity", "1");
        $("#yearType").removeClass("select-disabled").selectpicker();
        $('#year .filter-option-inner-inner').css("color", "#1d1e20");
        $('#yearType option[value="y2021"]').prop('selected', true);
        $('#yearType').selectpicker('refresh');

      } else if ($('#reportType').val() == 'contract') {
        //$('#contract_notes_report').show();
        $('#contract_notes_report').siblings().removeClass('visibleContent');
        $('#contract_notes_report').addClass('visibleContent').show();
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $("#view-report").hide();
        $("#no-report").hide();

        $("#year").show();
        $("#date").show();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();

        $("#form-lbl-year").removeClass("select-disabled").css("opacity", "1");
        $("#yearType").removeClass("select-disabled").selectpicker();
        $('#year .filter-option-inner-inner').css("color", "#1d1e20");
        $('#yearType option[value="y2021"]').prop('selected', true);
        console.log("showselected", $(".selyear").val());
        $('#yearType').selectpicker('refresh');

        $("#form-lbl-date").removeClass("select-disabled").css("opacity", "1");
        $("#dateType").css("color", "#1d1e20");
        document.getElementById("dateType").value = "01 Feb 2020-28 Feb 2021";

      } else if ($('#reportType').val() == 'payout') {
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").show();

        $("#year").hide();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#reportType').val() == 'client') {
        $('#ledger_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();
        $('#contract_notes_report').hide();
        $("#view-report").hide();
        $("#no-report").show();

        $("#year").hide();
        $("#date").hide();
        $("#segment").hide();
        $("#exchange").hide();
        $("#sort").hide();
        $("#plAll").hide();
      }
      //   var element_position = $('.trade-table-wrapper').offset().top
      //  console.log("top", element_position)
      // var element_position = $('.table-wrapper').offset().top  ;
      // //var element_position = $('.table-wrapper').offset().top   ;
      // console.log("pos", element_position);
      // setTimeout(() => {

      // var headerHgt = $('.header').outerHeight();
      // var tabHgt = $('#tab-links').height() + 1;
      // console.log(headerHgt);
      // console.log(tabHgt);
      // var element_position = $('.table-wrapper').offset().top - headerHgt - tabHgt;
      // console.log("table-Pos:", element_position);

      // $(".reports-section .tab-content").mCustomScrollbar({
      //   alwaysShowScrollbar: 0,
      //   callbacks: {
      //     whileScrolling: function () {
      //       myCustomFn(this);
      //     },
      //     onInit:function(){
      //       myCustomFn(this);
      //     }
      //   }
      // });
      // myCustomFn(this);

      // }, 1000);
      // $(".reports-section .tab-content").mCustomScrollbar({
      //   alwaysShowScrollbar: 0,
      //   callbacks: {
      //     whileScrolling: function () {
      //       myCustomFn(this);
      //     },
      //     onInit: function () {
      //       myCustomFn(this);
      //     }
      //   }
      // });

    });

    $('#sortType').change(function () {
      if ($('#sortType').val() == 'scrip') {
        $('#trade_history_scrip_report').show();
        $('#trade_history_settlement_report').hide();

      } else {
        $('#trade_history_settlement_report').show();
        $('#trade_history_scrip_report').hide();
      }
    });

    $('#exchangeType').change(function () {
      if ($('#exchangeType').val() == 'nsecm') {
        $('#trade_history_scrip_report').show();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();

        $("#sort").show();

      } else if ($('#exchangeType').val() == 'nsefo') {
        $('#trade_history_exchange_NSEFO_report').show();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();

        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#exchangeType').val() == 'nsecurfo') {
        $('#trade_history_exchange_NSECURFO_report').show();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_exchange_MCX_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();

        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#exchangeType').val() == 'mcx') {
        $('#trade_history_exchange_MCX_report').show();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_NCDEX_report').hide();

        $("#sort").hide();
        $("#plAll").hide();

      } else if ($('#exchangeType').val() == 'ncdex') {
        $('#trade_history_exchange_NCDEX_report').show();
        $('#trade_history_exchange_NSECURFO_report').hide();
        $('#trade_history_exchange_NSEFO_report').hide();
        $('#trade_history_scrip_report').hide();
        $('#trade_history_settlement_report').hide();
        $('#trade_history_exchange_MCX_report').hide();

        $("#sort").hide();
        $("#plAll").hide();
      }
    });

    $('#productType').change(function () {
      if ($('#productType').val() == 'equity') {
        $('#pl_summary_equity_report').show();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();

      } else if ($('#productType').val() == 'fo') {
        $('#pl_summary_fo_report').show();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();

      } else if ($('#productType').val() == 'currency') {
        $('#pl_summary_currency_report').show();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_fo_report').hide();
        $('#pl_summary_all_report').hide();
        $('#pl_summary_all_tab_report').hide();

      } else if ($('#productType').val() == 'all') {
        $('#pl_summary_all_report').show();
        $('#pl_summary_all_tab_report').show();
        $('#pl_summary_equity_report').hide();
        $('#pl_summary_currency_report').hide();
        $('#pl_summary_fo_report').hide();

      }
    });

    // https://www.jqueryscript.net/demo/Multi-language-jQuery-Date-Range-Picker-Plugin/
    $('.daterangepicker-field').dateRangePicker({
     // startOfWeek: 'monday',
      separator: ' - ',
      format: 'DD MMM YYYY',
      autoClose: true,
      time: {
        enabled: false
      },
      monthSelect: true,
      yearSelect: true,
      container: '.datepicker-wrap',
    });

    // $("#year").click(function () {
    //   $("#form-lbl-year").removeClass("select-disabled");
    //   $("#yearType").removeClass("select-disabled").selectpicker();
    // })



    $("#report").click(function () {
      $("#form-lbl-report").removeClass("select-disabled").css("opacity", "1");
      $("#reportType").removeClass("select-disabled").selectpicker();
      $('#report .filter-option-inner-inner').css("color", "#1d1e20");
    })

    // $("#year").click(function () {
    //   $("#form-lbl-year").removeClass("select-disabled").css("opacity", "1");
    //   $("#yearType").removeClass("select-disabled").selectpicker();
    //   $('#year .filter-option-inner-inner').css("color", "#1d1e20");
    // })

    // $("#segment").click(function () {
    //   $("#form-lbl-segment").removeClass("select-disabled").css("opacity", "1");
    //   $("#segmentType").removeClass("select-disabled").selectpicker();
    //   $('#segment .filter-option-inner-inner').css("color", "#1d1e20");
    // })

    // $("#sort").click(function () {
    //   $("#form-lbl-sort").removeClass("select-disabled").css("opacity", "1");
    //   $("#sortType").removeClass("select-disabled").selectpicker();
    //   $('#sort .filter-option-inner-inner').css("color", "#1d1e20");
    // })

    // $("#exchange").click(function () {
    //   $("#form-lbl-exchange").removeClass("select-disabled").css("opacity", "1");
    //   $("#exchangeType").removeClass("select-disabled").selectpicker();
    //   $('#exchange .filter-option-inner-inner').css("color", "#1d1e20");
    // })

    // $("#plAll").click(function () {
    //   $("#form-lbl-plAll").removeClass("select-disabled").css("opacity", "1");
    //   $("#productType").removeClass("select-disabled").selectpicker();
    //   $('#plAll .filter-option-inner-inner').css("color", "#1d1e20");
    // })

    // $("#date").click(function () {
    //   $("#form-lbl-date").removeClass("select-disabled").css("opacity", "1");
    //   $("#dateType").css("color", "#1d1e20");
    // })

    $("#submit").click(function () {
      $("#submitType").removeClass("select-disabled");
    })

    $("#pdf").click(function () {
      $("#pdfType").removeClass("custom-pdf-disabled");
    })

    $("#excel").click(function () {
      $("#excelType").removeClass("custom-excel-disabled");
    })
  },
  methods: {}
}