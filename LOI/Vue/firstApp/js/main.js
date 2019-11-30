var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true,
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ],
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0,
    rgbaColor: "rgba(0,0,0,1)",
    cards: [],
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    onChangeSlider: function(){
      this.rgbaColor = `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
    },
    shuffle: function (array) {
      var m = array.length, t, i;
    
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    },
    playSound: function(card){
      const soundFile = String('snd/' + card.set + '.wav');
      const mysound = new Audio(soundFile)
      mysound.play();
    }
  },
  created () {
    fetch("cards.json")
    .then(response => response.json())
    .then(json => {
      this.cards = this.shuffle(json.deck);
    })
  }
});

