  function convert() {
    var suhu = document.getElementById("pilihan");
    var pilihansuhu = suhu.value;

    if (pilihansuhu  == "c") {
      var farenheit= ckeF().toFixed(2);
      var kelvin = ckeK();
      var reamur = ckeR ().toFixed(2);

      return document.getElementById("hasil1").innerHTML = 
      farenheit+ "°Farenheit" + " | " + kelvin + "°Kelvin" + " | " + reamur + "°Reamur";
    } else if (pilihansuhu  == "f") {
      var celcius = fkeC().toFixed(2);
      var kelvin = fkeK().toFixed(2);
      var reamur = fkeR().toFixed(2);

      return document.getElementById("hasil1").innerHTML = 
      celcius + "°Celcius" + " | " + kelvin + "°Kelvin" + " |" + reamur + "°Reamur" ;
    } else if (pilihansuhu  == "k") {
      var farenheit= kkeF().toFixed(2);
      var celcius = kkeC().toFixed(2);
      var reamur = kkeR().toFixed(2);

      return document.getElementById("hasil1").innerHTML = 
      farenheit+ "°Farenheit" + " | " + celcius + "°Celcius" + " | " + reamur + "°Reamur";
    } 
     
     else if (pilihansuhu  == "r") {
      var farenheit= rkeF().toFixed(2);
      var celcius = rkeC().toFixed(2);
      var kelvin = rkeK().toFixed(2);
      return document.getElementById("hasil1").innerHTML = 
      farenheit+ "°Farenheit" + " | " + celcius + "°Celcius" + " | " + kelvin + "°Kelvin";
     }
  }
 //formula konversi suhu R K C F


 function rkeK(){
    var r = document.getElementById("suhuinput").value;
    return (r * 5/4) + 273.15;
  }
  
  function rkeF(){
    var r = document.getElementById("suhuinput").value;
    return (r * 9 / 4) + 32;
  }
  
  function rkeC(){
    var r = document.getElementById("suhuinput").value;
    return (r * 5 / 4);
  }

  

function kkeC() {
    var k = document.getElementById("suhuinput").value;
    return k - 273.15;
  }
  
  function kkeF() {
    var k = document.getElementById("suhuinput").value;
    return (k - 273.15) * 9 / 5 + 32;
  }
  
  function kkeR(){
    var k = document.getElementById("suhuinput").value;
    return (k - 273.15) * 4 / 5 ;
  }
  

function ckeF() {
  var c = document.getElementById("suhuinput").value;
  return (c * 9 / 5) + 32;
}

function ckeK() {
    var c = parseFloat(document.getElementById("suhuinput").value);
    return c + 273.15;
  }

function ckeR() {
   var c = document.getElementById("suhuinput").value;
   return (c * 4/5);
}
 

function fkeC() {
  var f = document.getElementById("suhuinput").value;
  return (f - 32) * 5 / 9;
}

function fkeK() {
    var f = document.getElementById("suhuinput").value;
    return (f - 32) * 5 / 9 + 273.15;
  }

function fkeR(){
  var f = document.getElementById("suhuinput").value;
  return (f - 32) * 4 / 9;
}
 
function click(){
    document.getElementById('hasil1').innerHTML = ''
    document.getElementById('suhuinput').value = '' 
  };

