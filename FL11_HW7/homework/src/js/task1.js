let email = prompt('Please enter your e-mail', '');
let userData = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
};
const EMAIL_LENGTH = 6;
const PSWD_LENGTH = 5;

if (!email) {
    alert('Canceled');
} else if (email.length < EMAIL_LENGTH) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (userData[email]) {
    let inputPassword = prompt('Please enter your password');
    if (!inputPassword) {
        alert('Canceled')
    } else if (inputPassword === userData[email]) {
        let isPswdChange = confirm('Do you want to change your password?');
        if (!isPswdChange) {
            alert('You have failed the change.');
        } else if (isPswdChange) {
            let oldPswd = prompt('Please enter your old password');
            if (!oldPswd) {
                alert('Canceled');
            } else if (oldPswd === userData[email]) {
                let newPswd = prompt('Please  enter new password');
                if (newPswd.length < PSWD_LENGTH) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let doubleCheck = prompt('Please enter new password again');
                    if (doubleCheck === newPswd) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}

