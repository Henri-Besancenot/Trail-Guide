const database = require('../models/database.js');

async function up() {
  const dbo = await database.getDbo();
  
  const trails = [
    {
      title: "Haukankierros",
      description: "Nuuksio National Park is close to the Helsinki metropolitan area, and a great place for a variety of activities. The Hawk Circuit starts from the Haukkalampi nature hut and goes around Haukkalampi. There is a handsome forest landscape along the route and peat rafts drifting in Mustalammi are a local attraction.",
      user: {name: "TrailGuide"},
      distance: 3.9,
      elevation_gain: 104,
      difficulty: "Hard",
      duration: 75,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzQ1NTk0MjgvZDg5M2Y0OTA0NjU3YTdjNzBjYTUzMDMxYmMyNmFiNTMuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTAzNTc5MDk1L2ViNDU1M2M1MGQ0NTJmYmUzZmExMzJmM2NmZWE3YTEyLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE2MTA0MjcwLzg3YjQyNTFkNGI1ZjU3Yzg1ZWU4MjkyYWNhNDhiOWMwLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Haukankierros.gpx",
      start_coords: [60.30926, 24.51405]
    },
    {
      title: "Mäkrän Kierto Trail",
      description: "Mäkrän Kierto Trail is the most popular day hike in Koli National Park. Along the way you can admire the most beautiful landscapes and natural attractions. At the top of Mäkrävaara is the “Järnefelt Pine”, a pine painted by the artist. The work “Landscape from Koli” is on display at the Anteneum in Helsinki.",
      user: {name: "TrailGuide"},
      distance: 7.6,
      elevation_gain: 284,
      difficulty: "Medium",
      duration: 165,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA3MTQzNjgyLzlhY2YzN2VmNjhiY2NiYWM0ZjVhY2E4MzI5ZTk5MDBhLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEyNTA3NDUyLzM0ZmJmYjQzMTc0ZWRhNTY0ZWJiMTBmZWI0YTBkNzljLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTA4MDEwOTExLzhiM2YxNDMyNzIzYTAwMjE0M2I1MmVhY2UxMGI4NDlkLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/M%C3%A4kr%C3%A4n+Kierto.gpx",
      start_coords: [63.09447, 29.80397]
    },
    {
      title: "Juutua Trail",
      description: "The Juutua Trail has collected stories about travelers, events and fishing in Juutua. The texts of the Juutua path are also in Inari Sámi, the first and so far the only nature path where this has been implemented. The illustration is by Inari artist Merja Aletta Ranttila.",
      user: {name: "TrailGuide"},
      distance: 6.8,
      elevation_gain: 129,
      difficulty: "Easy",
      duration: 105,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzMyMDQ3MDcvMDk3MmJjZjE1MjAyMjgxNzRhMDA2ODZmMTZhNzdkM2UuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjM2MTM2NDUvMjAxZTAwNDVhZmRkYjhkMzA5ZTRhNWE0NGE3MTg2NjUuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEyMDYyOTQ0LzliN2VkODg0YjFkZjk3M2M3ZTdlMWYxODc3M2IzNWI1LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Juutuan+polku.gpx",
      start_coords: [68.8954, 26.96649]
    },
    {
      title: "Saana Path",
      description: "The Saana path starts from the parking area of Malla Nature Park and goes to the top of Saana fell and back. From the top you can enjoy stunning views and on the way you can experience the stairs of Saana. In clear weather, the views extend as far as the Lyngen Fjord.",
      user: {name: "TrailGuide"},
      distance: 8.5,
      elevation_gain: 556,
      difficulty: "Hard",
      duration: 225,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNzkwMjA5MTQvZWExMzdlN2Y3MzZjYjg0MjQyZmExNjUyOWRkNWJjMDYuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE0NDIxMzEzLzhiNWE0M2M5ZmUwYjRjYTE4ODVhYjQ4YTllZjUyY2I1LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTExNjY0NTM0LzQ5OTAzOWUxZTE0ZDVlYTZkZmFiZDEyZWIxNDdhMjlhLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Saanan+Polku.gpx",
      start_coords: [69.0607, 20.7714]
    },
    {
      title: "Riisin Rääpäsy",
      description: "Riisin rääpäsy is an easier route at Riisitunturi. The route offers excellent views of the northeastern lake and forest landscape. In the autumn, you can admire the fall colors.",
      user: {name: "TrailGuide"},
      distance: 4.5,
      elevation_gain: 116,
      difficulty: "Medium",
      duration: 75,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTIyNDQwNzgvMTI3MzE0MGRhNjZmMmJkMWVhZjNjMjMzOTYxOGI4N2YuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEzNzk0NjQwLzRiODhlZDhlNmU2MTE5YWEwMTY0N2I4ZTNhZTNmOWU1LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEzNzk0NjM5LzI4ZDY0Yzk1MTNlZTY5MzhiYWEwM2E3NTU1YTZmNDA1LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Riisin+R%C3%A4%C3%A4p%C3%A4sy.gpx",
      start_coords: [66.21565, 28.58635]
    },
    {
      title: "Three Country Cairn",
      description: "The Three Country Cairn is in Käsivarsi Lapland, in the corner where the borders of Finland, Sweden, and Norway meet. This trail starts from the Malla and Saana car park and follows the Arctic Trail through the Malla Nature Park. Along the way is the Kitsiputous, and the reservation and wilderness huts of Kuohkimajärvi are near the border cairn.",
      user: {name: "TrailGuide"},
      distance: 20.9,
      elevation_gain: 799,
      difficulty: "Hard",
      duration: 420,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEwNjQzMTE0L2QwZjUzNDU3OTJlYTNhMWNjNzY5YjU3MzQwYzliMjZjLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEwNjQzMDg2LzA3MzlhNWEwZDgwZDI4YzllOWE3YmQ1NTA0MDU0OGIxLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0=", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTEyOTkzMjU1LzRhNzZhNzY0OWVmZDVkODBkZDdmZjNkNTllNjMyYmQ0LmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Kolmen+Valtakunnan+Rajapyykki.gpx",
      start_coords: [69.06069, 20.77128]
    },
    {
      title: "Lake Savojärvi Trail",
      description: "Kurjenrahka National Park is close to the culture city of Turku. As the name implies, the park is home to cranes, but there are many other animal species to be found here.",
      user: {name: "TrailGuide"},
      distance: 6.3,
      elevation_gain: 159,
      difficulty: "Easy",
      duration: 120,
      favorite: 0,
      images: ["https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjQwODM4MDEvMDE4ODYzMTZkM2Q5NDk0MmI1MDkxZWRlOTk5OTUzYjQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvODUzNDc2ODgvMmUwYjQ4ZGY2ZmZiY2FkMDBjMWQyMTBjNjFlNDA1ZTQuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ==", "https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvMTE0MDA0ODYxLzVkZTFhNzI3YWQ5M2QwYjAzODM3ODMyN2JmNDhlNDliLmpwZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiaGVpZ2h0IjoyMDQ4LCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0="],
      gpx_file: "https://amplify-dbkz8zk5edxbh-mai-amplifydataamplifycodege-gzgmirxiu4rb.s3.eu-central-1.amazonaws.com/trails/Savoj%C3%A4rven+Kierros.gpx",
      start_coords: [60.74025, 22.4141]
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
