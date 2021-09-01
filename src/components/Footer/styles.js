import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  legalLink: {
    ...theme.typography.caption,
    justifyContent: "center",
    color:
      theme.palette.type === "dark"
        ? "rgba(255,255,255,0.57)"
        : theme.palette.text.secondary,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0,
        },
      },
    },
  },
  newsletter: {
    fontSize: theme.typography.caption.fontSize,
  },
  navMenu: {
    flexWrap: "wrap",
  },
  specialFont: {
    fontFamily: "'Special Elite', sans-serif",
    textDecoration: "none",
  },
}));
