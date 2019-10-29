import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)

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

function App() {
  return (
    <main className='App'>
      <RouletteGun/>
      <Bomb/>
      <Counter count={123} />
      <Split className='left' flexBasis='2'>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;