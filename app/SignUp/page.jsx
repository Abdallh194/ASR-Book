"use client";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddNewUser } from "../_Redux/features/StoreSlice";

const Page = () => {
  const [FirstName, setFirstName] = React.useState("");
  const [LastName, setLastName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Country, setCountry] = React.useState("");
  let [logginProccessSuccess, setlogginProccessSuccess] = React.useState(false);
  const router = useRouter();
  let dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      FirstName.length > 0 &&
      LastName.length > 0 &&
      Email.length > 0 &&
      Password.length > 0 &&
      Phone.length > 0 &&
      Country.length > 0
    ) {
      let data = {
        NewFirstName: FirstName,
        NewLastName: LastName,
        NewPhone: Phone,
        NewEmail: Email,
        NewPassword: Password,
        NewCountry: Country,
      };
      dispatch(AddNewUser(data));
      setlogginProccessSuccess(false);
      router.push("/Login");
    } else {
      setlogginProccessSuccess(true);
      console.log("errorrrr");
    }
  };

  return (
    <div className="SignUp">
      <Container fluid>
        <Row>
          <Col xs={12} md={12} lg={6} className="Form-Card">
            <div className="content">
              <div className="head">انضم الينا الأن</div>
              <div className="desc">
                سجل لدينا الان واحصل على اخر العروض لدي مكتبتي
              </div>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="الإسم الاول"
                      fullWidth
                      id="firstName"
                      label="الإسم الاول"
                      autoFocus
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="الإسم الأخير"
                      name="الإسم الأخير"
                      autoComplete="family-name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="البريد الإلكتروني"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      type="number"
                      required
                      fullWidth
                      id="phone"
                      label="رقم الهاتف"
                      name="phone"
                      autoComplete="Phone Numbe"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="الرقم السري"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      type="text"
                      required
                      fullWidth
                      id="Country"
                      label="الدوله"
                      name="phone"
                      autoComplete="Country"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="أريد أن أتلقى الإلهام والعروض الترويجية التسويقية والتحديثات عبر البريد الإلكتروني."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: "#f78536" }}
                >
                  تسجيل الأن
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href="/Login" style={{ color: "#f78536" }}>
                      هل لديك حساب بالفعل ؟ سجل دخول الان
                    </Link>
                  </Grid>
                </Grid>
                {logginProccessSuccess ? (
                  <Alert
                    severity="error"
                    style={{ position: "absolute", top: "90px" }}
                  >
                    There is an error in some of your data. Please re-enter it.
                  </Alert>
                ) : (
                  ""
                )}
              </Box>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6} className="Image-Card"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
