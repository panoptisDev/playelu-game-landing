import React, { useState } from 'react'
import urlConstant from '../../urlConstant';
import PlayeluLink from './playeluLink';
import Modal from 'react-bootstrap/Modal';
import Header from "../../components/Header";

export default function Content() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = React.useState("");
    const [error, setError] = useState(null);
    const URI = "https://api.playelu.io/subemail";

    const validateEmail = (email) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    const onPress = React.useCallback((e) => {

        fetch(URI, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        }).then(
            response => console.log(response)
        ).catch(err => console.log(err))
        if (!validateEmail(email)) {
            setError('Wrong email format message');
        } else {
            handleShow()
            setError('');
        }
    }, [email]);
    const handleSubmit = e => {
        e.preventDefault();
        onPress()
    }
    return (<>
        <Modal
            size="lg"
            dialogClassName="modal-thankyou"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose}>

            <div className='close-modal' onClick={() => handleClose()}>
                <img src={urlConstant.image.modal.closeModal} alt="" />
            </div>
            <div className='modal-container'>
                <img src={urlConstant.image.eluLogo} alt="" />
                <h1>thank you !</h1>
                <p className='name-email'>{email}</p>
            </div>

        </Modal>
        <div className='playelu-frame'>
            <div className="playelu-all">
                <div className="playelu-top">
                    <Header />
                    <div className="playelu-img">
                        <img src={urlConstant.image.eluLogo1} alt="" />
                    </div>
                    <div className="playelu-tittle">
                        <h1>#1 Free-to-Earn NFT Game</h1>
                    </div>
                    <form className="playelu-btn" onSubmit={handleSubmit}>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="playelu-input "
                            type="email"
                            placeholder='Email'
                            value={email}
                            maxLength='50'
                            placeholder="Your Email here"
                        >

                        </input>
                        <i className="iconEmail fas fa-envelope"></i>
                        <button
                            type="submit"
                            className=" subcribe__playelu-btn"
                            onClick={onPress}
                        >
                            Subscribe
                        </button>
                    </form>
                    {error && <div className='error-email'>{error}</div>}
                </div>
                <div className="playelu-bottom mt-auto d-flex justify-content-center">
                    <PlayeluLink></PlayeluLink>
                    <div className='policy'>
                        <a className='privacy-policy' href={urlConstant.docs.privacyPolicy}>
                            Privacy Policy
                        </a>
                        <a href='#'>&nbsp;|&nbsp;</a>
                        <a href={urlConstant.docs.conditions}>
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
