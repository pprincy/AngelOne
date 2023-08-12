export default {
  name: 'language-component',
  components: {},
  props: [],
  data() {
    return {
      languages: [
        {
          id: 1,
          name: 'english',
          className: 'eng-font',
          isChecked: true
        },
        {
          id: 2,
          translate: 'हिन्दी',
          name: 'hindi'
        },
        {
          id: 3,
          translate: 'বাংলা',
          name: 'bangla'
        },
        {
          id: 4,
          translate: 'తెలుగు',
          name: 'telegu'
        },
        {
          id: 5,
          translate: 'मराठी',
          name: 'marathi'
        },
        {
          id: 6,
          translate: 'தமிழ்',
          name: 'tamil'
        },
        {
          id: 7,
          translate: 'ગુજરાતી',
          name: 'gujarati'
        },
      ]
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
  }
}