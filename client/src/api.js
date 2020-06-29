import axios from "axios";
import firebase from "firebase";

require("dotenv").config();
// Axios defaults.baseURL method => sets default host URL (as prefix)
// axios.defaults.baseURL =
// 	"http://localhost:5000/spring-internship/us-central1/app/api";
axios.defaults.baseURL =
	"https://us-central1-spring-internship.cloudfunctions.net/app/api";

export async function iuserevent() {
	const response = await axios.get(`/iuserevent`);
	if (response.data != null || response.data != undefined) {
		var data = Object.values(response.data);
		return data;
	}
}
export async function addToFavourites(id, puid) {
	const response = await axios.post(`/admin/trendingPhotos`, {
		puid: puid,
		id: id,
	});
	return response;
}

export async function approvedPhotos() {
	const response = await axios.get(`/admin/approved-photos`);

	const data = response.data;
	return data;
}
export async function bookingDetails() {
	const response = await axios.get(`/admin/bookingdetails`);

	const data = Object.values(response.data);
	return data;
}

export async function iUserAdmin() {
	const response = await axios.get(`/admin/iuserprofile`);

	const data = response.data;
	return data;
}

export async function landmarkDetails() {
	const response = await axios.get(`/admin/landmarkdetails`);

	const data = Object.values(response.data);

	return data;
}

export async function pUserProfile() {
	const response = await axios.get(`/admin/puserprofile`);

	const data = response.data;
	return data;
}
//I user

export async function allUserGallery() {
	const response = await axios.get(`/upload/allUsergallery`);

	const data = response.data;
	return data;
}

export async function postIuserProfile() {
	return firebase.auth().onAuthStateChanged(async function (user) {
		if (user) {
			const profile = {
				name: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				tags: [],
			};

			await axios.post(
				`/profile/iuser/${firebase.auth().currentUser.uid}`,
				profile
			);

			console.log(`I user profile`);
		}
	});
}
//P user
export async function postPuserProfile() {
	firebase.auth().onAuthStateChanged(async function (user) {
		if (user) {
			const profile = {
				name: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				tags: [],
			};

			await axios.post(`/profile/${firebase.auth().currentUser.uid}`, profile);
			console.log(`Puser profile Saved`);
		}
	});
}
//P user Components
export async function deleteEditLocation(index) {
	await axios.delete(`/landmark/${index}`);
	console.log(`landmark Deleted`);
}
export async function updateEditLocation(index, landmark, price) {
	await axios.put(`/landmark/${index}`, {
		landmark: landmark,
		price: price,
	});
	console.log(`landmark updated`);
}
export async function getEditLocation() {
	const response = await axios.get(
		`/landmark/${firebase.auth().currentUser.uid}`
	);
	return response;
}

export async function uploadFormDATA(formData, config) {
	const response = await axios.post(
		`/upload/${firebase.auth().currentUser.uid}`,
		formData,
		config
	);
	return response;
}
export async function webCamFormDATA(formData, config) {
	const response = await axios.post(
		`/webcam/form/${firebase.auth().currentUser.uid}`,
		formData,
		config
	);
	return response;
}
export async function landmarkFirestore(fieldData) {
	await axios.put(`/webcam/form/${firebase.auth().currentUser.uid}`, fieldData);
}
export async function landmarkRealTime(fieldData) {
	await axios.post(`/landmark`, fieldData);
}
export async function webCamScreenShot(screenShot) {
	await axios.post(`/webcam/${firebase.auth().currentUser.uid}`, screenShot);
}
export async function popUpShoot(data, phNo, date, puid, price, noOfUsers) {
	axios.post(`/booking/${firebase.auth().currentUser.uid}`, {
		data: data,
		phoneNo: phNo,
		date: date,
		puid: puid,
		price: price,
		numberOfUsers: noOfUsers,
	});
}
