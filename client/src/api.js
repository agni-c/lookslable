import axios from 'axios';
import firebase from 'firebase';

require('dotenv').config();
// Axios defaults.baseURL method => sets default host URL (as prefix)
axios.defaults.baseURL =
  'http://localhost:5000/spring-internship/us-central1/app/api';
// axios.defaults.baseURL =
// 	"https://us-central1-spring-internship.cloudfunctions.net/app/api";

export async function iuserevent(iuid) {
  console.log('in api' + iuid);
  const response = await axios.post(`/iuserevent`, {
    iuid: iuid,
  });
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  }
}
export async function puserevent(puid) {
  console.log('in api' + puid);
  const response = await axios.post(`/puserevent`, {
    puid: puid,
  });
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
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
export async function addToUnFavourites(id, puid) {
  const response = await axios.post(`/admin/deapprovedphoto`, {
    puid: puid,
    id: id,
  });
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
  if (response.data != null || response.data != undefined) {
    return response;
  }
}

export async function uploadFormDATA(file, landmark, config) {
  const formData = new FormData();
  formData.append('uploads', file);
  formData.append('landmark', landmark);
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
export async function popUpShoot(
  data,
  phNo,
  date,
  puid,
  price,
  noOfUsers,
  landmark
) {
  axios.post(`/booking/${firebase.auth().currentUser.uid}`, {
    data: data,
    phoneNo: phNo,
    date: date,
    puid: puid,
    price: price,
    numberOfUsers: noOfUsers,
    landmark: landmark,
  });
}
export async function AssigningPUser(bookingdate, iuid, puid, time) {
  await axios.put(`/admin/asignpuser`, {
    bookingdate: bookingdate,
    iuid: iuid,
    time: time,
    puid: puid,
  });
}
export async function uploadDriveLink(
  iuid,
  puid,
  time,
  bookingdate,
  driveLink
) {
  await axios.put(`/uploadlink`, {
    bookingdate: bookingdate,
    iuid: iuid,
    time: time,
    puid: puid,
    driveLink: driveLink,
  });
}

export async function uploadRating(iuid, puid, time, bookingdate, rating) {
  await axios.post(`/rating`, {
    bookingdate: bookingdate,
    iuid: iuid,
    time: time,
    puid: puid,
    rating: rating,
  });
}
export async function verifyPuserProfile(puid) {
  const response = await axios.post(`/pusercompleteprofile`, {
    puid: puid,
  });
  return response.data;
}
export async function updatePuserProfile(
  phoneNumber,
  city,
  address,
  driveLink,
  puid
) {
  const response = await axios.post(`puserform`, {
    puid: puid,
    phoneNo: phoneNumber,
    City: city,
    Address: address,
    DriveLink: driveLink,
  });
  return response.data;
}
export async function mylocation(screenShot) {
  const response = await axios.get(`/mylocation`);
  return response.data;
}
