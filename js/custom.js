$(document).read(function(){
	var element = document.getElementsByClassName('a-canvas')[0];
	var hammertime = new Hammer(element);
	element.addEventListener('click',function(){
		console.log('ok');
	});
	hammertime.get('pinch').set({ enable: true });
	hammertime.on('pinch', function(ev) {
		console.log(ev);
		var battle_ship = $('#battleship');
		battle_ship.attr('scale','0.8 0.8 0.8');
	});

});
