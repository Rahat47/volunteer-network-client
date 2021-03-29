import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Image } from 'semantic-ui-react';
import logo from '../../images/logo.png'
import './navbar.css'
const Navbar = () => {
    return (
        <>
            <Container className="nav-list" >
            <Image floated="left" as={Link} to="/" src={logo} alt="logo" size="small" />
                <div className="nav-links">
                    <Link className="nav-item" to="/" title="Home">Home</Link>
                    <Link className="nav-item" to="/donation" title="Donation" >Donation</Link>
                    <Link className="nav-item" to="/events" title="Events" >Events</Link>
                    <Link className="nav-item" to="/blog" title="Blog" >Blog</Link>
                    <Button as={Link} to="/auth" className="nav-item-button" size="big" content="Register" primary />
                    <Button as={Link} to="/admin" className="nav-item-button" size="big" content="Admin" secondary />
                </div>
            </Container>
        </>
    );
};

export default Navbar;