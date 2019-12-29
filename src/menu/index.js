'use strict';
import './menu.scss';

export default class Menu {
    constructor(  ) {

        this.init();
    }
    init(){
        const ul = document.querySelector( '.menu_ul' );

        ul.addEventListener( 'click', this.menuClickHandler.bind( this ) );
    }

    menuClickHandler( { target } ) {
        console.log( target );
    }
};
