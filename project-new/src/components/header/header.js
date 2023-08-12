import $ from 'jquery';
//import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'

export default {
  name: 'header',
  components: {},
  props: [],
  data () {
    return {
      closeFeedbackIcon: true,
      // searchIconMob: true,
      // searchInputListMob: false,
      // backArrow: false,
      userFeedbackModal: true,
      showSad: true,
      showConfused: true,
      showLove: true,
      showContinue: false,
      
      feedbackModal:false,
      selectedItems: [],
      max: 2,
      firstTimeSearch : false,
      noResultFound:false,
      clearSearch:false,
      searchResult:false,
      resentSearch:false,
     // addToWatchlist:false,
      searchInput:'',
      ttl:'',
      removeMsg:false,
      addMsg:false,
      searchList:[
       {
        id: 1,
        name:"All",
        selected:true
       },
       {
        id: 2,
        name:"Cash",
        selected:false
       },
       {
        id: 3,
        name:"FnO",
        selected:false
       },
       {
        id: 4,
        name:"Currency",
        selected:false
       },
       {
        id: 5,
        name:"Commodity",
        selected:false
       },
      ],
      stocklists:[
        {
          id:1,
          name:"ASIANPAINT",
          exchage:"NSE",
          compName:"Reliance Global Group",
          tag:"EQ",
         addToWatchlist:false,
          activeClass:false,
          
        },
        {
          id:2,
          name:"ASIANPAINT",
          exchage:"BSE",
          compName:"Asian Paints Ltd",
          tag:"EQ",
         addToWatchlist:false,
          activeClass:false,
        },
        {
          id:3,
          name:"ASHOKLEY",
          exchage:"NSE FO",
          compName:"Ashok Leyland Ltd",
          tag:"FUT",
         addToWatchlist:false,
          activeClass:false,
        },
        {
          id:4,
          name:"ASHOKLEY",
          exchage:"NSE FO",
          compName:"31 Mar 2020",
          tag:"FUT",
         addToWatchlist:false,
          activeClass:false,
        },
        {
          id:5,
          name:"NATURAL GAS",
          exchage:"NCDEX",
          compName:"25 Feb 2020",
          tag:"CMD",
          addToWatchlist:false,
           activeClass:false,
        },
        {
          id:6,
          name:"A&M",
          exchage:"BSE",
          compName:"Asian Paints Ltd",
          tag:"EQ",
          addToWatchlist:false,
           active:false,
           activeClass:false,
        },
        {
          id:7,
          name:"AAR",
          exchage:"BSE",
          compName:"AAR Commercial Co Ltd",
          tag:"EQ",
          addToWatchlist:false,
           activeClass:false,
        },
        {
          id:8,
          name:"AARTECH",
          exchage:"BSE",
          compName:"Aartech Solonics Ltd",
          tag:"EQ",
          addToWatchlist:false,
           activeClass:false,
        },
        {
          id:9,
          name:"AARV",
          exchage:"BSE",
          compName:"AARV Infratel Ltd",
          tag:"EQ",
          addToWatchlist:false,
           activeClass:false,
        },
        {
          id:10,
          name:"USDINR",
          exchage:"NSECDS",
          compName:"26 Feb 2020",
          tag:"FX",
          addToWatchlist:false,
           activeClass:false,
        },
        {
          id:11,
          name:"ASHOKLEY",
          exchage:"NSE FO",
          compName:"27 Feb 2020",
          tag:"OPT",
          addToWatchlist:false,
           activeClass:false,
        },
      ],
      recentstocklists:[
        {
          id:1,
          name:"NATURAL GAS",
          exchage:"NCDEX",
          compName:"25 Feb 2020",
          tag:"CMD"
        },
        {
          id:2,
          name:"ASHOKLEY",
          exchage:"NSE FO",
          compName:"27 Feb 2020",
          tag:"FUT"
        },
        {
          id:3,
          name:"ASIANPAINT",
          exchage:"NSE",
          compName:"Asian Paints Ltd",
          tag:"EQ"
        },
       
      ],
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
        ,
        {
          id:3,
          name:"Watchlist",
          stockNo:20
        }
        ,
        {
          id:4,
          name:"Watchlist",
          stockNo:20
        }
      ]
    }
  },
  computed: {

  },
  mounted () {
    $("#userFeedbackModal").modal("hide");
    // $("#userFeedbackModal").modal({
    //   backdrop: false
    // });
    $(".search-result").mCustomScrollbar({
      axis:"x",
    });
    $(".header .stock-listing-wrap").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      keyboard:{ enable: true },
      scrollButtons:{ 
        enable: true,
        scrollAmount: 10
       
      },
      callbacks:{
        onScrollStart: function(){
          $(this).parents('.search-popup-cont').find('.nav-tabs').addClass('stickyTab');
        },
        onTotalScrollBack:function(){
          $(this).parents('.search-popup-cont').find('.nav-tabs').removeClass('stickyTab');
          console.log("")
        }
      }
    });
   // $(".stock-listing-wrap").mCustomScrollbar('destroy');
    /*05-05-2021*/
    $(".login_user_name .dropdown-menu").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });
    /*05-05-2021*/
    $(".nav-tabs .nav-item .nav-link").on('shown.bs.tab', function(e) {
      console.log($(e.target).data());
      //$(".stock-listing-wrap").mCustomScrollbar("destroy");
      // $(".stock-listing-wrap").mCustomScrollbar();
     // $('.tab-pane.active'+$(e.target).attr('href')+' .mCSB_container').css('top', $(e.target).data('scrolled'));
    })

    $('.stock-action ul li .check-btn').click(function(){
      $(this).parents('.stock-sec').siblings('.stock-sec').find('.check-btn').removeClass('active')
      
    }),

    $('.header-watchlist .check-list input:checkbox').click(function(){
      var $inputs = $('input:checkbox')
          if($(this).is(':checked')){
             $inputs.not(this).prop('disabled',true); // <-- disable all but checked one
              $(this).parents('.header-watchlist').find('.addDoneBtn').removeClass('disabled');
              $(this).parents('.header-watchlist').find('.addDoneBtn').show();
              $(this).parents('.header-watchlist').find('.removeDoneBtn').hide()
          }else{
             $inputs.prop('disabled',false); 
             $(this).parents('.header-watchlist').find('.addDoneBtn').hide();
             $(this).parents('.header-watchlist').find('.removeDoneBtn').show().removeClass('disabled');
          }
      })
      
      if(navigator.userAgent.indexOf('Mac') > 0){
        $('body').addClass('mac-os');
      }

      $('.header_search').on('focus', '.form-control', function() {
        console.log("focused");
        var $this = $(this).parents('.header_search').find('#search-result-wrap').find('.stock-listing').find('li');
        $this.first().addClass('active').siblings().removeClass('active');
      }).on('keydown', '.form-control', function(e) {
        
          var boxHeight = $(".header .stock-listing-wrap").outerHeight();
            if (e.keyCode == 40) {  
              $('.header .active').next().addClass('selected');
              $('.selected').siblings('li').removeClass('active')
              $('.selected').addClass('active').removeClass('selected');
              var activeOffset = $(".header .stock-listing-wrap .active").offset();
               var cssTop = parseInt($('.header .stock-listing-wrap .mCSB_container').css("top"));
               if(activeOffset.top-139 > boxHeight-80){
                    $('.header .stock-listing-wrap .mCSB_container').css("top",cssTop-65);
                }
                console.log("activeOffset" , activeOffset);
                console.log("cssTop" ,cssTop);
                console.log(activeOffset);
                $('.search-popup-cont .tab-wrap .nav-tabs').addClass('stickyTab');
                return false;
               
            } else if (e.keyCode == 38) {  
              $('.header .active').prev().addClass('selected');
              $('.selected').siblings('li').removeClass('active')
              $('.selected').addClass('active').removeClass('selected');
                activeOffset = $(".header .stock-listing-wrap .active").offset();
                console.log(activeOffset);
                cssTop = parseInt($('.header .stock-listing-wrap .mCSB_container').css("top"));
                //console.log("cssTop1" ,cssTop);
                if(activeOffset.top < 110){
                      $('.header .stock-listing-wrap .mCSB_container').css("top",cssTop+65);
                     
                  }
                  if (cssTop == 0) {
                    //console.log("remove")
                    $('.search-popup-cont .tab-wrap .nav-tabs').removeClass('stickyTab');
                  }
                
                return false;
            }
           
        })
    
    //   $('.stock-listing').on('focus', 'li', function() {
    //     var $this = $(this);
    //     $this.addClass('active').siblings().removeClass('active');
    //     $this.closest('.stock-listing').scrollTop($this.index() * $this.outerHeight());
    //   }).on('keydown', 'li', function(e) {
    //     var $this = $(this);
    //     if (e.keyCode == 40) {        
    //         $this.next().focus();
    //         return false;
    //     } else if (e.keyCode == 38) {        
    //         $this.prev().focus();
    //         return false;
    //     }
    // })
    //$('.stock-listing .stock-sec').first().focus();  
    //   $('.stock-listing').on('focus', '.stock-sec', function() {
    //    //var  $this = $(this);
    //    $(this).addClass('active').siblings().removeClass('active');
    //    $(this).closest('.stock-listing').scrollTop($(this).index() * $(this).outerHeight());
    // }).on('keydown', '.stock-sec', function(e) {
    //    var $this = $(this);
    //     if (e.keyCode == 40) {        
    //         $this.next().focus();
    //         return false;
    //     } else if (e.keyCode == 38) {        
    //         $this.prev().focus();
    //         return false;
    //     }
    // }).find('.stock-sec').first().focus();


  },
  methods: {
    headerSearchShowMob() {
      $(".header-search-mob").css("display","block");
      document.getElementById("searchMob").style.display = "block";
      this.searchResult = true;
    },
    backArrowMob() {
      this.searchResult = false;
      this.resentSearch = false;
      this.clearSearch = false;
      document.getElementById("searchMob").style.display = "none";
    },
    // searchInputMob(){
    //   this.searchInputListMob = true;
    //   this.searchIconMob = false;
    //   this.searchResult = true;
    //   this.backArrow = true;
    //   document.getElementById("logo").style.display = "none";
    //   document.getElementById("userpic").style.display = "none";
    // },
    // backArrowMob() {
    //   this.searchInputListMob = false;
    //   this.searchIconMob = true;
    //   this.searchResult = false;
    //   this.backArrow = false;
    //   this.resentSearch = false;
    //   this.clearSearch = false;
    //   document.getElementById("logo").style.display = "block";
    //   document.getElementById("userpic").style.display = "block";
    //   document.getElementById("searchMob").style.display = "none";
    // },
    search(){
      var val = this.searchInput;
      if(val == ""){
        this.firstTimeSearch = true;
        this.resentSearch = false;
      }
      
    },
    searchChange(){
      // alert("Enter clicked")
      // console.log(this.searchInput)
      var val = this.searchInput;
      //console.log("val" + val);
      this.resentSearch = false;
      if(val == "de"){
        this.noResultFound = true;
        this.firstTimeSearch = false;
      }
      else if(val == "asia"){
        this.searchResult = true;
        this.firstTimeSearch = false;
        // $('.stock-listing >li:first-child').addClass('active')
        // $('.stock-listing >li:first-child').find(".blank_anchor").focus();
        
      }
      else if(val == ""){
        this.clearSearch = false;
        this.searchResult = false;
      }
      else 
      {
        this.resentSearch = true;
        this.searchResult = false;
        this.noResultFound = false;
        this.firstTimeSearch = false;
        this.clearSearch = true
      }
        
    },
    searchAddtoWatchlist(ev, id){
      
      this.stocklists[id - 1 ].activeClass = ! this.stocklists[id - 1 ].activeClass
     if(this.stocklists[id - 1 ].activeClass == true){
       console.log("123")
       this.stocklists[id - 1 ].addToWatchlist = true
     }
     else{
      this.stocklists[id - 1 ].addToWatchlist = false
     }
     // this.addToWatchlist = !this.addToWatchlist
       //this.ttl = this.stocklists[id - 1 ].name
      //console.log(this.ttl)
    },
    addFunc(id){
      console.log("abc")
      this.addMsg = true;
      this.removeMsg = false;
       this.stocklists[id - 1 ].addToWatchlist = false
    },
    removeFunc(id){
      this.removeMsg = true;
      this.addMsg = false;
       this.stocklists[id - 1 ].addToWatchlist = false
     
    },
    // clearSearch(){
    //   this.searchInput =""
    // }
    // addtoWatch:function(id){
    //   // console.log("rename")
    //   //this.stocklists[id-1].addWatchlist=true;

    //  },
    //  select(id){
    //  // console.log(this.selectedItems.length)
    //  }

    showSadEmoji() {
      this.showSad = !this.showSad;
      this.showConfused = true;
      this.showLove = true;
      this.showContinue = true;
    },
    showConfusedEmoji() {
      this.showConfused = !this.showConfused;
      this.showSad = true;
      this.showLove = true;
      this.showContinue = true;
    },
    showLoveEmoji() {
      this.showLove = !this.showLove;
      this.showSad = true
      this.showConfused = true;
      this.showContinue = true;
    }
  },

 
}


