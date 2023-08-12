import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';

export default {
  name: 'equity-sector-perfomance-detail',
  components: {
    mCustomScrollBar
  },
  props: [],
  data () {
    return {
      current:0,
      navs: [
        {label:'All', class:'all' },
        {label:'Advances', class:'advanced' },
        {label:'Declines', class:'declines'},
        {label:'No change', class:'no_change'}
      ]
    }
  },
  computed: {

  },
  mounted () {
    $(".main-content-wrapper").mCustomScrollbar({
      alwaysShowScrollbar: 0,
      mouseWheelPixels: 200,
    });
    
    $(".btn-accordian").click(function(){
      $(this).parents(".main-tr").toggleClass("active");
    });
  },
  methods: {
    addClass(index){
      this.current=index;
  }
  }

 
}


