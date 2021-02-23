import React from 'react';
import { Dimensions } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';

import { ChartView } from './styles';

const commitsData = [
  { date: '2021-05-31', count: 0 },
  { date: '2021-05-30', count: 1 },
  { date: '2021-05-29', count: 1 },
  { date: '2021-05-28', count: 1 },
  { date: '2021-05-27', count: 0 },
  { date: '2021-05-26', count: 1 },
  { date: '2021-05-25', count: 1 },
  { date: '2021-05-24', count: 1 },
  { date: '2021-05-23', count: 0 },
  { date: '2021-05-22', count: 1 },
  { date: '2021-05-21', count: 1 },
  { date: '2021-05-20', count: 1 },
  { date: '2021-05-19', count: 1 },
  { date: '2021-05-18', count: 1 },
  { date: '2021-05-17', count: 1 },
  { date: '2021-05-16', count: 1 },
  { date: '2021-05-15', count: 1 },
  { date: '2021-05-14', count: 1 },
  { date: '2021-05-13', count: 1 },
  { date: '2021-05-12', count: 0 },
  { date: '2021-05-11', count: 1 },
  { date: '2021-05-10', count: 1 },
  { date: '2021-05-09', count: 1 },
  { date: '2021-05-08', count: 1 },
  { date: '2021-05-07', count: 1 },
  { date: '2021-05-06', count: 1 },
  { date: '2021-05-05', count: 1 },
  { date: '2021-05-04', count: 1 },
  { date: '2021-05-03', count: 1 },
  { date: '2021-05-02', count: 0 },
  { date: '2021-05-01', count: 0 },
  { date: '2021-04-30', count: 1 },
  { date: '2021-04-29', count: 1 },
  { date: '2021-04-28', count: 1 },
  { date: '2021-04-27', count: 0 },
  { date: '2021-04-26', count: 1 },
  { date: '2021-04-25', count: 1 },
  { date: '2021-04-24', count: 1 },
  { date: '2021-04-23', count: 0 },
  { date: '2021-04-22', count: 1 },
  { date: '2021-04-21', count: 1 },
  { date: '2021-04-20', count: 1 },
  { date: '2021-04-19', count: 1 },
  { date: '2021-04-18', count: 1 },
  { date: '2021-04-17', count: 1 },
  { date: '2021-04-16', count: 1 },
  { date: '2021-04-15', count: 1 },
  { date: '2021-04-14', count: 1 },
  { date: '2021-04-13', count: 1 },
  { date: '2021-04-12', count: 0 },
  { date: '2021-04-11', count: 1 },
  { date: '2021-04-10', count: 1 },
  { date: '2021-04-09', count: 1 },
  { date: '2021-04-08', count: 1 },
  { date: '2021-04-07', count: 1 },
  { date: '2021-04-06', count: 1 },
  { date: '2021-04-05', count: 1 },
  { date: '2021-04-04', count: 1 },
  { date: '2021-04-03', count: 1 },
  { date: '2021-04-02', count: 0 },
  { date: '2021-04-01', count: 1 },
  { date: '2021-03-31', count: 1 },
  { date: '2021-03-30', count: 1 },
  { date: '2021-03-29', count: 1 },
  { date: '2021-03-28', count: 1 },
  { date: '2021-03-27', count: 0 },
  { date: '2021-03-26', count: 1 },
  { date: '2021-03-25', count: 1 },
  { date: '2021-03-24', count: 1 },
  { date: '2021-03-23', count: 0 },
  { date: '2021-03-22', count: 1 },
  { date: '2021-03-21', count: 1 },
  { date: '2021-03-20', count: 1 },
  { date: '2021-03-19', count: 1 },
  { date: '2021-03-18', count: 1 },
  { date: '2021-03-17', count: 1 },
  { date: '2021-03-16', count: 1 },
  { date: '2021-03-15', count: 1 },
  { date: '2021-03-14', count: 1 },
  { date: '2021-03-13', count: 1 },
  { date: '2021-03-12', count: 0 },
  { date: '2021-03-11', count: 1 },
  { date: '2021-03-10', count: 1 },
  { date: '2021-03-09', count: 1 },
  { date: '2021-03-08', count: 1 },
  { date: '2021-03-07', count: 1 },
  { date: '2021-03-06', count: 1 },
  { date: '2021-03-05', count: 1 },
  { date: '2021-03-04', count: 1 },
  { date: '2021-03-03', count: 1 },
  { date: '2021-03-02', count: 1 },
];

const chartConfig = {
  backgroundGradientFrom: '#eee',
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#eee',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(26, 120, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const screenWidth = Dimensions.get('window').width;

const TrimesterFrequencyGraph = () => (
  <ChartView>
    <ContributionGraph
      values={commitsData}
      endDate={new Date('2021-05-31')}
      numDays={105}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  </ChartView>
);

export default TrimesterFrequencyGraph;
