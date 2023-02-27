const url = "https://api.openweathermap.org/data/2.5/"
const key = "9a1797dfab78213d9dd2e9cca251e96d"

const sehir = "sakarya";

let query = `${url}weather?q=${sehir}&appid=${key}&units=metric&lang=tr`
fetch(query)
  .then(response => response.json())
  .then(weather => {
    const temperature = weather.main.temp
    const icon = weather.main.icon
    const result = document.querySelector(".temp")
    result.innerHTML = temperature + " °C"
  })



const slider = document.querySelector("slide-wrapper")
 





