const languageProficiency = document.getElementsByName('languageProficiency')
// console.log(languageProficiency)

const email = document.getElementsByName('email')
console.log(email);

function collectData(e){
    for (let i = 0; i < languageProficiency.length; i++) {
        if (languageProficiency[i].checked) {
            console.log(`selected language is : ${languageProficiency[i].value}`)
            break;
        }
    }
   
}
