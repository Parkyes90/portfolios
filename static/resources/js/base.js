var form = document.getElementById("login-form");

function getElement(nodeList) {
  var element;
  for (var i = 0; i < nodeList.length; i++) {
    return element = nodeList[i];
  }
  return element;
}

form.addEventListener("submit", function(e) {
  var applyFields = ["password", "password1", "password2"];

  for (var i = 0; i < applyFields.length; i++) {
    var field = getElement(document.getElementsByName(applyFields[i]));
    if (field) {
      field.value = hex_sha512(field.value);
    }
  }
});


