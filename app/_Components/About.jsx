import Link from "next/link";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

import AboutBooky from "./AboutBooky";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="About">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="About-Card Logo-Card"
            >
              <div className="content">
                <Link href="/" className="logo">
                  <span className="pt_01">مكتــ</span>
                  <span className="pt_02">ــبتي</span>
                </Link>
                <h6 style={{ fontWeight: "bold" }} className="mt-5">
                  اسرع موقع فى مصر
                </h6>
                <Form className="searchform">
                  <FormControl
                    type="text"
                    placeholder="إبحث عن الكتاب المفضل لديك ....."
                  />
                  <Button type="submit" className="btn btn-primary">
                    إبحث الأن
                  </Button>
                </Form>
                <div className="desc">
                  يمكنك التواصل معنا عن طريق مواقع التواصل
                </div>
                <div className="socials">
                  <a
                    href="https://twitter.com/AbdallhSabry9"
                    className="social"
                    target="_blanck"
                  >
                    <TwitterIcon
                      className="social-icon"
                      style={{ backgroundColor: "#1DA1F2" }}
                    />
                  </a>
                  <a href="#s" className="social">
                    <TelegramIcon
                      className="social-icon"
                      style={{ backgroundColor: "#229ED9" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100007172563893"
                    target="_blanck"
                    className="social"
                  >
                    <FacebookIcon
                      className="social-icon"
                      style={{ backgroundColor: "#4267B2" }}
                    />
                  </a>
                  <a className="social">
                    <YouTubeIcon
                      className="social-icon"
                      style={{ backgroundColor: "#FF0000" }}
                    />
                  </a>
                  <a
                    href="https://wa.me/+201091415560"
                    className="social"
                    target="_blanck"
                  >
                    <WhatsAppIcon
                      className="social-icon"
                      style={{ backgroundColor: "#25D366" }}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={7}
              className="About-Card Books-Card"
            >
              <Image
                src="/about.png"
                alt="about"
                width={500}
                height={300}
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <AboutBooky />
    </>
  );
};

export default About;
