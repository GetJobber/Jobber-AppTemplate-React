import React from "react";

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 * reference: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context#extended-example
 */
function createContext<T extends {} | null>() {
  const context = React.createContext<T | undefined>(undefined);
  function useContext() {
    const ctx = React.useContext(context);
    if (ctx === undefined)
      throw new Error("useContext must be inside a Provider with a value");
    return ctx;
  }
  return [useContext, context.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export default createContext;
