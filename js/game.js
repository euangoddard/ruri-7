var MOVIE_SIDE = 600;
var CIRCLE_COUNT = 12;
var CIRCLE_DISPLACEMENT = MOVIE_SIDE / CIRCLE_COUNT;
var CIRCLE_OFFSET = CIRCLE_DISPLACEMENT / 2;

var get_random_radius = function () {
    return 30 + 15 * Math.random();
};

var pop_circle = function (e) {
    this.animate('500ms', {
        radius: 0,
        easing: 'bounceIn'
    });
};

var text1 = new Text('Happy 7th Birthday').addTo(stage).attr({
    fontFamily: 'Arial, sans-serif',
    fontSize: '65',
    textFillColor: 'white',
    y: 100,
    x: 25,
    selectable: false
  });
var text2 = new Text('Ruri').addTo(stage).attr({
    fontFamily: 'Arial, sans-serif',
    fontSize: '100',
    textFillColor: 'white',
    y: 250,
    x: 200,
    selectable: false
  });
var text3 = new Text('Love, Euan, Chloe & Eric').addTo(stage).attr({
    fontFamily: 'Arial, sans-serif',
    fontSize: '48',
    textFillColor: 'white',
    y: 400,
    x: 35,
    selectable: false
  });

var circle, fill_colour;
for (var i=0; i<CIRCLE_COUNT; i++) {
    for (var j=0; j<CIRCLE_COUNT; j++) {
        circle = new Circle(
            CIRCLE_OFFSET + CIRCLE_DISPLACEMENT * i,
            CIRCLE_OFFSET + CIRCLE_DISPLACEMENT * j,
            get_random_radius()
        );
        fill_colour = color('red').randomize('h');
        circle.fill(fill_colour);
        circle.stroke('#000', 2);
        circle.addTo(stage);
        circle.on('click', pop_circle);
    }
}