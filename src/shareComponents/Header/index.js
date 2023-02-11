import React, { useState } from "react";
import Logo from "../../assets/images/logo.png"
import IconWallet from "../../assets/images/icon-wallet.png"
import IconDeposit from "../../assets/images/icon-deposit.png"
import IconGame from "../../assets/images/icon-game.png"
import IconWithdraw from "../../assets/images/icon-withdraw.png"
import IconPromotion from "../../assets/images/icon-promotion.png"
import { FaBars } from "react-icons/fa";
import Menu from "../Menu";
import "./header.css"

function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <div className="navbar p-0" >
        <div className="container-fluid ">
          <div className="d-flex">
            <a href="/">
              <img src={Logo} className="img-logo" alt="..." />
            </a>
            <span className="nav-link text-light navbar-brand mx-3 mt-2">
              Mr.Climaximo
            </span>
          </div>
          <div className="pc">
            <div className="card-icon-out">
              <div className="card-icon-container mx-2">
                <a href="/">
                  <img className="img-icon" src={IconWallet} alt="..." />
                </a>
                <p className="text-light">กระเป๋า</p>
              </div>
              <div className="card-icon-container mx-2">
                <a href="/">
                  <img className="img-icon" src={IconDeposit} alt="..." />
                </a>
                <p className="text-light">ฝากเงิน</p>
              </div>
              <div className="card-icon-container mx-2">
                <a href="/">
                  <img className="img-icon" src={IconGame} alt="..." />
                </a>
                <p className="text-light">เล่นเกมส์</p>
              </div>
              <div className="card-icon-container mx-2">
                <a href="/">
                  <img className="img-icon" src={IconWithdraw} alt="..." />
                </a>
                <p className="text-light">ถอนเงิน</p>
              </div>
              <div className="card-icon-container mx-2">
                <a href="/promotion">
                  <img className="img-icon" src={IconPromotion} alt="..." />
                </a>
                <p className="text-light">โปรโมชั่น</p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="pc">
              <a
                href="https://game.climax168.com/login"
                type="button"
                className="btn btn-outline-light btn-size"
              >
                สมัครสมาชิก
              </a>
              <a
                href="https://game.climax168.com/login"
                type="button"
                className="btn btn-light btn-size"
              >
                เข้าสู่ระบบ
              </a>
            </div>
            <FaBars className="menu-btn" onClick={() => setIsOpen(true)}>menu</FaBars>
          </div>
        </div>
      </div>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </>
  )
}

export default HeaderNav