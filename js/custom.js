var element = document.getElementById('battle_div');
var hammertime = new Hammer(element);
hammertime.get('pinch').set({ enable: true });
hammertime.on('pinch', function(ev) {
	console.log(ev);
});