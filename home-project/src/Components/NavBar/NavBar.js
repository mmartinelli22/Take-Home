const NavBar = ({ displayNewSection }) => {
    return (
        <div className="nav-container">
            <h1 className="title-text">NY Times News Reader</h1>
            <button displayNewSection={displayNewSection} />
        </div>
    );
};

export default NavBar;