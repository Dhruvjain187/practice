import { Curve } from "./StyledComponents/Curve";
import { FooterContainer } from "./StyledComponents/FooterContainer.style";
import { List } from "./StyledComponents/List.style";
import { Unorder } from "./StyledComponents/Unorder.style";

export default function Footer() {
    return (
        <>
            <Curve />
            <FooterContainer>
                <Unorder className="unique-ul">
                    <List>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum iure a labore quod, amet laboriosam, ipsam magni vel, culpa officiis consequuntur</List>
                </Unorder>

                <Unorder>
                    <List>Our Products</List>
                    <List>Our Services</List>
                    <List>Our Projects</List>
                    <List>Signage Design</List>
                    <List>Signage Installation</List>
                    <List>Signage FAQs</List>
                </Unorder>
                <Unorder>
                    <List>Sign Supplier</List>
                    <List>Unit 15 Dale Industrial</List>
                    <List>Radcliffe</List>
                    <List>Manchaster</List>
                    <List>M26 1AD</List>
                </Unorder>
                <Unorder>
                    <List>Contact Us</List>
                    <List>0800 133 7555</List>
                    <List>info@signsupplier.co.uk</List>
                    <List>4 icons</List>
                </Unorder>
            </FooterContainer>
        </>

    );
}