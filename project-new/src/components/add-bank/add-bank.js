

import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import FloatLabel from 'vue-float-label/components/FloatLabel'
import VueAutosearch from "vue-autosearch";
import "vue-autosearch/dist/VueAutosearch.css";
import UploadCheque from '../../components/upload-cheque/upload-cheque.vue';

export default {
  name: 'add-bank',
  components: {mCustomScrollBar, FloatLabel, VueAutosearch, UploadCheque},
  props: [],
  data () {
    return {
      ifseLbl:"false",
      selectedOption: '',
      selectedOption1: '',
      searchTimeout: null,
      selectBankList:false,
      searchIFSCCont:false,
      addBankModal: false,
      // disabled:true,
      ifscCode: [
        { id: 1, name: "HDFC00000001" },
        { id: 2, name: "HDFC00000002" },
        { id: 3, name: "HDFC00000003" },
        { id: 4, name: "HDFC00000004" },
        { id: 5, name: "HDFC00000005" },
        { id: 6, name: "HDFC00000006" },
        { id: 7, name: "HDFC00000007" },
        { id: 8, name: "HDFC00000008" },
      ],
      branchNames: [
        { id: 1, name: "100 Feet Road-Indira Nagar, Bangalore Urban" },
        { id: 2, name: "120 Feet Road-Jalandar, Jalandar" },
        { id: 3, name: "1450 East Jyoti Nagar, New Delhi" },
        { id: 4, name: "100 Feet Road-Indira Nagar, Bangalore Urban" },
        { id: 5, name: "120 Feet Road-Jalandar, Jalandar" },
        { id: 6, name: "1450 East Jyoti Nagar, New Delhi" },
        { id: 7, name: "100 Feet Road-Indira Nagar, Bangalore Urban" },
        { id: 8, name: "120 Feet Road-Jalandar, Jalandar" },
      ],
    }
  },
  computed: {

  },
  mounted () {
    $(".autosearch__result, .searchData").mCustomScrollbar({
      alwaysShowScrollbar:0,
   });
   $('.ifsc-form-group .autosearch__input').keyup(function() {
    if ($(this).val() != '') { // check if value changed
       $(this).parents('.ifsc-form-group').find('.form-lbl').addClass('visible')
    }
    else{
      $(this).parents('.ifsc-form-group').find('.form-lbl').removeClass('visible')
    }
  });
  $(document).on('hidden.bs.modal', function () {
    if ($('.modal:visible').length) {
      $('body').addClass('modal-open');
    }
  });
  $(".verifyAccountModal").modal("show");
  },
  methods: {
    selectBank(){
      var val = this.bankName;
      console.log(val);
      if(val !== ''){
        this.selectBankList = true
      }
      else{
        this.selectBankList = false
      }
    },
    showbankList(){

    },
    ifscSearchFunc(){
      this.searchIFSCCont = true;
      this.selectedOption = false
    },
    ifscSearchFuncClose(){
      this.searchIFSCCont = false;
    }
  }
}


