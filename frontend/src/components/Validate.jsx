export default function Validate(values, errors) {
  const colors = {};
  const errorColor = "red";
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,5}/;
  const phonePattern = /^[0-9]{6,12}/;
  if (values.name === "") {
    errors.name = "Name is required.";
    colors.colorName = errorColor;
    return;
  }
  if (values.email === "") {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Email is invalid.";
  }
  if (values.phone === "") {
    errors.phone = "Phone number is required.";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Phone is required.";
  }
  return errors;
}
