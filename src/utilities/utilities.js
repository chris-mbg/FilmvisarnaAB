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

module.exports = { checkPassword, checkTicketType };
