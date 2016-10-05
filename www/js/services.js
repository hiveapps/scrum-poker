var scrumPoker = angular.module('starter.services', [])

scrumPoker.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

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
    name: '&#x221e;',
    lastText: '&#x221e;'
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
