export default function() {
  this.namespace = '';

  // get all outputs
  this.get('/outputs', (schema) => {
    return schema.outputs.all();
  });

  // get output by id
  this.get('/outputs/:id', (schema, request) => {
    const id = request.params.id;
    return schema.outputs.find(id);
  });

  // update output by id
  this.put('/outputs/:id', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).output;
    const id = request.params.id;
    let output = schema.outputs.find(id).update(attrs);
    return output;
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
