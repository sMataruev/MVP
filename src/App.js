"use strict";

import Model from "./MVP/Model";
import View from "./MVP/View";
import Presenter from "./MVP/Presenter";

const model = new Model();
const presenter = new Presenter( );
const view = new View( presenter );

presenter.init( view, model );
