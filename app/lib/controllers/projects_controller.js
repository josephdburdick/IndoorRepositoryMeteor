ProjectsController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  index: function() {
  	this.wait([Meteor.subscribe('all_projects_publication', {
      onReady: function () { console.log("onReady - items ready", arguments); },
      onError: function () { console.log("onError", arguments); }
  })]);

	if (this.ready()) 
	{
		this.render('projects_list', {data: Projects.find({})});
	} 
	else 
	{
		this.render('Loading');
	}
  },
  add: function() {
    this.render('project_add');
  },
  set: function() {
    this.wait([Meteor.subscribe('all_projects_publication', {
        onReady: function () { console.log("onReady - items ready", arguments); },
        onError: function () { console.log("onError", arguments); }
    })]);

      if (this.ready()) 
    {
      this.render('project_set', {data: Projects.find({})});
    } 
    else 
    {
      this.render('Loading');
    }
  }
});
