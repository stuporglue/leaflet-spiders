L.Spider = L.Marker.extend({

    // Anything we don't define will call up to the L.Marker object
    options: {
        icon: new L.Icon({iconUrl:'img/spider.png'})
    },
    initialize: function(){
        var lat = Math.random()*180 - 90;
        var lng = Math.random()*360 - 180;
        this._latlng = L.latLng(lat,lng);

        var self = this;
        setInterval(function(){
            self.crawl();
        },
        200
        );
    },
    crawl: function(){
        // how tall is a pixel? Move up to 5 pixels
        var pixel = this._map.latLngToLayerPoint(this._latlng);
        pixel.x += Math.round(Math.random()*10) - 5;
        pixel.y += Math.round(Math.random()*10) - 5;

        this._latlng = this._map.layerPointToLatLng(pixel);

        return this.update();
    }
});

L.spider = function(latlng,options){
    return new L.Spider();
};


//========================
// Everything down here is just initialization code for our page
// The code above could be distributed as a plugin or something

var spiders = [];

for(var i = 0;i<10;i++){
    spider = new L.Spider();
    spider.addTo(map);
    spiders.push(spider);
}
