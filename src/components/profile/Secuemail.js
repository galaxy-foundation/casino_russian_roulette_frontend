import React, { Component } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Box, Button, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeEmailFunc } from "../../actions/accountAction";
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

class Secuemail extends Component {
  constructor() {
    super();
    this.state = {
      isDisable: true,
    };
  }
  render() {
    return (
      <>
        <div className="secu-pass-edit">
          <div className="secu-pass-edit-title">Email</div>
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
            cur_email: "",
            new_email: "",
            re_email: "",
          }}
          validationSchema={Yup.object().shape({
            cur_email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            new_email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            re_email: Yup.string()
              .max(255)
              .oneOf(
                [Yup.ref("new_email"), null],
                "Email does not match. Please try again"
              )
              .required("Re-Password is required"),
          })}
          onSubmit={(e) => {
            const chgData = {
              id: this.props.auth.user.id,
              cur_email: e.cur_email,
              new_email: e.new_email,
            };
            this.props.changeEmailFunc(chgData);
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
                error={Boolean(touched.cur_email && errors.cur_email)}
                fullWidth
                helperText={touched.cur_email && errors.cur_email}
                label="Enter Current Email"
                margin="normal"
                name="cur_email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.cur_email}
                variant="outlined"
                disabled={this.state.isDisable}
              />
              <div className="regpassgroup">
                <div style={{ flex: 1, marginRight: "5px" }}>
                  <CssTextField
                    error={Boolean(touched.new_email && errors.new_email)}
                    fullWidth
                    helperText={touched.new_email && errors.new_email}
                    label="Enter New Email"
                    margin="normal"
                    name="new_email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.new_email}
                    variant="outlined"
                    disabled={this.state.isDisable}
                  />
                </div>
                <div style={{ flex: 1, marginLeft: "5px" }}>
                  <CssTextField
                    error={Boolean(touched.re_email && errors.re_email)}
                    fullWidth
                    helperText={touched.re_email && errors.re_email}
                    label="Re-enter New Email"
                    margin="normal"
                    name="re_email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.re_email}
                    variant="outlined"
                    disabled={this.state.isDisable}
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
                  disabled={isSubmitting && this.state.isDisable}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Set new Email
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

Secuemail.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { changeEmailFunc })(
  withRouter(Secuemail)
);
