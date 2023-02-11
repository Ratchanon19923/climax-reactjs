import React from "react";
import "./menu.css"
import { Button } from 'antd';
import { MdClose } from "react-icons/md";
import Logo from "../../assets/images/logo.png"
import BarDownload from "../../assets/images/barDownload.png"
import BarGame from "../../assets/images/barGame.png"
import BarMoneyback from "../../assets/images/barMoneyback.png"
import BarHistory from "../../assets/images/barHistory.png"
import BarPromotion from "../../assets/images/barPromotion.png"
import BarAlliance from "../../assets/images/barAlliance.png"
import BarContact from "../../assets/images/barContact.png"



function Menu({ isOpen, onChange }) {
    const items = [
        { itemText: "เล่นเกม", itemLink: "/", itemIcon: BarGame },
        // { itemText: "ฝากเงิน", itemLink: "/" },
        // { itemText: "ถอนเงิน", itemLink: "/" },
        { itemText: "รับเงินคืน", itemLink: "/", itemIcon: BarMoneyback },
        { itemText: "ประวัติทำรายการ", itemLink: "/", itemIcon: BarHistory },
        { itemText: "โปรโมชั่น", itemLink: "/", itemIcon: BarPromotion },
        { itemText: "ข้อมูลพันธมิตร", itemLink: "/", itemIcon: BarAlliance },
        { itemText: "ติดต่อเรา", itemLink: "/", itemIcon: BarContact },

    ]
    return (
        <div className={`Menu ${isOpen && "open"}`} style={{ zIndex: 99 }}>
            <MdClose className="btn-close" onClick={() => onChange(false)}>close</MdClose>
            <div className="d-flex">
                <a href="/">
                    <img src={Logo} className="img-logo" alt="..." />
                </a>

            </div>
            <div className="Menu-items">
                {items.map((item, index) => (
                    <>
                        <img src={item.itemIcon} className="image-berMenu my-3" alt="..." />
                        <a href={item.itemLink} key={index} >
                            {item.itemText}
                        </a>
                        <br />
                    </>

                ))}

            </div>


            <Button className="btn-berDownload">
                <img src={BarDownload} className="image-berDownload" alt="..." href="/" />
                <p >ติดตั้งแอพพลิเคชั่น</p>
            </Button>
        </div>
    );
}

export default Menu;