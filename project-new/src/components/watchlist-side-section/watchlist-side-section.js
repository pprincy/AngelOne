import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
import draggable from 'vuedraggable'
import FloatLabel from 'vue-float-label/components/FloatLabel'
import Managewatchlist from '../watchlist-side-section/manage-watchlist/manage-watchlist.vue'
let id = 3;
export default {
  name: 'watchlist-side-section',
  components: {mCustomScrollBar, draggable, FloatLabel, Managewatchlist},
  props: [],
 
  data () { 
    return {
      watchlistOverlay: false,
      indicesCheck:[],
      actionSeen : false,
      selected: undefined,
      pinnedIndicesError:false,
      mainWatchlist:true,
      editWatchlist:false,
      deleteWatchlist:false,
      watchlistcreatealert:false,
      emptyWatch:false,
      createWatchlist:false,
      deleteStock:false,
      undoDelete:false,
      isActive : false,
      //responsive
      hideInMob:false,
      watchlist:[
        {
          id:1,
          name:"Watchlist111111",
          selected:true,
        },
        {
          id:2,
          name:"MMMMMMMMMMMMMMM",
          selected:false,
        },
        {
          id:3,
          name:"Watchlist",
          selected:false,
        },
        {
          id:4,
          name:"Watchlist",
          selected:false,
        }
      ],
      stocklists:[
        {
          id:1,
          name:"RELI",
          exchage:"NSE",
          compName:"Reliance Global Group",
          price:1922.41,
          chg:0.00,
          per:"0.00",
          shareVal:"",
          actionBtn:false,
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          exchage:"NSE",
          compName:"Hero Motocorp Limited",
          price:"2780.87",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:3,
          name:"TATAMOTORS",
          exchage:"NSE FO",
          compName:"Tata Motors Limited",
          price:"508.10",
          chg:"20.90",
          per:"0.07",
          shareVal:"positive",
          actionBtn:false,
        },
        {
          id:4,
          name:"BAJAJFINSV",
          exchage:"BSE",
          compName:"Bajaj Finserv Ltd.",
          price:"4508.60",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:5,
          name:"PVR",
          exchage:"MCX",
          compName:"PVR Cinemas",
          price:"218.67",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:6,
          name:"DRREDDY",
          exchage:"BSE",
          compName:"Dr. Reddy Labs",
          price:"3456.54",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:1,
          name:"RELI",
          exchage:"NSE",
          compName:"Reliance Global Group",
          price:1922.41,
          chg:0.00,
          per:"0.00",
          shareVal:"",
          actionBtn:false,
        },
        {
          id:2,
          name:"HEROMOTOCORP",
          exchage:"NSE",
          compName:"Hero Motocorp Limited",
          price:"2780.87",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:3,
          name:"TATAMOTORS",
          exchage:"NSE FO",
          compName:"Tata Motors Limited",
          price:"508.10",
          chg:"20.90",
          per:"0.07",
          shareVal:"positive",
          actionBtn:false,
        },
        {
          id:4,
          name:"BAJAJFINSV",
          exchage:"BSE",
          compName:"Bajaj Finserv Ltd.",
          price:"4508.60",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:5,
          name:"PVR",
          exchage:"MCX",
          compName:"PVR Cinemas",
          price:"218.67",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
        {
          id:6,
          name:"DRREDDY",
          exchage:"BSE",
          compName:"Dr. Reddy Labs",
          price:"3456.54",
          chg:"20.90",
          per:"0.07",
          shareVal:"negative",
          actionBtn:false,
        },
      ],
      pinnedIndices:[
        {
          id:1,
          name:"SENSEX",
          selected:true,
        },
        {
          id:2,
          name:"BANKNIFTY",
          selected:true,
        },
        {
          id:3,
          name:"NIFTY",
          selected:false,
        },
      ],
     
      dragging: false
    }
  },
  computed: {
    draggingInfo() {
      // console.log("hi")
      return this.dragging ? "under drag" : "";
     
    },
    
  },
  
  mounted () {
    
    $(".watchlist-side-section .stock-listing-wrap").mCustomScrollbar({
      // keyboard:{ enable: true },
      scrollInertia: 0,
      mouseWheel: {preventDefault: true},
      callbacks:{
      onInit: function(){
        // $(".stock-sec").on("keyup", function() {
        //   alert("hhid")
        // })
        var lastDownTarget, canvas;
        canvas = document.getElementById('stock-listing-wrap');
        document.addEventListener("keydown", function(event) {
          lastDownTarget = event.target;
          // console.log("target", lastDownTarget)
          // console.log("canvas", canvas)
          if(lastDownTarget == canvas) {
              alert('inside');
          }
        })
        // $( ".stock-listing" ).keydown(function(event) {
        //   console.log("hee", event, event.keyCode);
        //   alert( "Handler for .keydown() called." );
          
        // });
      }  ,
      onScrollStart: function(){
        // console.log("abc")
          $('.watchlist-header').addClass('stickyTab');
      },
      onTotalScrollBack:function(){
          $('.watchlist-header').removeClass('stickyTab');
         // console.log("dfgdsfg")
      },
      whileScrolling:function(){
        // console.log("Scrolling...");
      }
      }
  });
   /*responsive*/
    $(".empty-watchlist-state, .stock-action-dropdown").mCustomScrollbar();
    $(".error-case-wrap").mCustomScrollbar();
    
   
   function updateCounter() {
      var len = $(".checkbox-btn-wrap  input[type='checkbox']:checked").length;
      // console.log(len);
      if(len < 2){
        $('.pinned-indicies-error').show();
      } else if(len > 2) { 
        //  console.log("ffg")
       //  $(this).attr("disabled", true);
      }
      else{
        $('.pinned-indicies-error').hide();
      }
  }
  $(".checkbox-btn-wrap  input:checkbox").on("change", function() {
     updateCounter();
    
  });
//   $(".checkbox-btn-wrap").find("checkbox").each(function(){
//     if ($(this).prop('checked')==true){ 
//        console.log("checked")
//     }
//     else if($(this).prop('checked')==false){
//       console.log("unchecked")
//     }
// });
$('.checkbox-btn-wrap input[type="checkbox"]').on("change", function() {
  // console.log()
  if($(this).is(":checked")){
    // console.log("checked")
    $(this).parent('label').addClass('active');
  }
  else if($(this).is(":not(:checked)")){
//console.log("unchecked")
    $(this).parent('label').removeClass('active');
  }
  $('.buyBtn').click(function(){
    $(this).parents('body').find('.buySideBar').show();
    $(this).parents('body').find('.main-content').addClass('leftPosition');
    $(this).parents('body').find('.side-section').addClass('hideSection');
   })


   
   
  
});

/*responsive*/
  $(".close-btn").click(function(){
    $(".watchlist-side-section").addClass("deleteModalLoanch");
  });

  // const Watchlist = document.querySelector('.watchlist-side-section');
  // Watchlist.addEventListener('keypress', logKey);
  // function logKey(e) {
  //   // alert( 'You pressed a "'+`${e.code}`+'" key in Watchlist');
  // }

  $("#watchlist1 .stock-sec:first-child").addClass("active");

  // $(".stock-listing-wrap").keydown(function(e){
    // alert( 'You pressed a "'+e.which+'" key in Watchlist');
    // if(e.which == '39'){
    //   alert('You pressed a "ArrowRight" key in Watchlist');    
    // }
    // if(e.which == '37'){
    //   alert('You pressed a "ArrowLeft" key in Watchlist');    
    // }
    // if(e.which == '38'){
    //   alert('You pressed a "ArrowUp" key in Watchlist');    
    // }
    // if(e.which == '40'){
    //   alert('You pressed a "ArrowDown" key in Watchlist');    
    // }
    // if(e.which == '66'){
    //   alert('You pressed a "B" key in Watchlist');    
    // }
    // if(e.which == '83'){
    //   alert('You pressed a "S" key in Watchlist');    
    // }
    // if(e.which == '67'){
    //   alert('You pressed a "C" key in Watchlist');    
    // }
    // if(e.which == '68'){
    //   alert('You pressed a "D" key in Watchlist');    
    // }
    // if(e.which == '46'){
    //   alert('You pressed a "Delete" key in Watchlist');    
    // }
  // });

  document.onkeyup = function(e) {
    if (e.ctrlKey && e.shiftKey && e.which == 38) {
      alert("Ctrl + Shift + Up shortcut combination was pressed");
    }
    if (e.ctrlKey && e.shiftKey && e.which == 40) {
      alert("Ctrl + Shift + Down shortcut combination was pressed");
    }
    if(e.which == '38'){
      fnKeyUpEvent();
    }
    if(e.which == '40'){
      fnKeyDownEvent();
    }

  };
  var startPoint = $(".startPoint").offset().top;
  var endPoint = $(".endPoint").offset().top;
  console.log("startpoint : "+ startPoint+" endpoint : "+endPoint);
  function fnKeyUpEvent(){
    // alert('You pressed a "ArrowUp" key in Watchlist');
    $(".watchlist-side-section .stock-listing-wrap .active")
      .prev()
      .addClass("selected");
    $(".selected")
      .siblings(".stock-sec")
      .removeClass("active");
    $(".selected")
      .addClass("active")
      .removeClass("selected");
    var activeOffset = $(".watchlist-side-section .stock-sec.active").offset().top;
    console.log("activeOffset : "+activeOffset);
    var cssTop = parseInt(
      $(".watchlist-side-section .stock-listing-wrap .mCSB_container").css("top")
    );
    if(activeOffset+20 < startPoint){
      alert(1);
      $("#watchlist1 .mCSB_container").css("top",cssTop + 70);
    }
  }
  function  fnKeyDownEvent(){
    // alert('You pressed a "ArrowDown" key in Watchlist');
    $(".watchlist-side-section .stock-listing-wrap .active")
      .next()
      .addClass("selected");
    $(".selected")
      .siblings(".stock-sec")
      .removeClass("active");
    $(".selected")
      .addClass("active")
      .removeClass("selected");
    var activeOffset = $(".watchlist-side-section .stock-sec.active").offset().top;
    console.log("activeOffset : "+activeOffset);
    var cssTop = parseInt(
        $(".watchlist-side-section .stock-listing-wrap .mCSB_container").css("top")
      );
    if(activeOffset>endPoint){
      alert(2);
      $("#watchlist1 .mCSB_container").css("top",cssTop - 70)
    }
  }
  $("#stock-listing-wrap .stock-sec").click(function(){
    $(".nav-item .nav-link.active").focus();
  });
  },
  methods: {
    removeAt(idx) {
      // console.log("remove")
      this.watchlist.splice(idx, 1);
    },
    add: function() {
      id++;
      this.watchlist.push({ name: "Watchlist " , id, text: "" });
      this.watchlistcreatealert = true;
      setTimeout(()=>{
        this.watchlistcreatealert = false;
      },5000)
    },
    check(list, name){
      // console.log(list);
      list && list.length > 1 &&  list.indexOf(name) === -1
     
    },
    editWatchlistfunc(){
      this.mainWatchlist = false,
      this.editWatchlist = true
    },
    deleteWatchlistfunc(){
      this.actionSeen = false,
      this.deleteWatchlist = true
      
    },
    cancelDelete(){
      this.deleteWatchlist = false
    },
    showParent(value){
      this.mainWatchlist = value;
      this.actionSeen = false
     },
     hideChild(value){
      this.editWatchlist = value;
      this.actionSeen = false
     },
     removeRow(_index){
      //console.log(_index);
      this.stocklists.splice(_index, 1);
      this.undoDelete = true;
      setTimeout(() => this.undoDelete = false, 1000)
      if(this.stocklists.length < 1){
        this.emptyWatch = true
      }
      //console.log(this.stocklists.length)
    },
    hideEmpty(){
      this.emptyWatch = false
    },
    
    createWatchList(){
      this.createWatchlist = true
    },
    deleteStockfun(){
      this.deleteStock = true
     // console.log("delete")
    },
    hidecreateWatchlist(){
      this.createWatchlist = false
    },
    hidedeleteStock(){
      this.deleteStock = false
    },
    deleteundo(){
      this.undoDelete = false
    }
    
  }
}


