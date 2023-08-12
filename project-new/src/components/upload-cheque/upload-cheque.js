

export default {
  name: 'upload-cheque',
  components: {  },
  props: [],
  data () {
    return {
      btnDisable: true,
      supportedFormat: true,
      fileName: false,
      btnReset: false,
      uploadChequeBtn: true,
      preview: null,
      image: null,
      preview_list: [],
      image_list: []
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
        this.btnReset = true;
        this.uploadChequeBtn = false;
        this.supportedFormat = false;
        this.fileName = true;
        this.btnDisable = false;
      }
    },
    reset: function() {
      this.image = null;
      this.preview = null;
      this.image_list = [];
      this.preview_list = [];
      this.btnReset = false;
      this.uploadChequeBtn = true;
      this.supportedFormat = true;
      this.fileName = false;
      this.btnDisable = true;
    }
  }
}


