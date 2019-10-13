
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

