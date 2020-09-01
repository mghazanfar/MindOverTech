const { makeStyles } = require("@material-ui/core");

export const methodCardStyles = makeStyles((theme) => ({
  container: {
    padding: 16,
    boxShadow: " 0px 0px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
  },
  shape: {
    marginRight: 12,
  },
  shapeText: {
    position: "absolute",
    fontSize: 12,
    top: "20%",
    left: "27%",
  },
  shapeTextLong: {
    position: "absolute",
    fontSize: 12,
    top: "22%",
    left: "18%",
  },
  icon: {
    fontSize: 28,
  },
}));
