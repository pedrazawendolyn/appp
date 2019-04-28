// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del beep
		$('#vibrar').tap(function(){
			navigator.notificstion.vibrate(2000);
		}); //cierre de vibrate
	},false); //cierre del deviceready
}); //cierrado cumento ready