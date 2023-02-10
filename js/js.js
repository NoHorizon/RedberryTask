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
const addMoreSchool = document.querySelector("#more-experience_button2");
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
let objExp1 = {};
let objExp2 = {};
let objSchool1 = {};
let objSchool2 = {};
let added = 0;
let addedSchool = 0;
let currentPage = 0;
let degreesObj = [];
const user = {
  name: "",
  surname: "",
  phone_number: "",
  email: "",
  image: "",
  about_me: "",
  experiences: [],
  educations: [],
};
window.addEventListener("DOMContentLoaded", async () => {
  degreesObj = await fetchingApiGet();
  console.log("007", degreesObj);
  let vae;
  for (const item of degreesObj) {
    const option = document.createElement("option");

    option.value = item.title;
    document.querySelector("#school-list").appendChild(option);
  }
});
back.addEventListener("click", () => {
  if (currentPage == 0) return;
  currentPage -= 1;
  content.style.cssText = `--width: -${
    contentHidden.clientWidth * currentPage
  }px;`;
  if (currentPage >= 2) {
    document.querySelector(".wrapper-resume").classList.remove("last");
  }
});

buttonPrev.addEventListener("click", () => {
  if (added == 0) return;
  document.querySelector(`.exp${added}`).classList.remove("active");
  document.querySelector(".separator12").classList.remove("active");
  document.querySelector(".position-field_first1").innerHTML = "";
  document.querySelector(".position-field_second1").innerHTML = "";
  document.querySelector(".right-contact_date-from1").innerHTML = "";
  document.querySelector(".right-contact_date-to1").innerHTML = "";
  document.querySelector(".right-contact_description1").innerHTML = "";
  positionInput1.classList.remove("good");
  employerInput1.classList.remove("good");
  toInput1.classList.remove("good");
  fromInput1.classList.remove("good");
  descriptionInput1.classList.remove("good");
  positionInput1.value = "";
  employerInput1.value = "";
  toInput1.value = "";
  fromInput1.value = "";
  descriptionInput1.value = "";
  addMoreExp.classList.remove("disabled");
  const index = user.experiences.findIndex((n, index) => index === added);
  if (index !== -1) {
    user.experiences.splice(index, 1);
  }
  added -= 1;
});
const fetchingApi = async (userObj) => {
  const url = "https://resume.redberryinternship.ge/api/cvs";
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: userObj,
  });
  console.log("end", user);
};
const fetchingApiGet = async (userObj) => {
  const url = "https://resume.redberryinternship.ge/api/degrees";
  const response = await fetch(url, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
/////////////////////////////////////////////////////////////////////////////////////////////
buttonNext.addEventListener("click", () => {
  if (currentPage == 2) return;
  console.log("sdsd");
  if (added == 0) {
    if (
      checked(
        positionInput,
        employerInput,
        fromInput,
        toInput,
        descriptionInput
      )
    ) {
      if (!user.experiences.includes(objExp1)) {
        objExp1 = createdExp(
          positionInput,
          employerInput,
          fromInput,
          toInput,
          descriptionInput
        );
        user.experiences.push(objExp1);
        currentPage += 1;
        content.style.cssText = `--width: -${
          contentHidden.clientWidth * currentPage
        }px;`;
        if (window.scrollY) {
          window.scroll(0, 0);
        }
        document
          .querySelector(".right-content_border2")
          .classList.add("active");
        document.querySelector(".toptitle").classList.add("active");
      }
    }
  }

  if (added == 1) {
    if (
      checked(
        positionInput,
        employerInput,
        fromInput,
        toInput,
        descriptionInput
      ) &&
      checked(
        positionInput1,
        employerInput1,
        fromInput1,
        toInput1,
        descriptionInput1
      )
    ) {
      if (!user.experiences.includes(objExp2)) {
        objExp2 = createdExp(
          positionInput1,
          employerInput1,
          fromInput1,
          toInput1,
          descriptionInput1
        );
        user.experiences.push(objExp2);
        currentPage += 1;
        content.style.cssText = `--width: -${
          contentHidden.clientWidth * currentPage
        }px;`;
        if (window.scrollY) {
          window.scroll(0, 0);
        }
        document
          .querySelector(".right-content_border2")
          .classList.add("active");
        document.querySelector(".toptitle").classList.add("active");
      }
    }
  }
});
download.addEventListener("change", (s) => {
  let reader = new FileReader();
  reader.readAsDataURL(download.files[0]);
  reader.onload = () => {
    chosenImage.setAttribute("src", reader.result);
    user.image = reader.result;
  };
});

ButtonNextContent.addEventListener("click", () => {
  if (currentPage == 2) return;
  if (
    nameInput.classList.contains("good") &&
    surnameInput.classList.contains("good") &&
    numberInput.classList.contains("good") &&
    emailInput.classList.contains("good")
  ) {
    currentPage += 1;
    content.style.cssText = `--width: -${
      contentHidden.clientWidth * currentPage
    }px;`;
    document.querySelector(".right-content_border").classList.add("active");
    document.querySelector(".right-content_title").classList.add("active");
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.length < 2) {
    nameInput.classList.add("error");
    fullnameDiv.classList.remove("active");
    nameInput.classList.remove("good");
    fullnameDiv.classList.add("error");
  }
  if (nameInput.value.length >= 2) {
    nameInput.classList.add("good");
    nameInput.classList.remove("error");
    fullnameDiv.classList.add("active");
  }
  nameField.innerHTML = nameInput.value;
  user.name = nameInput.value;
});

surnameInput.addEventListener("input", () => {
  if (surnameInput.value.length < 2) {
    surnameInput.classList.add("error");
    surnameDiv.classList.remove("active");
    surnameInput.classList.remove("good");
  }
  if (surnameInput.value.length >= 2) {
    surnameInput.classList.add("good");
    surnameInput.classList.remove("error");
    surnameDiv.classList.add("active");
  }
  surnameField.innerHTML = surnameInput.value;
  user.surname = surnameInput.value;
});

numberInput.addEventListener("input", () => {
  if (numberInput.value.length > 0) {
    phoneAssets.classList.add("active");
  }
  if (numberInput.value.length == 0) {
    phoneAssets.classList.remove("active");
  }
  if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(numberInput.value)) {
    numberInput.classList.remove("error");
    numberInput.classList.add("good");
    numberDiv.classList.add("active");
  } else {
    numberInput.classList.remove("good");
    numberInput.classList.add("error");
    numberDiv.classList.remove("active");
  }
  phoneField.innerHTML = numberInput.value;
  user.phone_number = numberInput.value;
});
emailInput.addEventListener("input", () => {
  if (emailInput.value.length > 0) {
    mailAssets.classList.add("active");
  }
  if (emailInput.value.length == 0) {
    mailAssets.classList.remove("active");
    emailDiv.classList.remove("active");
  }
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)) {
    emailDiv.classList.add("active");
    emailInput.classList.add("good");
    emailInput.classList.remove("error");
  } else {
    emailDiv.classList.remove("active");
    emailInput.classList.remove("good");
    emailInput.classList.add("error");
  }
  emailField.innerHTML = emailInput.value;
  user.email = emailInput.value;
});
aboutMeInput.addEventListener("input", () => {
  if (aboutMeInput.value.length > 0) {
    aboutMeAssets.classList.add("active");
    aboutMeInput.classList.add("good");
  }
  if (aboutMeInput.value.length == 0) {
    aboutMeAssets.classList.remove("active");
    aboutMeInput.classList.remove("good");
  }
  aboutMeField.innerHTML = aboutMeInput.value;
  user.about_me = aboutMeInput.value;
});

