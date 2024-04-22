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

export async function makeNewTag(tag) {
  try {
    const yourJwtToken = localStorage.getItem('Token');
    const response = await api.post('/itemTag', tag, {
      headers: {
      Authorization: `Bearer ${yourJwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("makeNewTag Error:", error);
    return error
  }
}