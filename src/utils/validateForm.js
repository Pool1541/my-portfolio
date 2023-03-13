export default function validateForm({ name, email, message, messages }) {
  return {
    name: validateName(name, messages.name),
    email: validateEmail(email, messages.email),
    message: validateMessage(message, messages.message),
  };

  function validateName(name, error) {
    const nameRegex = /^.*[a-zA-Z].{0,20}$/;
    if (!nameRegex.test(name)) {
      const element = document.querySelector("#nameError");
      element.innerText = error;
    }

    return nameRegex.test(name);
  }

  function validateEmail(email, error) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const element = document.querySelector("#emailError");
      element.innerText = error;
    }

    return emailRegex.test(email);
  }

  function validateMessage(message, error) {
    const messageRegex = /^(?=.*[a-zA-Z])[\s\S]{1,200}$/;
    if (!messageRegex.test(message)) {
      const element = document.querySelector("#messageError");
      element.innerText = error;
    }

    return messageRegex.test(message);
  }
}
