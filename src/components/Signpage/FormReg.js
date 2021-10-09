import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import { withStyles } from "@material-ui/core/styles";

import "./login.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--mainclr)",
      fontSize: "12px !important",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--mainclr)",
      fontSize: "12px !important",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      fontSize: "12px !important",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "10px !important",
    },
    "& legend": {
      width: "fit-content !important",
    },
    "& legend > span": {
      fontSize: "8px !important",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(163,160,155)",
        fontSize: "12px !important",
      },
      "&:hover fieldset": {
        borderColor: "var(--mainshwclr)",
        fontSize: "12px !important",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--mainclr)",
        fontSize: "12px !important",
      },
    },
    "& .MuiInputLabel-outlined": {
      color: "rgb(163,160,155)",
      fontSize: "12px !important",
      overflowWrap: "break-word",
    },
  },
})(TextField);

class FormReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegEye: true,
      isRegConEye: true,
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.auth.isAuthenticated) {
      document.getElementById("SignDialogClosebtn").click();
    }
  }

  render() {
    return (
      <Formik
        initialValues={{
          reg_username: "",
          reg_email: "",
          reg_password: "",
          con_password: "",
        }}
        validationSchema={Yup.object().shape({
          reg_username: Yup.string().max(255).required("Useranme is required"),
          reg_email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          reg_password: Yup.string()
            .max(255)
            .min(8, "Password is too short - should be 8 chars minimum")
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              "That password is too weak. Please use a mix of letters, numbers and symbols"
            )
            .required("Password is required"),
          con_password: Yup.string()
            .max(255)
            .min(8, "Password is too short - should be 8 chars minimum")
            .oneOf(
              [Yup.ref("reg_password"), null],
              "Those passwords do not match. Please try again"
            )
            .required("Confirm Password is required"),
        })}
        onSubmit={(e) => {
          this.setState({
            isWriteErr: false,
          });
          const newUser = {
            name: e.reg_username,
            email: e.reg_email,
            password: e.reg_password,
          };
          this.props.registerUser(newUser);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <CssTextField
              error={Boolean(touched.reg_username && errors.reg_username)}
              fullWidth
              helperText={touched.reg_username && errors.reg_username}
              label="Username"
              margin="normal"
              name="reg_username"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.reg_username}
              variant="outlined"
            />
            <CssTextField
              error={Boolean(touched.reg_email && errors.reg_email)}
              fullWidth
              helperText={touched.reg_email && errors.reg_email}
              label="Email Address"
              margin="normal"
              name="reg_email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.reg_email}
              variant="outlined"
            />
            <div className="regpassgroup">
              <div style={{ flex: 1, marginRight: "5px" }}>
                <CssTextField
                  error={Boolean(touched.reg_password && errors.reg_password)}
                  fullWidth
                  helperText={touched.reg_password && errors.reg_password}
                  label="Password"
                  margin="normal"
                  name="reg_password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={this.state.isRegEye ? "password" : "text"}
                  value={values.reg_password}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <i
                        className={
                          this.state.isRegEye
                            ? "fa fa-eye eyeicons"
                            : "fa fa-eye-slash eyeicons"
                        }
                        onClick={() => {
                          this.setState({
                            isRegEye: !this.state.isRegEye,
                          });
                        }}
                      ></i>
                    ),
                  }}
                />
              </div>
              <div style={{ flex: 1, marginLeft: "5px" }}>
                <CssTextField
                  error={Boolean(touched.con_password && errors.con_password)}
                  fullWidth
                  helperText={touched.con_password && errors.con_password}
                  label="Confirm Password"
                  margin="normal"
                  name="con_password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type={this.state.isRegConEye ? "password" : "text"}
                  value={values.con_password}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <i
                        className={
                          this.state.isRegConEye
                            ? "fa fa-eye eyeicons"
                            : "fa fa-eye-slash eyeicons"
                        }
                        onClick={() => {
                          this.setState({
                            isRegConEye: !this.state.isRegConEye,
                          });
                        }}
                      ></i>
                    ),
                  }}
                />
              </div>
            </div>

            <Box sx={{ py: 2 }}>
              <Button
                className={!isValid ? "logindisablebtn" : "loginenablebtn"}
                color="primary"
                // disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    );
  }
}

FormReg.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(FormReg));
