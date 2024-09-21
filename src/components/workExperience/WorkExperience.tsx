import { data } from "../../data";
import { theme } from "../../theme/constants";

const WorkExperience = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        paddingTop: theme.gap.med,
        paddingRight: theme.gap.med,
        position: "relative",
      }}>
      <h3 className="semi-underline">Work Experience</h3>
      {data.workExperience.map((item) => {
        const startDatetring = `${item.startDate.month} ${item.startDate.year}`;
        const endDateString = item.endDate
          ? `${item.endDate.month} ${item.endDate.year}`
          : "Present";

        return (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <div>
                <h4>{item.jobRole}</h4>
                <p>
                  {item.companyName} | {item.location}
                </p>
              </div>
              <p>
                {startDatetring} - {endDateString}
              </p>
            </div>
            {item.responsibilities ? (
              <ul>
                {item.responsibilities.map((resp) => (
                  <li key={resp} style={{ marginLeft: theme.gap.large }}>
                    <p>{resp}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </div>
  );
};

export default WorkExperience;
