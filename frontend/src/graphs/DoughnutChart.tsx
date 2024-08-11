import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getStatsRequest } from "../components/slice/statsSlice";

const DoughnutChart = () => {
  const { stats } = useSelector((store: any) => store.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatsRequest());
  }, [dispatch]);

  if (!stats) return <p>Loading...</p>;

  console.log("stats", stats.artistStats[0]);
  const total = {
    labels: ["Total Songs", "Total Artists", "Total Albums", "Total Genres"],
    datasets: [
      {
        labels: [
          `${stats.totalSongs}`,
          `${stats.artists}`,
          `${stats.albums}`,
          `${stats.genres.length}`,
        ],
        data: [
          stats.totalSongs,
          stats.artists,
          stats.albums,
          stats.genres.length,
        ],
        // backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        // hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(53, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(53, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const dataValues = [100, 50, 80, 60, 70, 40, 90];

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(53, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(53, 162, 235)",
          "rgb(255, 206, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Total Song Stats",
      },
    },
  };

  return <Doughnut data={total} options={options} />;
};

export default DoughnutChart;
