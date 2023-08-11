import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Link
        style={{
          height: 100,
          backgroundColor: "#0aa",
          display: "flex",
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
          fontSize: 40,
          textDecoration:'none'
        }}
        href={'/'}
      >
        {"<-"}
      </Link>
      {children}
    </>
  );
};

export default Layout;
