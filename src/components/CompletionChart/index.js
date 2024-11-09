import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './CompletionChart.css';
import { Context } from '../../context';

const CompletionChart = () => {

  const { 
    completedTodos,
    totalTodos,
    loading
   } = React.useContext(Context);


  if (loading) {
    return (
      <div className="loading-spinner-container">
        <div className="loading-spinner" />
      </div>
    );
  }

  if (totalTodos === 0) {
    const emptyData = {
      datasets: [{
        data: [1], 
        backgroundColor: ['#e0e0e0'], 
        borderWidth: 1,
      }],
      labels: ['No tasks'],
    };

    return (
      <div className="chart-wrapper">
        <Doughnut data={emptyData} options={{ plugins: { legend: { display: false }, tooltip: { enabled: false } }, cutout: '70%' }} />
        <div className="chart-center">
          0% {}
        </div>
      </div>
    );
  }

  const data = {
    datasets: [{
      data: [completedTodos, totalTodos - completedTodos],
      backgroundColor: ['#4CAF50', '#e0e0e0'],
      borderWidth: 1,
    }],
    labels: ['Completadas', 'Pendientes'],
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
    },
    cutout: '70%', 
  };

  return (
    <div className="chart-wrapper">
      <Doughnut data={data} options={options} />
      <div className="chart-center">
        {Math.round((completedTodos / totalTodos) * 100)}%
      </div>
    </div>
  );
};

export { CompletionChart };



