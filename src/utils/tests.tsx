import { render, RenderOptions } from "@testing-library/react";
import { UserProvider } from "contexts";
import { FC, ReactElement } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import { User } from "types/user";

type ProvidersInitialValues = {
  user?: User;
  router?: MemoryRouterProps;
};

const customRender = (
  ui: ReactElement,
  providersInitialValues?: ProvidersInitialValues,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const wrapper: FC = ({ children }) => {
    const routerProps = providersInitialValues?.router;
    return (
      <UserProvider initialValue={providersInitialValues?.user}>
        <MemoryRouter {...routerProps}>{children}</MemoryRouter>
      </UserProvider>
    );
  };
  render(ui, {
    wrapper,
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
