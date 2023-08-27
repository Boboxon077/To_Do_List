let form = document.querySelector("form");
let dialog = document.querySelector("#dialog");
let edit_button_dialog = document.querySelector("#dialog button");

// Html ul tegs
let ul = document.querySelector("#sortable");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  this_input = this.input_add;
  if (this_input.value.trim().length > 0) {
    ul.innerHTML =
      ul.innerHTML +
      `
    <li class="ui-state-default"><span>
    ${this_input.value}
    </span>
    <div class="buttons-li">
    <button class="delete">Delete</button>
    <button class="edit" id="opener">
    Edit
    </button>
    </div>
    </li>`;
    this_input.value = "";
  } else {
    alert("Inputni to'ldiring");
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON" && e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  } else if (
    e.target.tagName == "BUTTON" &&
    e.target.classList.contains("edit")
  ) {
    $("#dialog").dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 300,
      },
      hide: {
        effect: "explode",
        duration: 300,
      },
    });
    let edit_buttons = document.querySelectorAll("#opener");
    $("#dialog").dialog("open");
    let edit_input = document.querySelector("#edit_input");
    edit_input.value =
      e.target.parentElement.parentElement.firstChild.innerText;
  } else {
  }
  edit_button_dialog.addEventListener("click", function (b) {
    e.target.parentElement.parentElement.getElementsByTagName(
      "span"
    )[0].innerText = edit_input.value;
  });
});

edit_button_dialog.addEventListener("click", function (b) {
  document.querySelector(".ui-dialog");
});

// ! localStorage

$(function () {});

$(function () {
  $("#sortable").sortable({
    placeholder: "ui-state-highlight",
  });
  $("#sortable").disableSelection();
});
