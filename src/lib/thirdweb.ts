import { createThirdwebClient, getContract } from 'thirdweb'

const client = createThirdwebClient({
  clientId: process.env.THIRDWEB_CLIENT_ID!,
  secretKey: process.env.THIRDWEB_SECRET_KEY!,
})

const contract = getContract({
  client,
  address: '',
  chain: 'rootstock-testnet',
})
