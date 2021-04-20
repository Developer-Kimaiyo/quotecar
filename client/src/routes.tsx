import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { InLineLoader } from "./components/InlineLoader/InlineLoader";
import { useDeviceType } from "./useDeviceType";
import { HOME, QUOTE, REF } from "./settings/constants";
const Layout = lazy(() => import("./containers/LayoutContainer/AppLayout"));
const Home = lazy(() => import("./containers/Home"))
const Quote = lazy(() => import("./containers/Quote"));
const Ref = lazy(() => import("./containers/Ref"));
const NotFound = lazy(() => import("./containers/NotFound/NotFound"));
const routes = [
  {
    path: HOME,
    component: lazy(() => import("./containers/Home")),
    exact: true,
  },
  {
    path: QUOTE,
    component: lazy(() => import("./containers/Quote")),
  },
  {
    path: REF,
    component: lazy(() => import("./containers/Ref")),
  },
];

const userAgent = "user-agent";
const Routes = () => {
  const deviceType = useDeviceType(userAgent);
  return (
    <Suspense fallback={<InLineLoader />}>
      <Layout>
        <Switch>
          <Route path={HOME} exact={true} component={Home} />

          <Route path={QUOTE} component={Quote} />
          <Route path={REF} component={Ref} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Suspense>
  );
};

export default Routes;
