"use strict";

if (new URLSearchParams(location.search).get("theme") === "blue") {
  document.documentElement.dataset.theme = "blue";
}
