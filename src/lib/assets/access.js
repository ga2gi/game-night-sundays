export function checkAccess() {
  const params = new URLSearchParams(window.location.search);
  return params.get("code") === "GARDENIA-2026";
}