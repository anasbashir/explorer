export const authConstants = {
  USER_TOKEN_TEMP: 'USER_TOKEN_TEMP',
  SIGN_IN_LOADING: 'SIGN_IN_LOADING',
  CREATE_WALLET_LOADING: 'CREATE_WALLET_LOADING',
  CREATE_PASSWORD_LOADING: 'CREATE_PASSWORD_LOADING',
  USER: 'USER'
};

export const homeConstants = {
  GET_NETWORK_INFO: 'GET_NETWORK_INFO',
  GET_NETWORK_INFO_LOADING: 'GET_NETWORK_INFO_LOADING',

  GET_ALL_LAYERS: 'GET_ALL_LAYERS',
  GET_ALL_LAYERS_LOADING: 'GET_ALL_LAYERS_LOADING',

  GET_ALL_TRANSACTIONS: 'GET_ALL_TRANSACTIONS',
  GET_ALL_TRANSACTIONS_LOADING: 'GET_ALL_TRANSACTIONS_LOADING',

  GET_ALL_MINORS: 'GET_ALL_MINORS',
  GET_ALL_MINORS_LOADING: 'GET_ALL_MINORS_LOADING'
};

export const walletConstants = {
  WALLET_DATA_LOADING: 'WALLET_DATA_LOADING',
  WALLET_DATA: 'WALLET_DATA',

  SEND_TOKENS: 'SEND_TOKENS',
  SEND_TOKENS_LOADING: 'SEND_TOKENS_LOADING',

  WALLET_BALANCE: 'WALLET_BALANCE',
  WALLET_BALANCE_LOADING: 'WALLET_BALANCE_LOADING',

  WALLET_TRANSACTIONS: 'WALLET_TRANSACTIONS',
  WALLET_TRANSACTIONS_LOADING: 'WALLET_TRANSACTIONS_LOADING'
};

