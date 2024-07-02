"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ActiveLoggin } from "../_Redux/features/StoreSlice";
import { Alert, Grid } from "@mui/material";
import Link from "next/link";

const Login = () => {
  let router = useRouter();
  let dispatch = useDispatch();
  // states
  let [EnteredUserName, setEntredUser] = useState("");
  let [EnteredPassWord, setEnteredPass] = useState("");
  let [logginProccessSuccess, setlogginProccessSuccess] = useState(false);
  let { userNameFromStore, PassWordFromStore, newuser } = useSelector(
    (s) => s.ASR
  );
  // HandleSubmit
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (
      (EnteredUserName === userNameFromStore &&
        EnteredPassWord === PassWordFromStore) ||
      (EnteredUserName === newuser.NewEmail &&
        EnteredPassWord === newuser.NewPassword)
    ) {
      dispatch(ActiveLoggin());
      setlogginProccessSuccess(false);
      router.push("/CheckOut");
    } else {
      setlogginProccessSuccess(true);
    }
  };
  return (
    <div className="Login">
      <Container>
        <Row>
          <Col md={12} lg={6} className="Text-Card">
            <div className="head">إشترك لدينا</div>
            <div className="subhead"> للحصول على اخر العروض</div>
            <div className="desc">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا
            </div>
            <Form className="Form-Login" onSubmit={HandleSubmit}>
              <FormControl
                type="text"
                placeholder="Email Address ....."
                onChange={(e) => {
                  setEntredUser(e.target.value);
                }}
              />
              <FormControl
                type="password"
                placeholder="Password ....."
                onChange={(e) => {
                  setEnteredPass(e.target.value);
                }}
              />
              <FormControl type="submit" id="submit" value="Sign In" />
              {logginProccessSuccess ? (
                <Alert
                  severity="error"
                  style={{
                    position: "absolute",
                    top: "90px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  There is an error in some of your data. Please re-enter it.
                </Alert>
              ) : (
                ""
              )}
              <Grid container className="haveAccount">
                <Grid item xs>
                  <Link
                    href="#"
                    style={{
                      color: "black",
                    }}
                  >
                    هل نسيت كلمة السر ...؟
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/SignUp" style={{ color: "black" }}>
                    {"ليس لديك حساب ؟ سجل لدينا الأن"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Col>
          <Col md={12} lg={6} className="Image-Card">
            <div className="img-container">
              <Image
                src="/Login.png"
                alt="Login"
                width={400}
                height={400}
                className="img-fluid"
              />
              <div className="spin"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
