/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,tsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "200px",
        smd: "450px",
        md: "768px",
        lg: "1024px",
        xl: "1256px",
        tall: { raw: "(min-height : 780px)" },
      },
      borderRadius: {
        bottom: "0px 0px 10px 10px",
        top: "10px 10px 0px 0px ",
        left: "10px 0px 0px 10px ",
        right: "0px 10px 10px 0px ",
        mymessage: "10px 10px 10px 0px",
        othermessage: "10px 10px 0px 10px",
      },
      height: {
        100: "500px",
        full: "100%",
        screen: "100vh",
        "10p": "10%",

        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        "100p": "100%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      width: {
        "10p": "10%",

        "15p": "15%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        "100p": "100%",
        100: "100px",
        screen: "100vw",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
      },
      backgroundColor: {
        primaryviolet: "#8F00FF",
        hovergrey: "#808080",
        primaryblue:
          "linear-gradient(97deg, rgba(0,173,179,1) 63%, rgba(13,255,255,1) 100%)",
        violet:
          "-webkit-linear-gradient(top, #591C8C, #833FC6) -moz-linear-gradient(top, #591C8C, #833FC6) linear-gradient(to bottom, #591C8C, #833FC6)",
      },
      minWidth: {
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        "100p": "100%",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vw": "10vw",
        "20vw": "20vw",
        "30vw": "30vw",
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
      },
      maxWidth: {
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        "100p": "100%",
        40: "40px",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        720: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      maxHeight: {
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "10p": "10%",
        "15p": "15%",
        "15p": "15%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "65p": "65%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        "100p": "100%",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        720: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      minHeight: {
        "5p": "5%",
        "6p": "6%",
        "7p": "7%",
        "10p": "10%",
        "15p": "15%",
        "20p": "20%",
        "30p": "30%",
        "40p": "40%",
        "50p": "50%",
        "60p": "60%",
        "70p": "70%",
        "75p": "75%",
        "79p": "79%",
        "80p": "80%",
        "90p": "90%",
        "94p": "94%",
        "95p": "95%",
        10: "10px",
        20: "20px",
        30: "30px",
        40: "40px",
        50: "50px",
        60: "60px",
        "65p": "65%",
        70: "70px",
        80: "80px",
        90: "90px",
        "100p": "100%",
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        720: "700px",
        800: "800px",
        900: "900px",
        1000: "100px",
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      boxShadow: {
        top: "0px -2px 8px gray",
      },
    },
  },
  plugins: [],
};
