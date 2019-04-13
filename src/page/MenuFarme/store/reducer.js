import { fromJS } from "immutable";
import * as constants from './constants';

const defaultState = fromJS({
    product_status: "停止",

    activeKey:"home",
    panes:[],
});

const openApane = (state, action) => {
    let panes = state.get('panes');
    let have = false;

    panes.forEach((pane, i) => {
        if (pane.key === action.key) {
            have = true;
        }
    });

    if(have){
        return state.merge({
            activeKey: action.key,
        });
    }else{
        return state.merge({
            panes: panes.push(action.pane),
            activeKey: action.key,
        });
    }
};

const changeActiveKey = (state, action) => {
    return state.merge({
        activeKey: action.activeKey,
    });
};

const closeApane = (state, action) => {
    let targetKey = action.key;
    let panes = state.get('panes');

    let activeKey = state.get('activeKey');
    let lastIndex = 0;
    let lastkey = '';
    panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            console.log('if');
            lastIndex = i - 1;
        }else{
            lastkey = pane.key;
        }
    });
    console.log(lastIndex);
    const newpanes = panes.filter(pane => pane.key !== targetKey);
    if (newpanes.size && activeKey === targetKey) {
        if (lastIndex >= 0) {
            console.log(newpanes);
            activeKey = lastkey;
        } else {
            activeKey = newpanes[0].key;
        }
    }
    console.log('activeKey');
    console.log(activeKey);

    return state.merge({
        panes: newpanes,
        activeKey: activeKey,
    });
};

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.OPEN_PANE:
            return openApane(state, action);
        case constants.CHANGE_ACTIVE_KEY:
            return changeActiveKey(state, action);
        case constants.CLOSE_PANE:
            return closeApane(state, action);
        default:
            return state;
    }
}