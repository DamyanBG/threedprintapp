import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserCreate = ({ fetchURL, headers, setJson, fetchErrorMessage }) => {
    const fetchPostInfo = (postInfo) => {
        fetch(fetchURL, {
            method: "POST",
            body: JSON.stringify(postInfo),
            headers: headers,
        })
            .then((resp) => resp.json())
            .then((json) => {
                setJson(json);
            })
            .catch(() => alert(fetchErrorMessage));
    };

    const createSchema = Yup.object().shape({
        first_name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required!"),
        last_name: Yup.string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required!"),
        phone: Yup.string()
            .min(8, "Too Short!")
            .max(20, "Too Long!")
            .required("Required!"),
        email: Yup.string()
            .email("Invalid email")
            .required("Required!"),
        password: Yup.string()
            .min(5, "Too Short!")
            .max(50, "Too Long!")
            .required("Required!")
    });

    const handleSubmitInfo = (values) => {
        fetchPostInfo(values);
    };

    return (
        <>
            <h1 className="text-center">Register</h1>
            <Formik 
                initialValues={{}}
                validationSchema={createSchema}
                onSubmit={(values) => handleSubmitInfo(values)}
            >
                {(formik) => (
                    <form
                        style={{
                            background: "lightblue",
                            padding: "10px",
                            marginLeft: "30%",
                            marginRight: "30%",
                            borderRadius: "6px",
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <div>
                            <label>First name</label>
                            <input
                                type="text"
                                name="first_name"
                                style={{
                                    marginLeft: "5px",
                                    borderRadius: "5px",
                                }}
                                value={formik.values.first_name || ""}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <ErrorMessage name="first_name"/>
                        </div>
                        <div>
                            <label>Last name</label>
                            <input
                                type="text"
                                name="last_name"
                                style={{
                                    marginLeft: "5px",
                                    borderRadius: "5px",
                                }}
                                value={formik.values.last_name || ""}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <ErrorMessage name="last_name"/>
                        </div>
                        <div>
                            <label>Phone</label>
                            <input
                                type="number"
                                name="phone"
                                style={{
                                    marginLeft: "5px",
                                    borderRadius: "5px",
                                }}
                                value={formik.values.phone || ""}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <ErrorMessage name="phone"/>
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                style={{
                                    marginLeft: "5px",
                                    borderRadius: "5px",
                                }}
                                value={formik.values.email || ""}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <ErrorMessage name="email"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                style={{
                                    marginLeft: "5px",
                                    borderRadius: "5px",
                                }}
                                value={formik.values.password || ""}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            <ErrorMessage name="password"/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default UserCreate;
