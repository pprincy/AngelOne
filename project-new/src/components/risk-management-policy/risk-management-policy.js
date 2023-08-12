

import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
export default {
  name: 'risk-management-policy',
  components: {mCustomScrollBar},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    $('.select-sec-btn').click(function(){
      $('.select-list').toggle();
    })
    $(".select-list a[href^='#']").click(function(e) {
      e.preventDefault();
      
      var position = $($(this).attr("href")).offset().top - 110;
    
      $("body, html").animate({
        scrollTop: position
      } /* speed */ );
      $('.select-list').hide();
      var txt = $(this).text();
      $('.select-sec-btn span').text(txt)
    });
    
    $(".select-list").mCustomScrollbar({

    })
    // $(".main-container-sec").mCustomScrollbar({
    //   alwaysShowScrollbar: 0,
    //   mouseWheel:{ scrollAmount: 100 },
    //  scrollInertia:30
  
    // }); 
  },
  methods: {

  }
}


