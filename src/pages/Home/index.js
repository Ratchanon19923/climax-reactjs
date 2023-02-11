import React from 'react'
import { css } from '@emotion/css'
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
              I can be a React component, multiple React components, or just some text.
            </Marquee>
          }
        />
        <Row justify="center" align="middle" className='mt-3'>
          <Col xs={22} lg={10} xl={10} justify="center" align="middle" ><CarouselCard /></Col>
          <div className='mb mt-5'>
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
          <Col xs={22} lg={8} xl={8} className="mb-5" justify="center" align="middle"><ContentMenu /></Col>
        </Row>

      </div>

    </>

  )
}

export default Home