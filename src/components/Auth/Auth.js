import React from "react";
import "./auth.scss";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      pass: ""
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { login, pass } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div id="auth">
        <div id="formAuth">
          <div id="margin"></div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="authField"
              name="login"
              required
              value={login}
              onChange={handleChange}
              placeholder="Login: "
            />
            <input
              type="password"
              className="authField"
              name="pass"
              required
              value={pass}
              onChange={handleChange}
              placeholder="Password: "
            />
            <br />
            <div id="buttons">
              <input type="submit" value="ОК" className="authBut Ok" />
              <button className="authBut Canc">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
