export function checkIfUnderfined(value) {
    if (value === "") return "";
    else if (value !== undefined) return value + ", ";
    else return "";
  }
  