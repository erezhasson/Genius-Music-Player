import React, {useState} from 'react'
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../../Globalstyles';
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuItem,
    MenuIcon,
    Menu,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn
} from './NavBar.styles';

export const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);

    const closeMenu = () => console.log("CLOSED");
    
    return (
        <div>
            {/* <IconContext.Provider value={{ color: '#fff'}}>  */}
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon src={process.env.PUBLIC_URL + "GMP.png"}/>
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX/> : <BiMenu/>}
                        </MenuIcon>

                        <Menu onClick={handleClick} click={click}>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/about">About</MenuLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink onClick={closeMenu} to="/recipe">Recipes</MenuLink>
                            </MenuItem>
                            <MenuItemBtn>
                                {Button?(
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary>Order Now</Button>
                                    </MenuLinkBtn>
                                ): (
                                    <MenuLinkBtn to="/order-now">
                                        <Button primary bigFont onClick={closeMenu}>Order Now</Button>
                                    </MenuLinkBtn>
                                )
                                }
                            </MenuItemBtn>
                        </Menu>

                    </NavbarContainer>


                </Nav>
            {/* </IconContext.Provider> */}
        </div>
    )
}

// export default Navbar;
