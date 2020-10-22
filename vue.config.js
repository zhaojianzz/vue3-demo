// import { sync } from "glob";
// import { resolve as _resolve, basename, dirname } from "path";
// const resolve = folder => _resolve(__dirname, folder);
// const VUE_APP_ALLOW_ENTRY = process.env.VUE_APP_ALLOW_ENTRY || "";
// // 多页面入口路径
// const PAGE_PATH = resolve("src/pages");

// /**
//  * 获取多页面配置对象
//  */
// function getPagesConfig (entry) {
//   const pages = {};
//   // 规范中定义每个单页文件结构
//   // index.html,main.js,App.vue
//   sync(PAGE_PATH + "/*/main.js").forEach(filePath => {
//     const pageName = basename(dirname(filePath));
//     if (entry && entry !== pageName) return;
//     pages[pageName] = {
//       entry: filePath,
//       // 除了首页，其他按第二级目录输出
//       // 浏览器中直接访问/news,省去/news.html
//       fileName: `${pageName === "index" ? "" : pageName + "/"}index.html`,
//       template: dirname(filePath) + "/index.html",
//       chunks: [
//         "vue-common",
//         "element-ui",
//         "echarts",
//         "vendors",
//         "manifest",
//         pageName
//       ]
//     };
//   });
//   return pages;
// }

// /**
//  * 样式预处理器全局变量资源插件
//  * @param {String} rule webpack 规则
//  */
// function addStyleResource (rule) {
//   rule
//     .use("style-resource")
//     .loader("style-resources-loader")
//     .options({
//       patterns: [resolve("./src/assets/sass/var.scss")]
//     });
// }

// const pages = getPagesConfig(VUE_APP_ALLOW_ENTRY);

// export const productionSourceMap = false;
// export const publicPath = "./";
// export const pages = {
//   ...pages
//   // ,
//   // 手动设置单页
//   // about: 'src/pages/about/main.js'
// };
// export const configureWebpack = {
//   cache: true,
//   plugins: [],
//   performance: {
//     hints: false
//   },
//   optimization: {
//     runtimeChunk:
//       process.env.NODE_ENV === "production" ? { name: "manifest" } : false,
//     splitChunks: {
//       automaticNameDelimiter: "--",
//       cacheGroups: {
//         vendors: {
//           name: "vendors",
//           chunks: "initial",
//           test: /[\\/]node_modules[\\/]/,
//           priority: 2
//         },
//         vue: {
//           name: "vue-common",
//           test: module => {
//             return /vue|axios/g.test(module.context);
//           },
//           chunks: "initial",
//           priority: 10
//         },
//         "element-ui": {
//           name: "element-ui",
//           test: module => /element-ui/g.test(module.context),
//           chunks: "initial",
//           priority: 10
//         },
//         echarts: {
//           name: "echarts",
//           test: module => /echarts/g.test(module.context),
//           chunks: "initial",
//           priority: 10
//         }
//       }
//     }
//   }
// };
// export function chainWebpack (config) {
//   // 移除 prefetch 插件
//   config.plugins.delete("prefetch");
//   config.plugins.delete("preload");
//   config.module.rules.delete("eslint");
//   Object.keys(pages).forEach(page => {
//     config.plugins.delete(`preload-${page}`);
//     config.plugins.delete(`prefetch-${page}`);
//   });
//   // svg rule loader
//   const svgRule = config.module.rule("svg"); // 找到svg-loader
//   svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
//   svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
//   svgRule // 添加svg新的loader处理
//     .test(/\.svg$/)
//     .use("svg-sprite-loader")
//     .loader("svg-sprite-loader")
//     .options({
//       symbolId: "icon-[name]"
//     });

//   // 修改images loader 添加svg处理
//   const imagesRule = config.module.rule("images");
//   imagesRule.exclude.add(resolve("src/icons"));
//   config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
//   // config.resolve.alias
//   //   .set("vue$", resolve("./node_modules/vue/dist/vue.common.js"))
//   //   .set("assets", resolve("src/assets"))
//   //   .set("components", resolve("src/components"))
//   //   .set("I18n", resolve("src/i18n"))
//   //   .set("View", resolve("src/view"))
//   //   .set("Lib", resolve("src/lib"))
//   //   .set("httpTool", resolve("src/lib/axios"))
//   //   .set("api", resolve("src/api"))
//   //   .set("@", resolve("src"))
//   //   .set("@index", resolve("src/pages/index"));

//   // 添加 css 全局变量资源插件
//   const types = ["vue-modules", "vue", "normal-modules", "normal"];
//   types.forEach(type =>
//     addStyleResource(config.module.rule("scss").oneOf(type))
//   );

//   const cdn = {
//     css: ["css/d2c.1.4.1.css"],
//     js: [
//       "js/config.js",
//       "js/d2c.min.1.4.1.js",
//       "js/turf.min.js",
//       "js/d2c.helper-0.34.min.js"
//     ]
//   };

//   config.externals(["d2c", "config", "turf"]);

//   Object.keys(pages).forEach(key => {
//     config.plugin(`html-${key}`).tap(args => {
//       args[0].cdn = cdn;
//       return args;
//     });
//   });
// }
// // export const devServer = {
// //   port: `8081`,
// //   proxy: {
// //     "/mock": {
// //       changeOrigin: true,
// //       secure: false,
// //       pathRewrite: {
// //         "/mock": ""
// //       }
// //     }
// //   }
// // };
// export const pluginOptions = {};
