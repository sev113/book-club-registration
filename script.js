// Variables
const bodyTag = document.querySelector("body");
const registeredTag = document.querySelector(".registered");
const formTag = document.querySelector(".form");
const nameTag = document.querySelector(".name");
const emailTag = document.querySelector(".email");
const phoneTag = document.querySelector(".phone");
const genderTag = document.querySelector(".gender");
const ageTag = document.querySelector(".age");
const tableTag = document.getElementById("tableID");

const url = "http://localhost:433/users";

const tbody = document.createElement("tbody");

// Registered
const registered = () => {
  const registeredText = document.createElement("div");
  registeredText.classList.add("registeredText");
  registeredText.innerHTML = `
    <h4 class="text-success">
        Your account has been registered!
    <h4>
    <a href="memberList.html">
    <button class="btn btn-outline-info text-black">Click here to see member list.</button>
    </a>
    `;
  registeredTag.append(registeredText);
  registeredTag.style.display = "flex";
  formTag.style.display = "none";
};

// RegisterNew User
const registerNewUser = async () => {
  registered();
  const name = nameTag.value;
  const email = emailTag.value;
  const phone = phoneTag.value;
  const gender = genderTag.value;
  const age = ageTag.value;
  const newUser = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
    above16: age,
  };
  if (name || email || phone || gender || age) {
    const response = await fetch("http://localhost:433/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    });
    console.log(newUser);
    fetchData();
    nameTag.value = "";
    emailTag.value = "";
    phoneTag.value = "";
    genderTag.value = "";
    ageTag.value = "";
    console.log(response);
  } else {
    return;
  }
};

// Fetching Data
const fetchData = async () => {
  const response = await fetch("http://localhost:433/users");
  const users = await response.json();
};
