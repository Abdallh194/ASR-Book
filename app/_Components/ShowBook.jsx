"use client";
import React, { useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import { AllProducts } from "../../public/Data";
import { useSelector } from "react-redux";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopBook from "./LoopBook";
const ShowBook = () => {
  let { BookCart, FavBooks } = useSelector((s) => s.ASR);
  let [searchItem, setSearchItem] = useState("");
  let [enableSearches, setEnableSearches] = useState(false);
  let [ResultSearch, setResultSearch] = useState([]);
  let [SelectedCategorisContainer, setSeSelectedCategorisContainer] =
    useState(AllProducts);
  const handleChange = (event) => {
    if (event.target.value === "All") {
      setSeSelectedCategorisContainer(AllProducts);
    } else {
      let FilterProducts = AllProducts.filter(
        (item) => item.cat === event.target.value
      );
      setSeSelectedCategorisContainer(FilterProducts);
    }
  };
  const HandleSearch = () => {
    if (searchItem) {
      setEnableSearches(true);
      let SearchBook = AllProducts.filter((item) => item.title === searchItem);
      if (SearchBook) {
      }
      setResultSearch(SearchBook);
    } else {
      setEnableSearches(false);
    }
  };

  return (
    <div className="ShowBook">
      <Container>
        <div className="headers d-flex justify-content-between">
          <div className="head">تسوق الكتب الان</div>
          <div className="searchBox">
            <FormControl
              type="text"
              onChange={(e) => {
                setSearchItem(e.target.value);
              }}
              placeholder="بتدور على كتاب معين .....؟"
            />
            <Button onClick={HandleSearch} className="btn">
              Search
            </Button>
          </div>
          <div className="fillter">
            <h4>الفئات</h4>
            <Form.Select
              aria-label="Default select example"
              onChange={handleChange}
              className="selectCategories"
            >
              <option value="All" selected>
                كل الكتب
              </option>
              <option value="علوم">علوم</option>
              <option value="طبيخ">طبيخ</option>
              <option value="الاغاني">الاغاني</option>
              <option value="فضاء">فضاء</option>
              <option value="تكنولوجيا">تكنولوجيا</option>
              <option value="حرب">حرب</option>
              <option value="شخصيات">شخصيات</option>
              <option value="الإسلام">الإسلام</option>
              <option value="طفوله">طفوله</option>
              <option value="حكايات">حكايات</option>
            </Form.Select>
          </div>
        </div>
        <Row>
          {enableSearches ? (
            <div>
              {ResultSearch.length > 0 ? (
                <LoopBook Loop={ResultSearch} />
              ) : (
                <div className="text-center mt-4" style={{ color: "red" }}>
                  عفو ا لا يوجد نتائج بحث عن كتاب <> </>
                  {searchItem}
                </div>
              )}
            </div>
          ) : (
            <LoopBook Loop={SelectedCategorisContainer} />
          )}
        </Row>
        {BookCart.length > 0 ? (
          <Link href="/Cart" className="cart-bag">
            <div className="cart-length">{BookCart.length}</div>{" "}
            <ShoppingBagIcon fontSize="large" className="cart-icon" />
          </Link>
        ) : (
          ""
        )}
        {FavBooks.length > 0 ? (
          <Link href="/FavBooks" className="heart-bag">
            <div className="heart-length">{FavBooks.length}</div>{" "}
            <FavoriteIcon fontSize="large" className="heart-icon" />
          </Link>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default ShowBook;
