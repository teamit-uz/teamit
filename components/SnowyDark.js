import Particles from "react-tsparticles"
const Snowy = ({ style }) => {
  return (
    <div>
      <Particles
        id="tsparticles"
        className="snow"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "hsl(216, 100%, 8%)",
            },
            image: "public/snowflake.svg",
            position: "",
            repeat: "",
            size: "",
            opacity: 1,
          },
          backgroundMode: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "bubble",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bounce: {
                distance: 200,
              },
              bubble: {
                distance: 200,
                duration: 0.4,
              },

              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
                speed: 1,
              },
              slow: {
                factor: 32,
                radius: 200,
              },
            },
          },

          particles: {
            collisions: {
              enable: true,
              mode: "bounce",
            },
            
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 1,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 15,
                sync: false,
              },
            },
            move: {
              angle: {
                offset: 45,
                value: 90,
              },
              attract: {
                enable: true,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              direction: "none",
              distance: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: true,
                maxSpeed: 2,
              },
              noise: {
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0,
                  },
                  value: 1,
                },
                enable: true,
              },
              outModes: {
                default: "out",
              },
              random: false,
              size: false,
              speed: 2,
              straight: false,
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000,
              },
              limit: 0,
              value: 15,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.3,
              },
              value: 0.8,
              animation: {
                enable: true,
                minimumValue: 0.3,
                speed: 0.5,
                sync: false,
              },
            },
            reduceDuplicates: true,
            rotate: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
              direction: "clockwise",
              path: false,
            },
            shape: {
              image: {
                  // src: "../olcha.png", // any path or url to your image that will be used as a particle
                  width: 600, // the pixel width of the image, you can use any value, the image will be scaled
                  height: 600, // the pixel height of the image, you can use any value, the image will be scaled
                  replaceColor: false // if true and the image type is SVG, it will replace all the colors with the particle color
                  },
              
              type: "image",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 15,
              animation: {
                destroy: "none",
                enable: true,
                minimumValue: 1,
                speed: 3,
                startValue: "max",
                sync: false,
              },
            },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          themes: [],
        }}
      />
    </div>
  )
}

export default Snowy
