import React from "react";
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { InfectedPerson } from "../uses";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type InfectedInformationCardProps = {
  prefecture: string;
  infectedPersons: InfectedPerson[];
};

const InfectedInformationCard: React.VFC<InfectedInformationCardProps> = ({
  prefecture,
  infectedPersons,
}) => {
  const infectedPersonsLatest7Days = infectedPersons.slice(-7);
  const labels = infectedPersonsLatest7Days.map((item) => {
    const date = dayjs(item.date);
    return date.format("MM月DD日");
  });
  const data = infectedPersonsLatest7Days.map((item) => item.patients);
  const chart = {
    labels,
    datasets: [
      {
        label: `直近一週間の${prefecture}の新規感染者数推移`,
        data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        color: "rgb(250, 250, 250)",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          color: "rgb(250, 250, 250)",
        },
        ticks: {
          color: "rgb(250, 250, 250)",
          precision: 0,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgb(250, 250, 250)",
        },
        ticks: {
          color: "rgb(250, 250, 250)",
          precision: 0,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "rgb(250, 250, 250)",
        },
      },
    },
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg" key={prefecture}>
      <h3 className="text-2xl text-gray-700 font-semibold px-4 py-2 border-b-2 border-gray-300">
        {prefecture}
      </h3>
      <div className="p-4 grid grid-cols-2">
        <div className="">
          <p className="text-lg font-semibold text-gray-700">
            今日までの感染者数：
            {infectedPersons[infectedPersons.length - 1].total_patients}人
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-2">
            前日の{prefecture}の感染者数は
            {infectedPersons[infectedPersons.length - 1].patients}人でした。
          </p>
        </div>
        <div className="w-full p-2 bg-gray-900">
          <Line options={options} data={chart} />
        </div>
      </div>
    </div>
  );
};

export default InfectedInformationCard;
