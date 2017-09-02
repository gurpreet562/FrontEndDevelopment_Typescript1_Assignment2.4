class GenericClass<T>{
    personArray: T[]=[];
    constructor(i1:PersonDetails<T>,i2:AddressDetails<T>){
        this.personArray.push(i1.name);
        this.personArray.push(i2.city);
    }

}
interface PersonDetails<U>{
    name:U;
    

}
interface AddressDetails<V>{
   city:V;
   
}
let i1RefString:PersonDetails<string>={name:"abc"};
let i2RefString:AddressDetails<string>={city:"HYDERABAD"};

let genClass: GenericClass<string>=new GenericClass(i1RefString,i2RefString);

console.log(genClass);
