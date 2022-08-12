import { ethers } from 'ethers';

const cost = (dist) => {
    const perKm = 0.00001;
    let total = dist * perKm;
    return total

}
export default cost