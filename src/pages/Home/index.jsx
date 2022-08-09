import {
  AnalyticalTable,
  Card,
  CardHeader,
  Icon,
} from "@ui5/webcomponents-react";
import React from "react";
import { bills } from "../../mockData/data";
import "./style.css";

import "@ui5/webcomponents-icons/dist/person-placeholder.js";

export function Home() {
  const tableColumns = [
    {
      Header: "ID",
      accessor: "id", // String-based value accessors!
    },
    {
      Header: "Descrição",
      accessor: "description",
    },
    {
      Header: "Valor",
      accessor: "price",
    },
    {
      Header: "Categoria",
      accessor: "category_description",
    },
  ];

  return (
    <div className="Home">
      <Card
        header={
          <CardHeader
            avatar={<Icon name="person-placeholder" />}
            status=""
            subtitleText=""
            titleText="Ultimos Movimentos"
          />
        }
        style={{
          width: "300px",
        }}
      >
        <AnalyticalTable
          data={bills}
          columns={tableColumns}
          visibleRows={5}
          withRowHighlight
        />
      </Card>
    </div>
  );
}
