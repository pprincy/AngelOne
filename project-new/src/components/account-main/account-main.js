import $ from 'jquery';
import mCustomScrollBar from 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js';
// import profile from '../../assets/images/accounts-imgs/account-nav/profile.svg';
// import settings from '../../assets/images/accounts-imgs/account-nav/settings.svg';
// import aboutUs from '../../assets/images/accounts-imgs/account-nav/about-us.svg';
// import language from '../../assets/images/accounts-imgs/account-nav/language.svg';
// import refer from '../../assets/images/accounts-imgs/account-nav/refer-earn.svg';
import AccountProfileMain from '../../components/account-profile-main/account-profile-main.vue';
import Accountaboutus from '../../components/account-about-us/account-about-us.vue';
import AccountLanguage from '../../components/account-language/account-language.vue'
import Accountsetting from '../../components/account-setting/account-setting.vue';
import AccountLogoutModal from '../../components/account-logout-modal/account-logout-modal.vue';
import AccountKeyboardShortcuts from '../account-keyboard-shortcuts/account-keyboard-shortcuts.vue';

export default {
  name: 'menu',
  components: {
    mCustomScrollBar,
    AccountProfileMain,
    Accountaboutus,
    AccountLanguage,
    Accountsetting,
    AccountLogoutModal,
    AccountKeyboardShortcuts
  },
  props: [],

  data() {
    return {
      selected: undefined,
      items: [{
          id: 1,
          className: 'profile',
          iconName: 'custom-user',
          name: 'Profile',
          content: 'Manage personal and bank details',
          link: '#profile',
          active: true
        },
        {
          id: 2,
          className: 'settings',
          iconName: 'custom-settings',
          name: 'Settings',
          content: 'Manage security and user preferences',
          link: '#settings',
          active: false
        },
        {
          id: 3,
          className: 'about-us',
          iconName: 'custom-about-us',
          name: 'About Us',
          content: 'About, Web Links, Membership Details',
          link: '#aboutus',
          active: false
        },
        {
          id: 4,
          className: 'language',
          iconName: 'icon-language',
          name: 'Language',
          content: 'English',
          link: '#language',
          active: false
        },
        {
          id: 5,
          className: 'refer-earn',
          iconName: 'custom-refer-earn',
          name: 'Refer & Earn',
          content: 'Get exciting rewards',
          link: '#referEarn',
          active: false
        },
        {
          id: 6,
          className: 'keyboard-shortcuts',
          iconName: 'icon-baseline-chart',
          name: 'Keyboard Shortcuts',
          content: 'For Navigation & Placing orders',
          link: '#KeyboardShortcuts',
          active: false
        },
      ]
    }
  },
  computed: {},
  mounted() {
    $('.account_main-content-in').parents('body').addClass('acc_page');
    $(".side-quick-links").mCustomScrollbar();
    if($(window).width() > 767){
      $(".main-content .tab-pane").mCustomScrollbar({
        alwaysShowScrollbar: 0,
        mouseWheel: {
          scrollAmount: 100
        },
        scrollInertia: 30
  
      });
    }
    $(".scrollableContent").mCustomScrollbar({
      alwaysShowScrollbar: 0,
    });


  },
  methods: {}
}