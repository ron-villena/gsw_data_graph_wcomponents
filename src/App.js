import React, {useState, useEffect}  from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js'
import BarChart from './components/BarChart/BarChart.js'

function App() {
  const [infoPlayers, setInfoPlayers] = useState([]);
  const [searchYear, setSearchYear] = useState(0);
  const [cbStats, setCbStats] = useState({
    'points': true,
    'rebounds': false,
    'assists': false,
  })

  function doFetch() {
    console.log('cbPoints:', cbStats.points, '; cbRebounds:', cbStats.rebounds, ' cbAssits:', cbStats.assists);
    console.log('calling the doFetch method!!!!');
    const url = `https://www.balldontlie.io/api/v1/season_averages?season=${searchYear}&player_ids[]=115&player_ids[]=443&player_ids[]=185`;
    console.log('url is:',url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Data:', data.data);
        setInfoPlayers(data.data);
      })
  }

  function onSelectChange (ev) {
    const value = ev.target.value;
    console.log('Select Value is', value);
    setSearchYear(value);
    console.log('Search Year is:', searchYear);
  }

  function onCheckboxChange(ev) {
    const name = ev.target.name;
    console.log('Name is', name);
    const value = cbStats[name];
    console.log('Value is', value);
    setCbStats({
      ...cbStats,
      [name]: !cbStats[name],
    })
  }

  function getWidth() {
    const cbArr = Object.values(cbStats);
    console.log(cbArr);
    let count = 0;
    cbArr.forEach(val => {
      if (val) {
        console.log(val);
        count++;
      }
    });
    console.log("# of True's", count);
    return 100 / count;
  }

  useEffect(doFetch, [searchYear, cbStats]);

  return (
    <div class="container">
      <Nav
        onSelectChange={onSelectChange}
        onCheckboxChange={onCheckboxChange}
        cbStats_pts={cbStats.points}
        cbStats_rbs={cbStats.rebounds}
        cbStats_ast={cbStats.assists}
      />
      <BarChart
        infoPlayers={infoPlayers}
        cbStatsPoints={cbStats.points}
        cbStatsRebounds={cbStats.rebounds}
        cbStatsAssists={cbStats.assists}
        getWidth={getWidth()}
      />
    </div>
  );
}

export default App;
