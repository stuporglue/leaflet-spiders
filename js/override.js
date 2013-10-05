L.Marker.prototype._origUpdate = L.Marker.prototype.update;
L.Marker.prototype.update = function(){
    // Convert to a pixel and jiggle it up to 5 pixels in any direction
    var pixel = this._map.latLngToLayerPoint(this._latlng);
    pixel.x += Math.round(Math.random()*10) - 5;
    pixel.y += Math.round(Math.random()*10) - 5;

    this._latlng = this._map.layerPointToLatLng(pixel);
    return this._origUpdate();
};


var spiders = [];
var spider;
var spiderIcon = new L.Icon({iconUrl:'img/spider.png'});
var lat,lng;

for(var i = 0;i<10;i++){
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
