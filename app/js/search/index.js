'use strict';

var app = require('angular').module('app');

app.controller('SearchController', require('./search.controller'));
app.service('SearchService', require('./search.service'));