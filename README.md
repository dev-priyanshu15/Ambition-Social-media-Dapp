# Blockchain Music Artists Social Media Dapp

A decentralized social media platform built for music artists and fans, leveraging blockchain technology for transparent music ownership, distribution and collaboration.

## Features

- **Music NFT Creation & Trading**: Artists can mint their music as NFTs with embedded royalty rules and metadata
- **Decentralized Social Platform**: Built with React/Next.js for a seamless social experience
- **Smart Contract Integration**: Handles music ownership, royalties and collaboration through Solidity contracts
- **IPFS Storage**: Decentralized storage for music files and metadata
- **Web3 Integration**: Connect with MetaMask and other Web3 wallets
- **Artist Tools**: Cover image uploading, music uploading, playlist creation
- **Social Features**: Comments, likes, shares, direct messaging between artists

## Tech Stack

### Frontend
- React.js with Next.js for the UI framework
- TailwindCSS for styling
- Web3 integration via ethers.js
- Audio playback and waveform visualization

### Backend  
- Node.js/Express API
- Prisma ORM for data modeling
- MongoDB for database

### Blockchain
- Solidity smart contracts
- NFT marketplace functionality 
- Automated royalty distribution
- Deployed on Polygon network

### Storage
- IPFS for decentralized file storage
- Music files stored with content addressing

## Smart Contracts

The platform uses several key smart contracts:

- `MusicNFT.sol`: NFT minting and ownership of music assets
- `MusicICO.sol`: Token distribution and ICO functionality
- `TheBlockchainCoders.sol`: Platform utility token

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

Built by Priyanshu Singh and the Tech Titans team.
