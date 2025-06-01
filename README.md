# Tanzania CertChain

## Overview
Tanzania CertChain is a blockchain-based academic credential verification system designed to secure and streamline the validation of educational certificates in Tanzania. This decentralized solution provides tamper-proof records of academic achievements, enabling instant verification by employers, institutions, and other stakeholders.

## Key Features
- 🔒 Immutable certificate storage on blockchain
- ✅ Instant verification of academic credentials
- 🏛️ Admin dashboard for institutions


## Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git
- MetaMask browser extension

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd security
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```

### Smart Contract Deployment
The Smart contract is deployed in Ethereum Sepolia with address 0xcc6f893a1d6e780cf19ddb13b4e9b1916c6c2221. You can view your transactions in Sepolia Etherscan.

To deploy your own contract [this repo](). Once deployed replace the contract address in constant.js in the codebase with your own.

## System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   Frontend      │───▶│   Backend       │───▶│   Blockchain    │
│   (Vue.js)      │◀───│   (Node.js)     │◀───│   (Ethereum)    │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Usage Guide
1. **For Institutions**:
   - Log in to the admin panel
   - Upload student certificates
   - Verify certificate requests

2. **For Employers**:
   - Enter certificate ID or upload document
   - View verification results

3. **For Students**:
   - Access your digital credentials
   - Share verification links

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For inquiries, please contact:  
📧 support@certchain.tz  
📞 +255 123 456 789  
📍 Dar es Salaam, Tanzania  

*Last updated: June 2024*