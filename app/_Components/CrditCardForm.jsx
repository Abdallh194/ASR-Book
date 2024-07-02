import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import React, { useState } from "react";
import { Alert, Box } from "@mui/material";
import { Modal } from "react-bootstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ActiveLogout } from "../_Redux/features/StoreSlice";
const CrditCardForm = () => {
  let [cardNumber, setcardNumber] = useState("");
  let [Expirydate, setExpirydate] = useState("");
  let [cvv, setcvv] = useState("");
  let [cardholder, setcardholder] = useState("");
  const [show, setShow] = useState(false);
  let dispach = useDispatch();
  let router = useRouter();
  const handleClose = () => {
    router.push("/");
    dispach(ActiveLogout());
    setShow(false);
  };
  const handleShow = () => setShow(true);
  let day = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();
  let [logginProccessSuccess, setlogginProccessSuccess] = useState(false);
  return (
    <Card className="card-content">
      <CardContent
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
          gap: 1.5,
        }}
      >
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>رقم البطاقة</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setcardNumber(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>تاريخ إنتهاء البطاقة</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<CreditCardIcon />}
            onChange={(e) => {
              setExpirydate(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel>CVC/CVV</FormLabel>
          <Input
            className="input"
            type="number"
            endDecorator={<InfoOutlined />}
            onChange={(e) => {
              setcvv(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ gridColumn: "1/-1" }}>
          <FormLabel>إسم حامل البطاقة </FormLabel>
          <Input
            className="input"
            placeholder="Enter cardholder's full name"
            onChange={(e) => {
              setcardholder(e.target.value);
            }}
          />
        </FormControl>
        <Checkbox
          label="حفظ بيانات الكارت"
          sx={{ gridColumn: "1/-1", my: 1 }}
        />
        <Box className="info" sx={{ gridColumn: "1/-1" }}>
          يتم تخزين تفاصيل البطاقة لتجديد الاشتراك والمستقبل المشتريات. تم
          التحقق من صحة البطاقة باحتجاز مؤقت بقيمة 0.50 دولار أمريكي، وتم
          تحريرها بعد بضعة أيام
        </Box>
        <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
            variant="solid"
            color="primary"
            onClick={() => {
              if (
                cardholder.length > 0 &&
                cvv.length > 0 &&
                Expirydate.length > 0 &&
                cardNumber.length > 0
              ) {
                setlogginProccessSuccess(false);
                handleShow();
              } else {
                setlogginProccessSuccess(true);
              }
            }}
          >
            تاكيد الدفع
          </Button>
        </CardActions>
      </CardContent>
      <>
        <Modal show={show} onHide={handleClose} style={{ textAlign: "center" }}>
          <Modal.Header>
            <Modal.Title style={{ color: "green" }}>
              تم التاكيد علي طبلك{" "}
              <CheckCircleOutlineIcon fontSize="large" color="success" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {" "}
              تاريخ الطلب {day} - {month} - {year}
            </p>{" "}
            رجاء زيارة فرعنا في اقرب وقت لإستلام كتبكم
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>حسنا فهمت</Button>
          </Modal.Footer>
        </Modal>
      </>
      {logginProccessSuccess ? (
        <Alert
          severity="error"
          style={{
            position: "absolute",
            top: "-60px",
            width: "100%",
            justifyContent: "center",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          There is an error in some of your data. Please re-enter it.
        </Alert>
      ) : (
        ""
      )}
    </Card>
  );
};

export default CrditCardForm;
