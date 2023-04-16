import { useRef } from "react";
import emailjs from '@emailjs/browser';

import Cancel from "./icons/Cancel";
import Send from "./icons/Send";

export default function ContactForm() {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            'service_5tr5afe', 
            'template_fzh834j', 
            form.current,
            'luFVC0zC_utdvFlpA'
        )
        .then((result) => {
            e.target.reset();
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div id="contact-form">
            <h1 className="title">Or Send Us an Email</h1>
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
                <label className="title" htmlFor="message">Message Body</label>
                <textarea 
                    className="contact-input" 
                    name="message" 
                    rows="15" 
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
                        type="reset"
                    >
                        Clear
                        <Cancel />
                    </button>
                </div>
            </form>
        </div>
    )
}