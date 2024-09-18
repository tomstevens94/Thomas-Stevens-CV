import { styles } from "./TextIconList.styles";

export interface TextWithIcon {
  Icon: () => JSX.Element;
  value: string;
  isHyperlink?: boolean;
}

export interface Props {
  data: TextWithIcon[];
}

const TextIconList = (props: Props) => {
  return (
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
  );
};

export default TextIconList;
