import { useFetchAlbumsQuery } from "../store";
import { albumsApi } from "../store/apis/albumsApi";
function AlbumsList({ user }) {
    console.log(albumsApi.endpoints());
    console.log(useFetchAlbumsQuery)
    // const results = useFetchAlbumsQuery(user);
    // console.log(results)


    return <div>Albums for {user.name}</div>
}

export default AlbumsList;