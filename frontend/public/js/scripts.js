function retrieveUserDetails(formData) {
  console.log(formData);

  var settings = {
    url: "https://fintechsg-devtoolkit2-t01.onrender.com/user/details",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(formData),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

function submitSubscription(event) {
  // var usernameValue = $("#username").val(); // Get value of username input
  // var emailValue = $("#email").val(); // Get value of email input
  // console.log("Username: " + usernameValue + ", Email: " + emailValue);

  //   let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io";

  //   var myArray = [];
  //   $.ajax(settings).done(function (response) {
  //     myArray = response;
  //     buildTable(myArray);
  //     console.log(myArray);
  //   });
  event.preventDefault();
}

$(document).ready(function () {
  $("#subscriptionForm").submit(function (e) {
    e.preventDefault(); // Prevent form submission
    var serializedData = $(this).serialize(); // Serialize form data

    var formData = {};

    serializedData.split("&").forEach(function (item) {
      var keyValue = item.split("=");
      formData[keyValue[0]] = decodeURIComponent(keyValue[1] || "");
    });

    console.log(formData);
  });

  $("#detailsForm").submit(function (e) {
    e.preventDefault(); // Prevent form submission
    var serializedData = $(this).serialize(); // Serialize form data

    var formData = {};

    serializedData.split("&").forEach(function (item) {
      var keyValue = item.split("=");
      formData[keyValue[0]] = decodeURIComponent(keyValue[1] || "");
    });

    retrieveUserDetails(formData);
  });
});
