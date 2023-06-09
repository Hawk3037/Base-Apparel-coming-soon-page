document.getElementById("reminderButton").addEventListener("click", function() {
    var gmailAddress = document.getElementById("gmailInput").value;
    var isValidFormat = validateGmailFormat(gmailAddress);

    if (isValidFormat) {
      var errorImage = document.querySelector(".error-image");
      errorImage.style.display = "none";
      var text=document.querySelector("h5")
      text.style.display="none";
      
      // Do something with the valid Gmail address
      console.log("Valid Gmail address: " + gmailAddress);
    } else {
      var errorImage = document.querySelector(".error-image");
      errorImage.style.display = "inline";
      var text=document.querySelector("h5");
      text.style.display="flex";
      var wronggmail = document.getElementById("gmailInput");
      wronggmail.style.borderColor="red";
      

      
      // Do something with the invalid Gmail address
      console.log("Invalid Gmail address: " + gmailAddress);
    }
  });

  function validateGmailFormat(gmailAddress) {
    // Implement your validation logic here
    // Return true if the format is valid, false otherwise
    // You can use regular expressions or other methods for validation
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    return emailRegex.test(gmailAddress);
  }