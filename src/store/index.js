import { createStore } from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import immutableTransform from "redux-persist-transform-immutable";
import storage from 'redux-persist/lib/storage';
import rootReducer from './initReducer';

const storageConfig = {
    transforms: [immutableTransform()],
    key: 'root', // 必须有的
    storage: storage, // 缓存机制
    blacklist: [], // reducer 里不持久化的数据,除此外均为持久化数据
};

const myPersistReducer = persistReducer(storageConfig, rootReducer);
const store = createStore(myPersistReducer);
export const persistStore1 = persistStore(store);
export default store;

// export const store = createStore(rootReducer);
