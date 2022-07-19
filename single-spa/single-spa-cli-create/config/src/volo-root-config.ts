import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@volo/navbar",
  app: () => System.import("@volo/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@volo/footer",
  app: () => System.import("@volo/footer"),
  activeWhen: "/"
});

start({
  urlRerouteOnly: true,
});
