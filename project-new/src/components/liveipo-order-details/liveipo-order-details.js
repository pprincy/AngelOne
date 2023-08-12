import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
//import  Buyedgecases from '../buy-edge-cases/buy-edge-cases.vue';
import 'bootstrap-select/dist/js/bootstrap-select.min.js'
export default {
  name: 'liveipo-order-details',
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
      intraMarketPrice:true,
      transactionFailModal: false
    }
  },
  computed: {

  },
  mounted () {
    
    $(".termsConditionsModal .modal-body ").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      callbacks:{
        onScrollStart:function(){
         $('.termsConditionsModal').addClass('withShadow');
        },
        onTotalScrollBack:function(){
          $('.termsConditionsModal').removeClass('withShadow');
        }
    }
     
    });
    $(".main-content-wrapper ").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 200,
     
    });

    $(".wraporder").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 50,
      autoScrollOnFocus: true,
     
    });

     $('select').selectpicker({
      dropupAuto: false
   });
   $(".form-group.upi-select .dropdown.bootstrap-select.form-control .dropdown-menu ").mCustomScrollbar({
    alwaysShowScrollbar: 0,
  });

   $('[data-toggle="tooltip-popup"]').mouseover(function(){
    var target = $(this).attr("data-target");
    $(target).show();
    $(this).parents('.OrderSideBar').addClass('visiblecont');
  });

  $('[data-toggle="tooltip-popup"]').mouseleave(function(){
    var target = $(this).attr("data-target");
    $(target).show();
    $('.OrderSideBar').removeClass('visiblecont');
  });

  // $(document).mouseup(function(e) 
  //   {
  //       var popup = $(".popoverContent");
  //       if (!popup.is(e.target) && popup.has(e.target).length === 0) 
  //       {
  //           popup.hide();
  //           $('.OrderSideBar').removeClass('visiblecont');
  //       }
  //   });

    

   $('.buyBtn').click(function(){
    $(this).parents('body').find('.OrderSideBar').show();
    $(this).parents('body').find('.main-content').addClass('leftPosition');
    $(this).parents('body').find('.watchlist-side-section').addClass('withShadow');
    // $(this).parents('body').find('.side-section').addClass('hideSection');
    $(this).parents('body').find('.side-section .btn-sideToggle').addClass('enableSliding');
   });

   $('.btnClose').click(function(){
    // alert("123");
    $(this).parents('.OrderSideBar').removeClass('minimized');
    $(this).parents('body').find('.main-content').removeClass('leftPosition');
    $(this).parents('body').find('.side-section').removeClass('slide');
    $(this).parents('body').find('.side-section .btn-sideToggle').removeClass('enableSliding');
    $(this).parents('.OrderSideBar').hide();
    $(this).parents('body').find('.watchlist-side-section').removeClass('withShadow');
  })

  
     //alert("123");
    
    $('.side-section').removeClass('slide');
    $('.side-section .btn-sideToggle').removeClass('enableSliding');
 


   
  },
  methods: {
    
  },
  beforeDestroy () {
    
  }
}


