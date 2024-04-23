import api from './apiConfig';

export async function getItem(_id) {
  try {
    const response = await api.get(`/closetItem/${_id}`);
    return response.data;
  } catch (error) {
    console.error("getItem Error:", error);
    return error
  }
}

//TODO: Logic for picture upload not iplemented, using placeholder for now
export async function makeNewClosetItem(closetItem) {
 
  console.log("closetItem:", closetItem);
  // try {
  //   const yourJwtToken = localStorage.getItem('Token');
  //   const response = await api.post('/closetItem', closetItem, {
  //     headers: {
  //     Authorization: `Bearer ${yourJwtToken}`,
  //     },
  //   });
  //   const responseClosetItemID = response.data._id;
  //   const userID = localStorage.getItem('_id');
  //   console.log("responseClosetItemID:", responseClosetItemID, "userID:", userID);
  //   const updatedUser = {
  //     "closetItems": [responseClosetItemID]
  //   }
  //   const updatedUserResponse = await api.patch(`/user/` + userID, updatedUser, {
  //     headers: {
  //     Authorization: `Bearer ${yourJwtToken}`,
  //     },
  //   });
  //   const updateUser = updatedUserResponse.data;
  //   console.log("updateUser:", updateUser);
  //   if (updatedUser.closetItems) localStorage.setItem('currentUserItems', JSON.stringify(updateUser.closetItems));
  //   if (updatedUser.associatedTags) localStorage.setItem('curretUserAssociatedTags', JSON.stringify(updateUser.associatedTags));

  //   return updatedUserResponse.data;
  // } catch (error) {
  //   console.error("makeNewClosetItem Error:", error);
  //   return error
  // }
}

export async function makeNewTag(tag) {
  const input = {
    "name": tag
  }
  try {
    const yourJwtToken = localStorage.getItem('Token');
    const response = await api.post('/itemTag', input, {
      headers: {
      Authorization: `Bearer ${yourJwtToken}`,
      },
    });
    const responseTagID = response.data._id;
    const userID = localStorage.getItem('_id');
    console.log("responseTagID:", responseTagID, "userID:", userID);
    const updatedUser = {
      "associatedTags": [responseTagID]
    }
    const updatedUserResponse = await api.patch(`/user/` + userID, updatedUser, {
      headers: {
      Authorization: `Bearer ${yourJwtToken}`,
      },
    });
    const updateUser = updatedUserResponse.data;
    console.log("updateUser:", updateUser);
    if (updatedUser.closetItems) localStorage.setItem('currentUserItems', JSON.stringify(updateUser.closetItems));
    if (updatedUser.associatedTags) localStorage.setItem('curretUserAssociatedTags', JSON.stringify(updateUser.associatedTags));

    return updatedUserResponse.data;
  } catch (error) {
    console.error("makeNewTag Error:", error);
    return error
  }
}