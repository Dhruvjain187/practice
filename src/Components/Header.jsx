import { Nav } from "./StyledComponents/Nav.style";
import { Flex } from "./StyledComponents/Flex.style";
import {
    Link, NavLink
} from "react-router-dom";


export default function Header() {
    return (
        <>
            <Nav>
                <Flex className="flex1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_noLpFg1UfUCDWLEfUmOFTSPlck8HHls9A&s" alt="" /></Flex>

                <Flex className="flex2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/men">Mens</NavLink>
                    <NavLink to="/women">Womens</NavLink>
                    <NavLink to="/kid">kids</NavLink>
                </Flex>

                <Flex className="flex3">
                    <input type="checkbox" id="sidebar-active" />
                    <label htmlFor="sidebar-active" className="open-sidebar"><i className="fa-solid fa-bars"></i></label>
                    <Flex className="link-container">
                        <label htmlFor="sidebar-active" className="close-sidebar"><i className=" fa-solid fa-xmark"></i></label>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Sign-Up</NavLink>
                        <NavLink to="/store">Store</NavLink>
                    </Flex>

                </Flex >
            </Nav >
        </>
    );
}