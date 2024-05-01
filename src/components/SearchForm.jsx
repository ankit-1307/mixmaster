import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({ searchTerm }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.submit === "submitting";
    return (
        <Wrapper>
            <Form className="form">
                <input
                    type="search"
                    className="form-input"
                    name="search"
                    defaultValue={searchTerm}
                />
                <button className="btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "submitting" : "submit"}
                </button>
            </Form>
        </Wrapper>
    );
};

export default SearchForm;
