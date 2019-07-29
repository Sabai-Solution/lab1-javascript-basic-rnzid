function validateEmptyValues() {
	var txtemail = document.getElementById('txtemail').value;
	var txtusername = document.getElementById('txtusername').value;
	var txtpassword = document.getElementById('txtpassword').value;

	var appendError="";
	if(txtemail == "")
	{
		appendError = "email";
	}
		if(txtusername == "")
	{
		if (appendError != "") {
			appendError = appendError +" and "
		}
		appendError = appendError + " uname ";
	}
		if(txtpassword == "")
	{
		if (appendError != "") {
			appendError = appendError+ " and "
		}
		appendError =appendError + " password "
	}
	if (appendError != "") {
		appendError = appendError+" cannot be empty ";
		alert(appendError);
		return false;
	}
	else
	{
		return true;
	}
	// body...
}
