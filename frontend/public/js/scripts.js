function submitSubscription(event) {
  // var usernameValue = $("#username").val(); // Get value of username input
  // var emailValue = $("#email").val(); // Get value of email input
  // console.log("Username: " + usernameValue + ", Email: " + emailValue);

  //   let url = "https://fe04156e-b0a5-468a-a569-dab0a548bb56.mock.pstmn.io";

  //   var settings = {
  //     url: `${url}/transactions?startdate=${startdate}&enddate=${enddate}`,
  //     method: "GET",
  //     timeout: 0,
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   };

  //   var myArray = [];
  //   console.log("calling API");

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
});
