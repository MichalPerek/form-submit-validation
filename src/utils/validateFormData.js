export function validateFormData  (inputData)  {

    const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const userNameRegexp = /^(?=.{1,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/
    const passwordRegexp = /^(?=.{1,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/

    let result = false

    if (userNameRegexp.test(inputData.name) && passwordRegexp.test(inputData.password)) {
        result = true

        if (inputData.newsletter) {
            result = emailRegexp.test(inputData.email);
        }

    } else {
        result = false
    }

    return result

}

