import React, { useState } from "react";
import "./userInfo.scss";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import Modal from "../shared/modal/Modal";
import { useHistory } from "react-router";

function UserInfo() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const mobile = window.innerWidth < 768;
  const dispatch = useDispatch();
  const name = useSelector((state) => state.auth.user.name);
  const avatar = useSelector((state) => state.auth.user.avatarURL);
  const history = useHistory();

  const handleClick = () => {
    dispatch(authOperations.logOut());
    history.push("/login");
  };

  return (
    <div className="user-info">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="menu-box">
        {showModal && (
          <Modal
            title="Вы действительно хотите выйти?"
            onClick={toggleModal}
            onAgree={handleClick}
          />
        )}
        {mobile ? (
          <button className="icon-exit-button" type="button">
            <svg width="16px" height="16px" className="logout-icon">
              <use href={sprite + "#logout"} />
            </svg>
          </button>
        ) : (
          <>
            <span className="user-name">{name}</span>
            <span className="line"></span>
            <button
              id="one"
              type="button"
              className="exit-button"
              onClick={toggleModal}
            >
              Выйти
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default UserInfo;

// export default class UserInfo extends Component {
//   static defaultProps = {
//     userName: "User Name",
//     avatarURL: "https://www.atmeplay.com/images/users/avtar/avtar_nouser.png",
//   };

//   render() {
//     const { userName, avatarURL } = this.props;
//     const mobile = window.innerWidth < 768;

//     return (
//       <div className="user-info">
//         <img className="avatar" src={avatarURL} alt="avatar" />
//         <div className="menu-box">
//           {mobile ? (
//             <button className="icon-exit-button" type="button">
//               <svg width="16px" height="16px" className="logout-icon">
//                 <use href={sprite + "#logout"} />
//               </svg>
//             </button>
//           ) : (
//             <>
//               <span className="user-name">{userName}</span>
//               <span className="line"></span>
//               <button type="button" className="exit-button">
//                 Выйти
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// window.innerWidth < 768

// {
//   /* <span className='user-name'>{userName}</span>
// <span></span>
// <button className='exit-button'>Выйти</button>  */
// }
