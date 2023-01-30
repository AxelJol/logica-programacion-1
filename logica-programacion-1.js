alert ("Hola");

    const numero1 = Number (prompt("Ingrese primer numero"));
    const numero2 = Number (prompt("Ingrese segundo numero"));
    const numero3 = Number (prompt("Ingrese tercer numero"));

const ordernar = [numero1,numero2,numero3];

if ((numero1==numero2) && (numero2 && numero3)) {
    alert("Los numeros son iguales");
} else {
    alert ("Los numero son diferentes");
}

let numeroCentro = numero2;
alert(`El numero del centro es ${numeroCentro}`);

let numeroMenor = ordernar.sort ((a,b,)=>a-b);
alert (`Los numeros de menor a mayor son: ${numeroMenor}`);

let numeroMayor = ordernar.sort ((a,b,)=>b-a);
alert (`Los numeros de mayor a menor son : ${numeroMayor}`);


