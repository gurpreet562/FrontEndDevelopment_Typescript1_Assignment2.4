var GenericClass = (function () {
    function GenericClass(i1, i2) {
        this.personArray = [];
        this.personArray.push(i1.name);
        this.personArray.push(i2.city);
    }
    return GenericClass;
}());
var i1RefString = { name: "abc" };
var i2RefString = { city: "HYDERABAD" };
var genClass = new GenericClass(i1RefString, i2RefString);
console.log(genClass);
