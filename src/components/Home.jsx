import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Efficiency } from "./Efficiency";
import { Ourtech } from "./Ourtech";
import { Techbeyond } from "./Techbeyond";
import { WeBring } from "./WeBring";
import { Testimonial } from "./Testimonial";
import { IntrestedInWorking } from "./IntrestedInWorking";
import { Footer } from "./Footer";
import { Loader } from "./Loader";
import { AnimatedComponent } from "./AnimatedComponent";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeoutId); 
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          <Header />
          <Techbeyond />
          <Efficiency />
          <AnimatedComponent />
          <Ourtech />
          <WeBring />
          <Testimonial />
          <IntrestedInWorking />
          <Footer />
        </div>
      )}
    </>
  );
};
