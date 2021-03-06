import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = React.createClass({
  displayName: __filename.split('/').slice(-1)[0],

  onClick(evt) {
    console.log('The user clicked button-1: great', evt);
  },

  onAmazingClick(evt) {
    console.log('The user clicked button-2: amazing', evt);
  },

  onNiceClick(evt) {
    console.log('Bdoggy', evt);
  },

  render() {
    return (
      <div>
        <h1>What do you think of React?</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.onClick}
        >
          Great
        </button>

        <button
          name='button-3'
          value='nice'
          onClick={this.onNiceClick}>
          Nice
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );
  },
});
