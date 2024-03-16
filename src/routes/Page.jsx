import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";

export default function Page() {
  return (
    <div className="pagecontainer">
      <Header />
      <Outlet />
    </div>
  );
}
