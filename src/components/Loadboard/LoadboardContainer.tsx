import { Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { Component, Key } from "react";
import { LoadType } from "../../types";

import Loadboard from "./Loadboard";

const dispatchers = ["tony", "alex", "sam", "jeff"];
const owners = ["jakhongir", "mehrob", "damir", "nurbek"];
const drivers = ["jakhongir", "merob", "damir", "ali"];

// List of load
const dataSource: LoadType[] = [
  {
    key: "1",
    company: "NTG",
    loadId: "6125036",
    owner: "JAKHONGIR",
    dispatch: "TONY",
    driver: "ALI",
    board: "DAT",
    datePickUp: "01-02-2023",
    pickUp: "McCook, IL",
    miles: 850,
    dateDelivery: "01-03-2023",
    delivery: "Jamaica, NY",
    rate: 3000,
    statusLoad: "Dispatched",
    statusInvoice: "fake POD",
  },

  {
    key: "2",
    company: "NTG",
    loadId: "6125036",
    owner: "MEHROB",
    dispatch: "TONY",
    driver: "ALI",
    board: "DAT",
    datePickUp: "01-02-2023",
    pickUp: "McCook, IL",
    miles: 850,
    dateDelivery: "01-03-2023",
    delivery: "Jamaica, NY",
    rate: 3000,
    statusLoad: "Picked Up",
    statusInvoice: "Submitted",
  },

  {
    key: "3",
    company: "NTG",
    loadId: "6125036",
    owner: "NURBEK",
    dispatch: "TONY",
    driver: "ALI",
    board: "DAT",
    datePickUp: "01-02-2023",
    pickUp: "McCook, IL",
    miles: 850,
    dateDelivery: "01-03-2023",
    delivery: "Jamaica, NY",
    rate: 3000,
    statusLoad: "Delivered",
    statusInvoice: "Need POD",
  },
];

// Columns of table
const columns: ColumnsType<LoadType> = [
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
    render: (_, record) => (
      <Space size="middle">
        <span>{record.company.toUpperCase()}</span>
      </Space>
    ),
  },

  {
    title: "Load#",
    dataIndex: "loadId",
    key: "loadId",
  },

  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
    filters: owners.map((owner) => {
      return {
        text: owner,
        value: owner,
      };
    }),
    onFilter: (value: string | number | boolean, record) =>
      record.owner.indexOf(value.toString().toUpperCase()) === 0,
    render: (_, record) => (
      <Space size="middle">
        <span>{record.owner.toUpperCase()}</span>
      </Space>
    ),
  },

  {
    title: "Dispatch",
    dataIndex: "dispatch",
    key: "dispatch",
    render: (_, record) => (
      <Space size="middle">
        <span>{record.dispatch.toUpperCase()}</span>
      </Space>
    ),
  },

  {
    title: "Driver",
    dataIndex: "driver",
    key: "driver",
    render: (_, record) => (
      <Space size="middle">
        <span>{record.driver.toUpperCase()}</span>
      </Space>
    ),
  },

  {
    title: "Board",
    dataIndex: "board",
    key: "board",
    render: (_, record) => (
      <Space size="middle">
        <span>{record.board.toUpperCase()}</span>
      </Space>
    ),
  },

  {
    title: "Date",
    dataIndex: "datePickUp",
    key: "datePickUp",
  },

  {
    title: "Pick up",
    dataIndex: "pickUp",
    key: "pickUp",
  },

  {
    title: "Miles",
    dataIndex: "miles",
    key: "miles",
  },

  {
    title: "Date",
    dataIndex: "dateDelivery",
    key: "dateDelivery",
  },

  {
    title: "Delivery",
    dataIndex: "delivery",
    key: "delivery",
  },

  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
    render: (_, record) => (
      <Space size="middle">
        <span className="load__rate">$ {record.rate}</span>
      </Space>
    ),
  },

  {
    title: "Status of Load",
    dataIndex: "statusLoad",
    key: "statusLoad",
    render: (_, record) => {
      const status = record.statusLoad;
      const color = // Color for the tag of the status
        status === "Dispatched"
          ? "#07b4e8"
          : status === "Picked Up"
          ? "#f5df3d"
          : status === "Delivered"
          ? "success"
          : "";

      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },

  {
    title: "Status of Invoice",
    dataIndex: "statusInvoice",
    key: "statusInvoice",
    render: (_, record) => {
      const status = record.statusInvoice;
      console.log(status);
      const color = // Color for the tag of the status
        status === "Need POD"
          ? "#f5df3d"
          : status === "Ready to submit"
          ? "#07b4e8"
          : status === "Submitted"
          ? "success"
          : status === "Need invoice"
          ? "#f5df3d"
          : status === "Invoice sent"
          ? "#f5df3d"
          : status.includes("PAID")
          ? "success"
          : status === "fake POD"
          ? "error"
          : "";

      return (
        <Tag color={color} key={status}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },

  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_: any) => (
      <Space size="middle">
        <span className="load__action">View</span>
        <span className="load__action">Edit</span>
        <span className="load__action">Delete</span>
      </Space>
    ),
  },
];

class LoadboardContainer extends Component {
  // Table's row Selection
  rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: LoadType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  render() {
    return (
      <Loadboard
        dataSource={dataSource}
        columns={columns}
        rowSelection={this.rowSelection}
      />
    );
  }
}

export default LoadboardContainer;
