import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutShop = () => {
  return (
    <Container className="AboutShop">
      <Row>
        <Col md={12} lg={8} xs={12} className="AboutShop-Card RedBook">
          <div className="head">الكتاب الأحمر</div>
          <div className="desc">
            يعد كتاب «مقتطفات من أقوال ماو تسي تونغ» أو الكتاب الأحمر كما يطلق
            عليه في العالم هو أكثر الكتب التي يقرأها العالم حاليا، الكتاب صدر
            بين عامي 1964 و1976 ويضم خطب الرئيس الصيني الراحل ماوتسي تونغ
            وأقواله، ويعتبر أحد رموز الثورة الثقافية التي قامت بها في الصين.
          </div>
          <div className="more">إقرا اكتر</div>
        </Col>
        <Col md={12} lg={4} xs={12} className="AboutShop-Card OfferCards">
          <div className="OfferCard1">
            <div className="head">العروض المميزة</div>
            <div className="desc">وفر اكتر من 20%</div>
            <div className="more">إقرا اكتر</div>
          </div>
          <div className="OfferCard2">
            <div className="head">العروض المميزة</div>
            <div className="desc">وفر اكتر من 20%</div>
            <div className="more">إقرا اكتر</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutShop;
