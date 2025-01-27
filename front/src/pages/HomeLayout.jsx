import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, GlobalLoading } from "../components";

const HomeLayout = () => {
  const isLoading = useNavigation().state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <main className="container align-element py-20">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default HomeLayout;
