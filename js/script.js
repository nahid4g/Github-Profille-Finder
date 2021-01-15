let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchUser");
let ui = new UI();

searchBtn.addEventListener("click",(e) => {
	let userText = searchUser.value;
	if (userText != "") {
		// Fetch API
		fetch(`https://api.github.com/users/${userText}`)
		.then(result => result.json())
		.then(data => {
			if(data.message === 'Not Found') {
				ui.showAlert("No user found with this user name!","alert alert-danger");
			} else {
				ui.showProfile(data);
			}
		})
		.catch(error => console.log(error));
	} else {
		// Clear profile
		ui.clearProfile();
	}
})