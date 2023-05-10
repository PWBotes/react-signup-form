## For this form I split up each element into its own component and made them as configurable from the main app as possible by using props. 
## State is used to send the values of each component to the main app. Combined with UseEffect to get the updated values.
## All validation is done in the main app via a validate function that checks for empty fields and tickboxs, it also validates the email syntax and check if a number is entered in the contact number field.
## fields are red until valid values are entered and then turns green. 
## submit button is disabled until all inputs are valid
## when submit button is available and clicked a fullscreen loader modal appreas to mock submission and then the user is thanked for submitting with a modal displaying the name they have entered.

## To run the project clone the repositiory or download the repository from https://github.com/PWBotes/signup-form-assesement-1/archive/refs/heads/main.zip
## run npm install
## run npm start
