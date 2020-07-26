console.log('Jawaban soal No.4');
console.log('data awal;');


let data = {
	id: 1, 
	name: "Leanne Graham", 
	username: "Bret", 
	email: "Sincere@april.biz", 
	address: {
		street: "Kulas Light", 
		suite: "Apt. 556",	
		city: "Gwenborough", 
		zipcode: "92998-3874"
	}, 
	phone: "1-770-736-8031 x56442", 
	website: "hildegard.org"
};

console.log(data);


//////////////////////////////////////////////////////////////////////////////////////////////////

// No.1
/*  Ubahlah data  diatas menggunakan spread operator menjadi: 
	name: nama anda
	email: email anda
	hobby: hobi anda
*/
console.log('\n');
console.log('(a). data yang dirubah;');


let addData = {
		name: "Arif Rahman",
		email: "a1.arifrahman.1213@gmail.com",
		hobby: "Naik gunung"
};

let newData = {...data, ...addData};

console.log(newData);

//////////////////////////////////////////////////////////////////////////////////////////////////

// No.2
// Ambilah data “street dan city” menggunakan destructuring.
console.log('\n');
console.log('(b). data yang diambil;');

let {street, city} = data.address;

console.log('street: '+ street,'\ncity: ' + city);