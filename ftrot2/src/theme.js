import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#93c5fd",
    },
  },

  overrides: {
    MuiDrawer: {
      root: {},
      paper: {
        backgroundColor: "#303133",
        width: "200px",
        color: "#efefef",

        // "&:hover": {
        //   backgroundColor: "rgb(239, 239, 239, 0.4)",
        // },
      },
    },

    MuiDivider: {
      root: {
        backgroundColor: "#efefef",
        opacity: "0.6",
        margin: "10px 0",
        width: "100%",
      },
    },

    MuiDialog: {
      // root: { color: "#efefef" },
      paper: { backgroundColor: "#303133" },
      MuiDivider: {
        backgroundColor: "#efefef",
      },
    },

    MuiDialogTitle: {
      root: { color: "#efefef" },
    },

    MuiDialogContent: {
      // root: {
      //   "& .MuiDialogContent-dividers": {
      //     borderTop: " 1px solid #efefef",
      //   },

      // },
      dividers: {
        borderTop: " 1px solid rgb(239,239,239,0.4)",
        borderBottom: " 1px solid rgb(239,239,239,0.4)",
      },
    },

    MuiInputLabel: {
      root: {
        color: "#efefef",
        fontSize: "1.1rem",
        "&.Mui-focused": {
          // increase the specificity for the pseudo class
          color: "rgb(239,239,239,1)",
        },
      },
    },

    MuiOutlinedInput: {
      root: {
        "&.Mui-focused": {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "rgb(239,239,239,0.4) 2px solid",
          },
        },
      },

      // .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline

      // notchedOutline: {
      //   border: "red 1px solid",
      //   "&.Mui-focused": {
      //     border: "red 1px solid",
      //   },
      // },

      // root: {
      //   borderColor: "red 1px solid",
      // },
    },

    MuiInputBase: {
      root: {
        margin: "10px",
        color: "#efefef",
        height: "2.2rem",
        fontSize: "1.1rem",
        backgroundColor: "rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "#000",
        },
        "&.Mui-focused": {
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      },
    },

    MuiButton: {
      containedPrimary: {
        backgroundColor: "#00000033",
        color: "#93c5fd",

        "&:hover": {
          color: "#000",
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#262729",
        color: "#efefef",
        padding: "10px",
        marginTop: "10px",
      },
    },
  },
});
