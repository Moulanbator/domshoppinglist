const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button")

function addItem() {
    const inputValue = input.value;
    if (inputValue.trim() !== ""){
        const listItem = document.createElement("li");
        const spanItem = document.createElement("span");
        const deleteButton = document.createElement("button");

        spanItem.textContent = inputValue;
        deleteButton.textContent = "Delete";

        listItem.appendChild(spanItem);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = "";

        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
        input.focus();
    } else {
        alert("You didn't add anything dawg!");
    }
}

button.addEventListener("click", addItem);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});