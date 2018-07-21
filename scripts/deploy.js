require('dotenv').config()
const path = require('path')
const Web3 = require('web3')
const HDWalletProvider = require('truffle-hdwallet-provider')
const signale = require('signale') //eslint-disable-line

//1. Get bytecode
const smartPaper = require(path.resolve(
	__dirname,
	'../compiled/SmartPaper.json'
))
const smartPaperList = require(path.resolve(
	__dirname,
	'../compiled/smartPaperList.json'
))
const smartPaperInterface = smartPaper.interface //eslint-disable-line
const smartPaperByte = smartPaper.bytecode //eslint-disable-line
const smartPaperListInterface = smartPaperList.interface //eslint-disable-line
const smartPaperListByte = smartPaperList.bytecode //eslint-disable-line

const provider = new HDWalletProvider(
	process.env.SEEDPRASE,
	process.env.WEBACCESSPOINT
)

const web3 = new Web3(provider) // eslint-disable-line
;(async () => {})()
