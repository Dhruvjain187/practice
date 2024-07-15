import { CardContainer } from "../Components/StyledComponents/CardContainer";
import { StyledForm } from "../Components/StyledComponents/Form";
import TextField from '@mui/material/TextField';



export default function Login() {

    return (
        <CardContainer>
            <StyledForm>
                <label htmlFor="mailid">Enter Your Email
                    <input type="email" id="mailid" placeholder="mailid" required />
                </label>
                <br />
                <br />
                <label htmlFor="password">Enter Your password
                    <input type="password" id="password" placeholder="password" required />
                </label>
                <br />
                <br />
                <button>Login</button>

            </StyledForm>
        </CardContainer>
    );
}