import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AllStories } from "../../public/Data";
import Image from "next/image";

const page = () => {
  return (
    <div className="Stories">
      <Container>
        <div className="header">قصص وحواديت</div>
        {AllStories.map((e) => {
          return (
            <>
              <Row key={e.id}>
                <Col md={12} lg={6} className="Story-Card">
                  <h3 className="head" style={{ fontWeight: "bold" }}>
                    {e.title}
                  </h3>
                  <div className="desc">{e.desc}</div>
                  <div className="more">قراءة القصة كاملة</div>
                </Col>
                <Col md={12} lg={6} className="Image-Card">
                  <Image
                    src={e.img}
                    alt={e.title}
                    width={500}
                    height={400}
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default page;
