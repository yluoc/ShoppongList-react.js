const APIRequest = async (url = '', optionObj = null, errMeg = null) => {
    try{
        const response = await fetch(url, optionObj);
        if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
        errMeg = err.message;
    } finally {
        return errMeg;
    }
}

export default APIRequest;