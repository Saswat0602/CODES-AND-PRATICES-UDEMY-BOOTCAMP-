import { useEffect, useState } from "react";
import Counter from "./Counter";
import "./App.css";
import QuoteFetcher from "./QuoteFetcher";
import QuoteFetcherLoader from "./QuoteFetcherLoader";

function App() {



  return (
    <>
      {/* <Counter /> */}
      {/* <QuoteFetcher /> */}
      <QuoteFetcherLoader />
      <h1>hello</h1>
    </>
  );
}
export default App;
