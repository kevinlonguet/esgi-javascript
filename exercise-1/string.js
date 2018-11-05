function ucfirst(mots){
	return mots.charAt(0).toUpperCase() + mots.slice(1);
}

function capitalize(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

function camelCase(mots){
	return mots.split(' ').join('');
}

function snake_case(mots){
	return (mots.split(' ').join('_')).toLowerCase();
}

function leet(mots){
	
	for (var i = 0, x = mots.length; i < x; i++) {
		if (mots[i] === 'a' || mots[i] === 'A'){
		mots = mots.replaceAt(i,"4");
		}
		else if (mots[i] === 'e' || mots[i] === 'E'){
			mots = mots.replaceAt(i,"3");
		}
		else if (mots[i] === 'i' || mots[i] === 'I'){
		mots = mots.replaceAt(i,"1");
		}
		else if (mots[i] === 'O' || mots[i] === 'o'){
		mots = mots.replaceAt(i,"0");
		}
		else if (mots[i] === 'U' || mots[i] === 'u'){
		mots = mots.replaceAt(i,"(_)");
		}
		else if (mots[i] === 'Y' || mots[i] === 'y'){
		mots = mots.replaceAt(i,"7");
		}
	}
	return mots;
}

function verlan(chaine){
   chaine = chaine.split(" ");
   for (var i = 0, x = chaine.length; i < x; i++) {
       chaine[i] = reverse(chaine[i]);
   }
   return chaine.join(" ");
}

function reverse(str) {
   var newString = "";
   for (var i = str.length - 1; i >= 0; i--) {
       newString += str[i];
   }
   return newString;
}
console.log(verlan("Hello wolrd"));

function yoda(string){
    if (typeof string === "string") {
        return string.split(" ").reverse().join(" ")
    }
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

console.log(yoda("bonjour ceci est un test avec un y"));
		