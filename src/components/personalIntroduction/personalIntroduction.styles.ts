import { CSSProperties } from "react";
import { theme } from "../../theme/constants";

const container: CSSProperties = {
  backgroundColor: theme.colors.main,
  minHeight: theme.sidebarWidth,
  width: "100%",
  padding: 16,
  borderRadius: theme.borderRadius,
};

const divider: CSSProperties = {
  opacity: 0.1,
  marginTop: 8,
  marginBottom: 8,
  width: "100%",
  borderRadius: 2,
  height: 2,
  flexGrow: 1,
  backgroundColor: "white",
};

export const styles = {
  container,
  divider,
};
