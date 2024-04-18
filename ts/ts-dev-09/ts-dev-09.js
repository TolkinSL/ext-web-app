var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["LEFT"] = 1] = "LEFT";
    Directions[Directions["RIGHT"] = 2] = "RIGHT";
    Directions[Directions["BOTTOM"] = 3] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
function frame(elem, direction, tFunc) {
    if (direction === Directions.TOP) {
    }
    if (direction === Directions.LEFT) {
        console.log(tFunc);
    }
}
frame('id', Directions.LEFT, TimingFunc.EASE_IN);
