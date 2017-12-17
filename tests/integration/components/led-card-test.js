import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('led-card', 'Integration | Component | led card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{led-card}}`);

  assert.equal(this.$('.button').text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#led-card}}
    {{/led-card}}
  `);

  assert.equal(this.$('.button').text().trim(), '');
});
