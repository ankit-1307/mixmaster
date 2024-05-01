import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="404 error image" />
                    <h3>Ohh!!</h3>
                    <p>
                        We can't seem to find the page that you are looking for
                    </p>
                    <Link to="/">Back to Home</Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <div>
            <Wrapper>
                <h3>Something went wrong</h3>
            </Wrapper>
        </div>
    );
};

export default Error;
