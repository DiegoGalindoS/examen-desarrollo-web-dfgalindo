function esPrimo(numero) { //dfgalindo
    for ( let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
  
  function filtrarPrimos(arreglo) {
      return arreglo.filter(numero => esPrimo(numero)); //metodo filter nos permite filtrar, en este caso nos crea un arreglo solo con los numeros que han pasado la condicion dada
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17];
  const numerosPrimos = filtrarPrimos(numeros);
  console.log(numerosPrimos); //Resultado(Salida):[2,  3,  5, 7, 11, 13, 17]