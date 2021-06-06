

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F1cmFiaGtoYW5kYWdhbGUiLCJhIjoiY2ttbWwyM3lyMDd2bTJwcnpiMnA1OXFibSJ9.X6W-dnbEPXTbm327ZIOyvQ';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
  enableHighAccuracy:true
})
function successLocation(position)
{
console.log(position);
setupmap([position.coords.longitude,position.coords.latitude])
}

function errorLocation()
{
    setupmap();
}

function setupmap(center)
{
   
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
,center: center,
zoom:14

})

var nav = new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  });
 
  map.addControl(directions, 'top-left');



  

}


console.log(a);
a=10