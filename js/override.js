// Customization Code
L.Marker.include({

    // Save off the original update function so we can use it later
    _origUpdate: L.Marker.prototype.update,

    // Define our new update function
    update: function(){
        // Convert to a pixel and jiggle it up to 5 pixels in any direction
        var pixel = this._map.latLngToLayerPoint(this._latlng);
        pixel.x += Math.round(Math.random()*10) - 5;
        pixel.y += Math.round(Math.random()*10) - 5;

        this._latlng = this._map.layerPointToLatLng(pixel);
        return this._origUpdate(); 
    }
});


// Add some spiders code
var spiders = [];
var spider,lat,lng;
var spiderIcon = new L.Icon({iconUrl:'img/spider.png'});

for(var i = 0;i<20;i++){
    lat = Math.random()*180 - 90;
    lng = Math.random()*360 - 180;
    spider = new L.Marker([lat,lng],{icon:spiderIcon});
    spider.addTo(map);
    spiders.push(spider);
}

setInterval(function(){
    for(var i = 0;i<spiders.length;i++){
        spiders[i].update();
    }
},200);
