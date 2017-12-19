import React from 'react';
import {observable} from 'mobx';

// 被观察者
function Store() {
    extendObservable(this, {
        city:'北京'
    })
}
