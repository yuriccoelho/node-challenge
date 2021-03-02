const fs = require('fs');

let user = {
    fullname: 'John Appleseed',
    eid: '104',
    emailStudent: 'john.appleseed@exemplo.com',
    emailPedagogicalResponsible: 'dad.appleseed@exemplo.com',
    phonePedagogicalResponsible: '(11) 99991-1234',
    emailFinancialResponsible: 'mom.appleseed@exemplo.com',
    phoneFinancialResponsible: '(11) 99992-1234',
    group: '',
    studyGroup: '',
    invisible: 'yes',
    see_all: 'no'
};


// converte o objeto JSON em uma String
const data = JSON.stringify(user, null, 2);

// escreve a informação no json.
fs.writeFile('./output.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});