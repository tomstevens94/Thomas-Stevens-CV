import { PropsWithChildren } from "react";
import { styles } from "./rowContainer.styles";

const RowContainer = (props: PropsWithChildren) => {
  return <div style={styles.container}>{props.children}</div>;
};

export default RowContainer;
