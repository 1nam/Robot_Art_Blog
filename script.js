// List of art posts (update with your GitHub raw links and captions)
const artPosts = [
  {
    image: 'https://github.com/1nam/Robot_Art_Blog/blob/main/1.png',
    caption: 'ufo logic'
  },
  {
    image: 'https://github.com/1nam/Robot_Art_Blog/blob/main/2.png',
    caption: 'scripts'
  },
    {
    image: 'https://github.com/1nam/Robot_Art_Blog/blob/main/Vintage%20Ouija%20Planchette.png',
    caption: 'Vintage Ouija Planchette'
  },
  {
    image: 'https://github.com/1nam/Robot_Art_Blog/blob/main/board.png',
    caption: 'Vintage Ouija Board'
  }
];

// Calculate which post to show based on the day
const startDate = new Date('2025-09-16'); // first day of blog
const today = new Date();
const dayIndex = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) % artPosts.length;

const post = artPosts[dayIndex];

// Set image and caption
document.getElementById('art-image').src = post.image;
document.getElementById('art-caption').textContent = post.caption;
