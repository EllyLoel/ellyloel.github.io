import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/themes/dark.css";
import "@shoelace-style/shoelace/dist/components/radio-group/radio-group.js";
import "@shoelace-style/shoelace/dist/components/radio-button/radio-button.js";
import "@shoelace-style/shoelace/dist/components/button-group/button-group.js";
import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/drawer/drawer.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";

import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/"
);

import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";

registerIconLibrary("fa", {
  resolver: (name) => {
    const filename = name.replace(/^fa[rbs]-/, "");
    let folder = "regular";
    if (name.substring(0, 4) === "fas-") folder = "solid";
    if (name.substring(0, 4) === "fab-") folder = "brands";
    return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
  },
  mutator: (svg) => svg.setAttribute("fill", "currentColor"),
});