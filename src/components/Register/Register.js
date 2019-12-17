import React from "react";
import "./register.scss";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currencyWant: "" };
  }

  render() {
    return (
      <form className="register">
        <div className="inputs">
          <span className="registerText">Register</span>
          <br></br>
          <input type="text" size="40" placeholder="  Name: " required></input>
          <input
            type="text"
            size="40"
            placeholder="  Surname: "
            required
          ></input>
          <input type="text" size="40" placeholder="  Login: " required></input>
          <input
            type="text"
            size="40"
            placeholder="  E-Mail: "
            required
          ></input>
          <input
            type="text"
            size="40"
            placeholder="  Password: "
            required
          ></input>
          <input
            type="text"
            size="40"
            placeholder="  Confirm password: "
            required
          ></input>
          <input
            type="text-area"
            size="82"
            placeholder="  Other (Skype, Telegram, Facebook, Instagram, Etc): "
          ></input>
          <input id="okButton" type="submit" value="ок"></input>
        </div>
      </form>
    );
  }
}

export default Register;
