interface IValidateField {
    error: boolean;
    msg: string;
}

export function validateEmail(email:string): IValidateField {
    const error = !!email.search(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
    let msg = ''
    if (error) {
        msg = 'This must be in a valid email format'
    }
    return {msg, error}
}

export function validatePassword(password:string) : IValidateField {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
 
    let errors: string[] = [];
    if (!password.match(lowerCaseLetters))
        errors.push("A lowercase letter")

    if (!password.match(upperCaseLetters))
        errors.push("A capital (uppercase) letter")

    if (!password.match(numbers))
        errors.push("A numbers letter")

    if(password.length < 8)
        errors.push("Minimum 8 characters")

    let msg = '';
    let error = errors.length != 0;
    if(error) {
        msg = "Password must contain the following: ";
        errors.forEach(e => msg += "\n" + e + ";");
    }
    return {msg, error}
}
