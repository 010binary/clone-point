import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/onboarding/sign-in";
import ForgotPassword from "./pages/onboarding/forgot-password";

export const router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
          path: '/',
          element: <SignIn />,
        },
        {
          path: '/forgot-password',
          element: <ForgotPassword />,
        },
      ],
    },
  ]);