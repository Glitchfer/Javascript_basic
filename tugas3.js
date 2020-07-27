console.log('Jawaban soal No.3');
console.log('Segitiga siku-suku berupa angka;');

let printSegitiga = "9";
if (typeof printSegitiga === "number") {
  for (printSegitiga; printSegitiga >= 1; printSegitiga--) {
    var out = '';
    
    for (let nilaiLanjutan = 1; nilaiLanjutan <= printSegitiga; nilaiLanjutan++){
      out = out + nilaiLanjutan;
    }

    console.log(out);
  }
} else {
  console.log("Data harus angka 7oi!");
}


console.log('\n');



/*
var segitigaAngka = 5;

while(segitigaAngka >= 1) {

    var outpuT = "";
    var nilaiAwal = 1;

        while(nilaiAwal <= segitigaAngka){
         
          outpuT = outpuT + nilaiAwal;
        nilaiAwal++

      }

  console.log(outpuT);
segitigaAngka--; 
}

*/
console.log('\n');










