import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Post</Link>
                    </li>
                    <li>
                        <Link to="/postform">Post Form</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar