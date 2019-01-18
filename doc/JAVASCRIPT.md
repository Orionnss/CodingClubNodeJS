# Les différences entre le C/C++ et le Javascript

## Le typage

En Javascript, les fonctions ne sont pas typées, ça veut dire qu'on peut retourner n'importe quel type de variable 

```
function	returnSomething(what) {
	if (what == "number")
		return (10);
	if (what == "string")
		return ("Bonjour");
	if (what == "float")
		return (10.3457);
}
```

La fonction ci-dessus est tout à fait correcte en Javascript.

Les variables n'ont pas de type non plus, on déclare des variables comme ci :

`var nomDeLaVariable = valeur;`

`const nomDeLaVariable = valeur;` pour une constante.

---

## Les différentes façons de créer une fonction en Javascript

```
function nameOfTheFunction(param1, param2, param3)
{
	return (0);
}
```

```
var nameOfTheFunction = function(param1, param2, param3)
{
	return (0);
}
```

```
var nameOfTheFunction = (param1, param2, param3) => {
	return (0);
}
```

```
var nameOfTheFunction = (param1, param2, param3) => 0;
```

## Syntaxe - Divers

Le `;` est optionnel en Javascript