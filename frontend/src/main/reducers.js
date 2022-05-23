import { combineReducers } from 'redux'
import tabReducer from '../common/tab/tabReducer'
import dashboardReducer from '../dashboard/dashboardReducer'
import BillingCycleReducer from '../billingCycle/billingCyclesReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billingCycle: BillingCycleReducer
})

export default rootReducer