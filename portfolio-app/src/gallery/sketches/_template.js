const title = "Sketch Title";

const desc = "Description of the sketch";

const initState = {};

function getInputs(win) {
    win.onParameterChange = (event) =>
        win.setState({ parameter: +event.target.value });

    return (
        <>
            <label htmlFor="parameter">Parameter: </label>
            <input
                id="parameter"
                type="range"
                min="0"
                max="255"
                onChange={win.onParameterChange}
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

        _p5.background(0);
        _p5.noStroke();
    };
}

const SKETCH = {
    sketch: sketch,
    title: title,
    desc: desc,
    size: size,
    initState: initState,
    getInputs: getInputs,
};

export default SKETCH;
