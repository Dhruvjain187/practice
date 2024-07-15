import { Container } from "./StyledComponents/Container.style";
import { MainContent } from "./StyledComponents/MainContent.style";
import { Text } from "./StyledComponents/Text.style";

export default function Content() {
    return (
        <>
            <MainContent>
                <div>
                    <p>Effortless Elegance for the Modern Soul.
                    </p>
                </div>
            </MainContent>
            {/* <Flex className="container-1">
                <div className="container-1a">
                    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
                <div className="container-1b">
                    <img src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1707932485806-ce9b3c855339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </Flex>

            <Flex className="container-2">
                <div className="container-2a"></div>
                <div className="container-2b"></div>
            </Flex> */}

            <Text>
                Best Products
            </Text>

            <Container>
                <div className="container-1a">
                    <div>
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="container-1b">
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div>
                        <img src="https://plus.unsplash.com/premium_photo-1707932485806-ce9b3c855339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                </div>
            </Container>

        </>


    );
}