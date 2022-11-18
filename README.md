# Form validation

Simple React app with form containing fields:

- username
- password
- email

- From contains checkbox toggle that controls visibility of email field.
- Form uses Formik library to enhance post submit validation.
- Submit message is shown, dependent on the results of validation.
- On successfull form submission, a fake API POST request is being sent - this mimics forms ability to throttle invalid
  API requests.
- Form contains basic unit tests written with react testing library / jest.

## Installation

- 'npm install'

## Starting app

- 'npm start'

## Run tests

- 'npm test'

### Preview

![image](https://user-images.githubusercontent.com/100487510/202670714-bf608389-4cf2-43a6-a5e8-ec0176240e7a.png)

![image](https://user-images.githubusercontent.com/100487510/202670780-99844c73-a1b5-4933-8385-1eb8f1ddb437.png)


### Demo

https://reg-form-dev.netlify.app/

### To-do's

- Use validation schema with Yup
- Evaluate & fix warnings on unit tests (related to manipulating form state)


