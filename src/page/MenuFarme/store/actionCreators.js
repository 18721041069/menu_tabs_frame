import * as constants from './constants';

const addApane = (pane, key) => ({
    type: constants.OPEN_PANE,
    pane: pane,
    key: key
});

const changeActiveKey = (activeKey) => ({
    type: constants.CHANGE_ACTIVE_KEY,
    activeKey: activeKey,
});

const closePane = (key) => ({
    type: constants.CLOSE_PANE,
    key: key,
});

export const openApane = (pane, key) => {
    return (dispatch) => {
        dispatch(addApane(pane, key));
    }
};

export const setActiveKey = (activeKey) => {
    return (dispatch) => {
        dispatch(changeActiveKey(activeKey));
    }
};

export const closeApane = (key) => {
    return (dispatch) => {
        dispatch(closePane(key));
    }
};