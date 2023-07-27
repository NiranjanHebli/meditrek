import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  register: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "grey",
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      height: 400,
    },
  },
  registerText: {
    zIndex: 10,
    color: "#000",
    textAlign: "center",
  },
  registerFooter: {
    alignItems: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
}));
const Register = (theme) => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/register', values);
      dispatch(hideLoading())
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Something went wrong");
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.register}>
      <div className="card p-4">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <div className={classes.registerText}>
            <Typography variant="h5">Register Form</Typography>
          </div>

          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="register_footer">
            <Link className="my-3" to="/login">
              Already a user? login here{" "}
            </Link>
            <button className="mx-5 btn btn-primary">Register</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
