import React from 'react';
import {observable} from 'mobx';

// 被观察者
class Store {
   	@observable city = '北京';
    
}
const store = new Store();
export default store;