$('.overlay-link__preview-link').click(function(){
	$('.frame-wrap, .myframe').show();
	$('body').addClass('hidden-y');
});

$('#close-frame').click(function(){
	$('.frame-wrap').hide(300);
	$('body').removeClass('hidden-y');
});
