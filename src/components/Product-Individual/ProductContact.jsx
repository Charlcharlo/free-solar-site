import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import Cancel from "../home/icons/Cancel";
import Send from "../home/icons/Send";
import EmailProgress from "../home/EmailProgress";
import { Close } from "@mui/icons-material";

export default function ProductContact(props) {
    const [widgetIn, setWidgetIn] = useState(false);
    const [done, setDone] = useState(false);
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();
        setWidgetIn(true);
        setDone(false);

        emailjs.sendForm(
            'service_m2p3mij', 
            'template_fzh834j', 
            form.current,
            'luFVC0zC_utdvFlpA'
        )
        .then((result) => {
            e.target.reset();
            setDone(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    function closeWidget() {
        setWidgetIn(false);
    }

    return (
        <div id="contact-form">
            { widgetIn && <EmailProgress done={done} close={closeWidget} /> }
            <h1 className="title">{`Enquire about ${props.product}`}</h1>
            <button 
                className="invisibutton"
                onClick={() => props.toggleModal()}
            >
                    <Close fontSize="large" />
            </button>
            <form className="col-start" ref={form} onSubmit={sendEmail}>
                <label className="title" htmlFor="from_name">Your Name</label>
                <input 
                    className="contact-input" 
                    type="text" 
                    name="from_name"
                />
                <label className="title" htmlFor="reply_to">Your Email Address</label>
                <input 
                    className="contact-input" 
                    type="email" 
                    name="reply_to"
                />
                <label className="title" htmlFor="about">I am asking about</label>
                <input 
                    className="contact-input"
                    type="text"
                    name="about"
                    value={props.product} 
                />
                <label className="title" htmlFor="message">Message Body</label>
                <textarea 
                    className="contact-input" 
                    name="message" 
                    rows="10" 
                />
                <div className="row-right">
                    <button 
                        className="btn btn-ylw"
                        type="submit"
                    >
                        Send
                        <Send />
                    </button>
                    <button 
                        className="btn"
                        type="btn"
                    >
                        Clear
                        <Cancel />
                    </button>
                </div>
            </form>
        </div>
    )
}