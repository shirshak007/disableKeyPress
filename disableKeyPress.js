/******************************************************************************************************
Disable keypress on any text field without making it disabled. Suppose in a date input field you
want to block the user from putting unnecessary characters, you just want  jquery-datepicker 
to do its work.
================================================================
param : id | in html page inside script tag write this - disableKeyPress("#your_text_field_id");
================================================================
example: 
--------------
<script src="/js/disableKeyPress.js"></script>
<script> 
	disableKeyPress("#date");
</script>
*******************************************************************************************************/

function disableKeyPress(id){
	$(id).keypress(function (e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode != 9) { //except tab
			return false;
		}
	});
	$(id).keydown(function (e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode != 9) { //except tab
			return false;
		}
	});
}
