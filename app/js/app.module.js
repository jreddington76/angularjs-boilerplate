'use strict';

var angular = require('angular');
require('angular-route');
require('angular-material');
require('angular-messages');

var app = angular
    .module("app", [
        "ngRoute",
        "ngMaterial",
        "ngMessages"
    ]);

app.config(require('./app.routes'));

require('./search');