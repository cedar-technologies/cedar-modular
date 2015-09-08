'use strict';

/**
 * @ngdoc overview
 * @name cedarTechWebApp
 * @description
 * # cedarTechWebApp
 *
 * Main module of the application.
 */
angular.module('cedarTechWebApp', [
    'stakeholder.core',
    'app.widget'
  ]).constant('myConfig',{
    'backend': 'http://ec2-52-25-100-45.us-west-2.compute.amazonaws.com:8080/api/'
  });
