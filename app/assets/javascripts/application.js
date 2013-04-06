// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.all
//= require twitter/bootstrap
//= require_tree .

$(document).ready(function() {
	// Click-Event for Welcome Tab
	$('#u813-4').click(function() {
		$.ajax({
	         type: "GET",
	         data: ( {value: "welcome"} ),
	         dataType: 'script'
		});
	});

	// Click-Event for Team Tab
	$('#u822-4').click(function() {
		$.ajax({
	         type: "GET",
	         data: ( {value: "team"} ),
	         dataType: 'script'
		});
	});

	// Click-Event for Partner Tab
	$('#u1036-4').click(function() {
		$.ajax({
	         type: "GET",
	         data: ( {value: "partner"} ),
	         dataType: 'script'
		});
	});

	// Click-Event for Contact Tab
	$('#u809-4').click(function() {
		$.ajax({
	         type: "GET",
	         data: ( {value: "contact"} ),
	         dataType: 'script'
		});
	});
});