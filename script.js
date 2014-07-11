//script.js -- Kilo9
//website canvas script
var index = 0;

var text = ['Hello all', 'Hallo Mama!', 'Hallo Papi!', 'This is Jeremy Bassi', 'How are you doing?', 'Thank you for visiting', 'Made using html5 canvas'];

init();

function init() {
	var canvas = document.getElementById('screen');

	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');

		//To get rid of blurriness
		ctx.translate(0.5, 0.5);

		window.setInterval(function () { update(ctx, canvas.width, canvas.height);}, 2000);
	}
}

function update(ctx, w, h) {
	//logic

	draw(ctx, w, h);
}

function draw(ctx, w, h) {

	ctx.fillStyle = 'orange';
	ctx.fillRect(0, 0, w, h);

	if (index < text.length) {
		ctx.fillStyle = 'blue';
		ctx.font = '40px Arial';
		var metrics = ctx.measureText(text[index]);
		var width = metrics.width;	
		ctx.fillText(text[index++], w / 2 - width / 2, h / 2);
	}
}