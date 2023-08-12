
export default {
  name: 'account-segment-subscriptions',
  components: {},
  props: [],
  data () {
    return {
      activateLink: true,
      checkStatusLink: false,
      uploadStatementArea: true,
      previewStatementArea: false,
      preview: '',
      image: null,
      name: '',
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    previewImage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        this.name = this.image.name;
        reader.readAsDataURL(input.files[0]);
        this.previewStatementArea = true;
        this.uploadStatementArea = false;
      }
    },
    reset: function() {
      this.previewStatementArea = false;
      this.uploadStatementArea = true;
    },
    enableCheckStatus: function() {
      this.activateLink = false;
      this.checkStatusLink = true;
    }
  }
}


