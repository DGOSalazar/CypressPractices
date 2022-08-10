let Variable="Diego"
let array= ["fruta","dulce","pan"]

function suma (ar1,ar2) {
    let sumatoria=ar1*ar2
    return sumatoria
}
let arraydata = {
    nombre:"diego",
    apellido:"salazar",
    edad:"21"
}
console.log("imprimer array",arraydata.nombre+"y",arraydata.edad)

let Variable2=parseInt(Variable)

array.forEach(function(elemento,indicem,arrays){
    console.log("elemento:"+elemento)
    let indice=(parseFloat(indicem)+1)
    console.log("indice:"+indice)
    console.log("array:"+arrays)
});
let nuevoDatoAlFinal=array.push('cena')
let eliminarDatoAlFinal=array.pop()
let nuevoDatoAlPrincipio=array.unshift('dato')
let eliminarPrimero=array.shift()

let eliminarElementoPosicion=array.splice(buscarElemento)

let buscarElemento=array.indexOf('cena')
console.log(buscarElemento)
 
let arrayCopia=array.slice()

array.forEach(function(elemento,indicem,arrays){
    console.log(elemento,indicem)
});
arrayCopia.forEach(function(elemento,indicem,arrays){
    console.log(elemento,indicem)
});

//Encontrar posiciôn


let resultSum=sumatoria
console.log(sumatoria)

a=prompt("Dame el numero 1:")
b=prompt("Dame el numero 2:")
a=parseFloat(a)
b=parseFloat(b)
sum = a+b
alert(sum)



prompt//Funcion para abrir data en ventana del navegador
alert// abrir alerta con mensjae en navegador
push//

//IF
let edad=parseInt(prompt("Introduce tu edad"))
if(edad<18){
    alert("Eres menor de edad")
}else if(edad<60){
    alert("eres segunda edad")
}else{
    alert("eres tercera edad")
}

let edad2=parseInt(prompt("Introduce tu edad"))
let peso=parseInt(prompt("Introduce tu peso"))

if(edad<18 && peso<60){
    alert("Eres menor de edad")
}else if(edad<60 || peso>60){
    alert("eres segunda edad")
}else{
    alert("eres tercera edad")
}

let edad3=parseInt(prompt("Introduce tu edad"))

function validarEdad(e){

    if(edad3<18){
        alert("Eres menor de edad")
    }else if(edad3<60 || peso1>60){
        alert("eres segunda edad")
    }else{
        alert("eres tercera edad")
    }
}

//SWITCH

validarEdad(edad3)

let product=prompt("Introduce el producto: gansito, barrita,duros")
function CostoFruta(produ) {
    switch(produ){
        case 'gansito':
            alert("$20 ")
        break;
        case 'barrita':
            alert("$10 ")
        break;
        default :
            alert("$13")
        break;
    }
}

CostoFruta(product)

//FOR
let x=0

for(x=1;x<=20;x++){
    alert(x)
}

let x1=prompt("Que tabla quieres?")

for(let k=1;k<11;k++){
    console.log(k*x1)
}

//For arrays
let datos =[2,4,2,3,1,2,31,4,2,3,4,5,2,3]
length//Te dice cual es el numero de elementos dentro del array
for(let k=1;k<datos.length;k++){
    console.log(x)
}
//For IN

const obj ={
    a:1,
    b:20,
    c:32
}
for (let letter in obj){
    console.log(`${letter}:${obj[letter]}`)
}

//TryCatch--Salvar a la aplicación de que truene en desiciones criticas
console.log(1+20)

try{
soyUnaFuncionQueNoExiste()
} catch(error){
    console.log("no sirvo uwu")
}
console.log("que hacemos?")

//arrowFunction solo es una manera nueva de escribir funciones.

const soyFuncionFlecha = () => {
    let respu="Soy una funcion flecha" 
    return respu;
}
soyFuncionFlecha();

const cuadrado = x => console.log(x*x)

cuadrado(20)

//Promesa
let y=10
console.log("prier ciclo")

const promesa1=new Promise((resolve,reject) =>{

    setTimeout(() =>{
        y=y*2+3;
        console.log("Segundo proceso.....") 
        resolve(y);
   },3000)

})

promesa1.then(res=> {
    console.log("Resultado:",res)
})  