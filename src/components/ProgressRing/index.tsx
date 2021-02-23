import React from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

import { Container } from './styles';

const data = {
  labels: ['Gym', 'Bike', 'Run'], // optional
  data: [0.18, 0.03, 0.09],
};

const ProgressRing: React.FC = () => {
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 25, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <Container>
      <ProgressChart
        data={data}
        width={screenWidth}
        height={220}
        strokeWidth={20}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </Container>
  );
};

export default ProgressRing;
