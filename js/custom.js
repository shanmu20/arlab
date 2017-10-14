$(document).ready(function(){
	var element = document.getElementsByClassName('a-canvas')[0];
	var hammertime = new Hammer(element);
	element.addEventListener('click',function(){
		console.log('ok');
	});
	hammertime.get('pinch').set({ enable: true });
	hammertime.on('pinch', function(ev) {
		console.log(ev);
		if (ev.type === 'pinchstart') {
			var battle_ship = $('#battleship');
			var scale_val = battle_ship.attr('scale');
			var scale_x = scale_val.x * .5;
			var scale_y = scale_val.y * .5;
			var scale_z = scale_val.z * .5;
			var final_val = scale_x + ' ' + scale_y + ' ' + scale_z;
			battle_ship.attr('scale',final_val);
		}
	});

});
