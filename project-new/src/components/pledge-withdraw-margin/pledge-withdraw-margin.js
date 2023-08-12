import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'pledge-withdraw',
  components: {
    mCustomScrollBar
  },
  props: [],
  data() {
    return {
      pledgeWithdrawMarginModal: true,
      pledgeWithdrawMargin: [{
          id: 1,
          stock: 'HEROMOTOCORP',
          stocksub: 'Hero Motors India',
          pledgeQty: '1000',
          qty: '100',
          accept: true
        },
        {
          id: 2,
          stock: 'SBI',
          stocksub: 'State Bank of India',
          pledgeQty: '500',
          qty: '50',
          accept: false
        },
        {
          id: 3,
          stock: 'HEROMOTOCORP',
          stocksub: 'Hero Motor Corp',
          pledgeQty: '100',
          qty: '20',
          accept: false
        },
        {
          id: 4,
          stock: 'TATASTEEL',
          stocksub: 'TATA Steel Ltd',
          pledgeQty: '500',
          qty: '60',
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
    $("#pledgeWithdrawMarginModal").modal("hide");

  },
  methods: {

  }
}