import { FC, Key } from "react";
import { ColumnsType } from "antd/es/table";
import { Table } from "antd";

import { LoadType } from "../../types";

import "./Loadboard.scss";

type PropsType = {
  rowSelection: {
    onChange: (selectedRowKeys: Key[], selectedRows: LoadType[]) => void;
  };
  columns: ColumnsType<LoadType>;
  dataSource: LoadType[];
};

const Loadboard: FC<PropsType> = ({ rowSelection, columns, dataSource }) => {
  return (
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      columns={columns}
      dataSource={dataSource}
      bordered
    />
  );
};

export default Loadboard;
