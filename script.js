function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here

    //Expressing the format of a valid input field.
    
    let Check = /^pet_[a-zA-Z0-9]+$/;

    //Statement to check the validator
    if (Check.test(input)){
        result = "Valid Syntax \u{1F7E2}";
    }else {
        result = "Invalid Syntax \ud83d\udd34";
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


