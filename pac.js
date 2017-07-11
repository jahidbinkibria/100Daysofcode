function a(num){
  var roman = "";

var possiblroman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
var possiblenumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

for(var i = 0; i<possiblenumber.length; i++){
  while(num>=possiblenumber[i]){
    roman = roman + possiblroman[i];
    console.log(roman)
    num = num-possiblenumber[i];
    console.log(num)
  }
}
  console.log(roman);
}
a(83)