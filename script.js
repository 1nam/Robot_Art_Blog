// List of art posts (update with your GitHub raw links and captions)
const artPosts = [
  {
    image: 'https://raw.githubusercontent.com/username/repo/main/art/artwork1.jpg',
    caption: 'Caption for Artwork 1'
  },
  {
    image: 'https://raw.githubusercontent.com/username/repo/main/art/artwork2.jpg',
    caption: 'Caption for Artwork 2'
  },
  {
    image: 'https://raw.githubusercontent.com/username/repo/main/art/artwork3.jpg',
    caption: 'Caption for Artwork 3'
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
