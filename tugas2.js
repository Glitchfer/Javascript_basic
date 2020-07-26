console.log('Jawaban soal No.2');

/////////////////////////////////////////////////////////////////////////////////////
console.log('Siswa Gibran mendapatkan hasil sebagai berikut;');

const ipa = parseInt(prompt('Masukkan nilai IPA'));
const mtk = parseInt(prompt('Masukkan nilai Matematika'));
const bIndo = parseInt(prompt('Masukkan nilai Bahasa Indonesia'));
const bInggris = parseInt(prompt('Masukkan nilai Bahasa Inggris'));

const rataRata = Number(ipa+mtk+bIndo+bInggris)/4;

//console.log(rataRata, typeof rataRata);

if (rataRata) {
	if (rataRata >=0 && rataRata <= 59) {
		 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = E");
	} else if (rataRata >=60 && rataRata <= 69) {
		 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = D");
	} else if (rataRata >=70 && rataRata <= 79) {
		 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = C");
	} else if (rataRata >=80 && rataRata <= 89) {
		 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = B");
	} else if (rataRata >=90 && rataRata <= 100) {
		 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = A");
	} else {
		console.log("nilai yang dimasukkan salah!");
	}
} else {
	console.log('Masukkan ulang nilai! \nada nilai yang belum dimasukkan \natau nilai bukan berupa angka');
}








console.log('\n');










//Hiraukan yang ada dibawah ini !!



