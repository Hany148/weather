// input location

let find_location = document.getElementById("find_location");

//  teble 1
let day_t_1 = document.getElementById("day_t_1");
let day_month_t_1 = document.getElementById("day_month_t_1");
let month_t_1 = document.getElementById("month_t_1");
let country_t_1 = document.getElementById("country_t_1");
let temp_t_1 = document.getElementById("temp_t_1");
let img_t_1 = document.getElementById("img_t_1");
let text_t_1 = document.getElementById("text_t_1");
let perc_t_1 = document.getElementById("perc_t_1");
let wind_t_1 = document.getElementById("wind_t_1");
let dir = document.getElementById("dir");

//  teble 2  
let day_t_2 = document.getElementById("day_t_2");
let img_t_2 = document.getElementById("img_t_2");
let min_temp_t_2 = document.getElementById("min_temp_t_2");
let max_temp_t_2 = document.getElementById("max_temp_t_2");
let text_t_2 = document.getElementById("text_t_2");

//  teble 3
let day_t_3 = document.getElementById("day_t_3");
let img_t_3 = document.getElementById("img_t_3");
let min_temp_t_3 = document.getElementById("min_temp_t_3");
let max_temp_t_3 = document.getElementById("max_temp_t_3");
let text_t_3 = document.getElementById("text_t_3");


//  data

let data = '';

let data_next_day = '';


//  API 2  

function getData(country) {
    let myHttp = new XMLHttpRequest();

    myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=c770802fc2504434ac5192838240601&q=${country}&days=3`);



    myHttp.send();

    myHttp.addEventListener("readystatechange", function () {
        if (myHttp.readyState == 4) {
            data = JSON.parse(myHttp.response);
            data_next_day = JSON.parse(myHttp.response).forecast.forecastday;
            displayToday(data);
            displayNextday(data_next_day);
        }
    })
}



function displayToday(data) {
    let date = new Date(data.location.localtime);
    day_t_1.innerHTML = date.toLocaleDateString("en-us", { weekday: "long" })
    month_t_1.innerHTML = date.toLocaleDateString("en-us", { month: "long" })
    day_month_t_1.innerHTML = date.getDate();
    country_t_1.innerHTML = data.location.name;
    text_t_1.innerHTML = data.current.condition.text;
    temp_t_1.innerHTML = `${data.current.temp_c}<sup>o</sup>C`;
    img_t_1.setAttribute("src", `https:${data.current.condition.icon}`);
    perc_t_1.innerHTML = `${data.current.humidity}%`;
    wind_t_1.innerHTML = data.current.wind_kph + ' km/h';
    dir.innerHTML = data.current.wind_dir;
}

function displayNextday(data_next_day) {

    let date_1 = new Date(data_next_day[1].date)
    day_t_2.innerHTML = date_1.toLocaleDateString("en-us", { weekday: "long" })
    img_t_2.setAttribute("src", `https:${data_next_day[1].day.condition.icon}`);
    min_temp_t_2.innerHTML = `${data_next_day[1].day.mintemp_c}<sup>o</sup>C`;
    max_temp_t_2.innerHTML = `${data_next_day[1].day.maxtemp_c}<sup>o</sup>C`;
    text_t_2.innerHTML = data_next_day[1].day.condition.text;

    let date_2 = new Date(data_next_day[2].date)
    day_t_3.innerHTML = date_2.toLocaleDateString("en-us", { weekday: "long" })
    img_t_3.setAttribute("src", `https:${data_next_day[2].day.condition.icon}`);
    min_temp_t_3.innerHTML = `${data_next_day[2].day.mintemp_c}<sup>o</sup>C`;
    max_temp_t_3.innerHTML = `${data_next_day[2].day.maxtemp_c}<sup>o</sup>C`;
    text_t_3.innerHTML = data_next_day[2].day.condition.text;

}




find_location.addEventListener("input", function () {
    let input_data = find_location.value;
    getData(input_data);
})




getData("cairo");



let nav_link = document.getElementsByClassName("nav-item");



nav_link[4].addEventListener("click", function () {
    window.location = "./html/contact.html"
})

