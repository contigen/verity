export const CONTRACT_ADDRESS = `0x94B2881627A322C505E22b1a36D4C2E866e6D637`

export const endorsementRegistryABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'endorser',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'Endorsed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'endorser',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'EndorsementRevoked',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'endorse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'getEndorsements',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'endorser',
            type: 'address',
          },
          {
            internalType: 'string',
            name: 'message',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        internalType: 'struct EndorsementRegistry.Endorsement[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'endorser',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'hasGivenEndorsement',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'revokeEndorsement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
