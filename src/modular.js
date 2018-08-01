import form from "./modular/form.js";
import getElement from "./modular/element.js";
import handler from "./modular/handler.js";
import {
  title,
  nameField,
  emailField,
  commentsField,
  submit
} from "./modular/fields.js";

form.appendChild(title);
form.appendChild(nameField.field);
form.appendChild(emailField.field);
form.appendChild(commentsField.field);
form.appendChild(submit);
form.onsubmit = handler(
  form,
  nameField.input,
  emailField.input,
  commentsField.input
);
getElement().appendChild(form);
