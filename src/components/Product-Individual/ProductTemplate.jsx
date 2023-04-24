import { Modal } from "@mui/material";
import { useState } from "react";
import FlexProvider from "../global/FlexContext";
import NavBar from "../global/Navbar";
import Feature from "../home/Feature";
import ContactModal from "./ContactModal";
import Terms from "./Terms";

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
                <h2 className="price">{info.price}</h2>
                <p className="paragraph">{info.data.writeUp}</p>
                <Feature 
                    title="Features"
                    features={info.data.features}
                />
                <button className="btn btn-ylw" onClick={toggleModal}>Enquire About This Product</button>
                {info.data.terms && <Terms />}

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