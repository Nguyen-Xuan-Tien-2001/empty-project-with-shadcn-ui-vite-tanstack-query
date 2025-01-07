import { useNavigate } from "react-router";
import { Button } from "../components/ui/button.js";
import React from "react";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")}>
      Về trang chủ
    </Button>
  );
};
export default UnauthorizedPage;
