import { ethers } from 'ethers';
import core from './Core.json'
import { contractAddress, contractAbi, CertType } from './constants';


export const contractService = {
  getProvider () {
    return new ethers.BrowserProvider(window.ethereum);
  },
    async connectWallet () {
        if (typeof window.ethereum !== 'undefined') {
          try {
            // Request account access
            console.log("ins");
            
            const provider = this.getProvider()
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            console.log(address);
            
            localStorage.setItem('address', address)
            return address;
          } catch (error) {
            console.error("User rejected the request", error);
            return null;
          }
        } else {
          alert("MetaMask is not installed. Please install it to use this app.");
          return null;
        }
    },

   async getContract() {
    const provider = this.getProvider()
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      return new ethers.Contract(contractAddress, contractAbi, signer)
    },

    async isAdmin() {
      console.log('get contract');
      
        const contract = await this.getContract();
        console.log(contract);
        
        return await contract.isAdmin(localStorage.getItem('address'))
    },

    async issueCertificate(certHash, ipfsCID, certType) {
      const contract = await this.getContract();
      const response = await contract.issueCertificate(certHash, ipfsCID, certType)
      store.isOngoingTransaction = true
      response.wait()
      store.isOngoingTransaction = false
    },

    async getCertificate(certHash) {
      const contract = await this.getContract();
      return await contract.getCertificate(certHash)
    },

    async verifyCertificate(certHash) {
      const contract = await this.getContract();
      return await contract.verifyCertificate(certHash)
    },
    
    async getAdmin() {
      const contract = await this.getContract();
      return await contract.getAdmin(localStorage.getItem('address'))
    }
}


