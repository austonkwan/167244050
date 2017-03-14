var registration = (function () {
	var information = [];

	return {
		addRec: function(data) {
			information.push({
				Username: data.username,
				Name: data.name,
				Email: data.email,
				Password: data.password,
				Age: data.age,
				UID: data.uid
			});
		},
		getRec: function() {
			return information
		}
	}
})()