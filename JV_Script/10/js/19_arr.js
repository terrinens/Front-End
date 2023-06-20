var arr = ["서울", "부산", "인천"];
var city = new Array ("Seoul", "Pusan", "Incheon");

for (let i = 0; i < city.length; i++) {
    document.write("배열 데이터 : " + city[i] + "<br />");
}

document.write ("<hr>");

document.write ("typeof city : " + typeof city + "<br />");
document.write ("Array.inArray(city) : " + Array.isArray(city) + "<br />");
document.write ("city instanceof Array : " + city instanceof Array + "<br />");