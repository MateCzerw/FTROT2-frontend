import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00000033",
    },
  },

  overrides: {
    MuiDivider: {
      root: { backgroundColor: "#efefef" },
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
        color: "#93c5fd",
      },
    },
  },
});
