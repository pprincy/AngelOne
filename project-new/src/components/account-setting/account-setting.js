import $ from 'jquery';
import FloatLabel from 'vue-float-label/components/FloatLabel'

export default {
  name: 'account-setting',
  components: { FloatLabel },
  props: [],
  data () {
    return {
      btnDisable: true,
      otpError: false,
      otpValue: '',
      pindigit1: '',
      pindigit2: '',
      pindigit3: '',
      pindigit4: '',
      confirmPindigit1: '',
      confirmPindigit2: '',
      confirmPindigit3: '',
      confirmPindigit4: '',
      pinMatchErr: false,
      diffconfirmPindigit: false,
      countDown: 30,
      countdownVisible: false,
      resendOtpLink: false,
      otpCorrect: false,
    }
  },
  computed: {

  },
  mounted () {

    $('.digit-group').find('input').each(function() {
      $(this).attr('maxlength', 1);
      $(this).on('keyup', function(e) {
        var parent = $($(this).parent());
       
        if(e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find('input#' + $(this).data('previous'));
          
          if(prev.length) {
            $(prev).select();
           
          }
        } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
          var next = parent.find('input#' + $(this).data('next'));
          
          if(next.length) {
            $(next).select();
           
          } else {
            if(parent.data('autosubmit')) {
              parent.submit();
              $(prev).addClass('active')
            }
          }
        }
      });
    });

  },
  methods: {

    countDownTimer() {
      if(this.countDown > 0) {
          setTimeout(() => {
              this.countDown -= 1
              this.countDownTimer()
          }, 1000);
      }

      if(this.countDown == 0){
        this.countdownVisible = false,
        this.otpLinkVisible = true;
        this.resendOtpLink = true;
      }
    },

    pinMatchOrNot(){
      if(this.pindigit1 != this.confirmPindigit1 || this.pindigit2 != this.confirmPindigit2 || this.pindigit3 != this.confirmPindigit3 || this.pindigit4 != this.confirmPindigit4){
        this.pinMatchErr = true,
        this.diffconfirmPindigit = true
      }
      else{
       this.pinMatchErr = false,
       this.diffconfirmPindigit = false
      }
    },

    verifyForm(){
      if(this.otpValue != '11111'){
        this.countdownVisible = true;
        this.otpError = true;
        this.countDownTimer();
      }else{
        this.countdownVisible = false;
        this.otpError = false;
      }
    },

    resendOtp(){
      this.resendOtpLink = false;
      this.countdownVisible = true;
      this.countDownTimer();
    },

    verifyOtp(){
      if(this.otpValue != '1111'){
        this.otpError = true;
        this.countdownVisible = true;
        this.countDownTimer();
        this.otpCorrect = false;
      }else{
        this.otpError = false;
        this.countdownVisible = false;
        this.otpCorrect = true;
      }
    },

  }
}


