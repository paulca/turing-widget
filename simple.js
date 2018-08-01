(function() {
  var form = document.createElement("form");

  var title = document.createElement("h1");
  title.innerText = "Simple Widget";

  form.appendChild(title);

  var nameLabel = document.createElement("label");
  nameLabel.innerText = "Name";

  var nameInput = document.createElement("input");
  nameLabel.appendChild(nameInput);

  form.appendChild(nameLabel);

  var emailLabel = document.createElement("label");
  emailLabel.innerText = "Email";

  var emailInput = document.createElement("input");
  emailLabel.appendChild(emailInput);

  form.appendChild(emailLabel);

  var commentsLabel = document.createElement("label");
  commentsLabel.innerText = "Comments";

  var commentsTextarea = document.createElement("textarea");
  commentsLabel.appendChild(commentsTextarea);

  form.appendChild(commentsLabel);

  var submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";
  form.appendChild(submit);

  form.onsubmit = async function(event) {
    event.preventDefault();
    var response;
    var response = {
      name: nameInput.value,
      email: emailInput.value,
      comments: commentsTextarea.value
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
    console.log(content);
    form.remove();
    var response = document.createTextNode(
      `Thanks ${content.response.name}. Your response has been saved with id ${
        content.id
      }.`
    );
    element.appendChild(response);
  };

  var element;
  element = document.getElementById("turing-widget-simple");
  element.appendChild(form);
})();
