import Dropdown from "../Dropdown/dropdown";
const NavBar = ({ searchQuery }) => {
    return (
        <div className="nav-container">
            <h1 className="title-text">NY Times News Reader</h1>
            <Dropdown searchQuery={searchQuery} />
        </div>
    );
};

export default NavBar;