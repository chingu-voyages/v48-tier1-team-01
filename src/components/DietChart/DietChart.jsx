import './DietChart.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const filterData = (data) => {
  const periodDietMap = {};
  const dietTypes = new Set();

  data.forEach((dinosaur) => {
    const period = dinosaur.whenLived.split(',')[0].trim();
    const diet = dinosaur.diet.toLowerCase();
    dietTypes.add(diet);

    if (!periodDietMap[period]) {
      periodDietMap[period] = {};
    }
    if (!periodDietMap[period][diet]) {
      periodDietMap[period][diet] = 1;
    } else {
      periodDietMap[period][diet]++;
    }
  });

  return { periodDietMap, dietTypes };
};

const DietChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [pieData, setPieData] = useState({});
  const [chartOptions, setChartOptions] = useState({
    scales: {
      x: { type: 'category', stacked: true },
      y: { stacked: true },
    },
    plugins: { legend: { display: true } },
    responsive: true,
  });

  useEffect(() => {
    axios
      .get('https://chinguapi.onrender.com/dinosaurs')
      .then((response) => {
        const { data } = response;
        const { periodDietMap, dietTypes } = filterData(data);
        setupChart(periodDietMap, dietTypes);
        setupPieData(periodDietMap, dietTypes);
      })
      .catch((error) => console.error('Fetching data failed:', error));
  }, []);

  const setupChart = (periodDietMap, dietTypes) => {
    const backgroundColors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(255, 205, 86, 0.7)',
      'rgba(201, 203, 207, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(22,160,133,0.7)',
      'rgba(211,84,0,0.7)',
      'rgba(192,57,43,0.7)',
    ];

    const datasets = Array.from(dietTypes).map((diet, index) => ({
      label: diet.charAt(0).toUpperCase() + diet.slice(1),
      data: Object.keys(periodDietMap).map(
        (period) => periodDietMap[period][diet] || 0
      ),
      backgroundColor: backgroundColors[index % backgroundColors.length],
    }));

    setChartData({ labels: Object.keys(periodDietMap), datasets });
  };

  const setupPieData = (periodDietMap, dietTypes) => {
    const backgroundColors = [
      'rgba(255, 99, 132, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(153, 102, 255, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(255, 205, 86, 0.7)',
      'rgba(201, 203, 207, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(22,160,133,0.7)',
      'rgba(211,84,0,0.7)',
      'rgba(192,57,43,0.7)',
    ];

    const pieDataForPeriods = Object.keys(periodDietMap).reduce(
      (acc, period) => {
        const labels = Array.from(dietTypes).map(
          (diet) => diet.charAt(0).toUpperCase() + diet.slice(1)
        );
        const data = Array.from(dietTypes).map(
          (diet) => periodDietMap[period][diet] || 0
        );
        const backgroundColor = backgroundColors.slice(0, dietTypes.size);

        acc[period] = { labels, datasets: [{ data, backgroundColor }] };
        return acc;
      },
      {}
    );

    setPieData(pieDataForPeriods);
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== undefined) {
              label += context.parsed + ' dinosaurs';
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="dietChart-container">
      <h2>Diet Chart</h2>
      <div className="barChart-container">
        <Bar data={chartData} options={chartOptions} />
      </div>
      <h3>Breakdown by Period</h3>
      <div className="pieCharts-container">
        {' '}
        {Object.entries(pieData).map(([period, data]) => (
          <div key={period} className="pieChart-container">
            <h4>{period}</h4>
            <Pie data={data} options={pieOptions} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietChart;
