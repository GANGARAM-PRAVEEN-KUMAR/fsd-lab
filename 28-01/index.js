function api1(city1){
    const api = "d5922abe793e1834340d79856273d53d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${api}`;
    
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.main.temp);
            document.getElementById("in1").innerHTML=data.name;
            document.getElementById("in2").innerHTML=data.main.temp;
            document.getElementById("in3").innerHTML=data.main.temp_min;
            document.getElementById("in4").innerHTML=data.main.temp_max;
        })
        .catch(error => {
            console.log('Error:', error);
        });
        
}
document.getElementById("btn").addEventListener("click",()=>{
    const city1 = document.getElementById("cityin").value;
    api1(city1);

});