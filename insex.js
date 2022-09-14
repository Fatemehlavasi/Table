const userForm = document.querySelector("#userForm");
const tbody = document.querySelector(".table-group-divider");
const submit = document.querySelector("#userFormSubmit");
const keys = ["id", "first_name", "last_name", "phone", "email"];

let users = [];
function setUsers(newUsers) {
  users = [...newUsers];
  render(users);
}

function render(data = []) {
  tbody.innerHTML = "";
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.id = user.id;
    for (let key of keys) {
      const td = document.createElement("td");
      td.innerText = user[key];
      row.appendChild(td);
    }
    const td = document.createElement("td");
    //  add Delete button
    // const deleteButton = document.createElement("button");
    // deleteButton.classList.add("btn", "btn-danger");
    // deleteButton.innerText = "DELETE";
    // deleteButton.addEventListener("click", function (e) {
    //   deleteUser(user.id);
    // });
    //  add Update button
    // const updateButton = document.createElement("button");
    // updateButton.classList.add("btn", "btn-success");
    // updateButton.innerText = "UPDATE";
    // updateButton.addEventListener("click", function (e) {
    //   submit.value = "update";
    //   const row = e.target.parentElement.parentElement;
    //   for (let i = 0; i < row.childNodes.length - 1; i++) {
    //     const input = document.getElementById(keys[i]);
    //     input.value = row.childNodes[i].innerText;
    //   }
    // });
    // td.appendChild(deleteButton);
    // td.appendChild(updateButton);
    row.appendChild(td);
    tbody.appendChild(row);
  });
}



userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  if (submit.value === "update") {
    updateUser(data);
  } else {
    data.id = Math.floor(Math.random() * 1000);
    setUsers([...users, data]);
  }
  submit.value = "create";
  e.target.reset();
});

// function deleteUser(id) {
//   setUsers(users.filter((user) => user.id !== id));
// }

// function updateUser(data) {
//   setUsers(users.map((user) => (user.id == data.id ? data : user)));
// }
