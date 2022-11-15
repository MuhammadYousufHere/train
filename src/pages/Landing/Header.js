import { useState } from "react";
import "./Header.scss";

import Destination from "../Destination/Destination";
import Button from "../../components/Button/Button";
import Booking from "../Booking/Booking";
import Modal, { ModalBody } from "../../components/Modal/Modal";
// import Navbar from '../../components/Navbar/Navbar';
// import Sidebar from '../../components/Sidebar/Sidebar';
import buildings from "../../assets/header-buildings.png";
import train from "../../assets/header-train.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(false);

  // const handleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  return (
    <>
      {/* <Navbar onShowSidebar={handleSidebar} />
      {showSidebar && <Sidebar />} */}
      <header className='header-container'>
        <div className='header-content'>
          <div className='left row'>
            <div className='header-title'>
              <h1 className='header-title-text'>Your train</h1>
              <h1 className='header-title-text'>travel start</h1>
              <h1 className='header-title-text'>here</h1>
            </div>
            <div className='input-block'>
              <Destination onFocus={() => setShowModal(true)} bold />
            </div>
            <div className='action-box'>
              <Button title='Search' width={"45%"} />
            </div>
          </div>
          <div className='right row'>
            <div className='decorators'>
              <figure>
                <img src={buildings} alt='buildings' />
              </figure>
            </div>
          </div>
        </div>
        <div className='train-box'>
          <figure>
            <img src={train} alt='train' />
          </figure>
        </div>
      </header>
      <Modal show={showModal} setShow={setShowModal}>
        <ModalBody>
          <Booking />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
