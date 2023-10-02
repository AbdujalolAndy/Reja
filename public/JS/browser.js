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
