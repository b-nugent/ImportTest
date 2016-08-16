/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  import: function(file) {
  	var JSZip = Meteor.npmRequire('jszip');
  	
  	console.log(file);
	console.log("File.name is a: " + (typeof file.name));
  	/*
  	check(file, {
  		name: String
  	});
	*/
  	
  	
  	JSZip.loadAsync(file).then(function (zips) {
		var entries = [];
		console.log("Hello?");

		zips.forEach(function (zip) {
			zip.forEach(function (relativePath, zipEntry) {
				entries.push(zipEntry.name);
				console.log(zipEntry.name);
			});
		});

		return entries;
	}).then(function (entries) {
		return entries;
	}).catch(function(error) {
		throw new Meteor.Error(error, error.reason);
	});
	
  }
});
