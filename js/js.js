document.querySelector("#fullname_name").addEventListener("input", function () {
  var inputValue = this.value;
  var regExp = /^[ა-ჰ]+$/;
  if (!regExp.test(inputValue)) {
    this.value = inputValue.replace(/[^ა-ჰ]+/g, "");
  }
});
document
  .querySelector("#fullname_surname")
  .addEventListener("input", function () {
    var inputValue = this.value;
    var regExp = /^[ა-ჰ]+$/;
    if (!regExp.test(inputValue)) {
      this.value = inputValue.replace(/[^ა-ჰ]+/g, "");
    }
  });
