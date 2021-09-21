const AirdropABI = [
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'tokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'maxClaimed_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxDownline_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountPerClaim_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'claimer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimerAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referral',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'referralAmount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'tokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'amountPerClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'maximumClaim',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'maximumDownline',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user_',
        type: 'address',
      },
    ],
    name: 'claimedBy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user_',
        type: 'address',
      },
    ],
    name: 'downlineOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referral_',
        type: 'address',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
