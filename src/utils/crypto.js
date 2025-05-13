// Basic wallet functions (expand with Web3Modal later)
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      })
      return accounts[0]
    } catch (error) {
      console.error("Connection rejected:", error)
      return null
    }
  } else {
    alert("Please install MetaMask!")
    return null
  }
}

export function formatAddress(address) {
  return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : ''
}
