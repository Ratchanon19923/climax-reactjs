import React from 'react'
import IconWallet from "../../assets/images/icon-wallet.png"
import IconDeposit from "../../assets/images/icon-deposit.png"
import IconGame from "../../assets/images/icon-game.png"
import IconWithdraw from "../../assets/images/icon-withdraw.png"
import IconPromotion from "../../assets/images/icon-promotion.png"

function HeaderMb() {
    return (
        <>
            <div className="mb">
                <nav className="nav-bg-color p-0" >
                    <div className="card-icon-out">
                        <div className="card-icon-container mx-2">
                            <a href="#">
                                <img className="img-icon" src={IconWallet} alt="..." />
                            </a>
                            <p className="text-light">กระเป๋า</p>
                        </div>
                        <div className="card-icon-container mx-2">
                            <a href="#">
                                <img className="img-icon" src={IconDeposit} alt="..." />
                            </a>
                            <p className="text-light">ฝากเงิน</p>
                        </div>
                        <div className="card-icon-container mx-2">
                            <a href="#">
                                <img className="img-icon" src={IconGame} alt="..." />
                            </a>
                            <p className="text-light">เล่นเกมส์</p>
                        </div>
                        <div className="card-icon-container mx-2">
                            <a href="#">
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

                </nav>
            </div>
        </>
    )
}

export default HeaderMb