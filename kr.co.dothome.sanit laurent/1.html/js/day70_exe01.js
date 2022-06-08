function pow2(n) {
    return n * n;
}

var p1 = {
    id: "p1",
    x: 150,
    y: 50
};
var p2 = {
    id: "p2",
    x: 300,
    y: 250
};
var select = null;

function getAngle() {

    var dist = Math.sqrt(pow2(p1.x - p2.x) + pow2(p1.y - p2.y));
    var l = document.getElementById("line");
    var cos = (p2.x - p1.x) / Math.sqrt(pow2(p2.x - p1.x) + pow2(p2.y - p1.y));
    var behind = p1.x < p2.x;
    var higher = p1.y > p2.y;
    l.style.width = (dist * 2) + "px";
    l.style.left = (p1.x - dist) + "px";
    l.style.top = (p1.y) + "px";

    l.style.transform = "rotateZ(" + (higher ? -1 : 1) * Math.acos(cos) * (180 / Math.PI) + "deg)";
}

var down = false

document.addEventListener("mousemove", function (e) {
    if (select) {
        select.x = e.pageX;
        select.y = e.pageY;
        var p = document.getElementById(select.id);
        p.style.left = (select.x - 5) + "px";
        p.style.top = (select.y - 5) + "px";
        getAngle();
    }
});n
document.addEventListener("mouseup", function (e) {
    if (!select) select = p1;
    else if (select == p1) select = p2;
    else select = null;
});
document.addEventListener("mousedown", function (e) {
    down = true;
    console.log("yopla");
});