import React from 'react'
import { Alert, Col, Row } from 'antd';
import Marquee from 'react-fast-marquee';
import CarouselCard from "./component/carouselCard";
import ContentMenu from "./component/contentMenu";

function Home() {
  return (
    <>
      <div className='home-image'>
        <Alert
          className="alert-home"
          closable
          message={
            <Marquee pauseOnHover gradient={false} speed="50" >
              ยินดีต้อนรับสู่ CliMax168 เล่นสล็อตวันนี้ รับโบนัสเพิ่มทันที 50%.
            </Marquee>
          }
        />
        <Row justify="center" align="middle" className='mt-3'>
          <Col xs={20} lg={10} xl={10} justify="center" align="middle" ><CarouselCard /></Col>
          <div className='mb mt-4'>
            <div className="d-flex align-items-center">
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
          </div>
          <Col xs={21} lg={8} xl={8} className="mb-3" justify="center" align="middle"><ContentMenu /></Col>
        </Row>

      </div>

    </>

  )
}

export default Home