$(document).ready(function() {
	var sections = [2, 6, 7, 7];
	// var w = window.innerWidth - 40;
	var w = 1520.0;
	var unit = w/22.0;
	var curX = 40;
	var path1 = new Path.Line([curX, 90], [curX, 110]);
	path1.strokeColor = 'black';

	for(var i = 0; i < sections.length; i++){
		var rectangle = new Path.Rectangle(curX, 90, sections[i]*unit, 10);
		rectangle.fillColor = 'pink';
		rectangle.onMouseDown = function(){
			alert(this);
		};
		var path2 = new Path.Line([curX + sections[i]*unit, 90], [curX + sections[i]*unit, 110]);
		path2.strokeColor = 'black';		
		curX = curX + sections[i]*unit;
	}
	var path3 = new Path.Line([curX, 90], [curX, 110]);
	path3.strokeColor = 'black';
	drawLine();
	createTicks(unit);
	createLabels(unit);
});

function drawLine(){
		// Create a Paper.js Path to draw a line into it:
	var path = new Path({
		strokeColor: '#000000',
		strokeCap: 'round' 
	});
	// Give the stroke a color
	path.strokeColor = 'black';
	var start = new Point(40, 100);
	// Move to start and draw a line from there
	path.moveTo(start);
	
	//TODO: use window dimensions instead?
	path.lineTo(start + [ 1520, 0 ]);
}

function createTicks (distBetweenTicks){
	for(var i = 40; i <= 1560; i=i+distBetweenTicks){
		var path = new Path.Line([i, 97], [i, 103]);
		path.strokeColor = 'gray';
	}
}

function createLabels(unit) {
	var text = new PointText({
		point: [50, 90],
		content: "Mumbai",
		fontSize: 15,
		fontFamily: "Aleo"
	});
}