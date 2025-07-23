import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Revenue Chart
export const RevenueChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Umsatz (€)',
        data: [1200, 1900, 3000, 5000, 2000, 3000],
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-primary">Umsatzentwicklung</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};

// Views Chart
export const ViewsChart = () => {
  const data = {
    labels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'],
    datasets: [
      {
        label: 'Views',
        data: [3200, 5400, 4100, 6200],
        backgroundColor: 'hsl(var(--secondary))',
        borderColor: 'hsl(var(--secondary-foreground))',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-secondary-foreground">Aufrufe pro Woche</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
};

// Content Distribution Chart
export const ContentDistributionChart = () => {
  const data = {
    labels: ['Rezepte', 'Videos', 'Pakete', 'Tipps'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'hsl(var(--primary))',
          'hsl(var(--secondary))',
          'hsl(var(--accent))',
          'hsl(var(--muted))',
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Content-Verteilung</CardTitle>
      </CardHeader>
      <CardContent>
        <Doughnut data={data} options={options} />
      </CardContent>
    </Card>
  );
};

// Engagement Chart
export const EngagementChart = () => {
  const data = {
    labels: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    datasets: [
      {
        label: 'Likes',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'hsl(var(--primary))',
        backgroundColor: 'hsl(var(--primary) / 0.1)',
        tension: 0.4,
      },
      {
        label: 'Kommentare',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'hsl(var(--secondary))',
        backgroundColor: 'hsl(var(--secondary) / 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground">Wochenengagement</CardTitle>
      </CardHeader>
      <CardContent>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};