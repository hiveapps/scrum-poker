var scrumPoker = angular.module('scrumPoker.services', [])

scrumPoker.factory('Cards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cards = [{
    id: 0,
    name: '0',
    lastText: '0'
  }, {
    id: 1,
    name: '1/2',
    lastText: '1/2'
  }, {
    id: 2,
    name: '1',
    lastText: '1'
  }, {
    id: 3,
    name: '2',
    lastText: '2'
  }, {
    id: 4,
    name: '3',
    lastText: '3'
  }, {
    id: 5,
    name: '5',
    lastText: '5'
  }, {
    id: 6,
    name: '8',
    lastText: '8'
  }, {
    id: 7,
    name: '13',
    lastText: '13'
  }, {
    id: 8,
    name: '20',
    lastText: '20'
  }, {
    id: 9,
    name: '40',
    lastText: '40'
  }, {
    id: 10,
    name: '100',
    lastText: '100'
  }, {
    id: 11,
    name: '\u221e',
    lastText: '\u221e'
  }, {
    id: 12,
    name: '?',
    lastText: '0'
  }];

  return {
    all: function() {
      return cards;
    },
    remove: function(card) {
      cards.splice(cards.indexOf(card), 1);
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    }
  };
});
