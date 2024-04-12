document.querySelector("#register").addEventListener("click", function () {
  const data = {
    name: document.querySelector("#registerName").value,
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        window.location.assign("./index.html");
      } else {
        console.log(data);
      }
    });
});

document.querySelector("#connection").addEventListener("click", function () {
  const data = {
    email: document.querySelector("#registerEmail").value,
    password: document.querySelector("#registerPassword").value,
  };
  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        window.location.assign("./index.html");
      } else {
        console.log(data);
      }
    });
});
