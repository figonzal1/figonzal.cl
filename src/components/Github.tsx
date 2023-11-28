import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function Github() {
  const labels = {
    months: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    weekdays: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "D"],
    totalCount: "{{count}} commits en 12 meses",
    legend: {
      less: "Menos",
      more: "Más",
    },
  };

  return (
    <>
      <GitHubCalendar
        username="figonzal1"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        blockRadius={20}
        fontSize={16}
        labels={labels}
        style={{
          color: "white",
        }}
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
}

export default Github;
