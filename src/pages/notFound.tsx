import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <>
            <div>Sorry, page not found</div>
            <Link to="/">
                <span className="button">
                    Return Home
                </span>
            </Link>
        </>
    )
}