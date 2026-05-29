import React, { useMemo, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import type { GithubProp } from "src/utils/types";

const Github = ({ commitMsg, labels }: GithubProp) => {
  const actualYear = new Date().getFullYear();
  const startYear = 2016;

  const [year, setYear] = useState(actualYear);

  const years = useMemo(
    () =>
      Array.from({ length: actualYear - startYear + 1 }, (_, i) => ({
        value: actualYear - i,
        label: (actualYear - i).toString(),
      })),
    [actualYear],
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(Number(event.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-screen-lg flex-col items-center gap-5 xl:max-w-screen-xl">
        <div className="w-3/4 md:w-5/6">
          <select
            value={year}
            onChange={handleChange}
            className="border-fpurple bg-fpurple-box block w-24 rounded-lg border-2 p-2.5 text-sm text-white"
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
            labels={labels}
            style={{ color: "white" }}
            renderBlock={(
              block: React.ReactElement,
              activity: { count: number; date: string },
            ) =>
              React.cloneElement(
                block as React.ReactElement<Record<string, string>>,
                {
                  "data-tooltip-id": "react-tooltip",
                  "data-tooltip-html": `${activity.count} ${commitMsg} ${activity.date}`,
                },
              )
            }
          />
          <ReactTooltip id="react-tooltip" />
        </div>
      </div>
    </div>
  );
};

export default Github;
