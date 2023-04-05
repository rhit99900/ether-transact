import React from "react";
import { Navbar, Footer, Loader } from "../Components";
import TransactionWidget from "../Components/TransactionWidget/TransactionWidget";

const Main = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <TransactionWidget />        
      </main>
    </React.Fragment>
  )

}

export default Main;