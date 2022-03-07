/*
    a. foot_to_meter: Takes a value for feet and returns the value in meters
    b. meter_to_foot: Takes a value for meters and returns the value in feet
    c. kilo_to_mile: Takes a value for kilometers and returns the value in miles
    d. mile_to_kilo: Takes a value for miles and returns the value in kilometers
    e. sqft_to_acres: Takes a values for square footage and returns the value in acres
    f. acres_to_sqft: Takes a value for acres and returns the value in sq feet.
    g. gallon_to_cup: Takes a value for gallons and returns the value in cups
    h. pounds_to_kg: Takes a value for pounds and returns the value in kilograms

*/
   

    function toMeters(feet) {
        return feet / 3.2808;
    }



    function toFeet(meters) {   
        return meters * 3.2808;
    }



    function toMiles(kilo) {
        return kilo * 0.6213;
    }


    function toKilo(miles) {
        return miles / 0.6213
    }



    function toAcres(sqft) {
        return sqft / 43560;
    }



    function toSqft(acres) {
        return acres * 43560;
    }



    function toCup(gallon) {
        return gallon * 16;
    }



    function toKg(pounds) {
        return pounds * 0.453592;
    }

module.exports = {
    toMeters,
    toFeet,
    toMiles,
    toKilo,
    toAcres,
    toSqft,
    toCup, 
    toKg
};
