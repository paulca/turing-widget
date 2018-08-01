const nameLabel = document.createElement("label");
nameLabel.innerText = "Name";

const nameInput = document.createElement("input");
nameLabel.appendChild(nameInput);

const emailLabel = document.createElement("label");
emailLabel.innerText = "Email";

const emailInput = document.createElement("input");
emailLabel.appendChild(emailInput);

const commentsLabel = document.createElement("label");
commentsLabel.innerText = "Comments";

const commentsTextarea = document.createElement("textarea");
commentsLabel.appendChild(commentsTextarea);

const submit = document.createElement("input");
submit.type = "submit";
submit.value = "Submit";

const nameField = {
  field: nameLabel,
  input: nameInput
};

const emailField = {
  field: emailLabel,
  input: emailInput
};

const commentsField = {
  field: commentsLabel,
  input: commentsTextarea
};

export { submit, nameField, emailField, commentsField };
