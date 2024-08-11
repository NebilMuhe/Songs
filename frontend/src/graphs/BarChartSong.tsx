import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getStatsRequest } from "../components/slice/statsSlice";

const BarChartSong = () => {
  const { stats } = useSelector((store: any) => store.stats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatsRequest());
  }, [dispatch]);

  if (!stats) return <p>Loading...</p>;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Artists Stats",
      },
    },
  };

  const labels = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
  ];
  const data1 = [45, 75, 55, 90, 60];
  const data2 = [65, 40, 70, 80, 50];

  //   const data = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Q1 Sales",
  //         data: data1,
  //         backgroundColor: "rgba(75, 192, 192)",
  //         borderColor: "rgb(75, 192, 192)",
  //         borderWidth: 1,
  //       },
  //       {
  //         label: "Q2 Sales",
  //         data: data2,
  //         backgroundColor: "rgba(255, 159, 64)",
  //         borderColor: "rgb(255, 159, 64)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  //   const data = {
  //     labels: stats.songsPerGenre.map((stat: { _id: string }) => stat._id),
  //     datasets: [
  //       {
  //         label: "Songs per Genre",
  //         data: stats.songsPerGenre.map((stat: { count: number }) => stat.count),
  //         backgroundColor: "rgba(255, 159, 64)",
  //         borderColor: "rgb(75, 192, 192)",
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  const value = {
    labels: stats.artistStats.map((stat: { _id: string }) => stat._id),
    datasets: [
      {
        label: "Songs",
        data: stats.artistStats.map((stat: { songs: number }) => stat.songs),
        backgroundColor: "rgba(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        label: "Albums",
        data: stats.artistStats.map((stat: { albums: number }) => stat.albums),
        backgroundColor: "rgba(255, 159, 64)",
        borderColor: "rgb(255, 159, 64)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={value} />;
};

export default BarChartSong;
