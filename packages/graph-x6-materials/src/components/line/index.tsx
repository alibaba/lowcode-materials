

const SequenceFlow = () => ({
  attrs: {
    line: {
      stroke: '#4C6079',
      strokeWidth: 1,
      targetMarker: { // 箭头
        name: 'block',
        size: 8,
      },
    },
  },
  router: {
    name: 'manhattan',
  },
});

export default SequenceFlow;
