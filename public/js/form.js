function postData() {
  var fullname = document.forms["regForm"]["contact-name"].value;
  var email = document.forms["regForm"]["contact-email"].value;
  var mobile = document.forms["regForm"]["contact-number"].value;
  //var countrycode = document.forms["regForm"]["countryCode"].value;
  var city = document.forms["regForm"]["your-city"].value;
  var pincode = document.forms["regForm"]["your-pin"].value;
  var expocity = document.forms["regForm"]["city"].value;
  var registertype = document.forms["regForm"]["type-user"].value;
  var companyname = "";
  var stallsize = "";

  var success = document.getElementById("success-alert");
  // var exist = document.getElementById("exist-alert");

  if (registertype == "exhibitor") {
    registertype = 1;
    companyname = document.forms["regForm"]["compName"].value;
    stallsize = document.forms["regForm"]["booth"].value;
  } else {
    registertype = 0;
  }

  var data = {
    name: fullname,
    email: email,
    phone: parseInt(mobile),
    countryCode: 91,
    city: city,
    pincode: parseInt(pincode),
    expoCity: expocity,
    role: registertype,
    companyName: companyname,
    boothSize: stallsize,
  };

  fetch("https://aimdc-expo.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    .then((data) => {
      success.style.display = "block";
      setInterval(window.location.reload(), 10000);
      // do something with the response data
    })
    .catch((error) => {
      // exist.style.display = "block";
      // setInterval((exist.style.display = "none"), 9000);
      console.error("Error:", error);
      // handle the error
    });
}
