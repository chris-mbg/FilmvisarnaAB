// Checks if password meets validation requirements.
const checkPassword = (password) => {
  // Minimum: 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
  const passwordToCompare = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#£¤$&?^*])(?=.{8,})"
  );

  if (password.match(passwordToCompare)) {
    return true;
  } else {
    return false;
  }
};

// Check which ticket type and returns relevant text (translated to Swedish)
const checkTicketType = (tickettype) => {
  switch (tickettype) {
    case `adult`: {
      return "Vuxen";
    }
    case `senior`: {
      return "Pensionär";
    }
    case `child`: {
      return "Barn";
    }
    default: {
      break;
    }
  }
};

// Checks if email meets validation requirements.
const checkEmail = (email) => {
  const emailToCompare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailToCompare.test(email);
};

// debounce function, returns a function
// 2 args, function to call and delay (ms)
// timer to cancel the timeout, closure (allows the func to access variables defined in the function scope, even when the function is invoked outside of their scope)
function debounce(func, timeout) {
  let timer;
  return (arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(arg), timeout);
  };
};

module.exports = { checkPassword, checkEmail, checkTicketType, debounce };
