import { Link } from 'react-router-dom';
import headerImage from '../assets/home.png'; 

export function Home() {
    return (
        <div>
        <img src={headerImage} />
        <h1>EasyGroceries Welcomes You!</h1>
        <Link to="/store" className="btn btn-primary">
          <h1><span className="button">
            Enter Store
          </span></h1>
        </Link>
      </div>
    )
}