import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  scroll: {
    overflowY: "scroll",
    scrollbarColor: "light-grey white",
    scrollbarWidth: "thin",
    height: "360px",
  },
  root: {
    maxWidth: "100%",
    boxShadow: "0px 14px 32px 0px rgba(0,0,0,0.15)",
    // height: "360px",
    borderRadius: "7px",
    transition: "all, .3s, ease-in-out ",
    border: "1px solid #eee",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-beteween",
  },
  gothicFont: {
    fontFamily: "'Didact Gothic', sans-serif",
  },
}));
