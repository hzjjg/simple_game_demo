import React, { useMemo, useState } from 'react';

export default ({}) => {
  /**
   * 
   flowchart TB
      A[该吃午饭了] --> B{去哪吃?};
      B -->|下楼吃| C[好耶];
      C --> D["算了，不想下去"];
      D --> B;
      B ---->|点外卖| E[点好了];
   */
  const flow = [
    {
      id: 'A',
      type: 'block',
      text: '该吃午饭了',
      next: 'B',
    },
    {
      id: 'B',
      type: 'condition',
      text: '去哪吃?',
      conditions: [
        { text: '下楼吃', next: 'C' },
        { text: '点外卖', next: 'E' },
      ],
    },
    {
      id: 'C',
      type: 'block',
      text: '好耶',
      next: 'D',
    },
    {
      id: 'D',
      type: 'block',
      text: '算了，不想下去',
      next: 'B',
    },
    {
      id: 'E',
      type: 'block',
      text: '点好了',
    },
  ];

  const [curFlowId, updateCurFlowId] = useState(flow[0].id);
  const curFlow = useMemo(
    () => flow.find(({ id }) => id === curFlowId),
    [curFlowId]
  );

  return (
    <div>
      {curFlow.type === 'block' && (
        <div>
          <h2>{curFlow.text}</h2>
          {curFlow.next ? (
            <input
              type="button"
              value="继续"
              onClick={() => updateCurFlowId(curFlow.next)}
            />
          ) : (
            <div>
              <h2>over</h2>
              <input
                type="button"
                value="重新开始"
                onClick={() => updateCurFlowId(flow[0].id)}
              />
            </div>
          )}
        </div>
      )}
      {curFlow.type === 'condition' && (
        <div>
          <h2>{curFlow.text}</h2>
          {curFlow.conditions.map((item) => (
            <input
              type="button"
              value={item.text}
              onClick={() => item.next && updateCurFlowId(item.next)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
