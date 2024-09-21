import { data } from "../../data";
import { theme } from "../../theme/constants";

const Skills = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.gap.med,
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: theme.gap.large,
        }}>
        <h3 className="semi-underline">Skills</h3>
        {data.skills.map((skill) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: theme.gap.small,
            }}>
            <p>{skill.title}</p>
            <div
              style={{
                height: 12,
                width: "100%",
                backgroundColor: "#CCC",
                borderRadius: 6,
                overflow: "hidden",
              }}>
              <div
                style={{
                  height: "100%",
                  backgroundColor: "green",
                  width: `${skill.level * 100}%`,
                  borderRadius: 6,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
