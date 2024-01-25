import React from "react"
import Store from "./Store"

function StoreList({ stores }) {

    const mappedStores = stores.map((store) => {
        return <Store key={store.id} {...store} />
    })

    console.log("🚀 ~ mappedStores ~ mappedStores:", mappedStores)
    return(
        <table>
            <tbody>
                <tr>
                    <th className="row-name">
                        Name
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Season
                    </th>
                    <th>
                        Episode
                    </th>
                    <th>
                        Watched
                    </th>
                </tr>
                {mappedStores}
            </tbody>
        
        </table>
    );
}

export default StoreList;