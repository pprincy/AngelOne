import $ from 'jquery';
import slickCarousal from 'slick-carousel';
import FloatLabel from 'vue-float-label/components/FloatLabel'
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
import 'bootstrap-select/dist/js/bootstrap-select.min.js'
//import VueOTPField from '@/components/VueOTPField'


export default {
  name: 'login-sec',
  components: {
    slickCarousal,
    FloatLabel,
    mCustomScrollBar
  },
  props: [],
  data() {
    return {
      langInfo: false,
      countDown: 30,
      mobNo: true,
      otpVerify: false,
      regitype1:false,
      regitype2:true,
      useridVerify:false,
      inputOtp: '',
      correctOtp: 55555,
      countdownVisible: true,
      otpLinkVisible: false,
      otperrmsg: false,
      errorClass: false,
      inputMob: '',
      inputUser:'',
      inputpass: '',
      inputconfpass: '',
      createPasswordVisible: false,
      passwordConfirmation:false,
      passwordConfirmVisible:false,
      passAlphaNumeric: false,
      matchPasswordErr: false,
      showPassVisible: false,
      passwordFieldType: 'password',
      chooseAccVisible: false,
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit11: '',
      digit21: '',
      digit31: '',
      digit41: '',
      setPinVisible: false,
      pinMatchErr: false,
      diffDigit: false,
      returnUserDigit1: '',
      returnUserDigit2: '',
      returnUserDigit3: '',
      returnUserDigit4: '',
      CorrectPin: 5555,
      emailUserid:'',
      emailUseridPassword:'',
      validUserid:'',
      validMobPan:'',
      successUser:true,
      returnUserPinErr: false,
      returnUserPinErr1: false,
      returnUserPinErr2: false,
      returnUserPinErr3: false,
      returnUserLoginVisible: false,
      forgetPinVisible: false,
      inputMob1: '',
      inputOtp1: '',
      countDownNew: 30,
      countdownVisibleNew: '',
      otpLinkVisibleNew: '',
      otperrmsgNew: false,
      correctOtpNew: 44444,
      digitNew1: '',
      digitNew2: '',
      digitNew3: '',
      digitNew4: '',
      digitNew11: '',
      digitNew21: '',
      digitNew31: '',
      digitNew41: '',
      setNewPinVisible: false,
      pinMatchErrNew: false,
      diffDigitNew: false,
      pinConfirmation: false,
      passwordFieldType1: 'password',
      passwordFieldType2: 'password',
      passwordFieldType3: 'password',
      hidePassword: false,
      hidePassword2: false,
      hidePassword3:false,
      accountList: [{
          id: 1,
          figpath: "",
          figcap: "AS",
          figbg: "blue-bg",
          name: "Anup Sharma",
          subttl: "AB00123",
          checked: true,
        },
        {
          id: 2,
          figpath: "",
          figcap: "DS",
          figbg: "red-bg",
          name: "Dilip Sharma",
          subttl: "AB00123",
          checked: false,
        },
        {
          id: 3,
          figpath: require('../../assets/images/user-acc-pic1.jpg'),
          figcap: "PS",
          figbg: "",
          name: "Poonam Sharma",
          subttl: "AB00123",
          checked: false,
        },
        {
          id: 4,
          figpath: require('../../assets/images/user-acc-pic1.jpg'),
          figcap: "PS",
          figbg: "",
          name: "Poonam Sharma",
          subttl: "AB00123",
          checked: false,
        },
        {
          figpath: require('../../assets/images/user-acc-pic1.jpg'),
          figcap: "PS",
          figbg: "",
          name: "Poonam Sharma",
          subttl: "AB00123",
          checked: false,
        },
      ]
    }
  },
  computed: {

  },

  mounted() {
    $('.single-item-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $(".account-list-wrap").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });

    $('.digit-group').find('input').each(function () {
      $(this).attr('maxlength', 1);
      $(this).on('keyup', function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
          var prev = parent.find('input#' + $(this).data('previous'));

          if (prev.length) {
            $(prev).select();

          }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
          var next = parent.find('input#' + $(this).data('next'));

          if (next.length) {
            $(next).select();

          } else {
            if (parent.data('autosubmit')) {
              parent.submit();
              $(prev).addClass('active')
            }
          }
        }
      });
    });

    $('select').selectpicker();

    if (navigator.userAgent.indexOf('Mac') > 0) {
      $('body').addClass('mac-os');
    }

    $('.otp-link').click(function () {
      $(this).parent('.vfl-has-label').find('.vfl-label').removeClass('vfl-label-on-input');
      $(this).parent('.vfl-has-label').find('.vfl-label').removeClass('vfl-label-on-focus');
    });

    //document.getElementById('digit-1').select();
    //this.$refs.digit1.$el.focus();


  },

  methods: {
    regiMobileno(){
      this.regitype1 = true;
      this.regitype2 = false;
    },
    regiUsedID(){
      this.regitype1 = false;
      this.regitype2 = true;
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }

      if (this.countDown == 0) {
        this.countdownVisible = false,
          this.otpLinkVisible = true
      }
    },
    countDownTimerNew() {
      if (this.countDownNew > 0) {
        setTimeout(() => {
          this.countDownNew -= 1
          this.countDownTimerNew()
        }, 1000)
      }

      if (this.countDownNew == 0) {
        this.countdownVisibleNew = false,
          this.otpLinkVisibleNew = true
      }
    },
    sendOtp() {
      this.mobNo = false;
      this.otpVerify = true;
      this.countDownTimer();
    },
    verifyuser(){
      this.mobNo = false;
      this.regitype2 = false;
      this.useridVerify = true;
    },
    forgotPass(){
      
        this.passwordConfirmation = true
        this.useridVerify = false
        this.chooseAccVisible = false
      
    },
    passConfirm(){
      this.passwordConfirmation = false
      this.chooseAccVisible = false
      this.passwordConfirmVisible = true
    },
    checkOtp() {
      console.log(this.inputOtp)
      console.log(this.correctOtp)
      if (this.inputOtp != this.correctOtp) {
        this.otperrmsg = true,
          this.errorClass = true
        //console.log( this.errorClass)
      } else {
        this.otperrmsg = false
        this.errorClass = false
        this.createPasswordVisible = true
        this.passwordConfirmation = false
        this.otpVerify = false
      }
    },

    CheckPassword() {
      var paswd = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]/;

      if (this.inputpass.match(paswd)) {
        this.passAlphaNumeric = true
      } else(
        this.passAlphaNumeric = false
      )
    },
    passwordMatch() {

      if (this.inputpass != this.inputconfpass) {
        this.matchPasswordErr = true
      } else {
        this.matchPasswordErr = false
      }
    },

    viewpass() {

      this.showPassVisible = true
    },
    switchVisibility() {
      // console.log("entered")
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    chooseAcc() {
      this.createPasswordVisible = false,
        this.chooseAccVisible = true
    },
    setPinShow() {
      this.chooseAccVisible = false
      this.setPinVisible = true,
        //console.log( this.$refs.digit1)
        // this.$refs.digit1.focus()
        setTimeout(() => {
          this.$refs.digit1.focus();
        })

    },
    pinMatchOrNot() {
      //console.log("123");
      if (this.digit1 != this.digit11 || this.digit2 != this.digit21 || this.digit3 != this.digit31 || this.digit4 != this.digit41) {
        this.pinMatchErr = true,
          this.diffDigit = true
      } else {
        this.pinMatchErr = false,
          this.diffDigit = false
      }
    },
    checkuserLogin(){
      console.log(this.emailUserid);
      console.log(this.emailUseridPassword);
    },
    checkPin() {
      var enteredpin = this.returnUserDigit1 + this.returnUserDigit2 + this.returnUserDigit3 + this.returnUserDigit4;
      console.log(enteredpin)
      if (this.CorrectPin != enteredpin) {
        this.returnUserPinErr = true,
          this.diffDigit = true
      } else {
        this.returnUserPinErr = false
        this.diffDigit = false
      }
    },
    returnUserLoginWin() {
        this.setPinVisible = false,
        this.returnUserLoginVisible = true
    },
    forgetPin() {
      this.returnUserLoginVisible = false
      this.forgetPinVisible = true
    },
    sendOtpNew() {
      console.log("otpsend")
      this.countDownNew = 30;
      this.countdownVisibleNew = true

      this.countDownTimerNew();

    },
    checkOtpNew() {
      if (this.inputOtp1 != this.correctOtpNew) {
        this.otperrmsgNew = true
      } else {
        this.otperrmsgNew = false
        this.forgetPinVisible = false
        this.setNewPinVisible = true
      }

    },
    pinMatchOrNotNew() {
      //console.log("123");
      if (this.digitNew1 != this.digitNew11 || this.digitNew2 != this.digitNew21 || this.digitNew3 != this.digitNew31 || this.digitNew4 != this.digitNew41) {
        this.pinMatchErrNew = true,
          this.diffDigitNew = true
      } else {
        this.pinMatchErrNew = false,
          this.diffDigitNew = false
      }
    },
    pinConfirmFunc() {
      this.setNewPinVisible = false,
        this.pinConfirmation = true
    },
    contiueLogin() {
      this.pinConfirmation = false,
        this.returnUserLoginVisible = true
    },
    switchVisibility1() {
      console.log("fgdfg")
      this.passwordFieldType1 = this.passwordFieldType1 === "password" ? "text" : "password";
      this.hidePassword = !this.hidePassword
    },
    switchVisibility2() {
      console.log("fgdfg")
      this.passwordFieldType2 = this.passwordFieldType2 === "password" ? "text" : "password";
      this.hidePassword2 = !this.hidePassword2
    },
    viewpass1() {

      this.showPassVisible = true

    },
    switchVisibility3() {
      console.log("fgdfg")
      this.passwordFieldType3 = this.passwordFieldType3 === "password" ? "text" : "password";
      this.hidePassword3 = !this.hidePassword3
    },
    viewpass3() {
      this.showPassVisible = true
    },
  }


}