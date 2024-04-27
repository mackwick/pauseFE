import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Landing from "./pages/Landing";
import Time from "./pages/Time";
import Create2 from "./pages/Create2";
import { indexLoader, showLoader } from "./loaders";
import {
  createAction,
  create2Action,
  deleteAction,
  updateAction,
} from "./actions";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="/pause" element={<Time />} loader={indexLoader} />
      <Route
        path="/create2/:id"
        element={<Create2 />}
        action={create2Action}
        loader={showLoader}
      />

      <Route
        path="/index"
        element={
          <>
            <SignedIn>
              <Index />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        loader={indexLoader}
      />
      <Route
        path="/:id"
        element={
          <>
            <SignedIn>
              <Show />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
        loader={showLoader}
      />
      <Route path="/create" action={createAction} />
      <Route path="/update/:id" action={updateAction} />
      <Route path="/delete/:id" action={deleteAction} />
    </Route>
  )
);

export default router;
