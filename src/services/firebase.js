import {
  collection,
  query,
  where,
  getDocs,
  limit,
  getDoc,
  arrayRemove,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const userRefs = collection(firestore, "users");
  const q = query(userRefs, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

export async function getUserByUserId(userId) {
  const userRefs = collection(firestore, "users");
  const q = query(userRefs, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  let user = {};

  querySnapshot.forEach((doc) => {
    user = {
      ...doc.data(),
      docId: doc.id,
    };
  });

  return user;
}

export async function getSuggestions(userId, following) {
  const userRefs = collection(firestore, "users");
  const q = query(userRefs, where("userId", "!=", userId), limit(10));

  const querySnapshot = await getDocs(q);

  const results = [];

  querySnapshot.forEach((doc) => {
    results.push({
      ...doc.data(),
      docId: doc.id,
    });
  });

  return results.filter((profile) => !following.includes(profile.userId));
}

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  const loggedInUserDocRef = doc(firestore, "users", loggedInUserDocId);

  return updateDoc(loggedInUserDocRef, {
    following: isFollowingProfile
      ? arrayRemove(profileId)
      : arrayUnion(profileId),
  });
}

export async function updateFollowedUserFollowers(
  spDocId,
  loggedInUserDocId,
  isAFollower
) {
  const spUserDocRef = doc(firestore, "users", spDocId);

  return updateDoc(spUserDocRef, {
    followers: isAFollower
      ? arrayRemove(loggedInUserDocId)
      : arrayUnion(loggedInUserDocId),
  });
}


export async function getPhotos(userId, following) {
  const photoRefs = collection(firestore, 'photos');
  const q = query(photoRefs, where('userId', 'in', following));
  const querySnapshot = await getDocs(q);
  const userFollowedPhotos = [];

  querySnapshot.forEach((photo) => {
    userFollowedPhotos.push({
      ...photo.data(),
      docId: photo.id
    });
  });
}