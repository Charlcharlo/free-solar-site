import Title from "./Title";

export default function NavBar() {
    return (
        <nav className="body-block row-between gray-block" id="nav-bar">
            <Title text="FreeSolarZA" />
            <div className="row-between">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
                <a href="">Tax Rebates</a>
                <a href="">Contact</a>
            </div>
        </nav>
    )
}