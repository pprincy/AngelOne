
import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
export default {
  name: 'menu',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      selected: undefined,
      items: [
        {
          id:1,
          className:'watchlist', 
          iconName: 'icon-watchlist',
          name: 'Watchlist', 
        },
       
        { 
          id:2,
          className:'portfolio', 
          iconName: 'icon-portfolio',
          name: 'Portfolio' 
        },
      
        { 
          id:3,
          className:'funds', 
          iconName: 'icon-funds',
          name: 'Funds' 
        },
        { 
          id:4,
          className:'advisory', 
          iconName: 'icon-advisory',
          name: 'Advisory' 
        },
        { 
          id:5,
          className:'markets', 
          iconName: 'icon-market',
          name: 'Markets' 
        },
        { 
          id:6,
          className:'reports', 
          iconName: 'icon-reports',
          name: 'Reports' 
        },
        { 
          id:7,
          className:'products', 
          iconName: 'icon-products',
          name: 'Products' 
        },
      ]
    }
  },
  computed: {

  },
  mounted () {

    document.addEventListener("keydown", function(event) {
  
      console.log(event, event.keyCode);
      if(event.keyCode == '13'){
        alert('You pressed a "enter" key');    
      }
      if(event.keyCode == '83'){
        alert('You pressed a "Account Setting" key');    
      }
      if(event.keyCode == '70'){
        alert('You pressed a "Funds" key');    
      }
      if(event.keyCode == '79'){
        alert('You pressed a "Open Orders" key');    
      }
      if(event.keyCode == '80'){
        alert('You pressed a "Positions" key');    
      }
      if(event.keyCode == '72'){
        alert('You pressed a "Holdings" key');    
      }
      if(event.keyCode == '77'){
        alert('You pressed a "Market" key');    
      }
      if(event.keyCode == '65'){
        alert('You pressed a "Advisory" key');    
      }
      if(event.keyCode == '82'){
        alert('You pressed a "Reports" key');    
      }
      if(event.keyCode == '75'){
        alert('You pressed a "Keyboard Shortcuts" key');  
        $("#keyboardShortcutsModal").modal("show");  
        $("#keyboardShortcutsModal .modal-body").mCustomScrollbar();
      }
    });

    // $(".side-quick-links").mCustomScrollbar();
    $(".side-quick-links").mCustomScrollbar({
      //axis:"x",
    });

  //   setTimeout(function(){ 
  //     const elem = document.getElementById('watchlist');
  //     elem.click(); 
  //     elem.classList.add("active");
  // }, 100);
  $('.side-quick-links ul li a').click(function(){
    //alert("hi")
    $('.watchlist-side-section').removeClass('slide withShadow');
    $('.watchlist-side-section .btn-sideToggle').removeClass('enableSliding');
  })
  $('.side-quick-links ul li a.router-link-active').click(function(){
    //alert("hi")
    return false
  })
  },
  methods: {

  }
}


