import { useNavigate } from "react-router";
import { Button } from "../components/ui/button.js";
import { ArrowLeft } from "lucide-react";
import photoUnauthor from "@/assets/error_401.png";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-screen gap-4">
      <div className="">
        <img src={photoUnauthor} alt="Image" />
      </div>
      <h1 className="text-[30px] font-semibold">Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Button onClick={() => navigate("/")}>
        <ArrowLeft />
        Back to Dashboard
      </Button>
    </div>
  );
};
export default UnauthorizedPage;
