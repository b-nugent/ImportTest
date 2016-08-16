/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	"change #importer": function(event) {
		event.preventDefault();

		//JSZip = Meteor.npmRequire('jszip');

		var file = event.target.files[0];
		
		console.log(file.name);
		console.log("File.name is a: " + (typeof file.name));

		
		Meteor.call("import", file, function(error, results) {
			if(error) {
				console.log(error);
			} else {
				console.log(results);
			}
		});
		

		
	}
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(() => {
});

Template.Home.onRendered(() => {
});

Template.Home.onDestroyed(() => {
});
