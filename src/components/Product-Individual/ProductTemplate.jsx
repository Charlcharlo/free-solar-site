import { Modal } from "@mui/material";
import { useState } from "react";
import FlexProvider from "../global/FlexContext";
import NavBar from "../global/Navbar";
import ContactModal from "./ContactModal";

export default function ProductTemplate({info}) {
    const [modalIn, setModalIn] = useState(false);

    function toggleModal() {
        setModalIn(prev => !prev)
    }

    return (
    <FlexProvider>
        <div className="full-page" id="product-template">
            <NavBar />
            <div className="body-block">

                    <img 
                        className="product-image"
                        src={window.location.origin + info.imgUrl} 
                        alt={info.name} 
                    />

                <h1 className="title">{info.name}</h1>
                <p className="paragraph">{info.data.writeUp}</p>
                <button className="btn btn-ylw" onClick={toggleModal}>Enquire About This Product</button>
            </div>
            <Modal open={modalIn} onClose={toggleModal} >
                <ContactModal 
                    toggleModal={toggleModal}
                    product={info.name}
                />
            </Modal>
        </div>
    </FlexProvider>
    )
}