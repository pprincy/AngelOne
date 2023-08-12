import $ from 'jquery';
export default {
  name: 'contract-notes-report',
  components: {},
  props: [],
  data() {
    return {
      emailModal: false,
      

      contractNotesReport: [{
          key: 1,
          date: '30 Dec 2020',
          note: 'CM_A123456_36523561.pdf',
          exchange: 'Commoncm',
          details: 'View Details',
          email: 'Email'
        },
        {
          key: 2,
          date: '30 Dec 2020',
          note: 'CM_A123456_36523561.pdf',
          exchange: 'Commoncm',
          details: 'View Details',
          email: 'Email'
        },
        {
          key: 3,
          date: '30 Dec 2020',
          note: 'CM_A123456_36523561.pdf',
          exchange: 'Commoncm',
          details: 'View Details',
          email: 'Email'
        },
        {
          key: 4,
          date: '30 Dec 2020',
          note: 'CM_A123456_36523561.pdf',
          exchange: 'Commoncm',
          details: 'View Details',
          email: 'Email'
        },
      ]
    }
  },
  computed: {

  },
  mounted() {
    $(".monthModal").modal({
      backdrop: false
    });
  },
  methods: {

  }
}