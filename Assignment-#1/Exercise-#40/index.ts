type Album = {
  artist_name: string
  album_title: string
  tracks?: number
}

const make_album = (artist_name: string, album_title: string, tracks?: number) => {
  let album_data: Album = {
    artist_name: artist_name,
    album_title: album_title
  }
  if (tracks) {
    album_data.tracks = tracks;
  }
  return album_data;
}

const album1: Album = make_album('Dj bravo', 'I am Dj bravo');
const album2: Album = make_album('Ibrar ul Haq', 'I am Ibrar ul Haq');
const album3: Album = make_album('Dhichak Pooja', 'Tik Tok Tuk');
const album4: Album = make_album('Badshah', 'Badshah oh badshah!', 25);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);