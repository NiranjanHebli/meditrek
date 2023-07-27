import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../../redux/features/alertSlice";

const useStyles = makeStyles((theme) => ({
  login: {
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
  loginText: {
    zIndex: 10,
    color: "#000",
    textAlign: "center",
  },
  loginFooter: {
    alignItems: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
}));
const Login = (props) => {
  // const {state,setstate}=props
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      console.log(values)
      const res =await axios.post('/api/v1/user/login',values);
      dispatch(hideLoading())
      if(res.data.success){
        localStorage.setItem("token",res.data.token)
        message.success("Login Successful")
        navigate("/")
        props.setstate(true)
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
      message.error("Error in Login went wrong!");
    }
  };
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <div className="card p-4">
        <Form layout="vertical" onFinish={onFinishHandler}>
          <div className={classes.loginText}>
            <Typography variant="h5">Login Form</Typography>
          </div>
          <Form.Item label="email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="login_footer">
            <Link className="my-3" to="/register">
              Not an User? Register Now{" "}
            </Link>
            <button className="mx-5 btn btn-primary">Login</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
