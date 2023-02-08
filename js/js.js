"use strict";
const headerCurrent = document.querySelector(".header-resume_current");
const content = document.getElementById("content");
const contentHidden = document.querySelector(".content-item");
const back = document.querySelector(".back");
const download = document.querySelector("#download");
const right = document.querySelector(".right");
const chosenImage = document.querySelector("#chosen-image");
const ButtonNextContent = document.querySelector(".next-content");
//inputs
const nameInput = document.querySelector("#fullname_name");
const surnameInput = document.querySelector("#fullname_surname");
const aboutMeInput = document.querySelector("#about-me_text-area");
const emailInput = document.querySelector("#email");
const numberInput = document.querySelector("#number");
const positionInput = document.querySelector("#position");
const employerInput = document.querySelector("#employer");
const fromInput = document.querySelector("#fromDate");
const toInput = document.querySelector("#toDate");
const descriptionInput = document.querySelector(".description_area");
const schoolInput = document.querySelector("#school");
const schoolInput1 = document.querySelector("#school1");
const schoolDescInput = document.querySelector("#school-desc");
const schoolDescInput1 = document.querySelector("#school-desc1");
const schoolInfoDegreeInput = document.querySelector(
  "#school-info_degree-input"
);
const schoolInfoDegreeInput1 = document.querySelector(
  "#school-info_degree-input1"
);
const schoolInfoDegreeDateInput = document.querySelector(
  ".school-info_degree-date"
);
const schoolInfoDegreeDateInput1 = document.querySelector(
  ".school-info_degree-date1"
);
//Peron info Fields
const nameField = document.querySelector(".right_contact-info_name");
const surnameField = document.querySelector(".right_contact-info_surname");
const emailField = document.querySelector("#mail-field");
const phoneField = document.querySelector("#phone-field");
//contact fields
const mailAssets = document.querySelector(".mail-phone_mail");
const phoneAssets = document.querySelector(".mail-phone_phone");
const aboutMeAssets = document.querySelector(".about-me_field-assets");
//divs
const fullnameDiv = document.querySelector(".fullname-div");
const surnameDiv = document.querySelector(".fullname-div-surname");
const emailDiv = document.querySelector(".email-div");
const numberDiv = document.querySelector(".number-div");
const positionDiv = document.querySelector(".position-div");
const employerDiv = document.querySelector(".employer-div");
const schoolDiv = document.querySelector(".school-div");
const schoolDiv1 = document.querySelector(".school-div1");
const schoolDescDiv = document.querySelector(".school-desc-div");
const schoolDescDiv1 = document.querySelector(".school-desc-div1");
//buttons
const buttonPrev = document.querySelector(".button-prev");
const buttonNext = document.querySelector(".button-next");
const addMoreExp = document.querySelector("#more-experience_button");
const addMoreScholl = document.querySelector("#more-experience_button2");
//exp1
const positionDiv1 = document.querySelector(".position-div1");
const employerDiv1 = document.querySelector(".employer-div1");
const fromInput1 = document.querySelector("#fromDate1");
const toInput1 = document.querySelector("#toDate1");
const descriptionInput1 = document.querySelector(".description_area1");
const positionInput1 = document.querySelector("#position1");
const employerInput1 = document.querySelector("#employer1");
//exp2
const positionDiv2 = document.querySelector(".position-div2");
const employerDiv2 = document.querySelector(".employer-div2");
const descriptionInput2 = document.querySelector(".description_area2");
const fromInput2 = document.querySelector("#fromDate2");
const toInput2 = document.querySelector("#toDate2");
const positionInput2 = document.querySelector("#position2");
const employerInput2 = document.querySelector("#employer2");
//exp3
const employerDiv3 = document.querySelector(".employer-div3");
const fromInput3 = document.querySelector("#fromDate3");
const toInput3 = document.querySelector("#toDate3");
const positionDiv3 = document.querySelector(".position-div3");
const descriptionInput3 = document.querySelector(".description_area3");
const positionInput3 = document.querySelector("#position3");
const employerInput3 = document.querySelector("#employer3");
//end
const aboutMeField = document.querySelector(".about-me_field");
const positionField = document.querySelector(".position-field");
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
//მარტო ქართული ტექსტი
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
/////////////////////////////////////////////////////////////////////////////////////////////
