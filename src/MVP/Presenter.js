'use strict';
export default class Presenter {
    constructor() {

    }

    init( view, model ) {
        this.view = view;
        this.model = model;
        
        this.getPhone(this.model.phones)
    };

    getPhone( phones ) {
        phones.forEach( phone => this.view.getIphone(phone));
    }
    
    
}
