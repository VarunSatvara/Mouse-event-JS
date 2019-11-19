document.onmousemove = animateCircles;

function animateCircles(event) {
    var circle = document.createElement("div");
    var colors = ["#1abc9c", '#e67e22', '#3498db', '#9b59b6', "#2c3e50", "#e74c3c"];
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = color;

    circle.style.transition = "all 0.5s linear 0s";

    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = "0";
}