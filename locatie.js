get_geo_position();
function_on_succes(posision)
{
    document.getElementById("latitude").innerHTML="Latitude="+posision.coords.latitude;
    document.getElementById("longitude").innerHTML="Longitude="+posision.coords.longitude;
    document.getElementById("acc").innerHTML="Acuracy="+posision.coords.acuracy;
    document.getElementById("altitude").innerHTML="Altitude="+posision.coords.altitude;
    var latlon=posision.coords.latitude+ "," +posision.coords.longitude;
    var img_url="https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=YOUR_KEY";
    document.getElementById("map").innerHTML="<img src='"+img_url+"'>";
}
function_on_error(e)
{
    document.getElementById("text").innerHTML = e.message;
}

var geo_params={
    enableHighAccuracy:true,
timeout:1000,
maximumAge:0
};
function get_geo_position()
{
var geo = navigator.geolocation;
geo.getCurrentPosition(on_success, on_error, geo_params)
}
