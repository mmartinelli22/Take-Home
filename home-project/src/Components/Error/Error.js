import { Link } from 'react-router-dom'
const ErrorMessage = () => {
    return (
        <div>
            <h1 className="error-text">
                Something Went Wrong, hit 'return to home' to go back.
            </h1>
            <Link to="/" style={{ textDecoration: "none" }}>
                <button>Return Home</button>
            </Link>
        </div>
    );
};
export default ErrorMessage;