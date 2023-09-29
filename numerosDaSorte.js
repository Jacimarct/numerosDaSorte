const numerosDaSorte = [37, 14, 26, 5, 94, 87];

for (const numero of numerosDaSorte) {
  if (numero % 2 === 0 && numero < 50) {
    console.log(`${numero} é par e menor que 50`);
  } else if (numero < 50) {
    console.log(`${numero} é impar e menor que 50`);
  } else if(numero > 50 && numero % 2 === 0) {
    console.log(`${numero} é par e maior que 50`);
  } else {  
    console.log(`${numero} é impar e maior que 50`);
  }
}
