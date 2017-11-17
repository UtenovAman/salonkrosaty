
var app = angular.module("app", ['ngRoute', 'LocalStorageModule','ngAnimate','ngMessages'])
	.config(function(localStorageServiceProvider) {
	    			localStorageServiceProvider
	    				.setPrefix('Test')
	    				.setStorageType('sessionStorage')
	    				.setNotify(true, true)
	    		})