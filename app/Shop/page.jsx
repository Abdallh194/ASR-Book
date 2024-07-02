import React, { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Image from "next/image";
import Categoris from "../_Components/Categoris";
import AboutShop from "../_Components/AboutShop";
import ShowBook from "../_Components/ShowBook";
const page = () => {
  return (
    <div className="Shop">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="Text-Card">
            <div className="head">إقرا كل يوم ونمي شخصيتك وزود مهاراتك</div>
            <div className="desc">
              مكتبتي هتوفرلك اي كتاب ممكن تطلبه اذا كان من الكتب الحديثه او
              القديمه مهما كان نوعها بأرخص الاسعار ويمكنك استعاره بعض الكتب
              مجانا
            </div>
            <div className="btns d-flex align-items-center">
              <div className="start">
                إبدا الأن <MenuBookIcon />
              </div>
              <div className="learn">
                إقراء المزيد
                <TouchAppIcon />
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} className="Image-Card">
            <Image
              src="/ReadBook.png"
              alt="ReadBook"
              width={500}
              height={500}
              className="img-fluid"
            />
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
          </Col>
        </Row>
      </Container>
      <Categoris />

      <ShowBook />

      <AboutShop />
    </div>
  );
};

export default page;
