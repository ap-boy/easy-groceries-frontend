import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
        <div>Made By Andrew Boy</div>
            <Link to="/">
                <span className="button">
                    <h1>Return Home</h1>
                </span>
            </Link>
        </>
    )
}