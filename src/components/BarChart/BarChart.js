import React from 'react';
import './BarChart.css';

import Bar from '../Bar/Bar.js'

function BarChart(props) {
  const player_infos = props.infoPlayers

  return (
    <div class='chart'>
      {
        player_infos.map(infoPlayer => (
          infoPlayer.player_id === 115 ? (
              <div id='divScurry' class="scurry">
                {
                  props.cbStatsPoints ? (
                    <Bar
                      classType="chart__block chart__block--pts"
                      infoPlayerStat = {infoPlayer.pts}
                      getWidth={props.getWidth}
                      playerName="Steph Curry"
                      statType="pts"
                    />
                  ) : null
                }
                {
                  props.cbStatsRebounds ? (
                    <Bar
                      classType="chart__block chart__block--rbs"
                      infoPlayerStat = {infoPlayer.reb}
                      getWidth={props.getWidth}
                      playerName="Steph Curry"
                      statType="rbs"
                    />
                  ) : null
                }
                {
                  props.cbStatsAssists ? (
                    <Bar
                      classType="chart__block chart__block--ast"
                      infoPlayerStat = {infoPlayer.ast}
                      getWidth={props.getWidth}
                      playerName="Steph Curry"
                      statType="ast"
                    />
                  ) : null
                }
              </div> )
          : infoPlayer.player_id === 443 ? (
              <div id='divKthomson' class="kthompson">
              {
                props.cbStatsPoints ? (
                  <Bar
                    classType="chart__block chart__block--pts"
                    infoPlayerStat = {infoPlayer.pts}
                    getWidth={props.getWidth}
                    playerName="Klay Thompson"
                    statType="pts"
                  />
                ) : null
              }
              {
                props.cbStatsRebounds ? (
                  <Bar
                    classType="chart__block chart__block--rbs"
                    infoPlayerStat = {infoPlayer.reb}
                    getWidth={props.getWidth}
                    playerName="Klay Thompson"
                    statType="rbs"
                  />
                ) : null
              }
              {
                props.cbStatsAssists ? (
                  <Bar
                    classType="chart__block chart__block--ast"
                    infoPlayerStat = {infoPlayer.ast}
                    getWidth={props.getWidth}
                    playerName="Klay Thompson"
                    statType="ast"
                  />
                ) : null
              }
              </div> )
          : (
              <div id='divDgreen' class="dgreen">
              {
                props.cbStatsPoints ? (
                  <Bar
                    classType="chart__block chart__block--pts"
                    infoPlayerStat = {infoPlayer.pts}
                    getWidth={props.getWidth}
                    playerName="Draymond Green"
                    statType="pts"
                  />
                ) : null
              }
              {
                props.cbStatsRebounds ? (
                  <Bar
                    classType="chart__block chart__block--rbs"
                    infoPlayerStat = {infoPlayer.reb}
                    getWidth={props.getWidth}
                    playerName="Draymond Green"
                    statType="rbs"
                  />
                ) : null
              }
              {
                props.cbStatsAssists ? (
                  <Bar
                    classType="chart__block chart__block--ast"
                    infoPlayerStat = {infoPlayer.ast}
                    getWidth={props.getWidth}
                    playerName="Draymond Green"
                    statType="ast"
                  />
                ) : null
              }
              </div>
          )
        ))
      }
    </div>
  );
}

export default BarChart;
