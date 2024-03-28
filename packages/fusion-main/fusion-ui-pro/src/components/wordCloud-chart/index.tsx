import React from 'react';
import WordCloudChart from 'bizcharts/lib/plots/AreaChart';

function WordChart(props) {


	const getDataList = (data) =>{
		const list = [];
		// change data type
		data.forEach((d) => {
			list.push({
				word: d.name,
				weight: d.value,
				id: list.length,
			});
		});
		return list;
	}


  return (
    <WordCloudChart
      tooltip={{
        visible: true,
      }}
      padding="auto"
      data={getDataList(props.data)}
      interactions={[{ type: 'element-active' }]}
      {...props}
    />
  );
}

export default WordChart;
