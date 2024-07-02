import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ShopCatigories } from "../../public/Data";

const Categoris = () => {
  return (
    <Container fluid>
      <Row className="Categoris">
        {ShopCatigories.map((el) => {
          return (
            <Col
              key={el.id}
              xs={6}
              sm={6}
              md={6}
              lg={2}
              className="categoris-Card"
            >
              <Image
                src={el.img}
                alt=""
                width={70}
                height={70}
                className="img-fluid"
              />
              <div className="BookDetails">
                <div className="desc">
                  <div className="title">كتاب {el.title} </div>
                  <div className="num">عدد الكتب المتاحة : {el.num}</div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Categoris;
