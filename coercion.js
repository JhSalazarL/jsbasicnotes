/*
Coerción

La coercion es la conversion automatica o implicita de valores de
un tipo de dato a otro (Ejemplo de cadena de texto a numero).
*/

//* Existen dos tipos de coercion:

/* Coercion implicita

Es cuando el lenguaje nos ayuda a cambiar el tipo de valor.

*/
//* Ejemplos:

4 + "7"; /* 47 */
4 * "7"; /* 28 */

/* Coercion explicita

Es cuando obligamos a que cambie el tipo de valor.

*/
//*Ejemplo1

String(10);
Number("10")
parseInt("10");

//*Ejemplo2

var a = 20;
var b = a + "";

console.log(b);
20

typeof b
'string'
var c = String(a); //! Esto obliga a que cambie el valor.

typeof c
'string'
console.log(c);

20

var d = Number(c);
typeof d