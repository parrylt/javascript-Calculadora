alert ("Calculadora");
var numero= prompt ("Digite 1 para fazer adição, 2 para subtração, 3 para multiplicação e 4 para divisão.");



var n1= prompt ("Digite o primeiro número: ");
var n2 = prompt ("Digite o segundo número: ");
var totalmais = parseFloat (n1) + parseFloat (n2);
var totalmenos = parseFloat (n1) - parseFloat (n2);
var totaldiv = parseFloat (n1) / parseFloat (n2);
var totalmult = parseFloat (n1) * parseFloat (n2);

if (numero==1)
{
	document.write ("O resultado da adição é: " + totalmais);
}
else if (numero==2)
{
	document.write ("O resultado da subtração é: " + totalmenos);
}
else if (numero==3)
{
	document.write ("O resultado da multiplicação é: " + totalmult);
}
else if (numero==4)
{
	document.write ("O resultado da divisão é: " + totaldiv);
}
else
{
	document.write("Opção inválida!!");
}
