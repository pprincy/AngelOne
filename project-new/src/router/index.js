import { createWebHistory, createRouter } from "vue-router";
import WatchListDashboard from '../pages/Watchlist/watchlist.vue';
import Login from '../pages/Login/login.vue';
import AddFunds from '../pages/AddFunds/add-funds.vue';
import WithdrawFunds from '../pages/WithdrawFunds/withdraw-funds.vue';
import Fundssummary from '../pages/Funds/funds.vue';
import Portfolio from '../pages/Portfolio/portfolio.vue';
import Orderhistory from '../pages/OrderHistory/order-history.vue';
import Account from '../pages/Account/account.vue';
import Holdingdetail from '../pages/HoldingDetail/holding-detail.vue';
import ClosedPositions from '../pages/ClosedPositions/closed-positions.vue';
import PledgeWithdrawMargin from '../pages/PledgeWithdrawMargin/pledge-withdraw-margin.vue';
import PledgeIncreaseMargin from '../pages/PledgeIncreaseMargin/pledge-increase-margin.vue';
import Riskmanagementpolicy from '../pages/RiskManagement/risk-management.vue';
import Reportsmain from '../pages/Reports/reports.vue';
import GpaySpot from '../pages/GpaySpot/gpayspot.vue';
import Markets from '../pages/Markets/markets.vue';

import Products from '../pages/Products/products.vue';
import Ipoclosed from '../pages/ClosedIPO/ClosedIPO.vue';
import Orderdetails from '../pages/OrderDetails/order-details.vue';
import LiveIpoOrderdetails from '../pages/LiveIPOOrderDetails/liveipo-order-details.vue';
import Advisory from '../pages/Advisory/advisory.vue'
import AdvisoryShortTerm  from "../pages/AdvisoryShortTerm/advisoryShortTerm.vue";
import AdvisoryLongTerm  from "../pages/AdvisoryLongTerm/advisoryLongTerm.vue"
import AdvisoryIntraDay  from "../pages/AdvisoryIntraDay/advisoryIntraDay.vue";
import AdvisoryCurrency  from "../pages/AdvisoryCurrency/advisoryCurrency.vue";
import AdvisoryCommodity  from "../pages/AdvisoryCommodity/advisoryCommodity.vue";

import PledgeTransaction from '../pages/PledgeTransaction/pledge-transaction.vue';
import UnpledgeTransaction from '../pages/UnpledgeTransaction/unpledge-transaction.vue';
import Ipofaq from '../pages/IOPFAQs/ipo-faqs.vue';
 import StockinAction from '../pages/StockinAction/StockinAction.vue';
import MarketSectorPerfomance from '../pages/MarketSectorPerfomance/market-sector-perfomance.vue';
import MarketMovers from '../pages/MarketMovers/market-movers.vue'

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/watchlist",
    name: "WatchListDashboard",
    component: WatchListDashboard,
  },
  {
    path: "/funds",
    name: "Fundssummary",
    component: Fundssummary,
  },
  {
    path: "/add-funds",
    name: "AddFunds",
    component: AddFunds,
  },
  {
    path: "/withdraw-funds",
    name: "WithdrawFunds",
    component: WithdrawFunds,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/order-history",
    name: "Orderhistory",
    component: Orderhistory,
  },
  {
    path: "/closed-position",
    name: "ClosedPositions",
    component: ClosedPositions,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/holding-detail",
    name: "Holdingdetail",
    component: Holdingdetail,
  },
  {
    path: "/pledge-withdraw-margin",
    name: "PledgeWithdrawMargin",
    component: PledgeWithdrawMargin,
  },
  {
    path: "/pledge-increase-margin",
    name: "PledgeIncreaseMargin",
    component: PledgeIncreaseMargin,
  },
  {
    path: "/risk-management-policy",
    name: "Riskmanagementpolicy",
    component: Riskmanagementpolicy,
  },
  {
    path: "/reports",
    name: "Reportsmain",
    component: Reportsmain,
  },
  {
    path: "/gpay-spot",
    name: "GpaySpot",
    component: GpaySpot,
  },
  {
    path: "/markets",
    name: "Markets",
    component: Markets,


  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/closedipo",
    name: "Ipoclosed",
    component: Ipoclosed,
  },
  {
    path: "/order-details",
    name: "Orderdetails",
    component: Orderdetails,
  },
  {
    path: "/liveipo-order-details",
    name: "LiveIpoOrderdetails",
    component: LiveIpoOrderdetails,
  },
  {
    path: "/Advisory",
    name: "Advisory",
    component: Advisory,
  },
  {
    path: "/AdvisoryShortTerm",
    name: "AdvisoryShortTerm",
    component: AdvisoryShortTerm,
  }  ,
  {
    path: "/AdvisoryLongTerm",
    name: "AdvisoryLongTerm",
    component: AdvisoryLongTerm ,
  }  ,
  {
    path: "/AdvisoryIntraDay",
    name: "AdvisoryIntraDay",
    component: AdvisoryIntraDay  ,
  }  
  ,
  {
    path: "/AdvisoryCommodity",
    name: "AdvisoryCommodity",
    component: AdvisoryCommodity  ,
  }  
  ,
  {
    path: "/AdvisoryCurrency",
    name: "AdvisoryCurrency",
    component: AdvisoryCurrency ,
  },
  {
    path: "/pledge-transaction",
    name: "PledgeTransaction",
    component: PledgeTransaction,
  }, 
  {
    path: "/unpledge-transaction",
    name: "UnpledgeTransaction",
    component: UnpledgeTransaction,
  },
  {
    path: "/ipo-faq",
    name: "Ipofaq",
    component: Ipofaq,
  },
  {
    path: "/StockinAction",
    name: "stock",
    component: StockinAction,
  },
  {
    path: "/market-sector-perfomance",
    name: "MarketSectorPerfomance",
    component: MarketSectorPerfomance,
  },
  {
    path: "/market-movers",
    name: "MarketMovers",
    component: MarketMovers,
  },
  

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;