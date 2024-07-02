import React from "react";
import { Button } from "react-bootstrap";

const BillDetails = ({ BookCart }) => {
  let TotalBillPrice = () => {
    let total = 0;
    BookCart.map((e) => (total += e.price * e.qty));
    return total;
  };
  return (
    <div className="BillDetails">
      <div className="form">
        <input
          type="text"
          className="form-control"
          placeholder="رمز القسيمة "
        />
        <Button className="btn btn-warning">تاكيد</Button>
      </div>
      <div className="bill d-flex justify-content-between mt-3">
        <div className="header">إسم الكتاب</div>
        <div className="info">السعر</div>
      </div>
      <hr />
      {BookCart.map((e) => {
        return (
          <div className="bill d-flex justify-content-between mt-2" key={e.id}>
            <div className="header">
              {" "}
              {e.title} x{e.qty}{" "}
            </div>
            <div className="info">{e.price * e.qty} جنية</div>
          </div>
        );
      })}
      <hr />
      <div className="bill d-flex justify-content-between mt-3">
        <div className="header"> الخصم</div>
        <div className="info">0 جنية</div>
      </div>
      <hr />
      <div className="bill d-flex justify-content-between mt-3">
        <div className="header"> الإجمالي</div>
        <div className="info">{TotalBillPrice()} جنية </div>
      </div>
    </div>
  );
};

export default BillDetails;
