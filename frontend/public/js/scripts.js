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

  $.ajax(settings)
    .done(function (response) {
      console.log(response);

      $("#submitSuccessMessage").show();
      $("#submitSuccessName").text(response.name);
      $("#submitSuccessEmail").text(response.email);
      $("#submitSuccessPlanType").text(response.planType);
    })
    .fail(function (xhr, status, error) {
      console.log("Error: " + error);
      $("#submitErrorMessage").show();
    })
    .always(function () {
      console.log("Cleanup");
      $("#detailsForm :input").prop("readonly", false);
      $("#submitButton").prop("disabled", false);
    });
}

function submitSubscription(formData) {
  var fullName = $("#fullName").val(); // Get value of fullName input
  var email = $("#email").val(); // Get value of email input
  var savingsOption = $("input:radio[name=savingsOption] :selected").val(); // Get value of savings plan 
  console.log("fullName: " + fullName + ", Email: " + email + ", Savings: " + savingsOption);

  var settings = {
    url: "https://fintechsg-devtoolkit2-t01.onrender.com/newSubscription",
    method: "POST",
    timeout: 0,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: JSON.stringify(formData),
  };
 
  $.ajax(settings)
    .done(function (response) {
      console.log(response);

      // $("#submitSuccessMessage").show();
      // $("#submitSuccessName").text(response.name);
      // $("#submitSuccessEmail").text(response.email);
      // $("#submitSuccessPlanType").text(response.planType);
    })
    .fail(function (xhr, status, error) {
      console.log("Error: " + error);
      // $("#submitErrorMessage").show();
    })
    .always(function () {
      console.log("Cleanup");
      // $("#detailsForm :input").prop("readonly", false);
      // $("#submitButton").prop("disabled", false);
    }); 

  //   var myArray = [];
  //   $.ajax(settings).done(function (response) {
  //     myArray = response;
  //     buildTable(myArray);
  //     console.log(myArray);
  //   });
  // event.preventDefault();
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

    $("#submitSuccessMessage").hide();
    $("#submitErrorMessage").hide();
    $("#detailsForm :input").prop("readonly", true);
    $("#submitButton").prop("disabled", true);

    var serializedData = $(this).serialize(); // Serialize form data

    var formData = {};

    serializedData.split("&").forEach(function (item) {
      var keyValue = item.split("=");
      formData[keyValue[0]] = decodeURIComponent(keyValue[1] || "");
    });

    retrieveUserDetails(formData);
  });
});
