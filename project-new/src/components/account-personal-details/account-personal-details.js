import FloatLabel from 'vue-float-label/components/FloatLabel'

export default {
  name: 'account-personal-details',
  components:{FloatLabel},
  props: [],
  data () {
    return {
      selected: undefined,
      personalDetail: {
        mno: '7878676545',
        email: 'michellemakenzie@gmail.com',
        panNo: 'AVUPJ2345G',
        location: 'No. 576/B Service Road, 100 feet Ring Road, Tafe Access Building - 560068'
      },
      changeNumberModal:false,
      countDown: 30,
      inputOtp:"",
      inputMob:"",
      correctOtp:55555,
      otperrmsg:false,
      errorClass:false,
      countdownVisible:true,
      otpLinkVisible:false,
      otpMatch:false,

      countDownNew: 30,
      inputOtpNew:"",
      inputEmail:"",
      correctOtpNew:55555,
      otperrmsgNew:false,
      countdownVisibleNew:true,
      otpLinkVisibleNew:false,
      otpMatchNew:false,
      updatedNumber:false,
      updatedEmail:false,
      newNumber:true,
      optCont:false,
      showOtpBtn:true,
      submitBtn:false,
      newEmail:true,
      optContNew:false,
      showOtpBtnNew:true,
      submitBtnNew:false,
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    countDownTimer() {
      if(this.countDown > 0) {
          setTimeout(() => {
              this.countDown -= 1
              this.countDownTimer()
          }, 1000)
      }

      if(this.countDown == 0){
        this.countdownVisible = false
        this.otpLinkVisible = true
      }
  },
  countDownTimerNew() {
    if(this.countDownNew > 0) {
        setTimeout(() => {
            this.countDownNew -= 1
            this.countDownTimerNew()
        }, 1000)
    }

    if(this.countDownNew == 0){
      this.countdownVisibleNew = false,
      this.otpLinkVisibleNew = true
    }
},
    sendOtp(){
      // this.countDownTimer();
      console.log("abc")
      setTimeout(() => {
        this.$refs.inputMob.focus();
      }, 1000)
    },
    sendOtpNew(){
    //  this.countDownTimerNew();
    },
    checkOtp(){
      //console.log(this.inputOtp)
      //console.log(this.correctOtp)
      if(this.inputOtp != this.correctOtp){
        console.log("wrong")
        this.otperrmsg = true,
        this.errorClass = true,
        this.otpMatch = false
        this.countdownVisible = true
        //console.log( this.errorClass)
      }
      else{
        console.log("right")
        this.otperrmsg = false
        this.errorClass = false
        this.countdownVisible = false
        this.otpMatch = true,
        this.otpLinkVisible = false
        // this.createPasswordVisible = true
        // this.otpVerify = false
      }
  },
  checkOtpNew(){
    //console.log(this.inputOtp)
    //console.log(this.correctOtp)
    if(this.inputOtpNew != this.correctOtpNew){
      console.log("wrong")
      this.otperrmsgNew = true,
      this.errorClass = true,
      this.otpMatchNew = false
      this.countdownVisibleNew = true
      //console.log( this.errorClass)
    }
    else{
      console.log("right")
      this.otperrmsgNew = false
      this.errorClass = false
      this.countdownVisibleNew = false
      this.otpMatchNew = true
      // this.createPasswordVisible = true
      // this.otpVerify = false
    }
},
updateNumber(){ 
  this.updatedNumber = true;
},
updateEmail(){ 
  this.updatedEmail = true;
},
showOtpCont(){
  this.newNumber = false,
  this.optCont = true,
  this.showOtpBtn = false,
  this.submitBtn = true,
  this.countDownTimer()
},
showOtpContNew(){
  this.newEmail = false,
  this.optContNew = true,
  this.showOtpBtnNew = false,
  this.submitBtnNew = true,
  this.countDownTimerNew()
}
  }
}


