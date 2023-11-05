const regex = {
  username: /^[a-zA-Z]\w{1,19}$/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\s])[^\s]{8,20}$/,
}

export {regex};