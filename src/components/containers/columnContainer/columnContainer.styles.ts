import { CSSProperties } from "react";
import { theme } from "../../../theme/constants";

const container = (gap: number): CSSProperties => ({
  padding: theme.gap.med,
  flexDirection: "column",
  display: "flex",
  gap,
});

export const styles = {
  container,
};
