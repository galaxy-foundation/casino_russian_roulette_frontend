import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changePassFunc } from "../../actions/accountAction";
import { withStyles } from "@material-ui/core/styles";

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
    },
  },
})(TextField);

class Secupassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecuCurPassEye: true,
      isSecuNewPassEye: true,
      isSecuRePassEye: true,
      isDisable: true,
    };
  }

  render() {
    return (
      <>
        <div className="secu-pass-edit">
          <div className="secu-pass-edit-title">Password</div>
          <div
            className="secu-pass-edit-act"
            onClick={() => {
              this.setState({
                isDisable: !this.state.isDisable,
              });
            }}
          >
            Edit
          </div>
        </div>
        <Formik
          initialValues={{
            cur_password: "",
            new_password: "",
            re_password: "",
          }}
          validationSchema={Yup.object().shape({
            cur_password: Yup.string()
              .max(255)
              .min(8, "Password is too short - should be 8 chars minimum")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "That password is too weak. Please use a mix of letters, numbers and symbols"
              )
              .required("Current password is required"),
            new_password: Yup.string()
              .max(255)
              .min(8, "Password is too short - should be 8 chars minimum")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "That password is too weak. Please use a mix of letters, numbers and symbols"
              )
              .required("New password is required"),
            re_password: Yup.string()
              .max(255)
              .min(8, "Password is too short - should be 8 chars minimum")
              .oneOf(
                [Yup.ref("new_password"), null],
                "Password does not match. Please try again"
              )
              .required("Re-Password is required"),
          })}
          onSubmit={(e) => {
            const chgData = {
              id: this.props.auth.user.id,
              cur_password: e.cur_password,
              new_password: e.new_password,
            };
            this.props.changePassFunc(chgData);
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
                error={Boolean(touched.cur_password && errors.cur_password)}
                fullWidth
                helperText={touched.cur_password && errors.cur_password}
                label="Enter Current Password"
                margin="normal"
                name="cur_password"
                onBlur={(event) => {
                  console.log(event);
                }}
                onChange={handleChange}
                type={this.state.isSecuCurPassEye ? "password" : "text"}
                value={values.cur_password}
                variant="outlined"
                disabled={this.state.isDisable}
                InputProps={{
                  endAdornment: this.state.isDisable ? (
                    <i
                      className="fa fa-eye eyeicons"
                      style={{ color: "#444" }}
                    ></i>
                  ) : (
                    <i
                      className={
                        this.state.isSecuCurPassEye
                          ? "fa fa-eye eyeicons"
                          : "fa fa-eye-slash eyeicons"
                      }
                      onClick={() => {
                        this.setState({
                          isSecuCurPassEye: !this.state.isSecuCurPassEye,
                        });
                      }}
                    ></i>
                  ),
                }}
              />
              <div className="regpassgroup">
                <div style={{ flex: 1, marginRight: "5px" }}>
                  <CssTextField
                    error={Boolean(touched.new_password && errors.new_password)}
                    fullWidth
                    helperText={touched.new_password && errors.new_password}
                    label="Enter New Password"
                    margin="normal"
                    name="new_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type={this.state.isSecuNewPassEye ? "password" : "text"}
                    value={values.new_password}
                    variant="outlined"
                    disabled={this.state.isDisable}
                    InputProps={{
                      endAdornment: this.state.isDisable ? (
                        <i
                          className="fa fa-eye eyeicons"
                          style={{ color: "#444" }}
                        ></i>
                      ) : (
                        <i
                          className={
                            this.state.isSecuNewPassEye
                              ? "fa fa-eye eyeicons"
                              : "fa fa-eye-slash eyeicons"
                          }
                          onClick={() => {
                            this.setState({
                              isSecuNewPassEye: !this.state.isSecuNewPassEye,
                            });
                          }}
                        ></i>
                      ),
                    }}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: "5px" }}>
                  <CssTextField
                    error={Boolean(touched.re_password && errors.re_password)}
                    fullWidth
                    helperText={touched.re_password && errors.re_password}
                    label="Re-enter Password"
                    margin="normal"
                    name="re_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type={this.state.isSecuRePassEye ? "password" : "text"}
                    value={values.re_password}
                    variant="outlined"
                    disabled={this.state.isDisable}
                    InputProps={{
                      endAdornment: this.state.isDisable ? (
                        <i
                          className="fa fa-eye eyeicons"
                          style={{ color: "#444" }}
                        ></i>
                      ) : (
                        <i
                          className={
                            this.state.isSecuRePassEye
                              ? "fa fa-eye eyeicons"
                              : "fa fa-eye-slash eyeicons"
                          }
                          onClick={() => {
                            this.setState({
                              isSecuRePassEye: !this.state.isSecuRePassEye,
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
                  className={
                    !isValid === !this.state.isDisable
                      ? "secupassdisablebtn"
                      : "secupassenablebtn"
                  }
                  color="primary"
                  disabled={
                    isSubmitting === true && this.state.isDisable === true
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Set new password
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

Secupassword.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { changePassFunc })(
  withRouter(Secupassword)
);
