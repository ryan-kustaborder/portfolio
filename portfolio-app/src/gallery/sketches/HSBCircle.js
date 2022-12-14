import HSBCircleThumb from "./HSBCircleThumb.png";

const title = "HSB Circle";

const desc = "This is a simple project for testing P5js in the site";

const size = { width: 400, height: 400 };

const initState = {
    saturation: 255,
    brightness: 255,
    segments: 24,
};

function getInputs(win) {
    win.onSaturationChange = (event) =>
        win.setState({ saturation: +event.target.value });

    win.onBrightnessChange = (event) =>
        win.setState({ brightness: +event.target.value });

    win.onSegmentsChange = (event) =>
        win.setState({ segments: +event.target.value });

    return (
        <>
            <label htmlFor="saturation">Saturation: </label>
            <input
                id="saturation"
                type="range"
                min="0"
                max="255"
                onChange={win.onSaturationChange}
            />

            <label htmlFor="brightness">Brightness: </label>
            <input
                id="brightness"
                type="range"
                min="0"
                max="255"
                onChange={win.onBrightnessChange}
            />

            <label htmlFor="segments">Segments: </label>
            <input
                id="segments"
                type="range"
                min="6"
                max="60"
                onChange={win.onSegmentsChange}
            />
        </>
    );
}

function sketch(_p5) {
    _p5.setup = function () {
        _p5.createCanvas(size.width, size.height);
        _p5.background(0);
        _p5.noStroke();
        _p5.colorMode(_p5.HSB, 360, _p5.width, _p5.height);
        _p5.radius = _p5.height / 2 - 50;
    };

    _p5.draw = function () {
        _p5.resizeCanvas(_p5.props.width, _p5.props.height);

        const saturation = _p5.map(_p5.props.saturation, 0, 255, 0, _p5.width);
        const brightness = _p5.map(_p5.props.brightness, 0, 255, 0, _p5.width);

        _p5.step = 360 / _p5.props.segments;

        _p5.background(0);
        _p5.noStroke();
        // Begins a triangle fan
        _p5.beginShape(_p5.TRIANGLE_FAN);
        // Set the center as the initial vertex
        _p5.vertex(_p5.width / 2, _p5.height / 2);
        for (var angle = 0; angle <= 360 + _p5.step; angle += _p5.step) {
            // Calculate the point on the circle given the angle
            var vx =
                _p5.width / 2 + Math.cos(angle * (Math.PI / 180)) * _p5.radius;
            var vy =
                _p5.height / 2 + Math.sin(angle * (Math.PI / 180)) * _p5.radius;
            // Add that point to the triangle fan
            _p5.vertex(vx, vy);

            let h = angle;
            let s = saturation;
            let b = brightness;

            _p5.fill(h, s, b);
        }
        _p5.endShape();
    };
}

const HSBCircle = {
    sketch: sketch,
    title: title,
    desc: desc,
    thumbnail: HSBCircleThumb,
    size: size,
    initState: initState,
    getInputs: getInputs,
};

export default HSBCircle;
