// List of art posts (update with your GitHub raw links and captions)
const artPosts = [
  {
    <img src="1.png" alt="image:">,
    caption: 'ufo logic'
  },
  {
    <img src="2.png" alt="image:">,
    caption: 'scripts'
  },
    {
    <img src="1.png" alt="image:">,
    caption: 'Vintage Ouija Planchette'
  },
  {
    <img src="1.png" alt="image:">,
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
