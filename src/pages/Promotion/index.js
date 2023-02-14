
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/css'
import Percent from "../../assets/images/percent.png"
import Promotion1 from '../../assets/images/promotion1.png'
import Promotion2 from '../../assets/images/promotion2.png'

export default function PromotionPage() {

    const [bannerPromotionList, setBannerPromotionList] = useState([])
    const [bannerPromotion, setBannerPromotion] = useState([])
    const [bannerPro, setBannerPro] = useState([
        {
            imageUrl: Promotion1,
            type: 'casino'
        },
        {
            imageUrl: Promotion1,
            type: 'casino'
        },
        {
            imageUrl: Promotion1,
            type: 'casino'
        },
        {
            imageUrl: Promotion2,
            type: 'sport'
        },
        {
            imageUrl: Promotion2,
            type: 'sport'
        },
        {
            imageUrl: Promotion2,
            type: 'sport'
        },
        {
            imageUrl: Promotion2,
            type: 'slot'
        },
        {
            imageUrl: Promotion2,
            type: 'slot'
        },
        {
            imageUrl: Promotion1,
            type: 'slot'
        },

        {
            imageUrl: Promotion2,
            type: 'lotto'
        },

    ])


    const updatePromotion = (proType) => {
        const promotionFilter = bannerPromotionList.filter(i => i.type === proType)
        setBannerPromotion(promotionFilter)
        // setBannerPromotionList(bannerPro)
    }

    const updatePromotionAll = () => {
        setBannerPromotion(bannerPromotionList)
        // setBannerPromotionList(bannerPro)
    }

    useEffect(() => {
        setBannerPromotion(bannerPro)
        setBannerPromotionList(bannerPro);
    }, [bannerPro])

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
                <div className="seesion-title-catgory">
                    <div onClick={() => {
                        updatePromotionAll('all');
                    }}>
                        <p className='mb-0'>ทั้งหมด</p>
                    </div>
                    <div onClick={() => {
                        updatePromotion('sport');
                    }}>
                        <p className='mb-0'>กีฬา</p>
                    </div>
                    <div onClick={() => {
                        updatePromotion('casino');
                    }}>
                        <p className='mb-0'>คาสิโน</p>
                    </div>
                    <div onClick={() => {
                        updatePromotion('slot');
                    }}>
                        <p className='mb-0'>สล็อต</p>
                    </div>
                    <div onClick={() => { updatePromotion('lotto'); }}>
                        <p className='mb-0'>หวย</p>
                    </div>
                </div>
                <div className="session-banner-promotion">
                    {bannerPromotion.map((row, index) => (
                        <div className="box-banner-promotion" key={index}>
                            <a href="https://game.ryder365.com/">
                                <img src={row.imageUrl} draggable={false} className='w-100' alt={row.type} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
