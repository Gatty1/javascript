const myScreenOutput = document.getElementById('result');
const myInfo = {
    myFirstName: 'Ajarat',
    myLastName:   'Gbolagade',
    myHeight: '1.4m',
    myCountry: 'Nigeria',
}

myScreenOutput.innerHTML= '<h2>' +'First Name:'+myInfo.myFirstName +'<br>'+ 'LastName:' +myInfo.myLastName +'<br>'
+ 'Height:' +myInfo.myHeight + '<br>' + 'Country:' + myInfo.myCountry + '</h2>';

console.log(myInfo);