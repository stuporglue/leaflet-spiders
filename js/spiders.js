// Add some spider code
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