import ReactFoodLogo from '../assets/logo.jpg';
function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={ReactFoodLogo} alt="reactfood logo" />
                <h1>REACTFOOD</h1>
            </div>            
            <button className="text-button">
                Cart
            </button>
            
        </header>
    )
}

export default Header;