'use strict';
import '../css/listStyle.css'

export default class View {
    constructor( presenter ) {
        this.presenter = presenter;
        this.content = document.querySelector( '.content' );
        this.init();
    }

    init() {

    }

    getIphone( phone ) {
        const listTemplate = this.createListTemplate( phone );
        this.insertIntoDOM( listTemplate );
    }

    createListTemplate( { brandName, model, year, price } ) {
        return `
            <li class="liStyle">
                   <p>${ brandName }</p> 
                   <p>${ model }</p> 
                   <p>${ year }</p> 
                   <p>${ price }</p> 
            </li>
        `;
    }

    insertIntoDOM(template) {
        this.content.insertAdjacentHTML( "afterbegin", template );
    }
}


