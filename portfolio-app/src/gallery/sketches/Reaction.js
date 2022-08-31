import ReactionThumb from "./ReactionThumb.png";

const title = "Reaction";

const desc = "This is inspired by the Belousov–Zhabotinsky reaction.";

const thumbnail = ReactionThumb;

const size = { width: 400, height: 400 };

let points = [
    { x: 70, y: 90 },
    { x: 300, y: 200 },
    { x: 500, y: 300 },
    { x: 150, y: 450 },
];

let offset = 0;

const initState = { speed: 1, color: { r: 215, g: 125, b: 45 }, size: 60 };

function getInputs(win) {
    win.onSpeedChange = (event) => {
        win.setState({ speed: +event.target.value });
    };

    win.onNumberChange = (event) => {
        let n = event.target.value;

        points = [];

        for (let i = 0; i < n; i++) {
            points.push({
                x: Math.random() * 600 + 100,
                y: Math.random() * 500 + 50,
            });
        }
    };

    win.onSizeChange = (event) => {
        win.setState({ size: +event.target.value });
    };

    win.onColorChange = (event) => {
        console.log("change");
        let color = event.target.value;

        let hexR = color[1] + color[2];
        let hexG = color[3] + color[4];
        let hexB = color[5] + color[6];

        let decR = parseInt(hexR, 16);
        let decG = parseInt(hexG, 16);
        let decB = parseInt(hexB, 16);

        win.setState({ color: { r: decR, g: decG, b: decB } });
    };

    return (
        <>
            <label htmlFor="speed">Speed: </label>
            <input
                id="speed"
                type="range"
                min="1"
                max="10"
                onChange={win.onSpeedChange}
            />

            <label htmlFor="number">Number: </label>
            <input
                id="number"
                type="range"
                min="3"
                max="5"
                onChange={win.onNumberChange}
            />

            <label htmlFor="size">Size: </label>
            <input
                id="size"
                type="range"
                min="20"
                max="100"
                onChange={win.onSizeChange}
            />

            <label htmlFor="color">Color: </label>
            <input id="color" type="color" onChange={win.onColorChange} />
        </>
    );
}

function sketch(_p5) {
    _p5.setup = function () {
        _p5.createCanvas(size.width, size.height);
    };

    _p5.draw = function () {
        _p5.resizeCanvas(_p5.props.width, _p5.props.height);

        let color = _p5.props.color;

        _p5.background(color.r, color.g, color.b);

        for (
            let r = _p5.props.width - (_p5.props.width % _p5.props.size);
            r >= 0;
            r -= _p5.props.size
        ) {
            // Stroke
            _p5.noFill();
            _p5.stroke(255);
            _p5.strokeWeight(10);

            for (var i in points) {
                let point = points[i];

                _p5.circle(point.x, point.y, r + offset);
            }

            // Fill
            _p5.fill(color.r, color.g, color.b);
            _p5.noStroke();

            for (var i in points) {
                let point = points[i];

                _p5.circle(point.x, point.y, r + offset);
            }
        }

        if (offset >= _p5.props.size) {
            offset = 0;
        } else {
            offset += _p5.props.speed / 2;
        }
    };
}

const Reaction = {
    sketch: sketch,
    title: title,
    desc: desc,
    thumbnail: thumbnail,
    size: size,
    initState: initState,
    getInputs: getInputs,
};

export default Reaction;
