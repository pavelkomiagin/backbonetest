app.models.pageContent = Backbone.Model.extend({
	defaults: {
		text: '',
		link: ''
	},

	initialize: function() {
		app.menuItems.on('selectItem', _.bind(function(data) {
			this.set('name', data.name);
		}, this));

		this.on('change:name', this.getPage, this);
	},

	getPage: function() {
		this.url = '/data/' + this.get('name') + '.json';
		this.fetch({
			success: _.bind(function(data) {
				this.trigger('pageContentLoaded', data);
			}, this)
		});
	}
});