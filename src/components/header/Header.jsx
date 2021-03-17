import React from "react";
import logo from "../../images/logo.png";
import "./header.scss";
import UserInfo from "../userInfo/UserInfo";
import { useSelector } from "react-redux";

function Header() {
  const token = useSelector((state) => state.auth.token);
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
