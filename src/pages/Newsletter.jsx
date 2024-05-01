import axios from "axios";
import { Form, Navigate, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await axios.post(newsletterUrl, data);
        toast.success(response?.data?.msg);

        return redirect("/");
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
};

const Newsletter = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    return (
        <Form className="form" method="POST">
            <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
                our newsletter
            </h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input
                    type="text"
                    name="name"
                    className="form-input"
                    id="name"
                    // defaultValue={"ankit"}
                    required={true}
                />
            </div>
            <div className="form-row">
                <label htmlFor="lastName" className="form-label">
                    last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="form-input"
                    // defaultValue={"raj"}
                    required
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-input"
                    defaultValue={"test@test.com"}
                    required
                />
            </div>
            <button
                className="btn btn-block"
                style={{ marginTop: ".5rem" }}
                type="submit"
                disabled={isSubmitting}
            >
                {isSubmitting ? "submitting" : "Submit"}
            </button>
        </Form>
    );
};

export default Newsletter;
