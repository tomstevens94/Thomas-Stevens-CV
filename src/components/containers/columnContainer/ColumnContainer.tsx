import { PropsWithChildren } from "react";
import { styles } from "./columnContainer.styles";
import { theme } from "../../../theme/constants";

interface Props extends PropsWithChildren {
  gap?: number;
}

const ColumnContainer = ({ gap = theme.gap.med, children }: Props) => {
  return <div style={styles.container(gap)}>{children}</div>;
};

export default ColumnContainer;