export const actionTypes = {
  GET_ACCOUNT_DATAILS: 'GET_ACCOUNT_DATAILS',
  GET_ACCOUNT_DATAILS_LOADING: 'GET_ACCOUNT_DATAILS_LOADING',

  GET_TRANSACTIONS: 'GET_TRANSACTIONS',
  GET_TRANSACTIONS_LOADING: 'GET_TRANSACTIONS_LOADING',

  GET_TRANSACTIONS_BY_HASH: 'GET_TRANSACTIONS_BY_HASH',
  GET_TRANSACTIONS_BY_HASH_LOADING: 'GET_TRANSACTIONS_BY_HASH_LOADING',

  GET_BANK_BALANCE: 'GET_BANK_BALANCE',
  GET_BANK_BALANCE_LOADING: 'GET_BANK_BALANCE_LOADING',

  GET_ACCOUNT_INFO: 'GET_ACCOUNT_INFO',
  GET_ACCOUNT_INFO_LOADING: 'GET_ACCOUNT_INFO_LOADING',

  GET_DELEGATIONS_FROM_DELEGATOR: 'GET_DELEGATIONS_FROM_DELEGATOR',
  GET_DELEGATIONS_FROM_DELEGATOR_LOADING:
    'GET_DELEGATIONS_FROM_DELEGATOR_LOADING',

  GET_DELEGATIONS_BY_ADDRESS: 'GET_DELEGATIONS_BY_ADDRESS',
  GET_DELEGATIONS_BY_ADDRESS_LOADING: 'GET_DELEGATIONS_BY_ADDRESS_LOADING',

  GET_CURRENT_DELEGATIONS: 'GET_CURRENT_DELEGATIONS',
  GET_CURRENT_DELEGATIONS_LOADING: 'GET_CURRENT_DELEGATIONS_LOADING',

  GET_UNBONDING_DELEGATIONS: 'GET_UNBONDING_DELEGATIONS',
  GET_UNBONDING_DELEGATIONS_LOADING: 'GET_UNBONDING_DELEGATIONS_LOADING',

  GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL:
    'GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL',
  GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL_LOADING:
    'GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL_LOADING',

  GET_DELEGATIONS: 'GET_DELEGATIONS',
  GET_DELEGATIONS_LOADING: 'GET_DELEGATIONS_LOADING',

  GET_REDELEGATIONS: 'GET_REDELEGATIONS',
  GET_REDELEGATIONS_LOADING: 'GET_REDELEGATIONS_LOADING',

  GET_DELEGATIONS_FROM_VALIDATOR: 'GET_DELEGATIONS_FROM_VALIDATOR',
  GET_DELEGATIONS_FROM_VALIDATOR_LOADING:
    'GET_DELEGATIONS_FROM_VALIDATOR_LOADING',

  GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR:
    'GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR',
  GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR_LOADING:
    'GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR_LOADING',

  GET_VALIDATOR: 'GET_VALIDATOR',
  GET_VALIDATOR_LOADING: 'GET_VALIDATOR_LOADING',

  GET_VALIDATOR_BY_ADDRESS: 'GET_VALIDATOR_BY_ADDRESS',
  GET_VALIDATOR_BY_ADDRESS_LOADING: 'GET_VALIDATOR_BY_ADDRESS_LOADING',

  GET_ALL_VALIDATORS: 'GET_ALL_VALIDATORS',
  GET_ALL_VALIDATORS_LOADING: 'GET_ALL_VALIDATORS_LOADING',

  GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO:
    'GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO',
  GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO_LOADING:
    'GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO_LOADING',

  GET_VALIDATOR_DELEGATOR_BOUNDED_TO: 'GET_VALIDATOR_DELEGATOR_BOUNDED_TO',
  GET_VALIDATOR_DELEGATOR_BOUNDED_TO_LOADING:
    'GET_VALIDATOR_DELEGATOR_BOUNDED_TO_LOADING',

  GET_STAKIING_POOL_STATUS: 'GET_STAKIING_POOL_STATUS',
  GET_STAKIING_POOL_STATUS_LOADING: 'GET_STAKIING_POOL_STATUS_LOADING',

  GET_STAKING_PARAMETERS: 'GET_STAKING_PARAMETERS',
  GET_STAKING_PARAMETERS_LOADING: 'GET_STAKING_PARAMETERS_LOADING',

  GET_GOV_PERPOSALS: 'GET_GOV_PERPOSALS',
  GET_GOV_PERPOSALS_LOADING: 'GET_GOV_PERPOSALS_LOADING',

  GET_GOV_PERPOSALS_BY_ID: 'GET_GOV_PERPOSALS_BY_ID',
  GET_GOV_PERPOSALS_BY_ID_LOADING: 'GET_GOV_PERPOSALS_BY_ID_LOADING',

  GET_PROPOSER: 'GET_PROPOSER',
  GET_PROPOSER_LOADING: 'GET_PROPOSER_LOADING',

  GET_DEPOSITS: 'GET_DEPOSITS',
  GET_DEPOSITS_LOADING: 'GET_DEPOSITS_LOADING',

  GET_DEPOSITS_BY_DEPOSITOR: 'GET_DEPOSITS_BY_DEPOSITOR',
  GET_DEPOSITS_BY_DEPOSITOR_LOADING: 'GET_DEPOSITS_BY_DEPOSITOR_LOADING',

  GET_PROPOSAL_VOTES: 'GET_PROPOSAL_VOTES',
  GET_PROPOSAL_VOTES_LOADING: 'GET_PROPOSAL_VOTES_LOADING',

  GET_PROPOSAL_VOTES_BY_VOTER: 'GET_PROPOSAL_VOTES_BY_VOTER',
  GET_PROPOSAL_VOTES_BY_VOTER_LOADING: 'GET_PROPOSAL_VOTES_BY_VOTER_LOADING',

  GET_PROPOSAL_TALLY: 'GET_PROPOSAL_TALLY',
  GET_PROPOSAL_TALLY_LOADING: 'GET_PROPOSAL_TALLY_LOADING',

  GET_GOV_PARAMETERS_DEPOSIT: 'GET_GOV_PARAMETERS_DEPOSIT',
  GET_GOV_PARAMETERS_DEPOSIT_LOADING: 'GET_GOV_PARAMETERS_DEPOSIT_LOADING',

  GET_GOV_PARAMETERS_TALLING: 'GET_GOV_PARAMETERS_TALLING',
  GET_GOV_PARAMETERS_TALLING_LOADING: 'GET_GOV_PARAMETERS_TALLING_LOADING',

  GET_GOV_PARAMETERS_VOTING: 'GET_GOV_PARAMETERS_VOTING',
  GET_GOV_PARAMETERS_VOTING_LOADING: 'GET_GOV_PARAMETERS_VOTING_LOADING',

  GET_SLASHING_SIGNING_INFO: 'GET_SLASHING_SIGNING_INFO',
  GET_SLASHING_SIGNING_INFO_LOADING: 'GET_SLASHING_SIGNING_INFO_LOADING',

  GET_SLASHING_PARAMETERS_LOADING: 'GET_SLASHING_PARAMETERS_LOADING',
  GET_SLASHING_PARAMETERS_LOADING_LOADING:
    'GET_SLASHING_PARAMETERS_LOADING_LOADING',

  GET_DISTRIBUTIONS_REWARDS: 'GET_DISTRIBUTIONS_REWARDS',
  GET_DISTRIBUTIONS_REWARDS_LOADING: 'GET_DISTRIBUTIONS_REWARDS_LOADING',

  GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR:
    'GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR',
  GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR_LOADING:
    'GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR_LOADING',

  GET_WITHDRAWAL_ADDRESS: 'GET_WITHDRAWAL_ADDRESS',
  GET_WITHDRAWAL_ADDRESS_LOADING: 'GET_WITHDRAWAL_ADDRESS_LOADING',

  GET_VALIDATOR_DISTRIBUTION_INFO: 'GET_VALIDATOR_DISTRIBUTION_INFO',
  GET_VALIDATOR_DISTRIBUTION_INFO_LOADING:
    'GET_VALIDATOR_DISTRIBUTION_INFO_LOADING',

  GET_OUTSTANDING_REWARDS: 'GET_OUTSTANDING_REWARDS',
  GET_OUTSTANDING_REWARDS_LOADING: 'GET_OUTSTANDING_REWARDS_LOADING',

  GET_COMMUNITY_POOL: 'GET_COMMUNITY_POOL',
  GET_COMMUNITY_POOL_LOADING: 'GET_COMMUNITY_POOL_LOADING',

  GET_DISTRIBUTION_PARAMETERS: 'GET_DISTRIBUTION_PARAMETERS',
  GET_DISTRIBUTION_PARAMETERS_LOADING: 'GET_DISTRIBUTION_PARAMETERS_LOADING',

  GET_TOTAL_SUPPLY: 'GET_TOTAL_SUPPLY',
  GET_TOTAL_SUPPLY_LOADING: 'GET_TOTAL_SUPPLY_LOADING',

  GET_TOTAL_SUPPLY_BY_DOMINATION: 'GET_TOTAL_SUPPLY_BY_DOMINATION',
  GET_TOTAL_SUPPLY_BY_DOMINATION_LOADING:
    'GET_TOTAL_SUPPLY_BY_DOMINATION_LOADING',

  GET_MINTING_PARAMETERS: 'GET_MINTING_PARAMETERS',
  GET_MINTING_PARAMETERS_LOADING: 'GET_MINTING_PARAMETERS_LOADING',

  GET_MINTING_INFLATION: 'GET_MINTING_INFLATION',
  GET_MINTING_INFLATION_LOADING: 'GET_MINTING_INFLATION_LOADING',

  GET_MINTING_ANNUAL_PROVISIONS: 'GET_MINTING_ANNUAL_PROVISIONS',
  GET_MINTING_ANNUAL_PROVISIONS_LOADING:
    'GET_MINTING_ANNUAL_PROVISIONS_LOADING',

  GET_NODE_INFO: 'GET_NODE_INFO',
  GET_NODE_INFO_LOADING: 'GET_NODE_INFO_LOADING',

  GET_SYNCING_STATUS: 'GET_SYNCING_STATUS',
  GET_SYNCING_STATUS_LOADING: 'GET_SYNCING_STATUS_LOADING',

  GET_LATEST_BLOCK: 'GET_LATEST_BLOCK',
  GET_LATEST_BLOCK_LOADING: 'GET_LATEST_BLOCK_LOADING',

  GET_ALL_BLOCKS: 'GET_ALL_BLOCKS',
  GET_ALL_BLOCKS_LOADING: 'GET_ALL_BLOCKS_LOADING',

  GET_BLOCKS_BY_HEIGHT: 'GET_BLOCKS_BY_HEIGHT',
  GET_BLOCKS_BY_HEIGHT_LOADING: 'GET_BLOCKS_BY_HEIGHT_LOADING',

  GET_LATEST_VALIDATOR_SET: 'GET_LATEST_VALIDATOR_SET',
  GET_LATEST_VALIDATOR_SET_LOADING: 'GET_LATEST_VALIDATOR_SET_LOADING',

  GET_VALIDATOR_SET_BY_HEIGHT: 'GET_VALIDATOR_SET_BY_HEIGHT',
  GET_VALIDATOR_SET_BY_HEIGHT_LOADING: 'GET_VALIDATOR_SET_BY_HEIGHT_LOADING'
};

