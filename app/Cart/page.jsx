"use client";
import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteBookFromCard } from "../_Redux/features/StoreSlice";
import BillDetails from "../_Components/BillDetails";
const Cart = () => {
  let { BookCart, isLoggin } = useSelector((s) => s.ASR);
  let router = useRouter();
  let dispatch = useDispatch();
  return (
    <div className="Cart">
      <Container>
        {BookCart.length > 0 ? (
          <Row>
            <div className="head">سلة التسوق</div>
            <Col xs={12} sm={12} md={12} lg={8} className="CartDetails">
              <Row className="Headers">
                <Col xs={2} sm={2} md={2} lg={2}>
                  صورة الكتاب
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  الاسم
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  الكمية
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  التصنيف
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  السعر
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                  حذف
                </Col>
              </Row>

              {BookCart.map((el) => {
                return (
                  <Row key={el.id} className="BookDetails">
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <Image
                        src={el.img}
                        className="img-fluid"
                        alt={el.title}
                        width={50}
                        height={200}
                      />
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <div className="header">{el.title}</div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <div className="header">{el.qty}</div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <div className="header">{el.cat}</div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <div className="header">{el.price}</div>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                      <Tooltip title="حذف">
                        <IconButton
                          onClick={(e) => {
                            dispatch(DeleteBookFromCard(el.id));
                          }}
                        >
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Tooltip>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} className="BillDetails">
              <BillDetails BookCart={BookCart} />
              Bill Details
              <div
                className="submit"
                onClick={() => {
                  isLoggin ? router.push("/CheckOut") : router.push("/Login");
                }}
              >
                تاكيد ودفع
              </div>
            </Col>
          </Row>
        ) : (
          <div className="text-center mt-4" style={{ color: "red" }}>
            السلة فارغة
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
