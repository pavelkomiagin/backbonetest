app.collections.menuItems = Backbone.Collection.extend({
	model: app.models.menuItem,

	url: '/data/menuitems.json',

	initialize: function() { },

	makeActive: function(name) {
		_.each(this.models, function(model) {
			model.set('active', false);
		});

		var item = this.findWhere({ name: name });
		if(item)
			item.set('active', true)
	}
});