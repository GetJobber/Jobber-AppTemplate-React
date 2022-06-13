import { render, RenderOptions } from "@testing-library/react";
import { UserProvider } from "contexts";
import { createMemoryHistory } from "history";
import { FC, ReactElement } from "react";
import { Router, RouterProps } from "react-router-dom";
import { User } from "types/user";

type ProvidersInitialValues = {
  user?: User;
  router?: RouterProps;
};

const customRender = (
  ui: ReactElement,
  providersInitialValues?: ProvidersInitialValues,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const wrapper: FC = ({ children }) => {
    const routerProps = providersInitialValues?.router;
    const history = createMemoryHistory();
    return (
      <UserProvider initialValue={providersInitialValues?.user}>
        <Router
          location={routerProps?.location ?? history.location}
          navigator={routerProps?.navigator ?? history}
        >
          {children}
        </Router>
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
