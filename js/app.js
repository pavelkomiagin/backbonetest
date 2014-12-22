var app = (function() {
	var api = {
		views: {},
		models: {},
		collections: {},
		router: null,
		menuItems: null,
		pageContent: null,
		init: function() {
			this.menuItems = new app.collections.menuItems();
			this.pageContent = new app.models.pageContent();
			ViewsFactory.sideMenu();
			ViewsFactory.pageContent();
			return this;
		},
	};

	var ViewsFactory = {
		sideMenu: function() {
			if(!this.sideMenuView) {
				this.sideMenuView = new api.views.sideMenu({
					el: $('#side-menu')
				});
			}
			return this.sideMenuView;
		},
		pageContent: function() {
			if(!this.pageContentView) {
				this.pageContentView = new api.views.pageContent({
					el: $('#content')
				});
			}
			return this.pageContentView;
		}
	};

	var Router = Backbone.Router.extend({
		routes: {
			"page/:pageName" : "page"
		},
		page: function(pageName) {
			app.menuItems.makeActive(pageName);
			app.menuItems.trigger('selectItem', { name: pageName });
			ViewsFactory.sideMenu().drawSelected(pageName);
		}
	});
	api.router = new Router();

	Backbone.history.start({pushState: true});

	return api;
})();