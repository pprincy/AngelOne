import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'


export default {
  name: 'side-quick-links',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {
      selected: undefined,
      items: [
        {
          id:1,
          className:'watchlist', 
          iconName: 'icon-star',
          name: 'Watchlist', 
        },
        { 
          id:2,
          className:'trades', 
          iconName: 'icon-file',
          name: 'Trades' 
        },
        { 
          id:3,
          className:'portfolio', 
          iconName: 'icon-bag',
          name: 'Portfolio' 
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
      ]
    }
  },
  computed: {

  },
  mounted () {
    $(".side-quick-links").mCustomScrollbar();

    setTimeout(function(){ 
      const elem = document.getElementById('watchlist');
      elem.click(); 
      elem.classList.add("active");
  }, 100);
  },
  methods: {

  }
}


