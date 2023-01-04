const fetchData = (section) => {
    return fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=eV5AfvtU754uWNOdA41xv0eG5YGvdUAx`
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch((error) => console.log(error));
};

export default fetchData;