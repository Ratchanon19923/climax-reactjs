import React from 'react'
import Percent from "../../assets/images/percent.png"
import { Col, Row } from 'antd';
import { css } from '@emotion/css'
import Promotion1 from '../../assets/images/promotion1.png'
import Promotion2 from '../../assets/images/promotion2.png'

function index() {
    return (
        <>
            <div className='promotion-bg-image'>
                <div className="promotion-con">
                    <div className="promotion-left">
                        <img className="promotion-image" src={Percent} alt="..." />
                        <h4 className={css`
                        margin-bottom:0px;
                        `}>โปรโมชั่นล่าสุด</h4>
                    </div>
                    <div >
                        <h6 className={css`
                        margin-bottom:0px;
                       `}>รวมโปรชุดใหญ่</h6>
                        <h6 className={css`
                        margin-bottom:0px;
                       `}>อัพเดทใหม่ทุกวัน</h6>
                    </div>

                </div>
                <div className="nav-con">
                    <a className="nav-text nav-link" href="/">ทั้งหมด</a>
                    <a className="nav-text nav-link" href="/">กีฬา</a>
                    <a className="nav-text nav-link" href="/">คาสิโน</a>
                    <a className="nav-text nav-link" href="/">สล็อต</a>
                    <a className="nav-text nav-link" href="/">หวย</a>
                </div>
                <Row justify="center" align="middle" style={{ zIndex: 1 }}>
                    <Col xs={18} sm={15} lg={8} xl={6}>
                        <a href="/">
                            <img src={Promotion1} className={css`width:100%;  `} alt="..." />
                        </a>
                    </Col>
                    <Col xs={18} sm={15} lg={8} xl={6}>
                        <a href="/">
                            <img src={Promotion2} className={css`width:100%;  `} alt="..." />
                        </a>
                    </Col>
                </Row>
                <Row justify="center" align="middle" className="mb-5" >
                    <Col xs={18} sm={15} lg={8} xl={6}>
                        <a href="/">
                            <img src={Promotion1} className={css`width:100%;  `} alt="..." />
                        </a>
                    </Col>
                    <Col xs={18} sm={15} lg={8} xl={6}>
                        <a href="/">
                            <img src={Promotion2} className={css`width:100%;`} alt="..." />
                        </a>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default index