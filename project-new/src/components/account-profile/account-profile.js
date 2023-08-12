

export default {
  name: 'profile',
  components: {},
  props: [],
  data () {
    return {
      uploadStatementArea: true,
      previewStatementArea: false,
      preview: '',
      image: null,
      profile: {
        name: 'Michelle Makenzie',
        member: 'Member since 2014',
        clientId: 'DIYD987654',
        dpId: '1203320014508332'
      }
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
        reader.readAsDataURL(input.files[0]);
        this.previewStatementArea = true;
        this.uploadStatementArea = false;
        this.name = this.image.name
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


