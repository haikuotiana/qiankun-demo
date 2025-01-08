let subApps = [
  {
    name: "app-child",// name 需要唯一
    entry: "//localhost:5174",
    container: "#app-child",// 表示承载为应用的容器的id
    activeRule: "/app-child",// 匹配的路由
  },
  // {
  //   name: "app-react",
  //   entry: "//localhost:5174/home",
  //   container: "#app-react",
  //   activeRule: "/app-react",
  // },
];
export default subApps