import { Link } from 'react-router-dom'
import './Header.scss'
import screensList from '../data/screensList';

function Header() {  
    return (
        <>
            <header className="navbar">
                <div className="content">
                    <div className="menu-btn"/>
                    <div className="title">
                        {'name'}
                    </div>
                    <div className="links flex align">
                        {screensList.map((screen)=>{
                            return(
                                <Link to={screen.route}>{screen.title}</Link>
                            );
                        })}
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;