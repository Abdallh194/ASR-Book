"use client";
import { Rating, Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { AddBookToCard, AddFavBook } from "../_Redux/features/StoreSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const LoopBook = ({ Loop }) => {
  let dispath = useDispatch();
  const [RateValue, setRateValue] = useState(5);
  return (
    <Row>
      {Loop.map((el) => {
        return (
          <Col key={el.id} xs={6} sm={6} md={6} lg={2} className="book-Card">
            <div className="bookfav">
              <div className="discount">خصم 19%</div>
              <Tooltip title="أضف الي كتبك المفضلة">
                <div
                  className="fav"
                  onClick={() => {
                    dispath(AddFavBook(el));
                  }}
                >
                  <FavoriteBorderIcon />
                </div>
              </Tooltip>
            </div>
            <Image
              src={el.img}
              alt=""
              height={100}
              width={70}
              className="img-fluid"
            />
            <div className="BookDetails">
              <div className="desc">
                <div className="title">كتاب {el.title} </div>
                <Rating
                  name="simple"
                  value={RateValue}
                  style={{ direction: "ltr" }}
                />
                <div className="price">السعر : {el.price} جنية </div>
              </div>
              <div
                className="add"
                onClick={() => {
                  dispath(AddBookToCard(el));
                }}
              >
                أضف للسلة <AddShoppingCartIcon />
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default LoopBook;
