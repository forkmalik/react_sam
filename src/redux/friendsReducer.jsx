let initialState = {
    friends: [
        {
          id: 0,
          name: "Nastya",
          img_url:
            "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg",
        },
        {
          id: 1,
          name: "Vlad",
          img_url:
            "https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
        },
        {
          id: 2,
          name: "Anton",
          img_url:
            "https://blog.photofeeler.com/wp-content/uploads/2017/09/tinder-photo-size-tinder-picture-size-tinder-aspect-ratio-image-dimensions-crop.jpg",
        },
      ]
}

const friendsReducer = (data = initialState, action) => {
    return data;
}

export default friendsReducer;