/*
Exsperiment
/////////////////////////////////////////////////////////////////////////////////////
console.log('Siswa Rahman mendapatkan hasil sebagai berikut;');

let ipa = Number(prompt('Masukkan nilai IPA'));
let mtk = Number(prompt('Masukkan nilai Matematika'));
let bIndo = Number(prompt('Masukkan nilai Bahasa Indonesia'));
let bInggris = Number(prompt('Masukkan nilai Bahasa Inggris'));

const rataRata = (ipa+mtk+bIndo+bInggris)/4;


if (rataRata >=0 && rataRata <= 59) {
	 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = E");
} else if (rataRata >=60 && rataRata <= 69) {
	 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = D");
} else if (rataRata >=70 && rataRata <= 79) {
	 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = C");
} else if (rataRata >=80 && rataRata <= 89) {
	 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = B");
} else if (rataRata >=90 && rataRata <= 100) {
	 console.log('Rata-rata = ' + rataRata + '\n' + "Grade = A");
} else {
	console.log("Ada nilai yang belum dimasukkan/ nilai yang dimasukkan salah!");
}



/////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Siswa Sandi mendapatkan hasil sebagai berikut;');


function cekParameter(ipA, mtK, bIndO, bInggriS){
	avg = (ipA+mtK+bIndO+bInggriS)/4;
 if(ipA, mtK, bIndO, bInggriS){
   return console.log("Rata-rata = " + avg);
 }else{
   return console.log("Ada nilai yang belum dimasukkan");
 }
  
}
cekParameter(Number(prompt('Masukkan nilai ipA')),
			 Number(prompt('Masukkan nilai mtK')),
			 Number(prompt('Masukkan nilai bIndO')),
			 Number(prompt('Masukkan nilai bInggriS'))
			 );

if (avg >=0 && avg <= 59) {
	 console.log("Grade = E");
} else if (avg >=60 && avg <= 69) {
	 console.log("Grade = D");
} else if (avg >=70 && avg <= 79) {
	 console.log("Grade = C");
} else if (avg >=80 && avg <= 89) {
	 console.log("Grade = B");
} else if (avg >=90 && avg <= 100) {
	 console.log("Grade = A");
} else {
	console.log("Masukkan ulang nilai!");
}



/////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Siswa Claudya mendapatkan hasil sebagai berikut;');

function cekParameter(iPA, mTK, bInDO, bInggrIS){
	 const average = (iPA+mTK+bInDO+bInggrIS)/4;
	 
 if(average){

 		if (average >=0 && average <= 59) {
	 		console.log('Rata-rata = ' + average + '\n' + "Grade = E");
		} else if (average >=60 && average <= 69) {
			 console.log('Rata-rata = ' + average + '\n' + "Grade = D");
		} else if (average >=70 && average <= 79) {
			 console.log('Rata-rata = ' + average + '\n' + "Grade = C");
		} else if (average >=80 && average <= 89) {
			 console.log('Rata-rata = ' + average + '\n' + "Grade = B");
		} else if (average >=90 && average <= 100){
			console.log('Rata-rata = ' + average + '\n' + 'Grade = A')
		} else {
		console.log('Nilai yang dimasukkan salah')
		}
	 	
 } else {
   return console.log("Ada nilai yang belum dimasukkan \nMasukkan ulang nilai!");
 }
  
}
cekParameter(100,100,100,10);			 



/////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Siswa Raudya mendapatkan hasil sebagai berikut;');


function cekParameter(iPA, mTK, bInDO, bInggrIS){
	 const average = (iPA+mTK+bInDO+bInggrIS)/4;
	 
 if(average){

	if (average <= 100) {

		console.log("Rata-rata = " + average);
 		if (average >=0 && average <= 59) {
	 		console.log("Grade = E");
		} else if (average >=60 && average <= 69) {
			 console.log("Grade = D");
		} else if (average >=70 && average <= 79) {
			 console.log("Grade = C");
		} else if (average >=80 && average <= 89) {
			 console.log("Grade = B");
		} else {
			console.log('Grade = A')
		}

	} else {
		console.log('Nilai yang dimasukkan salah')
	}	
 	
 }else{
   return console.log("Ada nilai yang belum dimasukkan \nMasukkan ulang nilai!");
 }
  
}
cekParameter("1",1,1,1);




/////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Siswa Salsa mendapatkan hasil sebagai berikut;');


function cekParameter(ilmuPA, maTK, bahasaIndo, bahasaIng){

	 const avrge = (ilmuPA+maTK+bahasaIndo+bahasaIng)/4;
	 console.log(typeof ilmuPA, typeof maTK, typeof bahasaIndo, typeof bahasaIng );

	 
 if (typeof ilmuPA == "number" && typeof maTK == "number" && typeof bahasaIndo == "number" && typeof bahasaIng == "number") {
 		console.log("Rata-rata = " + avrge);
	 	if (avrge >=0 && avrge <= 59) {
		 		console.log("Grade = E");
			} else if (avrge >=60 && avrge <= 69) {
				 console.log("Grade = D");
			} else if (avrge >=70 && avrge <= 79) {
				 console.log("Grade = C");
			} else if (avrge >=80 && avrge <= 89) {
				 console.log("Grade = B");
			} else {
				console.log('Grade = A')
			}
 } else {
 	console.log('Masukkan ulang nilai! \nada nilai yang belum dimasukkan \natau nilai bukan berupa angka');
 }
  
}
cekParameter(76,77.9,90,100);





/////////////////////////////////////////////////////////////////////////////////////
console.log('\n');
console.log('Siswa Mumut mendapatkan hasil sebagai berikut;');


function cekParameter(science, math, ind, eng){

	 const average = (science+math+ind+eng)/4;
	 console.log(typeof science, typeof math, typeof ind, typeof eng );

	 
 if (typeof science == "number" && typeof math == "number" && typeof ind == "number" && typeof eng == "number") {
 		console.log("Rata-rata = " + average);
	 	if (average >=0 && average <= 59) {
		 		console.log("Grade = E");
			} else if (average >=60 && average <= 69) {
				 console.log("Grade = D");
			} else if (average >=70 && average <= 79) {
				 console.log("Grade = C");
			} else if (average >=80 && average <= 89) {
				 console.log("Grade = B");
			} else {
				console.log('Grade = A')
			}
 } else {
 	console.log('Masukkan ulang nilai');
 	if (typeof science !== 'number') {
 		console.log('Nilai IPA belum dimasukkan /\nnilai bukan berupa angka')
 	} else if (typeof math !== "number") {
 		console.log('Nilai Matematika belum dimasukkan /\nnilai bukan berupa angka')
 	} else if (typeof ind !== "number") {
 		console.log('Nilai Bahasa Indonesia belum dimasukkan /\nnilai bukan berupa angka')
 	} else if (typeof eng !== "number") {
 		console.log('Nilai Bahasa Inggris belum dimasukkan /\nnilai bukan berupa angka')
 	}
 }
  
}
cekParameter(100,77.9,90,100);

*/