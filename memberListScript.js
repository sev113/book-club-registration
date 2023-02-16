// Variables
const bodyTag = document.querySelector("body");
const registeredTag = document.querySelector(".registered");
const userListTag = document.querySelector(".userList");
const formTag = document.querySelector(".form");
const nameTag = document.querySelector(".name");
const emailTag = document.querySelector(".email");
const phoneTag = document.querySelector(".phone");
const genderTag = document.querySelector(".gender");
const ageTag = document.querySelector(".age");
const tableTag = document.getElementById("tableID");

const url = "http://localhost:433/users";

const tbody = document.createElement("tbody");

// Show User Lists
const showUserList = (user) => {
  for (let i = 0; i < user.length; i++) {
    let userTag = document.createElement("tr");
    userTag.innerHTML = `
    <td scope="row" class="m-3">${i + 1}</td>
    <td class="m-3">${user[i].name}</td>
    <td class="m-3">${user[i].email}</td>
    <td class="m-3">${user[i].phone}</td>
    <td class="m-3">${user[i].gender}</td>
    <td class="m-3">${user[i].above16}</td>
    `;

    tbody.append(userTag);
    tableTag.append(tbody);
  }
};

// Fetching Data
const fetchData = async () => {
  const response = await fetch(url);
  const users = await response.json();
  showUserList(users);
};

fetchData();
