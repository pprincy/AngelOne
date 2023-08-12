
 import AccountProfile from '../../components/account-profile/account-profile.vue';
 import AccountDpId from '../../components/account-dp-id/account-dp-id.vue';
 import AccountPersonalDetails from '../../components/account-personal-details/account-personal-details.vue';
 import AccountBankDetails from '../../components/account-bank-details/account-bank-details.vue';
 import AccountSegmentSubscriptions from '../../components/account-segment-subscriptions/account-segment-subscriptions.vue';

export default {
    name: 'profileMain',
    components: {
      AccountProfile, AccountDpId, AccountPersonalDetails, AccountBankDetails, AccountSegmentSubscriptions
    },
    props: [],
    data () {
      return {
        headerHeight: 0
      }
    },
    computed: {
    },
    created(){
    },
    mounted () {
    },
    methods: {
    }
  }
  
  
  