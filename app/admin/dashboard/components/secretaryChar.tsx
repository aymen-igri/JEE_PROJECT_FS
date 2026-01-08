import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = (denied: number, accepted: number, pending: number) => ({
  labels: ['Denied', 'Accepted', 'Pending'],
  datasets: [
    {
      label: '# of Votes',
      data: [denied, accepted, pending],
      backgroundColor: [
        '#BF0000',
        '#BD3F3F',
        '#FAE2E2',
      ],
      borderColor: [
        '#BF0000',
        '#BD3F3F',
        '#FAE2E2',
      ],
      borderWidth: 1,
    },
  ],
});

export function SecretaryChart({denied, accepted, pending}: {denied: number, accepted: number, pending: number}) {
  return <Pie data={data(denied, accepted, pending)} className='h-60 w-60'/>;
}
