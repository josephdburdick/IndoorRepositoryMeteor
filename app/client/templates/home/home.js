/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};

AutoForm.hooks({
  insertProjectForm: {
    onSubmit: function (doc) {
      // ProjectSchema.clean(doc);
      console.log("Project doc with auto values", doc);
      this.done();
      return false;
    }
  }
});
