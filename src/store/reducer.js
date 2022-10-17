import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = {
    menus: [
        {
            key: "sub1",
            label: "菜单一",
            children: [{
                key: "1",
                label: "子菜单1-1"
            }, {
                key: "2",
                label: "子菜单1-2"
            }]
        },
        {
            key: "sub2",
            label: "菜单二",
            children: [{
                key: "3",
                label: "子菜单2-1"
            }, {
                key: "4",
                label: "子菜单2-2"
            }]
        }
    ]
};

const fund = (arr, key, value) => {
    let data = [];
    for(let o of arr || []) {
        if(o.key === key) o.label = value;
        if(o.children && o.children.length) o.children = fund(o.children, key, value)
        data.push(o);
    }
    return data;
}

const Home = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_MENU_NAME:
            fund(state.menus, action.data.key, action.data.label)
            return fromJS(state).toJS();
        default:
            return state;
    }
}

export default Home;