export const GET_ACCOUNT_DATAILS = 'GET_ACCOUNT_DATAILS';
export const GET_ACCOUNT_DATAILS_LOADING = 'GET_ACCOUNT_DATAILS_LOADING';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_LOADING = 'GET_TRANSACTIONS_LOADING';

export const GET_TRANSACTIONS_BY_HASH = 'GET_TRANSACTIONS_BY_HASH';
export const GET_TRANSACTIONS_BY_HASH_LOADING =
  'GET_TRANSACTIONS_BY_HASH_LOADING';

export const GET_BANK_BALANCE = 'GET_BANK_BALANCE';
export const GET_BANK_BALANCE_LOADING = 'GET_BANK_BALANCE_LOADING';

export const GET_ACCOUNT_INFO = 'GET_ACCOUNT_INFO';
export const GET_ACCOUNT_INFO_LOADING = 'GET_ACCOUNT_INFO_LOADING';

export const GET_DELEGATIONS_FROM_DELEGATOR = 'GET_DELEGATIONS_FROM_DELEGATOR';
export const GET_DELEGATIONS_FROM_DELEGATOR_LOADING =
  'GET_DELEGATIONS_FROM_DELEGATOR_LOADING';

export const GET_DELEGATIONS_BY_ADDRESS = 'GET_DELEGATIONS_BY_ADDRESS';
export const GET_DELEGATIONS_BY_ADDRESS_LOADING =
  'GET_DELEGATIONS_BY_ADDRESS_LOADING';

