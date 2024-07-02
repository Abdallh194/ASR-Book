"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScroll() {
  return (
    <Navbar expand="lg">
      <Container>
        <Link href="/" className="logo">
          <span className="pt_01">مكتــ</span>
          <span className="pt_02">ــبتي</span>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 links"
            style={{ maxHeight: "100px", marginTop: "20px !important" }}
            navbarScroll
          >
            <Link href="/">الرئيسية</Link>
            <Link href="#About">عنا</Link>
            <Link href="/Shop">تسوق</Link>
            <Link href="/Cart">سلة المشتريات</Link>
            <Link href="/Stories">قصص وحواديت</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
