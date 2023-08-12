import Advisorytabcontent from '../advisory-tab-content/advisory-tab-content.vue'
import Investofoliotabcontent from '../investofolio-tab-content/investofolio-tab-content.vue'
export default {
  name: 'advisory-investofolio',
  components: {Advisorytabcontent, Investofoliotabcontent},
  props: [],
  data () {
    return {
      advisoryActive:true,
      investofolioActive:false
    }
  },
  computed: {

  },
  mounted () {
//  $(".advisory-tab").mCustomScrollbar({
//       alwaysShowScrollbar: 0
//     });
  },
  methods: {

  }
}


