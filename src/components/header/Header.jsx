<<<<<<< HEAD
import React, { Component } from "react";
=======
import React from "react";
>>>>>>> afd910ddef8a449e4ba0ec36994be1f698f02cc9
import logo from "../../images/logo.png";
import "./header.scss";

import UserInfo from "../userInfo/UserInfo";
<<<<<<< HEAD

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
=======
import { useSelector } from "react-redux";

function Header() {
  const token = useSelector((state) => state.auth.user.token);
  console.log("token:", token);
  return (
    <div className="header">
      <a href="/">
        <img src={logo} alt="logotype" />
      </a>
      {token ? <UserInfo userName="User Name" /> : ""}
    </div>
  );
}
export default Header;
// export default class Header extends Component {
//   render() {
//     const { isLogged } = this.props;

//     return (
//       <div className="header">
//         <a href="/">
//           <img src={logo} alt="logotype" />
//         </a>
//         {isLogged && <UserInfo userName="User Name" />}
//       </div>
//     );
//   }
// }
>>>>>>> afd910ddef8a449e4ba0ec36994be1f698f02cc9
