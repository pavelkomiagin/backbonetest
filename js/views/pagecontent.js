app.views.pageContent = Backbone.View.extend({
	initialize: function() {
		app.pageContent.on('pageContentLoaded', _.bind(function(data) {
			this.render();
		}, this));
	},

	render: function() {
		this.$el
			.html(app.pageContent.get('text'))
			.removeClass('loaded')
			.stop()
			.delay(100)
			.queue(function(next) {
				$(this).addClass('loaded');
				next();
			})
	}
});