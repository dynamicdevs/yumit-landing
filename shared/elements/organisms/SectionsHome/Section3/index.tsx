import { GridWrapper } from "../../GridWrapper";

export const Section3 = () => {
  return (
    <GridWrapper className="py-12 bg-[#141429] rounded-[32px]">
      <div className="col-span-6">
        <h1 className="font-bold text-center text-heading-05 text-primary-wb-white">
          We are building
        </h1>
      </div>
      <div className="col-span-6">
        <h2 className="text-heading-06 text-primary-wb-white">
          Easy to apply checkout
        </h2>
        <p className="text-paragraph-04 text-primary-wb-white">
          Exchange in real time, crypto, cost and more.
        </p>
        <p className="text-paragraph-04 text-primary-wb-white">
          Fast transaction confirmation for most common tokens.
        </p>
        <p className="text-paragraph-04 text-primary-wb-white">
          SKD and Api for wallets and ecommerce sites.
        </p>
        <p className="text-paragraph-04 text-primary-wb-white">
          Verticalized POS for strategic industries.
        </p>
      </div>
    </GridWrapper>
  );
};
