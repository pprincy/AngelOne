import $ from 'jquery';

export default {
  name: 'equity-sector-perfomance',
  components: {},
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


