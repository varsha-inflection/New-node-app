export const create = async(req) => {
    try {
        return "POST request is successfull!";
    }
    catch (error){
        return ("Unable to reach POST request!!", error);
    }
};

export const search = async(req) => {
    try {
        return "GET request is successfull!";
    }
    catch (error){
        return ("Unable to reach GET request!!", error);
    }
};

export const update = async(req) => {
    try {
        return "PUT request is successfull!";
    }
    catch (error){
        return ("Unable to reach PUT request!!", error);
    }
};

export const deletE = async(req) => {
    try {
        return "DELETE request is successfull!";
    }
    catch (error){
        return ("Unable to reach DELETE request!!", error);
    }
};