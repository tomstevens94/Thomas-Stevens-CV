import { PropsWithChildren } from "react";
import { styles } from "./columnContainer.styles";

const ColumnContainer = (props: PropsWithChildren) => {
  return <div style={styles.container}>{props.children}</div>;
};

export default ColumnContainer;
