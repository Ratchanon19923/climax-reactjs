import React from 'react'
import { Col, Row, Button } from 'antd';
import { css } from '@emotion/css'
import menuGame from "../../../assets/images/menuGame.png"
import menuSlot from "../../../assets/images/menuSlot.png"
import menuSport from "../../../assets/images/menuSport.png"
import menuCasino from "../../../assets/images/menuCasino.png"
import menuLotto from "../../../assets/images/menuLotto.png"
import { BsLine } from "react-icons/bs";


function contentMenu() {
    return (
        <>
            <Row justify="center" align="middle">
                <Col span={22}>
                    <a href="https://game.climax168.com/login" >
                        <img src={menuGame} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col span={11}>
                    <a href="/">
                        <img src={menuSlot} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col span={11}>
                    <a href="https://game.climax168.com/login">
                        <img src={menuSport} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col span={11}>
                    <a href="https://game.climax168.com/login">
                        <img src={menuCasino} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>
                <Col span={11}>
                    <a href="https://game.climax168.com/login">
                        <img src={menuLotto} className={css`width:100% ; 
                        &:hover,
                        :focus {
                          box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
                          transform: translateY(-0.50em);
                        }`} alt="..." />
                    </a>
                </Col>

                <Col span={21}>
                    <Button
                        className="btn-line" style={{ zIndex: 1 }}><BsLine className={css`margin-right:10px;`} />เป็นเพื่อนกับเรา Add Friends</Button>
                </Col>
            </Row>
        </>
    )
}

export default contentMenu 