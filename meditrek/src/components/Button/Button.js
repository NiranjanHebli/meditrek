import React from "react";

function handleSubmit(e) {
  e.preventDefault();
  const button = e.currentTarget.querySelector('[type="submit"]');
  button.classList.toggle("sending");
  button.blur();
  setTimeout(() => {
    button.classList.remove("sending");
    button.blur();
  }, 4500);
}

function Button() {
  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-4">
          <form onSubmit={handleSubmit}>
            <button
              type="submit"
              class="btn btn-outline-primary btn-lg btn-block"
            >
              Click Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Button;
