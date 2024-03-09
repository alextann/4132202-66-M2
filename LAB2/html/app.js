var num = 10;
    let name = "Sorn";
    age = 22;
    const year = 2001;
    console.log(year);
    
    fruit = ["banana","apple","orange"];
    console.log(fruit[1]);

    plant = {fruit: "banana", acr: "nissan", color: "orange"};
    console.log(plant);

    dataJson = {
        employee:[
            {name: "Sorn"},
            {age: 22},
            {year: 2001},
        ]
    };

    console.log(dataJson.employee[0].name);
    let msg = name + year;
    msg = `${name} ${year}`;
    console.log(msg);
    document.getElementById("title").innerHTML = msg;
    $(function(){
        $('#title')
          .html(msg + 'jQuery')
          .addClass("red");
    });