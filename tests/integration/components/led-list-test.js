import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { startMirage } from 'nuka-cola/initializers/ember-cli-mirage';
import defaultScenario from 'nuka-cola/mirage/scenarios/default';

moduleForComponent('led-list', 'Integration | Component | led list', {
  integration: true,
  beforeEach() {
    this.server = startMirage();
  },
  afterEach() {
    this.server.shutdown();
  }
});

test('it renders', function(assert) {
  defaultScenario(this.server);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{led-list}}`);
  //
  assert.equal('', '');

  // Template block usage:
  this.render(hbs`
    {{#led-list}}
      template block text
    {{/led-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
