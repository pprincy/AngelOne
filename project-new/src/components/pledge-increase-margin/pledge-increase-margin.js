import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'pledge-increase',
  components: {
    mCustomScrollBar
  },
  props: [],
  data() {
    return {
      otpVerificationModal: true,
      countDown: 30,
      inputOtp: "",
      inputMob: "",
      correctOtp: 55555,
      otperrmsg: false,
      errorClass: false,
      countdownVisible: true,
      otpLinkVisible: false,
      pledgeIncreaseMargin: [{
          id: 1,
          stock: 'HEROMOTOCORP',
          stocksub: 'Hero Motors India',
          pledgeQty: '1000',
          qty: '100',
          amount: '10,00,000',
          accept: true
        },
        {
          id: 2,
          stock: 'SBI',
          stocksub: 'State Bank of India',
          pledgeQty: '500',
          qty: '50',
          amount: '5,00,000',
          accept: false
        },
        {
          id: 3,
          stock: 'HEROMOTOCORP',
          stocksub: 'Hero Motor Corp',
          pledgeQty: '100',
          qty: '20',
          amount: '2,00,000',
          accept: false
        },
        {
          id: 4,
          stock: 'TATASTEEL',
          stocksub: 'TATA Steel Ltd',
          pledgeQty: '500',
          qty: '60',
          amount: '6,00,000',
          accept: false
        },
      ],
    }
  },
  computed: {

  },
  mounted() {
    function myCustomFn(el) {
      var value = Math.abs(el.mcs.top);
      // console.log("val3", value)
      var element_position = $('.table-wrapper').offset().top;
      // console.log("pos1", element_position)
      if (value > element_position) {
        $('.stickyTabWrap').addClass('stickyElement');

      } else {
        $('.stickyTabWrap').removeClass('stickyElement');
      }

    }
    $(".main-content").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks: {
        whileScrolling: function () {
          myCustomFn(this);
        },
        onInit: function () {
          myCustomFn(this);
        }
      }
    });

    // $(".main-content").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   mouseWheel: {
    //     scrollAmount: 100
    //   },
    //   scrollInertia: 30

    // });
    // $(".scrollableContent").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    // });
    $("#otpVerificationModal").modal("hide");
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }

      if (this.countDown == 0) {
        this.countdownVisible = false
        this.otpLinkVisible = true
      }
    },
    sendOtp() {
      this.countDownTimer();
    },
    checkOtp() {
      if (this.inputOtp != this.correctOtp) {
        console.log("wrong")
        this.otperrmsg = true,
          this.errorClass = true,
          this.countdownVisible = true
      } else {
        console.log("right")
        this.otperrmsg = false
        this.errorClass = false
        this.countdownVisible = false
      }
    },
  }
}