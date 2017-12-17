export default function() {
  this.namespace = '';

  // get all leds
  this.get('/leds', (schema) => {
    return schema.leds.all();
  });

  // get led by id
  this.get('/leds/:id', (schema, request) => {
    const id = request.params.id;
    return schema.leds.find(id);
  });

  // update led by id
  this.put('/leds/:id', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).leds;
    const id = request.params.id;
    let led = schema.leds.find(id).update(attrs);
    return led;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
