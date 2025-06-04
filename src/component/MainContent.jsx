import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import Page from "./Page";

const MainContent = () => {
  return (
    <div>
      <section className="px-4 py-5">
        <div className="flex gap-4">
          <Sidebar></Sidebar>

          <ProductList></ProductList>
        </div>
        <Page></Page>
      </section>
    </div>
  );
};

export default MainContent;
