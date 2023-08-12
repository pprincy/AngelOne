import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
// import AutosizeInput from 'vue-autosize-input'

// import mitt from 'mitt'

// const emitter = mitt()
export default {
  name: 'buy-edge-cases',
  components: {
    mCustomScrollBar
  },
  props: [],
  data() {
    return {
      moreHorizontal: false,
      focused: false,
      priceEerrMessage: false,
      isOpen: true,
      bracketChecked: false,
      orderChecked: true,
      squreOrder: false,
      jumpPriceInput: false,
      jumpPriceBtn: true,
      insufficientFunds: false,
      tradeNotAvail: false,
      intraLimitPrice: false,
      intraMarketPrice: true,
      intraLimitPrice1: false,
      intraMarketPrice1: true,
      intraLimitPrice2: false,
      intraMarketPrice2: true,
      marketOrderType: '',
      intradayCont: true,
      marginCont: false,
      deliveryCont: false,
      amoErr: false,
      selectInvest: true,
      orderPlacedSuccss: false,
      squareOrderLink: true,
      discloseQuantiyErr: false,
      stopLoss: 2890,
      stopLossErr: false,
      dQuantity: 90,
      value: '',
      x: "",
      eDisAuthorizationModal: false,
      knowMore: false,
      orderPreview: false,
      completeEDisModal: false,
      authSuccessModal: false,
      authFailModal: false,
      pinGenerateFailModal: false,
      serverErrModal: false,
      pinVerifyFailModal: false,
      authPendingModal: false,
      completeEDisAuthModal: false,
      // market1:2880.87
    }
  },
  computed: {
  },
  mounted() {
    

      initDragElement();
      initResizeElement();
    
    
      function initDragElement() {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        var popups = document.getElementsByClassName("popup");
        var elmnt = null;
        var currentZIndex = 100; //TODO reset z index when a threshold is passed
      
        for (var i = 0; i < popups.length; i++) {
          var popup = popups[i];
          var header = getHeader(popup);
      
          popup.onmousedown = function() {
            this.style.zIndex = "" + ++currentZIndex;
          };
      
          if (header) {
            header.parentPopup = popup;
            header.onmousedown = dragMouseDown;
          }
        }
      
        function dragMouseDown(e) {
          elmnt = this.parentPopup;
          elmnt.style.zIndex = "" + ++currentZIndex;
      
          e = e || window.event;
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
      
      
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          if (!elmnt) {
            return;
          }
      
          e = e || window.event;
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
      
          //console.log(e.screenX, '=====>>>screenX')
          //console.log(e.screenY, '=====>>>screenY')
      
      
          // let ElementWidth = startWidth + e.clientX - startX;
          // let ElementHeight = startHeight + e.clientY - startY;
      
          // console.log(ElementWidth, '==>>ElementWidth')
          // console.log(ElementHeight, '==>>ElementHeight')
          // console.log(( window.screen.availWidth - 300), '==>>availWidth')
          
          //console.log(elmnt.offsetTop - pos2, '===top');
          //console.log(elmnt.offsetLeft - pos1, '===left');
      
      
          // set the element's new position:
          //console.log(window.screen.availHeight,'==availHeigh')
      
          let top = elmnt.offsetTop - pos2;
          //console.log(top,'===>>top')
          if( (top >0 ) && ( top < (window.screen.availHeight - 690))   ) {
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
          }
      
          let left = elmnt.offsetLeft - pos1;
          if(( left > 0 ) && ( left < (window.screen.availWidth - 380))){
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
          }
        }
      
        function closeDragElement() {
          /* stop moving when mouse button is released:*/
          document.onmouseup = null;
          document.onmousemove = null;
        }
      
        function getHeader(element) {
          var headerItems = element.getElementsByClassName("popup-header");
      
          if (headerItems.length === 1) {
            return headerItems[0];
          }
      
          return null;
        }
      }
      
      function initResizeElement() {
        var popups = document.getElementsByClassName("popup");
        var element = null;
        var startX, startY, startWidth, startHeight;
      
        for (var i = 0; i < popups.length; i++) {
          var p = popups[i];
      
          var right = document.createElement("div");
          right.className = "resizer-right";
          p.appendChild(right);
          right.addEventListener("mousedown", initDrag, false);
          right.parentPopup = p;
      
          var bottom = document.createElement("div");
          bottom.className = "resizer-bottom";
          p.appendChild(bottom);
          bottom.addEventListener("mousedown", initDrag, false);
          bottom.parentPopup = p;
      
          var both = document.createElement("div");
          both.className = "resizer-both";
          p.appendChild(both);
          both.addEventListener("mousedown", initDrag, false);
          both.parentPopup = p;
        }
      
        function initDrag(e) {
          element = this.parentPopup;
      
          startX = e.clientX;
          startY = e.clientY;
          startWidth = parseInt(
            document.defaultView.getComputedStyle(element).width,
            10
          );
          startHeight = parseInt(
            document.defaultView.getComputedStyle(element).height,
            10
          );
          document.documentElement.addEventListener("mousemove", doDrag, false);
          document.documentElement.addEventListener("mouseup", stopDrag, false);
        }
      
        function doDrag(e) {
          element.style.width = startWidth + e.clientX - startX + "px";
          element.style.height = startHeight + e.clientY - startY + "px";
        }
      
        function stopDrag() {
          document.documentElement.removeEventListener("mousemove", doDrag, false);
          document.documentElement.removeEventListener("mouseup", stopDrag, false);
        }
      }

    
    // $('#invest-popover-wrap1').popover({ trigger: "hover" });
    // var dm = document.getElementById('dragme');
    // dm.addEventListener('dragstart', drag_start, false);
    // document.body.addEventListener('dragover', drag_over, false);
    // document.body.addEventListener('drop', drop, false);

    
    // function drag_start(event) {
    //   var style = window.getComputedStyle(event.target, null);
    //   event.dataTransfer.setData("text/plain",
    //     (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
    // }

    // function drag_over(event) {
    //   event.preventDefault();
    //   return false;
    // }

    // function drop(event) {
    //   var offset = event.dataTransfer.getData("text/plain").split(',');
    //   var dm = document.getElementById('dragme');
    //   dm.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
    //   dm.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
    //   event.preventDefault();
    //   return false;
    // }

    $(".buyEdgeBody .investmentWrap").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      //autoScrollOnFocus: true,
      keyboard: {
        enable: false
      },
      advanced: {
        autoScrollOnFocus: '.bootstrap-select'
      },
      callbacks: {
        onScrollStart: function () {
          //$(this).parents('.buy-edge-cases').find('.buyEdgeHeader').addClass('stickyHeader');
          $('.buyEdgeBody .stock-sec').addClass('withShadow');
        },
        onTotalScrollBack: function () {
          //$(this).parents('.buy-edge-cases').find('.buyEdgeHeader').removeClass('stickyHeader');
          $('.buyEdgeBody .stock-sec').removeClass('withShadow');
        }
      }

    });
    // $('select').selectpicker({

    // });
    setTimeout(function () {
      $("select").selectpicker("refresh");
    }, 1000);
    $('.selectInvestBody').mCustomScrollbar({
      alwaysShowScrollbar: 0,

    });
    $(".toggle-switch .checkBox").click(function () {
      if ($(this).prop("checked")) {
        $(this).parent('.toggle-switch').find(".left").addClass("active");
        $(this).parent('.toggle-switch').find(".right").removeClass("active");
      } else {
        $(this).parent('.toggle-switch').find(".left").removeClass("active");
        $(this).parent('.toggle-switch').find(".right").addClass("active");
      }
    });
    $(".toggle-switch input").click(function () {
      if ($("#buySell").prop("checked")) {
        $(this).parents('.buySideBar').removeClass('sellCont')

      } else {
        $(this).parents('.buySideBar').addClass('sellCont')
        console.log('unchecked')
      }

    });

    $('[data-toggle="tooltip-popup"]').click(function () {
      var target = $(this).attr("data-target");
      $(target).show();
      $(this).parents('.buySideBar').addClass('visiblecont');
    });
    $(document).mouseup(function (e) {
      var popup = $(".popoverContent");
      if (!popup.is(e.target) && popup.has(e.target).length === 0) {
        popup.hide();
        $('.buySideBar').removeClass('visiblecont');
      }
    });

    $('.popoverBtn').click(function () {
      $(this).parents('.popoverWrap').find('.popoverContent').first().show();
      $(this).parents('.buySideBar').addClass('visiblecont');
      $(this).parents('.popoverWrap ').siblings('.popoverWrap ').find('.popoverContent').hide();
    })
    $('.nextPopoverBtn').click(function () {
      $(this).parents('.popoverContent ').hide();
      $(this).parents('.popoverContent ').next('.popoverContent').show();
    })
    $('.closePopoverBtn').click(function () {
      $(this).parents('.popoverContent ').hide();
      $(this).parents('.buySideBar').removeClass('visiblecont');
    })
    $('.prevPopoverBtn').click(function () {
      $(this).parents('.popoverContent ').hide();
      $(this).parents('.popoverContent ').prev('.popoverContent').show();
    })

    $('#popover-wrap1').popover({
      container: '.popoverList1'
    })
    $('#popover-wrap2').popover({
      container: '.popoverList2'
    })
    $('#popover-wrap3').popover({
      container: '.popoverList3'
    });
    $('.disabled #invest-popover-wrap1').popover({
      container: '.intradayBox',
      placement:"bottom",
      trigger:'hover'
    });
    $('#invest-popover-wrap2').popover({
      container: '.marginBox',
      placement: "bottom"
    });
    $('#invest-popover-wrap3').popover({
      container: '.deliveryBox',
      placement: "bottom"
    });
    $('#invest-popover-wrap4').popover({
      container: '.carryforwadBox',
      placement: "bottom"
    });

    $('#popover-wrap1, #popover-wrap2, #popover-wrap3').on('show.bs.popover	', function () {
      $(this).parents('.buySideBar').addClass('visiblecont');
    });
    $('#popover-wrap1, #popover-wrap2, #popover-wrap3').on('hidden.bs.popover		', function () {
      $(this).parents('.buySideBar').removeClass('visiblecont');
    });
    $('.lotSizeInfo').popover({
      container: '.lotSize'
    });


    $('.btnMin').click(function () {
      this.moreHorizontal = true;
      console.log("more",this.moreHorizontal)
      if ($(".buySideBar").hasClass("minimized")) {
       console.log("minimized")
      $('.more-horizontal').css("display","none");
      $('.buyEdgeBody').css("overflow","hidden");
      $(".buySideBar").css({"left":"auto","right":"5.688rem"});
        $(this).parents('.buySideBar').removeClass('minimized');
        $(this).parents('body').find('.main-content').addClass('leftPosition')
        $(this).parents('body').find('.side-section').addClass('slide');
        $(this).parents('body').find('.side-section .btn-sideToggle').addClass('enableSliding');
        $(this).parents('body').find('.watchlist-side-section').addClass('withShadow');
      } else {
        console.log("maximized")     
      $('.more-horizontal').css("display","block");
      $('.buyEdgeBody').css("overflow-y","auto");
      $('.popup').css("max-height", "600");
        $(this).parents('.buySideBar').addClass('minimized');
        $(this).parents('body').find('.main-content').removeClass('leftPosition');
        $(this).parents('body').find('.side-section').removeClass('slide');
        $(this).parents('body').find('.side-section .btn-sideToggle').removeClass('enableSliding');
        $(this).parents('body').find('.watchlist-side-section').removeClass('withShadow');
      }
      $(".buySideBar").css({"left":"auto","right":"5.688rem","top":"64px","height":"calc(100vh - 64px)"});
    });
    $('.btnMax').click(function () {
      $(this).parents('.buySideBar').removeClass('minimized');
      // $(this).parents('body').find('.side-section').addClass('hideSection');
      // $(this).parents('body').find('.main-content').addClass('leftPosition');
    })
    $('.btnClose').click(function () {
      // alert("123");
      $(this).parents('.buySideBar').removeClass('minimized');
      $(this).parents('body').find('.main-content').removeClass('leftPosition');
      $(this).parents('body').find('.side-section').removeClass('slide');
      $(this).parents('body').find('.side-section .btn-sideToggle').removeClass('enableSliding');
      $(this).parents('.buySideBar').hide();
      $(this).parents('body').find('.watchlist-side-section').removeClass('withShadow');

      // $('.watchlist-side-section').css("border-right", "transparent");
      $('.more-horizontal').css("display","none");
      $(".buySideBar").css({"left":"auto","right":"5.688rem","top":"64px","height":"calc(100vh - 64px)"});
    })

    // var inputWidth = $('.autoWidth').val().length() * 8;
    // console.log(inputWidth);

    // this.emitter.on("toggle-sidebar", isOpen => {
    //   console.log(isOpen)
    //   console.log("abc")
    // });
    $('.comp-info-sec select').on('show.bs.select', function () {
      // do something...
      //console.log("abc");
      // $(".buyEdgeBody").mCustomScrollbar({
      //   keyboard:{ enable: false }
      // });
    });

    // $('.bootstrap-select .dropdown-toggle').on('mousedown', function() {
    //    console.log("clicked");
    //    $(this).c
    //   });
    
    // $('#invest-popover-wrap1').popover({
    //   trigger:'hover'
    // })

  },
  methods: {

    // closeBuyFunc(){
    //   this.$root.$emit('msgFromAbc');
    // }
    squreOrderToggle() {
      this.squreOrder = !this.squreOrder
      this.squareOrderLink = false
    },
    addJumpPrice() {
      this.jumpPriceBtn = false
      this.jumpPriceInput = true
    },
    closeJumpPrice() {
      this.jumpPriceBtn = true
      this.jumpPriceInput = false
    },
    fundsErrorFunc() {
      this.insufficientFunds = true;
    },
    closefundsErrorFunc() {
      this.insufficientFunds = false;
    },
    selectMarket: function (e) {
      // console.log("Show "+e.target.value+ " fields")
      if (e.target.value == 'Limit') {
        this.intraMarketPrice = false
        this.intraLimitPrice = true

      } else {
        this.intraLimitPrice = false
        this.intraMarketPrice = true
      }
    },
    selectMarket1: function (e) {
      // console.log("Show "+e.target.value+ " fields")
      if (e.target.value == 'Limit1') {
        this.intraMarketPrice1 = false
        this.intraLimitPrice1 = true

      } else {
        this.intraLimitPrice1 = false
        this.intraMarketPrice1 = true
      }
    },
    selectMarket2: function (e) {
      // console.log("Show "+e.target.value+ " fields")
      if (e.target.value == 'Limit2') {
        this.intraMarketPrice2 = false
        this.intraLimitPrice2 = true

      } else {
        this.intraLimitPrice2 = false
        this.intraMarketPrice2 = true
      }
    },
    intraday() {
      this.marginCont = false
      this.deliveryCont = false
      this.intradayCont = true
    },
    margin() {
      this.deliveryCont = false
      this.intradayCont = false
      this.marginCont = true
    },
    delivery() {
      this.marginCont = false
      this.intradayCont = false
      this.deliveryCont = true

    },
    closeAMOError() {
      this.amoErr = false
    },
    investClose() {
      this.selectInvest = false
    },
    amoErrorFunc() {
      this.amoErr = true
    },
    placeOrder() {
      this.orderPlacedSuccss = true
    },
    priceChange() {

      var val = this.stopLoss;

      if (val == "0") {
        this.stopLossErr = true
      } else {
        this.stopLossErr = false
      }
    },

    qtyChange() {
      var val = this.dQuantity;

      if (val == "0") {
        this.discloseQuantiyErr = true
      } else {
        this.discloseQuantiyErr = false
      }
    },
    showMore() {
      this.eDisAuthorizationModal = false
      this.knowMore = true

    },
    back() {
      this.knowMore = false
      this.eDisAuthorizationModal = true

    }

  }
}