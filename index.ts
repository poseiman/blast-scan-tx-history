import axios from "axios";
import { ethers } from "ethers";

import { BLASTSCAN_API_ENDPOINT, USDB, API_KEY, provider } from "./config"

/**
 * @description Config blast scan endpoint for fetching data
 * 
 * @param {string} address The address to fetch tx.
 * @param {number} count The number of tx needed.
 * @param {string} apiKey The api key of blast scan.
 * 
 * @returns {string} The blast scan endpoint which will be used to fetch data.
 */
const blastScanEndpoint = (address: string, count: number, apiKey: string): string => `${BLASTSCAN_API_ENDPOINT}?module=logs&action=getLogs&toBlock=latest&address=${address}&page=1&offset=${count}&apikey=${apiKey}`

/**
 * @description Decode tx hash to get information
 * 
 * @param {string} hash The hash which is should be decoded.
 */
const decodeTx = async (hash: string) => {
    const info = await provider.getTransaction(hash)
    const address = info?.from
    const balance = await provider.getBalance(address!)
    console.log(new Date(), address, '->', ethers.formatEther(balance))
}

/**
 * @description Get all tx history from 
 * 
 * This function output the result of balance of specfic wallet on console
 * 
 * @param {string} address The address which is interact with.
 * @param {number} count The number of tx needed.
 * @param {number} delay The time to delay while iterating to void api access limit
 */
const fetchTransactionHistory = async (address: string, count: number, delay: number) => {
    const fetchURL = blastScanEndpoint(address, count, API_KEY)
    const result = (await axios.get(fetchURL)).data.result
    for (let i = 0; i < result.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        decodeTx(result[i].transactionHash)
    }
};

fetchTransactionHistory(USDB, 100, 100)