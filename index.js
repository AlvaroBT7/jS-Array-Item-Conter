window.addEventListener("load", () => {

    // counting and sorting cities an array

    function askCities(){
        let cities = [];
        while (confirm("¿Do you want to add one more city?")){
            let item = prompt("Write city's name");
            if (!item) break;
            cities.push(item);
        }
        if (cities.length < 1) {
            alert("Loading default cities preset...");
            return null;
        }
        else return cities;
    }

    const ciudades = askCities() || [
        "Madrid",
        "London",
        "Washington DC",
        "Paris",
        "Barcelona",
        "Alicante",
        "London",
        "London",
        "London",
        "London",
        "London",
    ]

    const list1 = document.querySelector(".list-1");
    const list2 = document.querySelector(".list-2");

    buildUl(list1, ciudades);

    function parseCityObjectArrToCityStringArr(arrOfObj){
        let arr = [];
        arrOfObj.forEach(cityItem => {
            arr.push(`Name: ${cityItem.city}, Appeared: <b style="color:#f00;">${cityItem.appeared}</b>`);
        });
        return arr;
    }

    function buildUl(ulElement, content){
        content.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = item;
            ulElement.appendChild(li);
        })
    }

    function mostFrequetCity(cities){
        let cityConter = {};
        cities.forEach(city => {
            cityConter[city] = !cityConter[city] ? 1: cityConter[city] += 1;
        })
        cityConter = Object.keys(cityConter).map(city => ({city: city, appeared: cityConter[city]}) ).sort((a, b) => b.appeared - a.appeared);
        return cityConter;
    }

    let sortedCities = mostFrequetCity(ciudades);
    sortedCities.forEach(city => console.log(city));

    sortedCities = parseCityObjectArrToCityStringArr(sortedCities);
    
    buildUl(list2, sortedCities);

})