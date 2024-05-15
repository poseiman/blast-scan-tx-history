import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { USDB_ABI } from './abi';
dotenv.config();

export const BLASTSCAN_API_ENDPOINT = process.env.BLASTSCAN_API_ENDPOINT
export const BLAST_ENDPOINT = process.env.BLAST_ENDPOINT
export const API_KEY = process.env.API_KEY!
export const provider = new ethers.JsonRpcProvider(BLAST_ENDPOINT)

export const USDB = '0x4300000000000000000000000000000000000003'
export const USDB_Contract = new ethers.Contract(USDB, USDB_ABI, provider);