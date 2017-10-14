(function(){
	var element = document.getElementById('battleship');
	var hammertime = new Hammer(element);
	hammertime.get('pinch').set({ enable: true });
	hammertime.on('pinch', function(ev) {
		console.log(ev);
	});
})();