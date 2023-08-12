import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'add-funds',
  components: { mCustomScrollBar },
  props: [],
  data () {
    return {
      upiSlot: false,
      isUpiForm: false,
      upiIDError: false,
      upiIDLoad: false,
      btnDisable: true,
      limitReachedModal: false,
      ConfirmationModal: false,
      withdrawInitiatedModal: false,
      transactionPendingModal: false,
      transactionFailModal: false
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
  },
  methods: {
    
  }
}


