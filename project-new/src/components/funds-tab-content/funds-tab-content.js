import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
  name: 'funds-tab-content',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      fundsDetailBanner: true,
      expandTab: true,
      shrinkTab: false,
      Cancelrequest: false,
      topSec: true,
      expandShrink: false,
      //ifseLbl:"false",
      addFunds: [{
          bankLogo: require('../../assets/images/upi.png'),
          accNo: 2435,
          bankName: "Kotak Mahindra Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },
        {
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Success"
        },
        {
          bankLogo: require('../../assets/images/hdfc.png'),
          accNo: 2435,
          bankName: "HDFC Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Failed"
        },
        {
          bankLogo: "",
          accNo: 2435,
          bankName: "Ahmednagar Merchants Co Operative Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Failed"
        },
        {
          bankLogo: require('../../assets/images/upi.png'),
          accNo: 2435,
          bankName: "Kotak Mahindra Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },
        {
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Success"
        },
        {
          bankLogo: require('../../assets/images/hdfc.png'),
          accNo: 2435,
          bankName: "HDFC Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Failed"
        },
        {
          bankLogo: "",
          accNo: 2435,
          bankName: "Ahmednagar Merchants Co Operative Bank",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Failed"
        },
      ],
      withdrowFunds: [{
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },
        {
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },
        {
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },
        {
          bankLogo: require('../../assets/images/sbi.png'),
          accNo: 2435,
          bankName: "State Bank of India",
          date: "06 Jan ‘20",
          time: "6:43 pm",
          amt: "10,10,00,000",
          status: "Pending"
        },

      ]
    }
  },
  computed: {

  },
  mounted () {

    $(".request-wrap .btm-sec").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      axis: "x",
    });


  },
  methods: {
    cancelFunc() {
      this.Cancelrequest = true,
        this.topSec = false
    },

    cancelNoFunc() {
      this.Cancelrequest = false,
        this.topSec = true
    },

    expandTabFn() {
      $(".stickyTabWrap").addClass("stickElements");
    },
    shrinkTabFn() {
      $(".stickyTabWrap").removeClass("stickElements");
    }
  }
}


