import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";

/**
 * Page.jsx is the Parent Route in our React router and ensures that every Site added to the router automatically has the header without us having to Import it everywhere
 * "Outlet allows nested UI to shop up when child Routes are rendered", see: https://reactrouter.com/en/main/components/outlet
 */
export default function Page() {
  return (
    <div className="pagecontainer">
      <Header />
      <Outlet />
    </div>
  );
}
