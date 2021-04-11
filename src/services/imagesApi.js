import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '20288180-4caa270ad2507bbc2eb049f3e';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
}

const getImages = async ({ q, page }) => {
    try {
        const { data } = await axios.get('', {
        params: { q, page },    
        })

        return data.hits
    } catch (error) {
        console.log('error', { error })
        return []
    }
    }


export default {
    getImages,
}


// const fetchImagesWithQuery = (searchQuery, page = 1) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20288180-4caa270ad2507bbc2eb049f3e&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.hits);
// };

// fetchImagesWithQuery.propTypes = {
//   searchQuery: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
// };

// export default { fetchImagesWithQuery };