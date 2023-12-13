export const name_validation = {
  type: "text",
  id: "name",
  placeholder: "Your name",
  multiline: false,
  label: "name",
  pattern: "^\d{3}-\d{3}-\d{4}$",
  name:"name",
  validation: {
    required: { value: true, message: "required" },
    maxLength: { value: 30, message: "max 30 characters" },
  },
};

export const phoneNumber_validation = {
  type: "tel",
  id: "phone",
  placeholder: "Your phone number",
  multiline: false,
  label: "phone",
  pattern: "^\d{3}-\d{3}-\d{4}$",
  name:"phone",
  validation: {
    required: { value: true, message: "required" },
    pattern : {value: 5, message: "only number"},
    maxLength: { value: 10, message: "should be 10 characters" },
    minLength: { value: 10, message: "should be 10 characters" },
  },
};


export const message_validation = {
  type: "text",
  id: "message",
  placeholder: "Your message",
  name: "message",
  multiline: true,
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    minLength: {
      value: 6,
      message: 'min 6 characters',
    },
  },
};
