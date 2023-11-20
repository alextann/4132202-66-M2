
    var num = 10;
    let name = "Am";
    age = 19;
    const year = 2004;

    console.log(year);
    fruit = ["banana","apple","orange"];
    plant = {fruit:"banana", car:"nissan",color:"orange"};
    dataJson = {
    employee:[{name: "Am"} ,{ age: 19},{year:2004}],
    };
       
console.log(dataJson.employee[0].name);

let msg = name +year;

console.log(msg);

document.getElementById('title').innerHTML = msg;

$(function () {
    $("#title")
    .html(msg + "jQuery")
})