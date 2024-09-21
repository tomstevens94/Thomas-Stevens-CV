import { CSSProperties } from "react";
import { theme } from "../../../theme/constants";

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingTop: theme.gap.med,
};

const listItemContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: theme.gap.med,
  paddingTop: theme.gap.med,
  paddingBottom: theme.gap.med,
};

const text = (isHyperlink: boolean): CSSProperties => ({
  cursor: isHyperlink ? "pointer" : "default",
  color: theme.colors.main,
  fontSize: "0.7em",
});

export const styles = {
  container,
  listItemContainer,
  text,
};
