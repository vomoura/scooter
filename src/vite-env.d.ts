/// <reference types="vite/client" />

// The Maps JavaScript API attaches a `google` namespace to the window object
// once the script finishes loading. Declare the property here so TypeScript is
// aware of it across the project.
interface Window {
  google: typeof google
}
