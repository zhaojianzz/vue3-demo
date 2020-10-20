import { DefineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
interface LevelType {
  [key: string]: RouteType;
}
interface RouteType {
  absolutePath?: string;
  path: string;
  children: Array<RegExpMatchArray | null | RouteType>;
  name?: string;
  component?: Function | DefineComponent;
  props?: Function;
  components?: never;
}
const registerQuery = (obj: RouteType) => {
  obj.props = (route: { query: { [x: string]: any } }) => {
    const queryKeys = Object.keys(route.query);
    return queryKeys.reduce((obj: { [key: string]: string }, key) => {
      obj[key] = route.query[key];
      return obj;
    }, {});
  };
  return obj;
};
const loop = (route: RouteType) => {
  const levelMap: LevelType = {};
  const level = route.children;
  /* wide first */
  level.forEach((arr) => {
    if ((arr as RegExpMatchArray).length) {
      let head = (arr as RegExpMatchArray).shift();
      if (!head) {
        head = '';
      }
      const absolutePath = `${route.absolutePath || route.path}${head}`;
      const path = route.path === '' ? head : head.replace('/', '');
      const mergeKey = path.replace('/', '');
      if (!levelMap[head]) {
        levelMap[head] = registerQuery({
          path,
          absolutePath,
          children: [],
        });
      }
      if ((arr as RegExpMatchArray).length === 0) {
        levelMap[head].component = () => import(`../views${absolutePath}`);
      } else {
        levelMap[head].children.push(arr);
      }
    }
  });
  route.children = Object.keys(levelMap).map((key) => {
    /* deep first */
    if (levelMap[key].children.length > 0) {
      loop(levelMap[key]);
      // if (!levelMap[key].component) {
      //   levelMap[key].component = levelMap['/index'].component;
      // }
    }
    if (key === '/index') {
      route.component = levelMap[key].component;
    }
    return levelMap[key];
  });
};
export function createRoutes(): Array<RouteRecordRaw> {
  const context = require.context('../views/', true, /\.vue/);
  const files = context.keys();
  const defaultRoutes: Array<RouteRecordRaw> = [
    {
      path: '',
      redirect: '/Home',
    },
  ];
  const filesToPaths = (files: Array<string>): Array<RegExpMatchArray | null> =>
    files.map((file) => file.match(/\/\w+/g));
  const paths = filesToPaths(files);
  const pathsToRoutes = (paths: Array<RegExpMatchArray | null>) => {
    const routesTree: Array<RouteType> = [{ path: '', children: paths }];
    loop(routesTree[0]);
    return routesTree;
  };
  let routes: Array<any> = pathsToRoutes(paths);
  routes = defaultRoutes.concat(routes);
  return routes;
}
