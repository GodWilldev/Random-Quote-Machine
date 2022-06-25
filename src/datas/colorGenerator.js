
var colors = ["primary", "secondary", "success", "danger", "warning", "info"];

export function colorGenerator(){
    return colors[Math.floor(Math.random() * colors.length)];
}