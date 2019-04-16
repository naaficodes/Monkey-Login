
//AUTHOR		:	ABDUL WAHID NAAFI
//INSTAGRAM	:	@IAM_NAAFI
function closeye()
{
	var x=document.getElementById("hands");
	var y=document.getElementById("animcon");
	y.style.backgroundImage="url('monkey_pwd.gif')";
	x.style.display="block";
	x.style.top="50%";
	x.style.transition="1s";
	// x.style.backgroundImage="url('faceclosed.png')";
}
function openeye()
{
	var x=document.getElementById("hands");
		var y=document.getElementById("animcon");
	y.style.backgroundImage="url('monkey.gif')";
	x.style.display="block";
	x.style.top="110%";
	x.style.transition="1s";
}