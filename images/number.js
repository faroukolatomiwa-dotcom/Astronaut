console.log('50'+'50') //10
console.log(null)
console.log(1+1)
console.log(2-1)
console.log(6/3)
console.log(10%3)
console.log(3**3)

/* LOGICS */

/* AND */
console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)

/* OR */
console.log(true||true)
console.log(true||false)
console.log(false||true)
console.log(false||false)

/* NOT */
console.log(!true)
console.log(!false)

/* COMPARATIVE OPERATORS*/
/* == */
console.log(5=='5')

/* === */
console.log(5=='5')

function addNumbers(){
let firstName=25
let secondName=50
console.log(firstName+secondName)
}

addNumbers()



const add=function(){
    const x=5
    const y=5

    return x+y
}
   console.log(add()) 

   function greet(Farouk){
    const word='Good Morning'
    return word+' '+Farouk
   }
   console.log(greet('Farouk'))

function greet(name){
    return `Good Morning ${name}`
}
console.log(greet('Farouk'))


function addNumber (firstNum,secondNum){
const firstNumber=firstNum
const secondNumber=secondNum
const add=firstNumber+secondNumber
return add

}
console.log(addNumber(6,5))
console.log(addNumber(6,10))

/* function add(numberone,numbertwo){
    return numberone + numbertwo
}
console.log(add(6,9)) */

function areaOfcircle(radius,pi){
    const x=pi||3.142
    return x*(radius**2)
}
console.log( areaOfcircle(10,20))

function areaOfcircle(radius,pi=3.142){
    return pi*(radius**2)
}
console.log( areaOfcircle(10,20))

/* function scope(){
    const x=10
}
console.log(x) */ //undefined

/* function scope(){
    const x=10
    console.log(x)
}

scope() */
const z=99
function scope(){
    console.log(z)
}
scope()


function volOfCylinder(radius,h,pi=3.142){

    return pi*(radius**2)*h
}
console.log(volOfCylinder(11,20))

function volOfCylinder(radius,h,pi){
    const x=pi||3.142
    return x*(radius**2)*h
}
console.log(volOfCylinder(10,20,10))


const Car={
    Brand: `Volkswagen`,
    Model:2016,
    Color:`Black`,
    TintedGlass: true,
    AutoPilot: true
}
console.log(Car.Brand)
console.log(Car[`Model`])

const{Brand,Model,Color,TintedGlass,AutoPilot}=Car

console.log(AutoPilot)

/* FACTORY FUNCTION */

function triangle(b,h){
return{
    base:b,
    height:h
}
}
const triangle1=triangle(10,20)
console.log(triangle1)

const triangle2=triangle(2,40)
console.log(triangle2)

/* CONSTRUCTOR FUNCTION */


function Rectangle(a,b){

    this.lenght=a
    this.breadth=b
    return this
}
const Rec1=new Rectangle(6,4)
console.log(Rec1)
const Rec2=new Rectangle(2,3)
console.log(Rec2)


/* STRING OBJECTS  */
const nam=`Blackie@frenzy.com`
console.log(nam.startsWith(`B`))
console.log(nam.endsWith(`m`))
console.log(nam.includes(`@`))
console.log(nam.includes(`h`))

/* MATHS OBJECTS  */
console.log(Math.PI)
console.log(Math.sqrt(64))
console.log(Math.pow(4,2))
console.log(Math.sign(255))
console.log(Math.abs(-255))
console.log(Math.random())
console.log(Math.round(4.987))
console.log(Math.ceil(4.987))
console.log(Math.floor(4.987))

/* ARRAYS */

const fruits=[`apple`, `banana`, `mango`,`pineapple`]
console.log(fruits)

const animals=[`lion`, `tiger` ,`monkey`,`cat`,`zebra`, `leopard`]
console.log(animals)

/* ITERATING ELEMENTS WITHIN AN ARRAY */

/* animals.forEach(item)=>{
    console.log(item)
}
 */

/* FILTERING AN ARRAY */

const numArray=[1,5,4,2,10]

const evenNumbers=numArray.filter((item)=>{
return item %2===0

})
console.log(evenNumbers)


const date= new Date ()
console.log (date.toLocaleDateString())



console.log(Math.floor(4232345671232123.987))


function randonNum(){
    return Math.round(Math.random()*Math.pow(10,16))
}
console.log(randonNum())
