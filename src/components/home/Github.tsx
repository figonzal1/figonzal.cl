import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import labels from "src/utils/githubLabels";

const Github = () => {
  const actualYear = new Date().getFullYear();
  const startYear = 2016;

  const [year, setYear] = useState(actualYear);
  const [years, setYears] = useState<Array<{ value: number; label: string }>>(
    []
  );

  useEffect(() => {
    const yearsArray = Array.from(
      { length: actualYear - startYear + 1 },
      (_, i) => ({
        value: actualYear - i,
        label: (actualYear - i).toString(),
      })
    );

    setYears(yearsArray);
  }, [actualYear]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <>
      <select value={year} onChange={handleChange} className="rounded w-52">
        {years.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <GitHubCalendar
        username="figonzal1"
        blockSize={15}
        blockMargin={5}
        year={year}
        colorScheme="dark"
        blockRadius={20}
        fontSize={16}
        labels={labels}
        style={{ color: "white" }}
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} commits el ${activity.date}`,
          })
        }
      />

      <ReactTooltip id="react-tooltip" />
    </>
  );
};

export default Github;
