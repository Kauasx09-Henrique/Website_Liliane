import type { ISourceOptions } from "@tsparticles/engine";

export const options: ISourceOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 120,

  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" },
      resize: { enable: true }
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { quantity: 4 },
      bubble: {
        distance: 200,
        size: 15,
        duration: 2,
        color: { value: "#C9A948" }
      }
    }
  },

  particles: {
    color: { value: ["#C9A948", "#e8d9a5", "#ffffff"] },

    links: {
      enable: true,
      color: "#C9A948",
      distance: 120,
      opacity: 0.4,
      width: 1.2,
      triangles: { enable: true, opacity: 0.1 }
    },

    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      outModes: { default: "bounce" },
      attract: { enable: true, rotate: { x: 600, y: 1200 } },
      trail: { enable: true, length: 5, fillColor: "#0c1f14" }
    },

    number: { value: 60, density: { enable: true, area: 800 } },

    opacity: {
      value: { min: 0.2, max: 0.8 },
      animation: { enable: true, speed: 1 }
    },

    shape: {
      type: ["circle", "triangle"],
      options: {
        triangle: { particles: { color: { value: "#e8d9a5" } } }
      }
    },

    size: {
      value: { min: 1, max: 5 },
      animation: { enable: true, speed: 3 }
    },

    twinkle: {
      particles: {
        enable: true,
        frequency: 0.08,
        color: { value: "#ffffff" }
      }
    },

    wobble: { enable: true, distance: 8, speed: 1 }
  },

  detectRetina: true
};