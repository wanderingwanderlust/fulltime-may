import {Navbar, NavbarBrand, Collapse, NavLink, NavItem, Nav} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom';

function Navi() {
    // Add Authorization Login, and Logout functionality for our users
    const navigate = useNavigate();

    // Make sure to add nav items for a search page, and a saved page
    return(
        <Navbar color="light" light expand='md'>
            <NavbarBrand tag={Link} to='/'>Giphy App</NavbarBrand>
            <Collapse navbar>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/create-account'>Create Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/login'>Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/search'>Search Gifs</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/saved'>Saved Gifs</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navi