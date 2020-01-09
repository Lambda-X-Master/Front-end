import React from 'react'
import { Map } from "./styles"

import rooms from './rooms'

const point = rooms.map(
    (room) => room
)

// fig, ax = plt.subplots(1, figsize=(10, 10))
// for i in range(len(data)-1):
//     x = data.loc[i]['x']
//     y = data.loc[i]['y']
//     ax.scatter(x, y, color='black')
//     for direction in ['n_to', 'e_to', 's_to', 'w_to']:
//         if data.at[i, direction] != -1:
//             xDir = data.loc[data.loc[i][direction] - 1]['x']
//             yDir = data.loc[data.loc[i][direction] - 1]['y']
//             ax.plot([x, xDir], [y, yDir], color='b')


const index = () => {
    return (
        <Map>
            
        </Map>
    )
}

export default index