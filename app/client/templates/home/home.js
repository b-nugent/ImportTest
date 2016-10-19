/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
	"change #importer": function(event) {
		event.preventDefault();

		var JSZip = require("jszip");

		JSZip.loadAsync(event.target.files[0]).then(function(zippedFile) {
			var entries = [];

			zippedFile.forEach(function (relativePath, fileEntry) {
            	entries.push(fileEntry);
            });

            console.log(entries);
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
