import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { UserProvider } from "contexts";
import { MemoryRouter } from "react-router-dom";
import { User } from "types/user";

interface AllProvidersInitialValues {
  user: User;
}

const AllProviders: FC<{
  children: React.ReactNode;
  initialValues?: AllProvidersInitialValues;
}> = ({ children, initialValues }) => {
  return (
    <UserProvider initialValue={initialValues?.user}>
      <MemoryRouter>{children}</MemoryRouter>
    </UserProvider>
  );
};

const customRender = (
  ui: ReactElement,
  allProvidersInitialValues?: AllProvidersInitialValues,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const wrapper: React.FC = ({ children }) => (
    <AllProviders initialValues={allProvidersInitialValues}>
      {children}
    </AllProviders>
  );
  render(ui, {
    wrapper,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
