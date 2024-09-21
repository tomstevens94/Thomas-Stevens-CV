import { CSSProperties } from "react";
import { theme } from "./theme/constants";

const gridContainer: CSSProperties = {
  padding: theme.gap.med,
  gap: theme.gap.med,
  display: "grid",
  gridTemplateRows: "200px 1fr",
  gridTemplateColumns: "200px 1fr",
};

export const styles = {
  gridContainer,
};
