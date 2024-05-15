import dotenv from 'dotenv';
import { ethers } from 'ethers';
dotenv.config();

const BLAST_ENDPOINT = process.env.BLAST_ENDPOINT
export const provider = new ethers.JsonRpcProvider(BLAST_ENDPOINT)

export const USDB = '0x4300000000000000000000000000000000000003'
