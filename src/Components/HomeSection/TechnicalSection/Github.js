import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Tooltip as MuiTooltip } from '@mui/material';

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
    weekdays: [
      "Lun",
      "Mar",
      "Mie",
      "Jue",
      "Vie",
      "Sab",
      "D"
    ],
    totalCount: "{{count}} commits en 12 meses",
    legend: {
      less: "Menos",
      more: "Más",
    },
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Días <strong className="purple">codeando</strong>
      </h1>
      <GitHubCalendar
        username="figonzal1"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        blockRadius={20}
        fontSize={16}
        labels={labels}
        showWeekdayLabels={true}
        renderBlock={(block, activity) => (
          <MuiTooltip title={`${activity.count} commits en ${activity.date}`}>
            {block}
          </MuiTooltip>
        )}
      />
    </Row>
  );
}

export default Github;
