import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import App from './../imports/ui/components/App';
import { Players, calculatePlayerPositions } from './../imports/api/players';

Meteor.startup(() => {

  Tracker.autorun(() => {
    const players = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    const title = 'Score Keep';
    const slogan = 'One contest at a time';
    ReactDOM.render(<App players={positionedPlayers} title={title} slogan={slogan} />, document.getElementById('app'));
  });

});
