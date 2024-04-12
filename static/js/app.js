const mode = localStorage.getItem("mode") || "";
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

const LIGHTBULB_COLOR_LIGHT_MODE = "grey";
const LIGHTBULB_COLOR_DARK_MODE = "white";

document.body.classList = mode;
const icon = document.getElementById("lightbulb-icon");
icon?.setAttribute(
  "fill",
  mode === "light" ? LIGHTBULB_COLOR_LIGHT_MODE : LIGHTBULB_COLOR_DARK_MODE
);

toggle.addEventListener("click", () => {
  const previousMode = localStorage.getItem("mode") || "";
  localStorage.setItem("mode", previousMode === "light" ? "" : "light");
  body.classList.toggle("light");
  const icon = document.getElementById("lightbulb-icon");
  icon.setAttribute(
    "fill",
    previousMode === "light"
      ? LIGHTBULB_COLOR_DARK_MODE
      : LIGHTBULB_COLOR_LIGHT_MODE
  );
});

const LinkUtilities = (() => {
  function getAllAnchorTags() {
    return document.querySelectorAll("a");
  }

  function isInternalLink(urlString) {
    if (urlString.startsWith("/")) {
      return true;
    }

    const currentSite = window.location.host;
    const destinationSite = new URL(urlString).host;
    if (currentSite === destinationSite) {
      return true;
    }

    return false;
  }

  function updateExternalLinkTargetsToNewTab() {
    const linkTags = getAllAnchorTags();
    for (const tag of linkTags) {
      const link = tag.href;
      if (!isInternalLink(link)) {
        tag.target = "_blank";
      }
    }
  }

  return {
    updateExternalLinkTargetsToNewTab,
  };
})();

LinkUtilities.updateExternalLinkTargetsToNewTab();
