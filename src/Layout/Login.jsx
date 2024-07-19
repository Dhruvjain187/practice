import { CardContainer } from "../Components/StyledComponents/CardContainer";
import { StyledForm } from "../Components/StyledComponents/Form";


export default function Login() {

    return (
        <CardContainer>
            <StyledForm>
                <label htmlFor="mailid">Enter Your Email
                </label>
                <input type="email" id="mailid" placeholder="mailid" required />
                <br />
                <br />
                <label htmlFor="password">Enter Your password
                </label>
                <input type="password" id="password" placeholder="password" required />
                <br />
                <br />
                <button>Login</button>

            </StyledForm>
        </CardContainer>
    );
}