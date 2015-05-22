$('.ojo').click(function(){
	//$('.advertencia').toggle();
	$(this).parent().find('.duo-ocultar').toggle();
	$(this).toggle();
});


$('.duo-ocultar').click(function(){
	//$('.advertencia').toggle();
	$(this).parent().find('.ojo').toggle();
	$(this).toggle();
});

$('.ojodos').click(function(){
	//$('.advertencia').toggle();
	$(this).parent().find('.duodos-ocultar').toggle();
	$(this).toggle();
});


$('.duodos-ocultar').click(function(){
	//$('.advertencia').toggle();
	$(this).parent().find('.ojodos').toggle();
	$(this).toggle();
});