export const GET_CURRENT_DELEGATIONS = 'GET_CURRENT_DELEGATIONS';
export const GET_CURRENT_DELEGATIONS_LOADING =
  'GET_CURRENT_DELEGATIONS_LOADING';

export const GET_UNBONDING_DELEGATIONS = 'GET_UNBONDING_DELEGATIONS';
export const GET_UNBONDING_DELEGATIONS_LOADING =
  'GET_UNBONDING_DELEGATIONS_LOADING';

export const GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL =
  'GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL';
export const GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL_LOADING =
  'GET_UNBONDING_DELEGATIONS_BTW_DEL_VEL_LOADING';

export const GET_DELEGATIONS = 'GET_DELEGATIONS';
export const GET_DELEGATIONS_LOADING = 'GET_DELEGATIONS_LOADING';

export const GET_REDELEGATIONS = 'GET_REDELEGATIONS';
export const GET_REDELEGATIONS_LOADING = 'GET_REDELEGATIONS_LOADING';

export const GET_DELEGATIONS_FROM_VALIDATOR = 'GET_DELEGATIONS_FROM_VALIDATOR';
export const GET_DELEGATIONS_FROM_VALIDATOR_LOADING =
  'GET_DELEGATIONS_FROM_VALIDATOR_LOADING';

export const GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR =
  'GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR';
export const GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR_LOADING =
  'GET_UNBOUNDING_DELEGATIONS_FROM_VALIDATOR_LOADING';

export const GET_VALIDATOR = 'GET_VALIDATOR';
export const GET_VALIDATOR_LOADING = 'GET_VALIDATOR_LOADING';

export const GET_VALIDATOR_BY_ADDRESS = 'GET_VALIDATOR_BY_ADDRESS';
export const GET_VALIDATOR_BY_ADDRESS_LOADING =
  'GET_VALIDATOR_BY_ADDRESS_LOADING';

