import React from "react";
import { TabbedItems } from "./Tabs";
import SectionHeading from "../SectionHeading";

const TabbedSection = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:py-[60px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-5xl text-center lg:mb-20">
           
             <SectionHeading title="Top-rate online doctors and specialists available now."/>
              <p className="text-base text-body-color dark:text-dark-6">
               Choose from thousands of providwers at everyday affordable proces. Book online today.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
<TabbedItems/>

        </div>
        
      </div>
    </section>
  );
};

export default TabbedSection;

