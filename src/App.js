// https://emeeks.github.io/semiotic/#/semiotic/heatmap

import React from 'react'
import { XYFrame, ORFrame } from 'semiotic'

console.log( 'XYFrame', XYFrame)


const barChartData = [
  { user: "Jason", tweets: 20, retweets: 5, favorites: 15 },
  { user: "Susie", tweets: 5, retweets: 100, favorites: 100 },
  { user: "Matt", tweets: 20, retweets: 25, favorites: 50 },
  { user: "Betty", tweets: 30, retweets: 20, favorites: 10 }
];


const AreaChart = (

) =>
<ORFrame
            size={[300, 500]}
            data={barChartData}
            oAccessor={"user"}
            rAccessor={"tweets"}
            style={{ fill: "#00a2ce", stroke: "white" }}
            type={"bar"}
            oLabel={true}
          />

export default AreaChart
