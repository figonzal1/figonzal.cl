import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { labelsEn } from "src/utils/githubLabels";

const Github = () => {
  const actualYear = new Date().getFullYear();
  const startYear = 2016;

  const [year, setYear] = useState(actualYear);
  const [years, setYears] = useState<Array<{ value: number; label: string }>>(
    [],
  );

  useEffect(() => {
    const yearsArray = Array.from(
      { length: actualYear - startYear + 1 },
      (_, i) => ({
        value: actualYear - i,
        label: (actualYear - i).toString(),
      }),
    );

    setYears(yearsArray);
  }, [actualYear]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-5 w-full max-w-screen-lg xl:max-w-screen-xl">
        <div className="w-3/4 md:w-5/6">
          <select
            value={year}
            onChange={handleChange}
            className="w-24 border-2 border-fpurple text-sm rounded-lg block p-2.5 bg-fpurple-box text-white"
          >
            {years.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="w-3/4 md:w-5/6">
          <GitHubCalendar
            username="figonzal1"
            blockSize={15}
            blockMargin={5}
            year={year}
            colorScheme="dark"
            blockRadius={20}
            fontSize={16}
            labels={labelsEn}
            style={{ color: "white" }}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                "data-tooltip-id": "react-tooltip",
                "data-tooltip-html": `${activity.count} commits el ${activity.date}`,
              })
            }
          />
          <ReactTooltip id="react-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Github;
