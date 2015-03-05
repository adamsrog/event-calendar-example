import Ember from 'ember';

export default Ember.Controller.extend({
	eventData: Ember.computed(function() {
		var eventData = [
			{ 
				"date": moment().format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Install the ember-cli-event-calendar addon!",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().add(1, 'days').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Make a cool calendar app",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().add(5, 'days').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Deploy app",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().add(1, 'weeks').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Make tons of money",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().add(2, 'weeks').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Create a new addon",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().subtract(1, 'days').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Visit emberaddons.com",  
				"url": "http://emberaddons.com" 
			},
			{ 
				"date": moment().subtract(3, 'days').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "Visit ember-observer",  
				"url": "http://emberobserver.com" 
			},
			{ 
				"date": moment().add(1, 'months').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "You're in the next month!",  
				"url": "http://rogerada.ms" 
			},
			{ 
				"date": moment().subtract(1, 'months').format("YYYY-MM-DD HH:MM:SS"), 
				"title": "You're in the previous month",  
				"url": "http://rogerada.ms" 
			}
		];
		return eventData;
	})
});
