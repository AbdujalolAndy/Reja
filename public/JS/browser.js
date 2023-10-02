const inputField = document.getElementById("input-field");

function itemTemplate(item) {
  return `                    
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">Change</button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">Delete</button>
        </div>
    </li>
    `;
}

document.getElementById("create-form").addEventListener("submit", (event) => {
  event.preventDefault();

  axios
    .post("/create-item", { reja: inputField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      inputField.value = "";
      inputField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qayta urinib korin");
    });
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-me")) {
    if (confirm("Rostan ham o'chirasizmi")) {
      const data_id = event.target.getAttribute("data-id");
      axios
        .post("/delete-item", { id: data_id })
        .then((response) => {
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => alert("Iltimos qayta urinib korin"));
      alert("Deleted Successfully");
    }
  }

  if (event.target.classList.contains("edit-me")) {
    const userInput = prompt(
      "O'zgartirish kiriting!",
      event.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML
    );
    const data_id = event.target.getAttribute("data-id");
    axios
      .post("/update-item", { id: data_id, new_item: userInput })
      .then((response) => {
        event.target.parentElement.parentElement.querySelector(
          ".item-text"
        ).innerHTML = userInput;
      })
      .catch((err) => {
        alert("Iltimos qayta urinib korin");
      });
  }
});
document
  .getElementsByClassName("delete-all")[0]
  .addEventListener("click", (e) => {
    axios
      .post("/delete-all", { delete_all: true })
      .then((response) => {
        document.location.reload();
      })
      .catch((err) => alert("qayta urinib ko'rin"));
  });