export const GET_ALL_VALIDATORS = 'GET_ALL_VALIDATORS';
export const GET_ALL_VALIDATORS_LOADING = 'GET_ALL_VALIDATORS_LOADING';

export const GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO =
  'GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO';
export const GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO_LOADING =
  'GET_ALL_VALIDATORS_DELEGATOR_BOUNDED_TO_LOADING';

export const GET_VALIDATOR_DELEGATOR_BOUNDED_TO =
  'GET_VALIDATOR_DELEGATOR_BOUNDED_TO';
export const GET_VALIDATOR_DELEGATOR_BOUNDED_TO_LOADING =
  'GET_VALIDATOR_DELEGATOR_BOUNDED_TO_LOADING';

export const GET_STAKIING_POOL_STATUS = 'GET_STAKIING_POOL_STATUS';
export const GET_STAKIING_POOL_STATUS_LOADING =
  'GET_STAKIING_POOL_STATUS_LOADING';

export const GET_STAKING_PARAMETERS = 'GET_STAKING_PARAMETERS';
export const GET_STAKING_PARAMETERS_LOADING = 'GET_STAKING_PARAMETERS_LOADING';

export const GET_GOV_PERPOSALS = 'GET_GOV_PERPOSALS';
export const GET_GOV_PERPOSALS_LOADING = 'GET_GOV_PERPOSALS_LOADING';

export const GET_GOV_PERPOSALS_BY_ID = 'GET_GOV_PERPOSALS_BY_ID';
export const GET_GOV_PERPOSALS_BY_ID_LOADING =
  'GET_GOV_PERPOSALS_BY_ID_LOADING';

export const GET_PROPOSER = 'GET_PROPOSER';
export const GET_PROPOSER_LOADING = 'GET_PROPOSER_LOADING';

export const GET_DEPOSITS = 'GET_DEPOSITS';
export const GET_DEPOSITS_LOADING = 'GET_DEPOSITS_LOADING';

export const GET_DEPOSITS_BY_DEPOSITOR = 'GET_DEPOSITS_BY_DEPOSITOR';
export const GET_DEPOSITS_BY_DEPOSITOR_LOADING =
  'GET_DEPOSITS_BY_DEPOSITOR_LOADING';

export const GET_PROPOSAL_VOTES = 'GET_PROPOSAL_VOTES';
export const GET_PROPOSAL_VOTES_LOADING = 'GET_PROPOSAL_VOTES_LOADING';

export const GET_PROPOSAL_VOTES_BY_VOTER = 'GET_PROPOSAL_VOTES_BY_VOTER';
export const GET_PROPOSAL_VOTES_BY_VOTER_LOADING =
  'GET_PROPOSAL_VOTES_BY_VOTER_LOADING';

export const GET_PROPOSAL_TALLY = 'GET_PROPOSAL_TALLY';
export const GET_PROPOSAL_TALLY_LOADING = 'GET_PROPOSAL_TALLY_LOADING';

export const GET_GOV_PARAMETERS_DEPOSIT = 'GET_GOV_PARAMETERS_DEPOSIT';
export const GET_GOV_PARAMETERS_DEPOSIT_LOADING =
  'GET_GOV_PARAMETERS_DEPOSIT_LOADING';

export const GET_GOV_PARAMETERS_TALLING = 'GET_GOV_PARAMETERS_TALLING';
export const GET_GOV_PARAMETERS_TALLING_LOADING =
  'GET_GOV_PARAMETERS_TALLING_LOADING';

export const GET_GOV_PARAMETERS_VOTING = 'GET_GOV_PARAMETERS_VOTING';
export const GET_GOV_PARAMETERS_VOTING_LOADING =
  'GET_GOV_PARAMETERS_VOTING_LOADING';

export const GET_SLASHING_SIGNING_INFO = 'GET_SLASHING_SIGNING_INFO';
export const GET_SLASHING_SIGNING_INFO_LOADING =
  'GET_SLASHING_SIGNING_INFO_LOADING';

export const GET_SLASHING_PARAMETERS_LOADING =
  'GET_SLASHING_PARAMETERS_LOADING';
export const GET_SLASHING_PARAMETERS_LOADING_LOADING =
  'GET_SLASHING_PARAMETERS_LOADING_LOADING';

