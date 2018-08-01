import getElement from "./element.js";

export default function(form, nameInput, emailInput, commentsInput) {
  return async function(event) {
    event.preventDefault();
    var response;
    var response = {
      name: nameInput.value,
      email: emailInput.value,
      comments: commentsInput.value
    };
    let rawResponse = await fetch("http://localhost:7045/responses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ response: response, other: "something" })
    });
    const content = await rawResponse.json();
    var response = document.createTextNode(
      `Thanks ${content.response.name} for your comments.`
    );
    var blockquote = document.createElement("blockquote");
    blockquote.innerText = content.response.comments;

    var idStatement = document.createTextNode(
      `Your response has been saved with id ${content.id}`
    );

    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    form.appendChild(response);
    form.appendChild(blockquote);
    form.appendChild(idStatement);
  };
}
