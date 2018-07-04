function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(44.318647, 23.800865),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}