export const GET_DISTRIBUTIONS_REWARDS = 'GET_DISTRIBUTIONS_REWARDS';
export const GET_DISTRIBUTIONS_REWARDS_LOADING =
  'GET_DISTRIBUTIONS_REWARDS_LOADING';

export const GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR =
  'GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR';
export const GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR_LOADING =
  'GET_DISTRIBUTIONS_REWARDS_OF_VALIDATOR_LOADING';

export const GET_WITHDRAWAL_ADDRESS = 'GET_WITHDRAWAL_ADDRESS';
export const GET_WITHDRAWAL_ADDRESS_LOADING = 'GET_WITHDRAWAL_ADDRESS_LOADING';

export const GET_VALIDATOR_DISTRIBUTION_INFO =
  'GET_VALIDATOR_DISTRIBUTION_INFO';
export const GET_VALIDATOR_DISTRIBUTION_INFO_LOADING =
  'GET_VALIDATOR_DISTRIBUTION_INFO_LOADING';

export const GET_OUTSTANDING_REWARDS = 'GET_OUTSTANDING_REWARDS';
export const GET_OUTSTANDING_REWARDS_LOADING =
  'GET_OUTSTANDING_REWARDS_LOADING';

export const GET_COMMUNITY_POOL = 'GET_COMMUNITY_POOL';
export const GET_COMMUNITY_POOL_LOADING = 'GET_COMMUNITY_POOL_LOADING';

export const GET_DISTRIBUTION_PARAMETERS = 'GET_DISTRIBUTION_PARAMETERS';
export const GET_DISTRIBUTION_PARAMETERS_LOADING =
  'GET_DISTRIBUTION_PARAMETERS_LOADING';

export const GET_TOTAL_SUPPLY = 'GET_TOTAL_SUPPLY';
export const GET_TOTAL_SUPPLY_LOADING = 'GET_TOTAL_SUPPLY_LOADING';

export const GET_TOTAL_SUPPLY_BY_DOMINATION = 'GET_TOTAL_SUPPLY_BY_DOMINATION';
export const GET_TOTAL_SUPPLY_BY_DOMINATION_LOADING =
  'GET_TOTAL_SUPPLY_BY_DOMINATION_LOADING';

export const GET_MINTING_PARAMETERS = 'GET_MINTING_PARAMETERS';
export const GET_MINTING_PARAMETERS_LOADING = 'GET_MINTING_PARAMETERS_LOADING';

export const GET_MINTING_INFLATION = 'GET_MINTING_INFLATION';
export const GET_MINTING_INFLATION_LOADING = 'GET_MINTING_INFLATION_LOADING';

export const GET_MINTING_ANNUAL_PROVISIONS = 'GET_MINTING_ANNUAL_PROVISIONS';
export const GET_MINTING_ANNUAL_PROVISIONS_LOADING =
  'GET_MINTING_ANNUAL_PROVISIONS_LOADING';

export const GET_NODE_INFO = 'GET_NODE_INFO';
export const GET_NODE_INFO_LOADING = 'GET_NODE_INFO_LOADING';

export const GET_SYNCING_STATUS = 'GET_SYNCING_STATUS';
export const GET_SYNCING_STATUS_LOADING = 'GET_SYNCING_STATUS_LOADING';

export const GET_LATEST_BLOCK = 'GET_LATEST_BLOCK';
export const GET_LATEST_BLOCK_LOADING = 'GET_LATEST_BLOCK_LOADING';

export const GET_BLOCKS_BY_HEIGHT = 'GET_BLOCKS_BY_HEIGHT';
export const GET_BLOCKS_BY_HEIGHT_LOADING = 'GET_BLOCKS_BY_HEIGHT_LOADING';

export const GET_LATEST_VALIDATOR_SET = 'GET_LATEST_VALIDATOR_SET';
export const GET_LATEST_VALIDATOR_SET_LOADING =
  'GET_LATEST_VALIDATOR_SET_LOADING';

export const GET_VALIDATOR_SET_BY_HEIGHT = 'GET_VALIDATOR_SET_BY_HEIGHT';
export const GET_VALIDATOR_SET_BY_HEIGHT_LOADING =
  'GET_VALIDATOR_SET_BY_HEIGHT_LOADING';
