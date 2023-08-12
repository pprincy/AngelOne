import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
import AccountAddBankModal from '../../components/account-add-bank-modal/account-add-bank-modal.vue';
import hdfc from '../../assets/images/logo-hdfc.png';
import statebank from '../../assets/images/logo-statebank.png';
import axis from '../../assets/images/logo-axis.png';
import kotak from '../../assets/images/logo-kotak.png';
import yb from '../../assets/images/logo-yb.png';
import Addbank from '../../components/add-bank/add-bank.vue';

export default {
  name: 'bankdetails',
  components: {
    mCustomScrollBar,
    AccountAddBankModal,
    Addbank
  },
  props: [],
  data() {
    return {
      selected: undefined,
      disableButton: true,
      bankDetails: [
        {
          id: 1,
          logo: hdfc,
          bankName: 'HDFC Bank',
          accNo: '2435',
          isChecked: true
        },
        {
          id: 2,
          logo: statebank,
          bankName: 'State Bank of India',
          accNo: '3467'
        },
        {
          id: 3,
          logo: axis,
          bankName: 'Axis Bank',
          accNo: '4578'
        },
        {
          id: 4,
          logo: kotak,
          bankName: 'Kotak Mahindra Bank',
          accNo: '0125'
        },
        {
          id: 5,
          logo: yb,
          bankName: 'Yes Bank',
          accNo: '5624'
        },
        {
          id: 6,
          logo: kotak,
          bankName: 'Kotak Mahindra Bank',
          accNo: '0125'
        },
        {
          id: 7,
          logo: yb,
          bankName: 'Yes Bank',
          accNo: '5624'
        },
      ]
    }
  },
  computed: {},
  mounted() {
    $(".side-quick-links").mCustomScrollbar();

    setTimeout(function () {
      const elem = document.getElementById('watchlist');
      elem.click();
      elem.classList.add("active");
    }, 100);
    if (this.bankDetails.length > 5) {
      this.disableButton = !this.disableButton;
    }
  },
  methods: {
    showDetailList(){
      document.getElementById("bank-list-details").style.height = "auto";
      document.getElementById("view-more-btn").style.display = "none";
    }
  }
}