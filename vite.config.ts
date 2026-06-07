import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function normalizeBasePath(value: string) {
  if (!value) {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function getBasePath() {
  if (process.env.VITE_BASE_PATH) {
    return normalizeBasePath(process.env.VITE_BASE_PATH);
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  return repositoryName ? normalizeBasePath(repositoryName) : "/";
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react()]
});
