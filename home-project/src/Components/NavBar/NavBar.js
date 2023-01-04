import Dropdown from "../Dropdown/dropdown";
const NavBar = ({ searchQuery }) => {
    return (
        <div className="nav-container">
            <Dropdown searchQuery={searchQuery} />
        </div>
    );
};

export default NavBar;