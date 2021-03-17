window.addEventListener('load',()=>{
    //default location on map
    
    if(navigator.geolocation){
        let lat;
    let long;
        navigator.geolocation.getCurrentPosition(position=>{
            
            lat= position.coords.latitude;
            long= position.coords.longitude;
            let mymap = L.map('mapid').setView([lat, long], 13);
let myToken= 'pk.eyJ1IjoicmljaGlpZXN0b3dpZTciLCJhIjoiY2ttOW5vODV5MWpvMjJ4anhscG9wMmoyMSJ9.0AY4_xnBihMEvsgH4ZXjRA';
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${myToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
let marker = L.marker([lat, long]).addTo(mymap);
    
        })
    }

//listing the variables
let form = document.querySelector('.input-address')
let input= document.querySelector('.input-request')
let address= document.querySelector('#digits');
let location= document.querySelector('#location');
let timeZone= document.querySelector('#timezone');
let provider= document.querySelector('#provider');

//Handling form submission
form.addEventListener("submit",(e)=>{
    let inputVal= input.value;
    e.preventDefault();
    input.value=""
    
    //API data
    fetch(`https://ipapi.co/${inputVal}/json/`)
.then(function(response) {
  response.json().then(data => {
    console.log(data);
    //Declare variables from JSON data
    const{ip,city,country,latitude,longitude,org,utc_offset}= data
    //DOM manipulation
    address.textContent= ip;
    timeZone.textContent= `UTC-${utc_offset}`
    location.textContent= `${city}/${country}`;
    provider.textContent= org;
    ;
    // setting out the map
// let newMap = L.map('mapid').setView([latitude, longitude], 13);
// let myToken= 'pk.eyJ1IjoicmljaGlpZXN0b3dpZTciLCJhIjoiY2ttOW5vODV5MWpvMjJ4anhscG9wMmoyMSJ9.0AY4_xnBihMEvsgH4ZXjRA';
// L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${myToken}`, {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(newmap);
// let newMarker = L.marker([latitude, longitude]).addTo(newMap);
    
  });
})
.catch(function(error) {
  console.log(error);
  return "this error is due to "+ error;
});

   
})

})


