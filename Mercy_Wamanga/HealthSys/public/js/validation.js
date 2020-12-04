//Declare variables 
const surname = document.form.surname;
const givenname = document.form.givenname;
const occupation = document.form.occupation;
const dob = document.form.dob;
const residence = document.form.residence;
const nationality = document.form.nationality;
const category = document.form.nationality;
const genderF = document.form.Female;
const genderM = document.form.Male;

// const surnameText = /^[A-Za-z]+$/;
// const surnameText = /^[A-Za-z]+$/;

const surnameError= document.getElementById('surnameError');


const regVal= () => {
	if (!surname.value.match(surnameText)) {
		surname.style.border = '2px solid red';
		surnameError.innerText =
			'Invalid name.Please enter surname';
			surnameError.style.color = 'red';
			surname.focus();
		return false;
	}
	else{
		surname.style.border = '2px solid green';
		return false;
	}

}
