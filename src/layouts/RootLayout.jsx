import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />

      <main className=" w-full">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}