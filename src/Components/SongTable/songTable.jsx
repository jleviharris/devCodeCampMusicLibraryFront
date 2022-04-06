import "./songTable.css"
const SongTable = ({Songs, filteredData}) => {
    return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Album</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Release date</th>
                </tr>
              </thead>
              <tbody>
                <div className="dataResults">
                    {filteredData.map((value, key) => {
                        return (
                          <tr>
                          <td>{value.id}</td>
                          <td>{value.title}</td>
                          <td>{value.artist}</td>
                          <td>{value.album}</td>
                          <td>{value.genre}</td>
                        </tr>
                    );
                    })}
                </div>
            
              </tbody>
            </table>
   )
}
export default SongTable;



