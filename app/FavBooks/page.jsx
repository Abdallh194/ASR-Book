"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

import Link from "next/link";
import LoopBook from "../_Components/LoopBook";
const Page = () => {
  let { FavBooks, BookCart } = useSelector((s) => s.ASR);
  return (
    <div className="ShowBook">
      <Container>
        {FavBooks.length > 0 ? (
          <Row>
            <div className="head">كتبك المفضلة</div>
            <LoopBook Loop={FavBooks} />
            {BookCart.length > 0 ? (
              <Link href="/Cart" className="cart-bag">
                <div className="cart-length">{BookCart.length}</div>{" "}
                <ShoppingBagIcon fontSize="large" className="cart-icon" />
              </Link>
            ) : (
              ""
            )}
          </Row>
        ) : (
          <div className="text-center mt-4" style={{ color: "red" }}>
            عفوا لم تقم بإضافة كتبك المفضلة
          </div>
        )}
      </Container>
    </div>
  );
};

export default Page;
