import React from "react";
import { VendorProvider } from "./vendor";
import { ProductProvider } from "./product";
import { MarketProfilesProvider } from "./GlobalContext";
import { AuthProvider } from '../authContext/authState';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <VendorProvider />,
        <ProductProvider />,
        <MarketProfilesProvider />,
        <AuthProvider />
      ]}
    >
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
