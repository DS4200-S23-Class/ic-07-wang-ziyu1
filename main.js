console.log("linked");
let WIDTH = 200;
let HEIGHT = 500;
let MARG = {left : 100, right : 100, top: 100, bottom: 100};
const data = [55000, 48000, 27000, 66000, 90000];
let VIS_WIDTH = WIDTH - MARG.left-MARG.right;
let VIS_HEIGHT = HEIGHT- MARG.top - MARG.bottom;
const FRAME = 
d3.select("#vis")
    .append("svg")
        .attr("height", HEIGHT)
        .attr("width", WIDTH)
        .attr("class", "frame");
const MAX_Y = d3.max(data, (d) => {return d;});
const Y_SCALED = d3.scaleLinear()
                    .domain([0, MAX_Y + 50000])
                    .range([VIS_HEIGHT, 0]);
FRAME.selectAll("points")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", MARG.left)
            .attr("cy", (d)=>{return (Y_SCALED(d) + MARG.bottom)})
            .attr("r", 10)
            .attr("class", "point");

FRAME.append("g")
    .attr("transform", 
        "translate(" + 199 + "," + (VIS_WIDTH + MARG.left + ")"))
    .call(d3.axisLeft(Y_SCALED).ticks(7))
        .attr("font_size", "20px");

