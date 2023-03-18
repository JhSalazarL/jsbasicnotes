/* In JavaScript, a truthy value is a value that is considered 
true when encountered in a Boolean context. 
All values are truthy unless they are defined as falsy. 
That is, all values are truthy except
false , 0 , -0 , 0n , "" , null , undefined , and NaN . 
JavaScript uses type coercion in Boolean contexts.
*/
// !Valores Falsos

Boolean();
//false
Boolean(0);
//false
Boolean(null);
//false
Boolean(NaN);
//false
Boolean(undefined);
//false
Boolean(false);
//false
Boolean("");
//false

// *Valores Verdaderos

Boolean("a");
//true
Boolean(" "); //?El espacio se tiene encuenta como caracter
//true
Boolean(1); //?Cualquier tipo de numero a excepcion del "0" es true
//true
Boolean([]);
//true
Boolean({});
//true
Boolean(function(){});
//true
Boolean(true);
//true