import { ethers } from 'ethers';

const pay = async(address, value) => {



    try {

        await window.ethereum.send("eth_requestAccounts");
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        console.log('Found account', accounts[0])

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tx = await signer.sendTransaction({
            to: address,
            value: ethers.utils.parseEther(value)
        })

    } catch (err) {
        console.log(err)
    }
    localStorage.removeItem('payrunning')
}

export default pay;