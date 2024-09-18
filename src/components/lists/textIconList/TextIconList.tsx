import { theme } from "../../../theme/constants";
import { styles } from "./TextIconList.styles";

export interface TextWithIcon {
  Icon: () => JSX.Element;
  value: string;
  isHyperlink?: boolean;
}

export interface Props {
  title?: string;
  data: TextWithIcon[];
}

const TextIconList = (props: Props) => {
  return (
    <div>
      {props.title ? (
        <h3 style={{ paddingBottom: theme.gap.large }}>{props.title}</h3>
      ) : undefined}
      <div style={styles.container}>
        {props.data.map(({ Icon, value, isHyperlink = false }) => (
          <div key={value} style={styles.listItemContainer}>
            <Icon />
            <a
              href={isHyperlink ? value : undefined}
              style={styles.text(isHyperlink)}>
              {value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextIconList;
