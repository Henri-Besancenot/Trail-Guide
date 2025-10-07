const database = require('../models/database.js');

async function up() {
  const dbo = await database.getDbo();
  
  const trails = [
    {
      title: "Holm",
      description: "Intermediate hike. Good fitness required. Easily-accessible paths. Suitable for all skill levels. The starting point of the route is right next to a parking lot.",
      distance: 11800,
      elevation_gain: 40,
      duration: 200,
      difficulty: "Easy",
      images: ["https://img0.oastatic.com/img2/41224716/600x300c/variant.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5-XkO4NrJhDRy4EbPBa0LFVUjO3KgH1lHg&s"],
      gpx_file: "holm.gpx"
    },
    {
      title: "Mont Blanc Hike",
      description: "An iconic hike offering spectacular views of the Mont Blanc massif. The trail crosses glaciers, alpine meadows and high mountain forests. A physical challenge rewarded with breathtaking panoramas.",
      distance: 15000,
      elevation_gain: 1200,
      difficulty: "Medium",
      duration: 330,
      images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEFW-khpSDuJ6NNmw05-B3yetm46bU3T2rw&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8JHLFU0AdfRz9wdNHNxQV15nIXXrdP8tAZQ&s"],
      gpx_file: "moutain.gpx"
    },
    {
      title: "Ridge Circuit",
      description: "A challenging circuit following steep mountain ridges, offering 360-degree panoramic views. The route includes technical passages and exposed sections, ideal for experienced hikers looking for an exciting adventure.",
      distance: 20000,
      elevation_gain: 1500,
      difficulty: "Hard",
      duration: 465,
      images: ["https://hillexplorer.com/wp-uploads/2019/09/southern-ridge-circuit.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSwJz999Pzt-QKFKWuwsSUQif6sxCfZkOPQ&s"],
      gpx_file: "verdon.gpx"
    }
  ];

  await dbo.collection('trails').insertMany(trails);
  console.log("Trails inserted successfully");
}

async function down() {
  const dbo = await database.getDbo();
  await dbo.collection('trails').deleteMany({});
  console.log("Trails removed successfully");
}

module.exports = { up, down };
