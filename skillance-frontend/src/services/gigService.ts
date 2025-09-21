import { API, GIGS } from "./apis";

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}` // send JWT in header
}

export const createGig = async (formData: any) => {
  try {
    const response = await API.post(GIGS, formData, { headers });
    return response;
  } catch (error) {
  
    console.error("Error:", error);
     return null;
  }
};

export const getALlGigs = async () => {
  try {
    const response = await API.get(GIGS, { headers });
    return response;
  } catch (error) {
    console.error("Error:", error);
     return null;
  }
};

export const getGigById = async (id:number) => {
  try {
    const response = await API.get(GIGS+`/${id}`, { headers });
    return response;
  } catch (error) {
    console.error("Error:", error);
     return null;
  }
};

export const deleteGig = async (id:number) => {
  try {
    const response = await API.delete(GIGS+`/${id}`, { headers });
    return response;
  } catch (error) {
    console.error("Error:", error);
     return null;
  }
};

export const addGigPackage = async (id:number, formData:any) => {
  try {
    const response = await API.post(GIGS+`/${id}/packages`,formData, { headers });
    return response;
  } catch (error) {
    console.error("Error:", error);
     return null;
  }
};

export const addGigReview = async (id:number, formData:any) => {
  try {
    const response = await API.post(GIGS+`/${id}/reviews`,formData, { headers });
    return response;
  } catch (error) {
    console.error("Error:", error);
     return null;
  }
};
