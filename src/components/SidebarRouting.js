import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Loader } from "./ui/Loader";

const Users = lazy(() =>
  import("./users/Users" /*webpackChunkName: 'Users' */)
);

const Sessions = lazy(() =>
  import("./sessions/Sessions" /*webpackChunkName: 'Sessions' */)
);

const Analytics = lazy(() =>
  import("./analytics/Analytics" /*webpackChunkName: 'Analytics' */)
);

const Messages = lazy(() =>
  import("./messages/Messages" /*webpackChunkName: 'Messages' */)
);

const Chats = lazy(() =>
  import("./chats/Chats" /*webpackChunkName: 'Chats' */)
);

const Help = lazy(() => import("./help/Help" /*webpackChunkName: 'Help' */));

const Settings = lazy(() =>
  import("./settings/Settings" /*webpackChunkName: 'Setings' */)
);

export const SidebarRouting = (a) => {
  console.log('a', a);
  return (
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/" component={Users} />
        <Route path="/sessions" component={Sessions} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/messages" component={Messages} />
        <Route path="/chats" component={Chats} />
        <Route path="/help" component={Help} />
        <Route path="/settings" component={Settings} />
        <Redirect to="/" />
      </Suspense>
    </Switch>
  );
};
