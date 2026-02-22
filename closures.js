
var count=0

function counter(){
{
    count=count+1
}
    return count;
}
function creercounter(nombredepard) {
    var count = nombredepard;  // variable privée

    function compteur() {       // fonction interne
        count = count + 1;     // incrémente
        return count;           // retourne la valeur actuelle
    }

    return compteur;            // retourne la fonction interne
}   
  function pow(exponent) {
  return function(base) {
    return base**exponent;
  }
} 


