import { combineReducers} from "redux-immutable";

import { reducer as farmeReducer } from '../page/MenuFarme/store';
import { reducer as homeReducer } from '../page/home/store';
import { reducer as ordersetReducer } from '../page/order_set/store';
import { reducer as rollingReducer } from '../page/plane_operation/rolling_plan/store';
import { reducer as sendReducer } from '../page/plane_operation/send_plan/store';
import { reducer as setreservoirReducer } from '../page/set_reservoir/store';
import { reducer as setstateReducer } from '../page/set_state/store';
import { reducer as warehousedetailsReducer } from '../page/warehouse_details/store';
import { reducer as coilhistoryReducer } from '../page/history/coil_history/store';
import { reducer as orderhistoryReducer } from '../page/history/order_history/store';

const reducer = combineReducers({
    farme: farmeReducer,
    home: homeReducer,
    order_set: ordersetReducer,
    rolling_plan: rollingReducer,
    send: sendReducer,
    set_reservoir: setreservoirReducer,
    set_state: setstateReducer,
    warehouse_details: warehousedetailsReducer,
    coil_history: coilhistoryReducer,
    order_history: orderhistoryReducer,
});

export default reducer;