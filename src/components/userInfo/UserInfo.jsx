import React, { useState, useEffect } from "react";
import "./userInfo.scss";
import sprite from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import Modal from "../shared/Modal/Modal";
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

  // useEffect(() => {
  //   const mobile = window.innerWidth < 768;
  // }, [ window.innerWidth]);

  const handleClick = () => {
    dispatch(authOperations.logOut());
    history.push("/login");
  };

  return (
    <>
      {name ? (
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
              <button
                className="icon-exit-button"
                type="button"
                onClick={toggleModal}
              >
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
      ) : null}
    </>
  );
}
export default UserInfo;
