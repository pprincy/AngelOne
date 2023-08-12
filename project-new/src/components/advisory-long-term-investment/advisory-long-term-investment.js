import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'advisory-long-term-investment',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      selectedItem: null,
      callLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          category:"Book profit",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'BUY',
          collapsed:true,
          addToWatchlist:false
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          category:"Open",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
          collapsed:true,
          addToWatchlist:false
        },
        {
          id:3,
          name:"HEROMOTOCORP",
          category:"Stop loss",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'BUY',
          collapsed:true,
          addToWatchlist:false
        },
      ],
      otherCallLists:[
        {
          id:1,
          name:"HEROMOTOCORP",
          category:"Close",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
          collapsed:true,
          otherAddToWatchlist:false
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          category:"Close",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
          collapsed:true,
          otherAddToWatchlist:false
        },
        {
          id:3,
          name:"HEROMOTOCORP",
          category:"Close",
          compName:"Hero motors india",
          price:3161.75,
          chg:21.40,
          shareVal:"positive",
          per:"0.74",
          qtyAmount:'10,00,00,000',
          maxLoss:'90,00,000',
          maxProfit:'20,00,000',
          details:false,
          action:'EXIT',
          collapsed:true,
          otherAddToWatchlist:false
        }
      ],
      qualityVal:4,
      valuationVal:3,
      financialVal:2,
      watchList:[
        {
          id:1,
          name:"Watchlist",
          stockNo:20
        },
        {
          id:2,
          name:"Watchlist",
          stockNo:20
        }
      ],
      tblselectedItems: [],
      removeMsg:false,
      addMsg:false,
    }
  },
  computed: {

  },
  mounted () {
    $(".scrollable-cont").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });

    $('.detail-right-sec').mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
    $('.noHistoryWrapper').mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
    // $('.main-tr').on('hidden.bs.collapse', function () {
    //   // do something…
    //   alert("hi")
    // })
    $(".collapse").on('show.bs.collapse', function() {
     // alert("hi")
     console.log($(this))
      $(this).parents('.outer-tr').addClass('activeParentRow');
      $(this).parents('.outer-tr').find('.main-tr').addClass('activeRow');
      $(this).parents('.outer-tr').siblings('tr').removeClass('activeParentRow');
      $(this).parents('.outer-tr').siblings('tr').find('.main-tr').removeClass('activeRow');
    })
    $(".collapse").on('hide.bs.collapse', function() {
      //alert("bye")
      $(this).parents('.outer-tr').removeClass('activeParentRow');
      $(this).parents('.outer-tr').find('.main-tr').removeClass('activeRow');
    })
    $('.add-remove-watchlist .check-list input:checkbox').click(function(){
      var $inputs = $('input:checkbox')
          if($(this).is(':checked')){
             $inputs.not(this).prop('disabled',true); // <-- disable all but checked one
              $(this).parents('.add-remove-watchlist').find('.addDoneBtn').removeClass('disabled');
              $(this).parents('.add-remove-watchlist').find('.addDoneBtn').show();
              $(this).parents('.add-remove-watchlist').find('.removeDoneBtn').hide()
          }else{
            $inputs.prop('disabled',false); 
            if ($(".outer-tr").hasClass("active")) {
              $(this).parents('.add-remove-watchlist').find('.addDoneBtn').hide();
             $(this).parents('.add-remove-watchlist').find('.removeDoneBtn').show().removeClass('disabled');
            }
          }
      })

     

    // $('.mainTable .main-tr').click(function(){
    //   $(this).parents('tr').toggleClass('activeParentRow');
    //   $(this).toggleClass('activeRow');
    //   $(this).siblings('tr').find('.full-width-col').toggle();
    //   $(this).parents('tr').siblings('tr').removeClass('activeParentRow');
    //   $(this).parents('tr').siblings('tr').find('tr').removeClass('activeRow');
    //   $(this).parents('tr').siblings('tr').find('tr').find('.full-width-col').hide();
      
    // })
  },
  methods: {
    orders(){
      this.details = true
    },
    searchAddtoWatchlist(ev, id){
      console.log(id)
     // this.callLists[id].activeClass = false;
      this.callLists[id - 1 ].activeClass = ! this.callLists[id - 1 ].activeClass
     if(this.callLists[id - 1 ].activeClass == true){
       // this.addToWatchlist = true
       //console.log(this.callLists[id - 1 ].addToWatchlist);
       //this.callLists[id].addToWatchlist = false
        this.callLists[id - 1 ].addToWatchlist = true
        console.log(this.callLists[id - 1 ].addToWatchlist);
     }
     else{
     // this.addToWatchlist = false
     this.callLists[id - 1 ].addToWatchlist = false
     }
     // this.addToWatchlist = !this.addToWatchlist
      // this.ttl = this.callLists[id - 1 ].name
      //console.log(this.ttl)
    },
    otherAddtoWatchlist(ev, id){
      console.log(id)
      alert(id)
     // this.callLists[id].activeClass = false;
      this.otherCallLists[id - 1 ].activeClass = ! this.otherCallLists[id - 1 ].activeClass
     if(this.otherCallLists[id - 1 ].activeClass == true){
      // alert("dd")
       // this.addToWatchlist = true
       //console.log(this.otherCallLists[id - 1 ].addToWatchlist);
       //this.otherCallLists[id].addToWatchlist = false
        this.otherCallLists[id - 1 ].otherAddToWatchlist = true
        console.log(this.otherCallLists[id - 1 ].otherAddToWatchlist);
     }
     else{
      //alert("ss")
     // this.addToWatchlist = false
     this.otherCallLists[id - 1 ].otherAddToWatchlist = false
     }
     // this.addToWatchlist = !this.addToWatchlist
      // this.ttl = this.callLists[id - 1 ].name
      //console.log(this.ttl)
    },
    addFunc(id){
      //console.log("abc")
      this.addMsg = true;
      this.removeMsg = false;
     // this.callLists[id - 1 ].activeClass == false
       this.callLists[id - 1 ].addToWatchlist = false
    },
    removeFunc(id){
      this.removeMsg = true;
      this.addMsg = false;
      //this.callLists[id - 1 ].activeClass == false
       this.callLists[id - 1 ].addToWatchlist = false
     
    },
  }
}


