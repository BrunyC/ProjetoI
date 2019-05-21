const distance = (lat1, long1, lat2, long2) =>{
	var deg2rad = Math.PI / 180;
    var lat1 = lat1 * deg2rad;
    var long1 = long1 * deg2rad;
    var lat2 = lat2 * deg2rad;
    var long2 = long2 * deg2rad;

    a = (
        (1 - Math.cos(lat2 - lat1)) +
        (1 - Math.cos(long2 - long1)) * Math.cos(lat1) * Math.cos(lat2)
        ) / 2;
    let distance = (12742 * Math.asin(Math.sqrt(a))) * 1000
    
    return distance;
}

module.exports = distance;