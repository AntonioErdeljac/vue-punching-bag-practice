const DEFAULT_HEALTH = 100;
const DEFAULT_DAMAGE = 10;

new Vue({
  el: '#vue-app',
  data: {
    health: DEFAULT_HEALTH,
    damage: DEFAULT_DAMAGE,
  },
  methods: {
    punch: function() {
      this.health -= this.damage;
    },
    restart: function() {
      this.health = DEFAULT_HEALTH;
    }
  },
  computed: {
    hasFinished: function() {
      return this.health <= 0;
    },
    remainingHealth: function() {
      return 100 - this.health;
    }
  }
});
