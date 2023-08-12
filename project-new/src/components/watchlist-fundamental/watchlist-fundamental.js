import Fundamentalvaluation from '../fundamental-valuation/fundamental-valuation.vue';
import Fundamentalquality from '../fundamental-quality/fundamental-quality.vue'
import Fundamentalfinancial from '../fundamental-financial/fundamental-financial.vue'


export default {
  name: 'watchlist-fundamental',
  components: {Fundamentalvaluation, Fundamentalquality, Fundamentalfinancial,},
  props: [],
  data () {
    return {
      qualityVal:4,
      valuationVal:3,
      financialVal:2,
      qualityfocus:false,
      valuationfocus:false,
      financialfocus:false,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showQuality(){
      this.qualityfocus = ! this.qualityfocus
      this.valuationfocus = false
      this.financialfocus = false
      console.log("1",this.qualityfocus)
    },
   showValuation(){
      this.valuationfocus = ! this.valuationfocus
      this.qualityfocus = false
      this.financialfocus = false
      console.log("2",this.valuationfocus)
   }, 
   showFinancial(){
      this.financialfocus = ! this.financialfocus
      this.qualityfocus = false
      this.valuationfocus = false
      console.log("3",this.financialfocus)
   }
  }
}


