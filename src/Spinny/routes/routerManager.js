import * as R from "ramda";

const routes = {
  routeHandling: {
    path: "/",
    name: "routeHandling"
  },
  anime: {
    path: "/anime",
    name: "anime"
  }
};
export default routes;
export const getPathByKey = key => routes[key].path;
export const getPathByName = name => {
  const findPathByName = R.compose(
    R.prop("path"),
    R.find(R.propEq("name", name)),
    R.values
  );
  return findPathByName(routes);
};
