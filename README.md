# Transaction Interactor

## Description
This TypeScript project utilizes Ether.js to fetch transactions interacting with a specific address and displays the balance of the address that initiated these transactions on Blast chain.

## Features
- Fetches a specific number of transactions (default: 1000) that interact with a specified address (default: USDB).
- Calculates and displays the balance of the address that made these transactions.

## Requirements
- Node.js : v20.0.0
- npm or yarn
- TypeScript
- Ether.js

## Installation
1. Clone the repository:
   ```
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```
   cd transaction-interactor
   ```
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Configuration
- To change the default number of transactions fetched or the default address, modify the `config.ts` file.

## Usage
1. Compile TypeScript files:
   ```
   npm run build
   ```
   or
   ```
   yarn build
   ```
2. Run the application:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```
3. The application will fetch transactions and display the balance of the specified address.
4. Build the application:
   ```
   npm build
   ```
   or
   ```
   yarn build
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
