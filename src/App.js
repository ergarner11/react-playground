import React from 'react';
import './App.css';
import Accordian from './state-drills/Accordian';

/*const { getChart } = require('billboard-top-100');

getChart('hot-100', '2016-08-27', (err, chart) => {
  if (err) console.log(err);
  console.log(chart.week) // prints the week of the chart in the date format YYYY-MM-DD
  console.log(chart.previousWeek.url) // prints the URL of the previous week's chart
  console.log(chart.previousWeek.date) // prints the date of the previous week's chart in the date format YYYY-MM-DD
  console.log(chart.nextWeek.url) // prints the URL of the next week's chart
  console.log(chart.nextWeek.date) // prints the date of the next week's chart in the date format YYYY-MM-DD
  console.log(chart.songs); // prints array of top 100 songs for week of August 27, 2016
  console.log(chart.songs[3]); // prints song with rank: 4 for week of August 27, 2016
  console.log(chart.songs[0].title); // prints title of top song for week of August 27, 2016
  console.log(chart.songs[0].artist); // prints artist of top songs for week of August 27, 2016
  console.log(chart.songs[0].rank) // prints rank of top song (1) for week of August 27, 2016
  console.log(chart.songs[0].cover) // prints URL for Billboard cover image of top song for week of August 27, 2016
});*/

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return (
    <main className='App'>
      <div>
        <Accordian sections={sections} />
      </div>
    </main>
  );
}

export default App;