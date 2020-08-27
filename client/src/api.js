import axios from 'axios';
import firebase from 'firebase';
import { func } from 'prop-types';

require('dotenv').config();
// Axios defaults.baseURL method => sets default host URL (as prefix)
axios.defaults.baseURL =
  'http://localhost:5000/spring-internship/us-central1/app/api';
// axios.defaults.baseURL =
//   "https://us-central1-spring-internship.cloudfunctions.net/app/api";

export async function iuserevent(iuid) {
  console.log('in api' + iuid);
  const response = await axios.post(`/iuserevent`, {
    iuid: iuid,
  });
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}
export async function puserevent(puid) {
  console.log('in api' + puid);
  const response = await axios.post(`/puserevent`, {
    puid: puid,
  });
  console.log(response.data);
  if (response.data && response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}
export async function customiuserevent(iuid) {
  console.log('in api' + iuid);
  const response = await axios.post(`/iuserevent/custom`, {
    iuid: iuid,
  });
  if (response.data && response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}
export async function custompuserevent(puid) {
  console.log('in api' + puid);
  const response = await axios.post(`/puserevent/custom`, {
    puid: puid,
  });
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}
export async function addToFavourites(id, puid) {
  const response = await axios.post(`/admin/trendingPhotos`, {
    puid: puid,
    id: id,
  });

  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return response;
  } else {
    return false;
  }
}
export async function addToUnFavourites(id, puid) {
  await axios.post(`/admin/deapprovedphoto`, {
    puid: puid,
    id: id,
  });
}

export async function approvedPhotos() {
  const response = await axios.get(`/admin/approved-photos`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}
export async function bookingDetails() {
  const response = await axios.get(`/admin/bookingdetails`);
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}

export async function iUserAdmin() {
  const response = await axios.get(`/admin/iuserprofile`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}

export async function landmarkDetails() {
  const response = await axios.get(`/admin/landmarkdetails`);
  if (response.data != null && response.data != undefined) {
    const data = Object.values(response.data);
    return data;
  } else {
    return false;
  }
}

export async function pUserProfile() {
  const response = await axios.get(`/admin/puserprofile`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}
//I user

export async function allUserGallery() {
  const response = await axios.get(`/upload/allUsergallery`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
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
  if (response.data != null && response.data != undefined) {
    return response;
  } else {
    return false;
  }
}
export async function webCamFormDATA(formData, config) {
  const response = await axios.post(
    `/webcam/form/${firebase.auth().currentUser.uid}`,
    formData,
    config
  );
  if (response.data != null && response.data != undefined) {
    return response;
  } else {
    return false;
  }
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
  return axios.post(`/booking/${firebase.auth().currentUser.uid}`, {
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
export async function AssigningPUserCustomBooking(date, iuid, puid, PhoneNo) {
  await axios.put(`/admin/asignpuser/custombooking`, {
    date: date,
    iuid: iuid,
    PhoneNo: PhoneNo,
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
export async function uploadDriveLinkCustombooking(
  iuid,
  puid,
  date,
  driveLink
) {
  await axios.put(`/uploadlink/custom`, {
    date: date,
    iuid: iuid,
    puid: puid,
    driveLink: driveLink,
  });
}
export async function uploadLinkIuser(bookingdate, time, iuid, link) {
  return await axios.put(`/iuseruploadlink`, {
    bookingdate: bookingdate,
    iuid: iuid,
    time: time,
    link: link,
  });
}
export async function uploadLinkIuserCustom(date, puid, iuid, link) {
  return await axios.put(`/iuseruploadlink/custom`, {
    date: date,
    iuid: iuid,
    puid: puid,
    link: link,
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
export async function uploadRatingCustomBooking(iuid, puid, date, rating) {
  await axios.post(`/rating/custom`, {
    date: date,
    iuid: iuid,

    puid: puid,
    rating: rating,
  });
}
export async function verifyPuserProfile(puid) {
  const response = await axios.post(`/pusercompleteprofile`, {
    puid: puid,
  });
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
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
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}
export async function mylocation(screenShot) {
  const response = await axios.get(`/mylocation`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}
export async function myLocationPhoto(
  bfirst,
  bsecond,
  bthird,
  bprice,
  pfirst,
  psecond,
  pthird,
  pprice
) {
  await axios.put(`/mylocation/photo`, {
    bfirst: bfirst,
    bsecond: bsecond,
    bthird: bthird,
    bprice: bprice,
    pfirst: pfirst,
    psecond: psecond,
    pthird: pthird,
    pprice: pprice,
  });
}
export async function myLocationVideo(
  bfirst,
  bsecond,
  bthird,
  bprice,
  pfirst,
  psecond,
  pthird,
  pprice
) {
  await axios.put(`/mylocation/video`, {
    bfirst: bfirst,
    bsecond: bsecond,
    bthird: bthird,
    bprice: bprice,
    pfirst: pfirst,
    psecond: psecond,
    pthird: pthird,
    pprice: pprice,
  });
}
export async function customBooking(
  address,
  PhoneNo,
  date,
  lat,
  lon,
  key1,
  key2,
  details,
  user
) {
  return await axios.post(`/custombooking`, {
    address: address,
    PhoneNo: PhoneNo,
    date: date,
    lat: lat,
    lon: lon,
    key1: key1,
    key2: key2,
    details: details,
    user: user,
  });
}
export async function customBookingDetails() {
  var response = await axios.get(`/custombooking`);
  if (response.data != null && response.data != undefined) {
    return response.data;
  } else {
    return false;
  }
}
export async function uploadAdminLinks(
  bookingdate,
  iuid,
  time,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  link9,
  link10
) {
  await axios.put('/admin/uploadlinks', {
    bookingdate: bookingdate,
    iuid: iuid,
    time: time,
    link1: link1,
    link2: link2,
    link3: link3,
    link4: link4,
    link5: link5,
    link6: link6,
    link7: link7,
    link8: link8,
    link9: link9,
    link10: link10,
  });
}
export async function uploadAdminLinksCustom(
  date,
  iuid,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  link9,
  link10
) {
  await axios.put('/admin/uploadlinks/custom', {
    date: date,
    iuid: iuid,
    link1: link1,
    link2: link2,
    link3: link3,
    link4: link4,
    link5: link5,
    link6: link6,
    link7: link7,
    link8: link8,
    link9: link9,
    link10: link10,
  });
}
