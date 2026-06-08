import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function normalizeBasePath(value: string) {
  if (!value) {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function getBasePath(command: string) {
  if (process.env.VITE_BASE_PATH) {
    return normalizeBasePath(process.env.VITE_BASE_PATH);
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repositoryName) {
    return normalizeBasePath(repositoryName);
  }

  return command === "build" ? normalizeBasePath("kabu-erabi-navi") : "/";
}

export default defineConfig(({ command }) => ({
  base: getBasePath(command),
  plugins: [react()]
}));
