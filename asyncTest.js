async function asyncFunc() {
    const url = "";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network is not responding!!!');
        }
        const dataInfo = await response.json(); //an array/obj
        return dataInfo;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

module.exports = asyncFunc;
