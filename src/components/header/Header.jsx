import React, { Component } from "react";
import logo from "../../images/logo.png";
import "./header.scss";

import UserInfo from "../userInfo/UserInfo";

export default class Header extends Component {
  render() {
    const { isLogged } = this.props;

    return (
      <div className="header">
        <a href="/">
          <img src={logo} alt="logotype" />
        </a>
        {isLogged && <UserInfo userName="User Name" />}
      </div>
    );
  }
}
