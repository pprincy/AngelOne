import $ from 'jquery';

export default {
  name: 'add-dp-id',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    $(".copy_tooltip").click(function(){
      $(this).parent().find(".tooltip_popup").fadeIn();
      setTimeout(function(){
        $(".tooltip_popup").fadeOut();
      },2000);
    });
  },
  methods: {

  }
}


