import { CSSProperties } from "react";
import { theme } from "../../../theme/constants";

const container: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  gap: theme.gap.med,
};

export const styles = {
  container,
};
