import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
import Addbank from '../add-bank/add-bank.vue';

export default {
  name: 'add-funds',
  components: { Addbank, mCustomScrollBar },
  props: [],
  data () {
    return {
      upiSlot: false,
      isUpiForm: false,
      upiIDError: true,
      upiIDLoad: true,
      btnDisable: false,
      limitReachedModal: false,
      ConfirmationModal: false,
      transactionSuccessModal: false,
      transactionPendingModal: false,
      transactionFailModal: false,
      verifyAccountModal: true,
      requestSuccessModal: false,
      countDown:10,
      countDownSec:600
    }
  },
  computed: {

  },
  mounted () {
    $(".bank-dropdown").mCustomScrollbar({
      autoHideScrollbar: true
    });

    $(".main-content-wrapper").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 200,
    });

    $("#limitReachedModal").modal("hide");
    $("#ConfirmationModal").modal("hide");
    $("#transactionSuccessModal").modal("hide");
    $("#transactionPendingModal").modal("hide");
    $("#transactionFailModal").modal("hide");
    $("#uploadChequeModal").modal("hide");    
  },
  methods: {
    countDownTimer() {
      // this.countDown = this.countDown * 10;
      //console.log(this.countDownSec);
      
      if(this.countDownSec > 0) {
          setTimeout(() => {
              this.countDownSec -= 1
              this.countDownTimer()
              //console.log(this.countDownSec);
              this.countDown = (this.countDownSec / 60).toFixed(2) ;
              
          }, 1000)
      }
      
      // if(this.countDown == 0){
      //   this.countdownVisible = false,
      //   this.otpLinkVisible = true
      // }
  },
  awaitingPopup(){
    console.log("adf")
   this.countDownTimer();
  }
  

  }
}


