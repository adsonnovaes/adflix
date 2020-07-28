import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu () {
    return (
        <nav className="Menu">

            <Link to="/">
                <img className="Logo" src={Logo} alt="AdFlix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;

