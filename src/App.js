import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routes } from "./routes/MainRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import notifications from "./components/common/Notification/Notification";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,

      retry: (failureCount, error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403 ||
          error?.response?.status === 404
        ) {
          return false;
        }

        return failureCount < 1;
      },

      onError: (err) =>
        notifications("Error", `${err?.response?.data?.message}`, "error"),
    },

    mutations: {
      onError: (err) =>
        notifications("Error", `${err?.response?.data?.message}`, "error"),
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes} />
    </QueryClientProvider>
  );
}

export default App;
