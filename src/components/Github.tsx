import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as MuiTooltip } from "@mui/material";

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
    <GitHubCalendar
      username="figonzal1"
      blockSize={15}
      blockMargin={5}
      colorScheme="dark"
      blockRadius={20}
      fontSize={16}
      labels={labels}
	  style={{
		color: 'white'
	  }}
      renderBlock={(block, activity) => (
        <MuiTooltip title={`${activity.count} commits en ${activity.date}`}>
          {block}
        </MuiTooltip>
      )}
    />
  );
}

export default Github;
