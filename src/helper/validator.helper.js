
export const isEmailValid = (email) => {
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase()) && email;
};

export const isOnlyText = (text) => {
    let regExp = /^[A-Za-z ]+$/;
    return regExp.test(String(text)) && text;
};

export const isAlphaNumeric = (text) => {
    let regExp = /^[A-Za-z 0-9]+$/;
    return regExp.test(String(text)) && text;
};

export const isValidPhone = (phone) => {
    let regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,7}$/im;
    return regExp.test(String(phone)) && phone;
};
