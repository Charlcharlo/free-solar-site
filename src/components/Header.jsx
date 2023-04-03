import NavBar from "./Navbar";
import CardCollection from "./utils/CardCollection";
import Title from "./utils/Title";

export default function Header() {
    return(
        <div className="header">
            <NavBar />
            <div className="body-block" id="header-banner">
                <Title 
                    text="Tap into clean and renewable energy from the sun"
                />
            </div>
            <CardCollection />
            <div className="fade-gray"/>
        </div>
    )
}