const good = (s) => {
  s.classList.add("error");
  s.classList.remove("good");
};
const error = (s) => {
  s.classList.remove("error");
  s.classList.add("good");
};
const cg = (input, div) => {
  if (input.value.length < 2) {
    good(input);
    div.classList.remove("active");
  }
  if (input.value.length >= 2) {
    error(input);
    div.classList.add("active");
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////
positionInput.addEventListener("input", () => {
  cg(positionInput, positionDiv);
  document.querySelector(".position-field_first").innerHTML =
    positionInput.value;
});

positionInput1.addEventListener("input", () => {
  cg(positionInput1, positionDiv1);
  document.querySelector(".position-field_first1").innerHTML =
    positionInput1.value;
});
positionInput2.addEventListener("input", () => {
  cg(positionInput2, positionDiv2);
  document.querySelector(".position-field_first2").innerHTML =
    positionInput2.value;
});

employerInput.addEventListener("input", () => {
  cg(employerInput, employerDiv);
  document.querySelector(
    ".position-field_second"
  ).innerHTML = `,  ${employerInput.value}`;
});
employerInput1.addEventListener("input", () => {
  cg(employerInput1, employerDiv1);
  document.querySelector(
    ".position-field_second1"
  ).innerHTML = `,  ${employerInput1.value}`;
});
employerInput2.addEventListener("input", () => {
  cg(employerInput2, employerDiv2);
  document.querySelector(
    ".position-field_second2"
  ).innerHTML = `,  ${employerInput2.value}`;
});

const cg2 = (input) => {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(input.value)) {
    input.classList.add("good");
    input.classList.remove("error");
  } else {
    input.classList.remove("good");
    input.classList.add("error");
  }
};
fromInput.addEventListener("input", () => {
  cg2(fromInput);
  document.querySelector(
    ".right-contact_date-from"
  ).innerHTML = `${fromInput.value}  `;
});
fromInput1.addEventListener("input", () => {
  cg2(fromInput1);
  document.querySelector(
    ".right-contact_date-from1"
  ).innerHTML = `${fromInput1.value}  `;
});
toInput.addEventListener("input", () => {
  cg2(toInput);
  document.querySelector(
    ".right-contact_date-to"
  ).innerHTML = `-  ${toInput.value}`;
});

toInput1.addEventListener("input", () => {
  cg2(toInput1);
  document.querySelector(
    ".right-contact_date-to1"
  ).innerHTML = `-  ${toInput1.value}`;
});
const cg3 = (input) => {
  if (input.value.length > 0) {
    input.classList.add("good");
    input.classList.remove("error");
  } else {
    input.classList.add("error");
    input.classList.remove("good");
  }
};
descriptionInput.addEventListener("input", () => {
  cg3(descriptionInput);
  document.querySelector(".right-contact_description").innerHTML =
    descriptionInput.value;
});
descriptionInput1.addEventListener("input", () => {
  cg3(descriptionInput1);
  document.querySelector(".right-contact_description1").innerHTML =
    descriptionInput1.value;
});
const createdExp = (pos, emp, start, due, desc) => {
  return {
    position: pos.value,
    employer: emp.value,
    start_date: start.value,
    due_date: due.value,
    description: desc.value,
  };
};
const checked = (
  positionInput,
  employerInput,
  fromInput,
  toInput,
  descriptionInput
) => {
  return (
    positionInput.classList.contains("good") &&
    employerInput.classList.contains("good") &&
    fromInput.classList.contains("good") &&
    toInput.classList.contains("good") &&
    descriptionInput.classList.contains("good")
  );
};
addMoreExp.addEventListener("click", () => {
  if (added >= 1) return;
  if (added == 0) {
    added += 1;
    document.querySelector(`.exp${added}`).classList.add("active");
    document.querySelector(".separator12").classList.add("active");
    addMoreExp.classList.add("disabled");
    return;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////
schoolInput.addEventListener("input", () => {
  if (schoolInput.value.length >= 2) {
    schoolDiv.classList.add("active");
    error(schoolInput);
  } else {
    schoolDiv.classList.remove("active");
    good(schoolInput);
  }
  document.querySelector(".tt-title").innerHTML = schoolInput.value;
});
schoolInput1.addEventListener("input", () => {
  if (schoolInput1.value.length >= 2) {
    schoolDiv1.classList.add("active");
    error(schoolInput1);
  } else {
    schoolDiv1.classList.remove("active");
    good(schoolInput1);
  }
  document.querySelector(".tt-title1").innerHTML = schoolInput1.value;
});

schoolDescInput.addEventListener("input", () => {
  if (schoolDescInput.value.length > 0) {
    error(schoolDescInput);
  } else {
    good(schoolDescInput);
  }
  document.querySelector(".right-content_school-desc").innerHTML =
    schoolDescInput.value;
});
schoolDescInput1.addEventListener("input", () => {
  if (schoolDescInput1.value.length > 0) {
    error(schoolDescInput1);
  } else {
    good(schoolDescInput1);
  }
  document.querySelector(".right-content_school-desc1").innerHTML =
    schoolDescInput1.value;
});
schoolInfoDegreeInput.addEventListener("input", () => {
  if (schoolInfoDegreeInput.value) {
    error(schoolInfoDegreeInput);
  } else {
    good(schoolInfoDegreeInput);
  }
  document.querySelector(".tt-school").innerHTML = schoolInfoDegreeInput.value;
});
schoolInfoDegreeInput1.addEventListener("input", () => {
  if (schoolInfoDegreeInput1.value) {
    error(schoolInfoDegreeInput1);
  } else {
    good(schoolInfoDegreeInput1);
  }
  document.querySelector(".tt-school1").innerHTML =
    schoolInfoDegreeInput1.value;
});
schoolInfoDegreeDateInput.addEventListener("input", () => {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(schoolInfoDegreeDateInput.value)) {
    error(schoolInfoDegreeDateInput);
  } else {
    good(schoolInfoDegreeDateInput);
  }
  document.querySelector(".right-content_school-years").innerHTML =
    schoolInfoDegreeDateInput.value;
});
schoolInfoDegreeDateInput1.addEventListener("input", () => {
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(schoolInfoDegreeDateInput1.value)) {
    error(schoolInfoDegreeDateInput1);
  } else {
    good(schoolInfoDegreeDateInput1);
  }
  document.querySelector(".right-content_school-years1").innerHTML =
    schoolInfoDegreeDateInput1.value;
});
addMoreSchool.addEventListener("click", () => {
  if (addedSchool == 1) return;
  addedSchool += 1;
  document.querySelector(".adSchool").classList.add("active");
  document.querySelector(".separator23").classList.add("active");
  addMoreSchool.classList.add("disabled");
});
document.querySelector(".school-buttons_end").addEventListener("click", () => {
  if (addedSchool == 0) {
    if (
      schoolInput.classList.contains("good") &&
      schoolDescInput.classList.contains("good") &&
      schoolInfoDegreeInput.classList.contains("good") &&
      schoolInfoDegreeDateInput.classList.contains("good")
    ) {
      if (!user.educations.includes(objSchool1)) {
        const id = degreesObj.filter(
          (item) => item.title == schoolInfoDegreeInput.value
        );
        objSchool1 = {
          institute: schoolInput.value,
          degree_id: id[0].id,
          due_date: schoolInfoDegreeDateInput.value,
          description: schoolDescInput.value,
        };
        user.educations.push(objSchool1);
        document.querySelector(".wrapper-resume").classList.add("last");
        fetchingApi(user);
        console.log(user);
      }
    }
  } else if (addedSchool == 1) {
    if (
      schoolInput.classList.contains("good") &&
      schoolDescInput.classList.contains("good") &&
      schoolInfoDegreeInput.classList.contains("good") &&
      schoolInfoDegreeDateInput1.classList.contains("good") &&
      schoolInput1.classList.contains("good") &&
      schoolDescInput1.classList.contains("good") &&
      schoolInfoDegreeInput1.classList.contains("good") &&
      schoolInfoDegreeDateInput1.classList.contains("good")
    ) {
      if (!user.educations.includes(objSchool1)) {
        const id = degreesObj.filter(
          (item) => item.title == schoolInfoDegreeInput.value
        );

        objSchool1 = {
          institute: schoolInput.value,
          degree_id: id[0].id,
          due_date: schoolInfoDegreeDateInput.value,
          description: schoolDescInput.value,
        };
        user.educations.push(objSchool1);
      }
      if (!user.educations.includes(objSchool2)) {
        const id = degreesObj.filter(
          (item) => item.title == schoolInfoDegreeInput1.value
        );

        objSchool2 = {
          institute: schoolInput1.value,
          degree_id: id[0].id,
          due_date: schoolInfoDegreeDateInput1.value,
          description: schoolDescInput1.value,
        };
        user.educations.push(objSchool2);
      }
      document.querySelector(".wrapper-resume").classList.add("last");
      fetchingApi(user);
      console.log(user);
    }
  }
});
document
  .querySelector(".school-buttons_cancel")
  .addEventListener("click", () => {
    if (addedSchool == 0) return;
    document.querySelector(`.adSchool`).classList.remove("active");
    document.querySelector(`.separator23`).classList.remove("active");
    document.querySelector(`.tt-title1`).innerHTML = "";
    document.querySelector(`.tt-school1`).innerHTML = "";
    document.querySelector(`.right-content_school-years1`).innerHTML = "";
    document.querySelector(`.right-content_school-desc1`).innerHTML = "";

    schoolInput1.value = "";
    schoolInfoDegreeDateInput1.value = "";
    schoolDescInput1.value = "";
    schoolInfoDegreeInput1.value = "";
    addMoreSchool.classList.remove("disabled");
    const index = user.educations.findIndex(
      (n, index) => index === addedSchool
    );
    if (index !== -1) {
      user.educations.splice(index, 1);
    }
    addedSchool -= 1;
  });
