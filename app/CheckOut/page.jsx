"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BillDetails from "../_Components/BillDetails";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CrditCardForm from "../_Components/CrditCardForm";
import Login from "../Login/page";
const CheckOut = () => {
  let { isLoggin, BookCart, newuser } = useSelector((s) => s.ASR);
  let router = useRouter();
  return (
    <div>
      {isLoggin && BookCart.length > 0 ? (
        <div className="checkout">
          <Container>
            <Row>
              <Col md={12} lg={6} className="FormDetails">
                <h4>ماذا تتضمن الفاتورة ..؟</h4>
                <BillDetails BookCart={BookCart} />
              </Col>
              <Col md={12} lg={6} className="Bill-Details">
                <div className="email">
                  <h4>معلومات الدفع</h4>
                  <p>معلومات الاتصال</p>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="البريد الإلكتروني"
                    name="email"
                    autoComplete="email"
                    value={newuser.NewEmail}
                  />
                </div>
                <CrditCardForm />
              </Col>
            </Row>
          </Container>
        </div>
      ) : isLoggin && BookCart.length == 0 ? (
        router.push("/Shop")
      ) : (
        <Login />
      )}
    </div>
  );
};

export default CheckOut;
