import { ethers } from "ethers";

import {  USDB, provider } from "./config"

/**
 * @description Decode tx hash to get information
 * 
 * @param {number} num The hash which is should be decoded.
 * @param {string} hash The hash which is should be decoded.
 */
const decodeTx = async (num: number, hash: string) => {
    const info = await provider.getTransaction(hash)
    const address = info?.from
    const balance = await provider.getBalance(address!)
    console.log(num, ':', address, '->', ethers.formatEther(balance))
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
    const blochNumber = await provider.getBlockNumber()
    const filter = { fromBlock: blochNumber - 100, toBlock: 'latest', address }
    const result = await provider.getLogs(filter)
    for (let i = result.length - 1; i >= result.length - count; i--) {
        await new Promise(resolve => setTimeout(resolve, delay));
        decodeTx(result.length - i, result[i].transactionHash)
    }
};

fetchTransactionHistory(USDB, 1000, 200)