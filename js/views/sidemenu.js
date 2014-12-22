app.views.sideMenu = Backbone.View.extend({
	template: _.template($('#tpl-side-menu').html()),

	events: {
		"click .menu-item" : "selectItem"
	},

	initialize: function(options) {
		this.render();
		app.menuItems.fetch({
			success: _.bind(function() {
				this.render();
			}, this)
		});
	},

	render: function() {
		if(app.menuItems.length) {
			this.$el.html(this.template({ items: app.menuItems.toJSON() }));
		}
		else {
			this.$el.html('preload');
		}
	},

	selectItem: function(event) {
		var name = $(event.currentTarget).data('name');
		app.router.navigate("page/" + name, {trigger: true});
	},

	drawSelected: function(name) {
		this.$el.find('.menu-item').removeClass('active');
		this.$el.find('.menu-item[data-name="' + name + '"]').addClass('active');
	}
});