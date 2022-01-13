import React from 'react'
import './_modal.scss'
import './_responsive.scss'
export default function ModalSucceed(props) {
    const { forwardBack } = props
    return (
        <div className='modal-succeed'>
            <span className='modal-succeed__heading'>
                succeeded!
            </span>
            <div className='modal-succeed__body'>
                <img
                    className='modal-succeed__body__img'
                    src='https://storage.googleapis.com/laboon-img-storage/play-elu/seed-sale/pig.webp'
                    alt=''
                />

                <div className='modal-succeed__body__content'>
                    Congratulations on your successful purchase of 10.000 $BOON, for 500 AVAX, in the "Seed" round.
                </div>
            </div>
            <a
                className='modal_succeed__link-gameplay'
                href='https://playelu.io/gameplay'
                target="_blank"
                rel="noreferrer"
            >
                <span>
                    Link: https://playelu.io/gameplay#nest
                </span>
            </a>
            <div
                className='modal-succeed__btn'
                onClick={() => {
                    forwardBack()
                }}
            >
                <span>ok</span>
            </div>
        </div>
    )
}