$(document).ready(function(){
	setTimeout(function(){
			var element = document.getElementsByClassName('a-canvas')[0];
			var hammertime = new Hammer(element);
			hammertime.get('pinch').set({ enable: true });
			hammertime.on('pinch', function(ev) {
				var battle_ship = $('#battleship');
				var scale_val = battle_ship.attr('scale');
				if (ev.type === 'pinch' && ev.additionalEvent == "pinchout") {
					
					var scale_x = scale_val.x + 0.05;
					var scale_y = scale_val.y + 0.05;
					var scale_z = scale_val.z + 0.05;
					var final_val = scale_x + ' ' + scale_y + ' ' + scale_z;
					
				}else if(ev.type === 'pinch'  && ev.additionalEvent == "pinchin"){
					if(scale_val.x>=0.2){
						var scale_x = scale_val.x - 0.05;
						var scale_y = scale_val.y - 0.05;
						var scale_z = scale_val.z - 0.05;
						var final_val = scale_x + ' ' + scale_y + ' ' + scale_z;
					}
				}
				battle_ship.attr('scale',final_val);
			});
	},1000);
});