import React from 'react';

const App = ({ lakes }) => (
  <ul>
      {lakes.map((lake) =>
          <li key={lake.id}>Name: {lake.name} |
          Trailhead: {lake.trailhead}
          <br/>
          <br/>
          </li>
      )}
  </ul>
);

export default App;
