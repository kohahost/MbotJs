"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[810], {
    34963: (e, t, o) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = (function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t.default = e,
            t
        }
        )(o(85712)).config(function(e) {
            e.typedef("Value", e.varOpaque()),
            e.struct("ScpBallot", [["counter", e.lookup("Uint32")], ["value", e.lookup("Value")]]),
            e.enum("ScpStatementType", {
                scpStPrepare: 0,
                scpStConfirm: 1,
                scpStExternalize: 2,
                scpStNominate: 3
            }),
            e.struct("ScpNomination", [["quorumSetHash", e.lookup("Hash")], ["votes", e.varArray(e.lookup("Value"), 0x7fffffff)], ["accepted", e.varArray(e.lookup("Value"), 0x7fffffff)]]),
            e.struct("ScpStatementPrepare", [["quorumSetHash", e.lookup("Hash")], ["ballot", e.lookup("ScpBallot")], ["prepared", e.option(e.lookup("ScpBallot"))], ["preparedPrime", e.option(e.lookup("ScpBallot"))], ["nC", e.lookup("Uint32")], ["nH", e.lookup("Uint32")]]),
            e.struct("ScpStatementConfirm", [["ballot", e.lookup("ScpBallot")], ["nPrepared", e.lookup("Uint32")], ["nCommit", e.lookup("Uint32")], ["nH", e.lookup("Uint32")], ["quorumSetHash", e.lookup("Hash")]]),
            e.struct("ScpStatementExternalize", [["commit", e.lookup("ScpBallot")], ["nH", e.lookup("Uint32")], ["commitQuorumSetHash", e.lookup("Hash")]]),
            e.union("ScpStatementPledges", {
                switchOn: e.lookup("ScpStatementType"),
                switchName: "type",
                switches: [["scpStPrepare", "prepare"], ["scpStConfirm", "confirm"], ["scpStExternalize", "externalize"], ["scpStNominate", "nominate"]],
                arms: {
                    prepare: e.lookup("ScpStatementPrepare"),
                    confirm: e.lookup("ScpStatementConfirm"),
                    externalize: e.lookup("ScpStatementExternalize"),
                    nominate: e.lookup("ScpNomination")
                }
            }),
            e.struct("ScpStatement", [["nodeId", e.lookup("NodeId")], ["slotIndex", e.lookup("Uint64")], ["pledges", e.lookup("ScpStatementPledges")]]),
            e.struct("ScpEnvelope", [["statement", e.lookup("ScpStatement")], ["signature", e.lookup("Signature")]]),
            e.struct("ScpQuorumSet", [["threshold", e.lookup("Uint32")], ["validators", e.varArray(e.lookup("NodeId"), 0x7fffffff)], ["innerSets", e.varArray(e.lookup("ScpQuorumSet"), 0x7fffffff)]]),
            e.typedef("AccountId", e.lookup("PublicKey")),
            e.typedef("Thresholds", e.opaque(4)),
            e.typedef("String32", e.string(32)),
            e.typedef("String64", e.string(64)),
            e.typedef("SequenceNumber", e.lookup("Int64")),
            e.typedef("TimePoint", e.lookup("Uint64")),
            e.typedef("Duration", e.lookup("Uint64")),
            e.typedef("DataValue", e.varOpaque(64)),
            e.typedef("PoolId", e.lookup("Hash")),
            e.typedef("AssetCode4", e.opaque(4)),
            e.typedef("AssetCode12", e.opaque(12)),
            e.enum("AssetType", {
                assetTypeNative: 0,
                assetTypeCreditAlphanum4: 1,
                assetTypeCreditAlphanum12: 2,
                assetTypePoolShare: 3
            }),
            e.union("AssetCode", {
                switchOn: e.lookup("AssetType"),
                switchName: "type",
                switches: [["assetTypeCreditAlphanum4", "assetCode4"], ["assetTypeCreditAlphanum12", "assetCode12"]],
                arms: {
                    assetCode4: e.lookup("AssetCode4"),
                    assetCode12: e.lookup("AssetCode12")
                }
            }),
            e.struct("AlphaNum4", [["assetCode", e.lookup("AssetCode4")], ["issuer", e.lookup("AccountId")]]),
            e.struct("AlphaNum12", [["assetCode", e.lookup("AssetCode12")], ["issuer", e.lookup("AccountId")]]),
            e.union("Asset", {
                switchOn: e.lookup("AssetType"),
                switchName: "type",
                switches: [["assetTypeNative", e.void()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"]],
                arms: {
                    alphaNum4: e.lookup("AlphaNum4"),
                    alphaNum12: e.lookup("AlphaNum12")
                }
            }),
            e.struct("Price", [["n", e.lookup("Int32")], ["d", e.lookup("Int32")]]),
            e.struct("Liabilities", [["buying", e.lookup("Int64")], ["selling", e.lookup("Int64")]]),
            e.enum("ThresholdIndices", {
                thresholdMasterWeight: 0,
                thresholdLow: 1,
                thresholdMed: 2,
                thresholdHigh: 3
            }),
            e.enum("LedgerEntryType", {
                account: 0,
                trustline: 1,
                offer: 2,
                data: 3,
                claimableBalance: 4,
                liquidityPool: 5
            }),
            e.struct("Signer", [["key", e.lookup("SignerKey")], ["weight", e.lookup("Uint32")]]),
            e.enum("AccountFlags", {
                authRequiredFlag: 1,
                authRevocableFlag: 2,
                authImmutableFlag: 4,
                authClawbackEnabledFlag: 8
            }),
            e.const("MASK_ACCOUNT_FLAGS", 7),
            e.const("MASK_ACCOUNT_FLAGS_V17", 15),
            e.const("MAX_SIGNERS", 20),
            e.typedef("SponsorshipDescriptor", e.option(e.lookup("AccountId"))),
            e.struct("AccountEntryExtensionV3", [["ext", e.lookup("ExtensionPoint")], ["seqLedger", e.lookup("Uint32")], ["seqTime", e.lookup("TimePoint")]]),
            e.union("AccountEntryExtensionV2Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [3, "v3"]],
                arms: {
                    v3: e.lookup("AccountEntryExtensionV3")
                }
            }),
            e.struct("AccountEntryExtensionV2", [["numSponsored", e.lookup("Uint32")], ["numSponsoring", e.lookup("Uint32")], ["signerSponsoringIDs", e.varArray(e.lookup("SponsorshipDescriptor"), e.lookup("MAX_SIGNERS"))], ["ext", e.lookup("AccountEntryExtensionV2Ext")]]),
            e.union("AccountEntryExtensionV1Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [2, "v2"]],
                arms: {
                    v2: e.lookup("AccountEntryExtensionV2")
                }
            }),
            e.struct("AccountEntryExtensionV1", [["liabilities", e.lookup("Liabilities")], ["ext", e.lookup("AccountEntryExtensionV1Ext")]]),
            e.union("AccountEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "v1"]],
                arms: {
                    v1: e.lookup("AccountEntryExtensionV1")
                }
            }),
            e.struct("AccountEntry", [["accountId", e.lookup("AccountId")], ["balance", e.lookup("Int64")], ["seqNum", e.lookup("SequenceNumber")], ["numSubEntries", e.lookup("Uint32")], ["inflationDest", e.option(e.lookup("AccountId"))], ["flags", e.lookup("Uint32")], ["homeDomain", e.lookup("String32")], ["thresholds", e.lookup("Thresholds")], ["signers", e.varArray(e.lookup("Signer"), e.lookup("MAX_SIGNERS"))], ["ext", e.lookup("AccountEntryExt")]]),
            e.enum("TrustLineFlags", {
                authorizedFlag: 1,
                authorizedToMaintainLiabilitiesFlag: 2,
                trustlineClawbackEnabledFlag: 4
            }),
            e.const("MASK_TRUSTLINE_FLAGS", 1),
            e.const("MASK_TRUSTLINE_FLAGS_V13", 3),
            e.const("MASK_TRUSTLINE_FLAGS_V17", 7),
            e.enum("LiquidityPoolType", {
                liquidityPoolConstantProduct: 0
            }),
            e.union("TrustLineAsset", {
                switchOn: e.lookup("AssetType"),
                switchName: "type",
                switches: [["assetTypeNative", e.void()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPoolId"]],
                arms: {
                    alphaNum4: e.lookup("AlphaNum4"),
                    alphaNum12: e.lookup("AlphaNum12"),
                    liquidityPoolId: e.lookup("PoolId")
                }
            }),
            e.union("TrustLineEntryExtensionV2Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("TrustLineEntryExtensionV2", [["liquidityPoolUseCount", e.lookup("Int32")], ["ext", e.lookup("TrustLineEntryExtensionV2Ext")]]),
            e.union("TrustLineEntryV1Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [2, "v2"]],
                arms: {
                    v2: e.lookup("TrustLineEntryExtensionV2")
                }
            }),
            e.struct("TrustLineEntryV1", [["liabilities", e.lookup("Liabilities")], ["ext", e.lookup("TrustLineEntryV1Ext")]]),
            e.union("TrustLineEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "v1"]],
                arms: {
                    v1: e.lookup("TrustLineEntryV1")
                }
            }),
            e.struct("TrustLineEntry", [["accountId", e.lookup("AccountId")], ["asset", e.lookup("TrustLineAsset")], ["balance", e.lookup("Int64")], ["limit", e.lookup("Int64")], ["flags", e.lookup("Uint32")], ["ext", e.lookup("TrustLineEntryExt")]]),
            e.enum("OfferEntryFlags", {
                passiveFlag: 1
            }),
            e.const("MASK_OFFERENTRY_FLAGS", 1),
            e.union("OfferEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("OfferEntry", [["sellerId", e.lookup("AccountId")], ["offerId", e.lookup("Int64")], ["selling", e.lookup("Asset")], ["buying", e.lookup("Asset")], ["amount", e.lookup("Int64")], ["price", e.lookup("Price")], ["flags", e.lookup("Uint32")], ["ext", e.lookup("OfferEntryExt")]]),
            e.union("DataEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("DataEntry", [["accountId", e.lookup("AccountId")], ["dataName", e.lookup("String64")], ["dataValue", e.lookup("DataValue")], ["ext", e.lookup("DataEntryExt")]]),
            e.enum("ClaimPredicateType", {
                claimPredicateUnconditional: 0,
                claimPredicateAnd: 1,
                claimPredicateOr: 2,
                claimPredicateNot: 3,
                claimPredicateBeforeAbsoluteTime: 4,
                claimPredicateBeforeRelativeTime: 5
            }),
            e.union("ClaimPredicate", {
                switchOn: e.lookup("ClaimPredicateType"),
                switchName: "type",
                switches: [["claimPredicateUnconditional", e.void()], ["claimPredicateAnd", "andPredicates"], ["claimPredicateOr", "orPredicates"], ["claimPredicateNot", "notPredicate"], ["claimPredicateBeforeAbsoluteTime", "absBefore"], ["claimPredicateBeforeRelativeTime", "relBefore"]],
                arms: {
                    andPredicates: e.varArray(e.lookup("ClaimPredicate"), 2),
                    orPredicates: e.varArray(e.lookup("ClaimPredicate"), 2),
                    notPredicate: e.option(e.lookup("ClaimPredicate")),
                    absBefore: e.lookup("Int64"),
                    relBefore: e.lookup("Int64")
                }
            }),
            e.enum("ClaimantType", {
                claimantTypeV0: 0
            }),
            e.struct("ClaimantV0", [["destination", e.lookup("AccountId")], ["predicate", e.lookup("ClaimPredicate")]]),
            e.union("Claimant", {
                switchOn: e.lookup("ClaimantType"),
                switchName: "type",
                switches: [["claimantTypeV0", "v0"]],
                arms: {
                    v0: e.lookup("ClaimantV0")
                }
            }),
            e.enum("ClaimableBalanceIdType", {
                claimableBalanceIdTypeV0: 0
            }),
            e.union("ClaimableBalanceId", {
                switchOn: e.lookup("ClaimableBalanceIdType"),
                switchName: "type",
                switches: [["claimableBalanceIdTypeV0", "v0"]],
                arms: {
                    v0: e.lookup("Hash")
                }
            }),
            e.enum("ClaimableBalanceFlags", {
                claimableBalanceClawbackEnabledFlag: 1
            }),
            e.const("MASK_CLAIMABLE_BALANCE_FLAGS", 1),
            e.union("ClaimableBalanceEntryExtensionV1Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("ClaimableBalanceEntryExtensionV1", [["ext", e.lookup("ClaimableBalanceEntryExtensionV1Ext")], ["flags", e.lookup("Uint32")]]),
            e.union("ClaimableBalanceEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "v1"]],
                arms: {
                    v1: e.lookup("ClaimableBalanceEntryExtensionV1")
                }
            }),
            e.struct("ClaimableBalanceEntry", [["balanceId", e.lookup("ClaimableBalanceId")], ["claimants", e.varArray(e.lookup("Claimant"), 10)], ["asset", e.lookup("Asset")], ["amount", e.lookup("Int64")], ["ext", e.lookup("ClaimableBalanceEntryExt")]]),
            e.struct("LiquidityPoolConstantProductParameters", [["assetA", e.lookup("Asset")], ["assetB", e.lookup("Asset")], ["fee", e.lookup("Int32")]]),
            e.struct("LiquidityPoolEntryConstantProduct", [["params", e.lookup("LiquidityPoolConstantProductParameters")], ["reserveA", e.lookup("Int64")], ["reserveB", e.lookup("Int64")], ["totalPoolShares", e.lookup("Int64")], ["poolSharesTrustLineCount", e.lookup("Int64")]]),
            e.union("LiquidityPoolEntryBody", {
                switchOn: e.lookup("LiquidityPoolType"),
                switchName: "type",
                switches: [["liquidityPoolConstantProduct", "constantProduct"]],
                arms: {
                    constantProduct: e.lookup("LiquidityPoolEntryConstantProduct")
                }
            }),
            e.struct("LiquidityPoolEntry", [["liquidityPoolId", e.lookup("PoolId")], ["body", e.lookup("LiquidityPoolEntryBody")]]),
            e.union("LedgerEntryExtensionV1Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("LedgerEntryExtensionV1", [["sponsoringId", e.lookup("SponsorshipDescriptor")], ["ext", e.lookup("LedgerEntryExtensionV1Ext")]]),
            e.union("LedgerEntryData", {
                switchOn: e.lookup("LedgerEntryType"),
                switchName: "type",
                switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"]],
                arms: {
                    account: e.lookup("AccountEntry"),
                    trustLine: e.lookup("TrustLineEntry"),
                    offer: e.lookup("OfferEntry"),
                    data: e.lookup("DataEntry"),
                    claimableBalance: e.lookup("ClaimableBalanceEntry"),
                    liquidityPool: e.lookup("LiquidityPoolEntry")
                }
            }),
            e.union("LedgerEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "v1"]],
                arms: {
                    v1: e.lookup("LedgerEntryExtensionV1")
                }
            }),
            e.struct("LedgerEntry", [["lastModifiedLedgerSeq", e.lookup("Uint32")], ["data", e.lookup("LedgerEntryData")], ["ext", e.lookup("LedgerEntryExt")]]),
            e.struct("LedgerKeyAccount", [["accountId", e.lookup("AccountId")]]),
            e.struct("LedgerKeyTrustLine", [["accountId", e.lookup("AccountId")], ["asset", e.lookup("TrustLineAsset")]]),
            e.struct("LedgerKeyOffer", [["sellerId", e.lookup("AccountId")], ["offerId", e.lookup("Int64")]]),
            e.struct("LedgerKeyData", [["accountId", e.lookup("AccountId")], ["dataName", e.lookup("String64")]]),
            e.struct("LedgerKeyClaimableBalance", [["balanceId", e.lookup("ClaimableBalanceId")]]),
            e.struct("LedgerKeyLiquidityPool", [["liquidityPoolId", e.lookup("PoolId")]]),
            e.union("LedgerKey", {
                switchOn: e.lookup("LedgerEntryType"),
                switchName: "type",
                switches: [["account", "account"], ["trustline", "trustLine"], ["offer", "offer"], ["data", "data"], ["claimableBalance", "claimableBalance"], ["liquidityPool", "liquidityPool"]],
                arms: {
                    account: e.lookup("LedgerKeyAccount"),
                    trustLine: e.lookup("LedgerKeyTrustLine"),
                    offer: e.lookup("LedgerKeyOffer"),
                    data: e.lookup("LedgerKeyData"),
                    claimableBalance: e.lookup("LedgerKeyClaimableBalance"),
                    liquidityPool: e.lookup("LedgerKeyLiquidityPool")
                }
            }),
            e.enum("EnvelopeType", {
                envelopeTypeTxV0: 0,
                envelopeTypeScp: 1,
                envelopeTypeTx: 2,
                envelopeTypeAuth: 3,
                envelopeTypeScpvalue: 4,
                envelopeTypeTxFeeBump: 5,
                envelopeTypeOpId: 6,
                envelopeTypePoolRevokeOpId: 7
            }),
            e.typedef("UpgradeType", e.varOpaque(128)),
            e.enum("StellarValueType", {
                stellarValueBasic: 0,
                stellarValueSigned: 1
            }),
            e.struct("LedgerCloseValueSignature", [["nodeId", e.lookup("NodeId")], ["signature", e.lookup("Signature")]]),
            e.union("StellarValueExt", {
                switchOn: e.lookup("StellarValueType"),
                switchName: "v",
                switches: [["stellarValueBasic", e.void()], ["stellarValueSigned", "lcValueSignature"]],
                arms: {
                    lcValueSignature: e.lookup("LedgerCloseValueSignature")
                }
            }),
            e.struct("StellarValue", [["txSetHash", e.lookup("Hash")], ["closeTime", e.lookup("TimePoint")], ["upgrades", e.varArray(e.lookup("UpgradeType"), 6)], ["ext", e.lookup("StellarValueExt")]]),
            e.const("MASK_LEDGER_HEADER_FLAGS", 7),
            e.enum("LedgerHeaderFlags", {
                disableLiquidityPoolTradingFlag: 1,
                disableLiquidityPoolDepositFlag: 2,
                disableLiquidityPoolWithdrawalFlag: 4
            }),
            e.union("LedgerHeaderExtensionV1Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("LedgerHeaderExtensionV1", [["flags", e.lookup("Uint32")], ["ext", e.lookup("LedgerHeaderExtensionV1Ext")]]),
            e.union("LedgerHeaderExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "v1"]],
                arms: {
                    v1: e.lookup("LedgerHeaderExtensionV1")
                }
            }),
            e.struct("LedgerHeader", [["ledgerVersion", e.lookup("Uint32")], ["previousLedgerHash", e.lookup("Hash")], ["scpValue", e.lookup("StellarValue")], ["txSetResultHash", e.lookup("Hash")], ["bucketListHash", e.lookup("Hash")], ["ledgerSeq", e.lookup("Uint32")], ["totalCoins", e.lookup("Int64")], ["feePool", e.lookup("Int64")], ["inflationSeq", e.lookup("Uint32")], ["idPool", e.lookup("Uint64")], ["baseFee", e.lookup("Uint32")], ["baseReserve", e.lookup("Uint32")], ["maxTxSetSize", e.lookup("Uint32")], ["skipList", e.array(e.lookup("Hash"), 4)], ["ext", e.lookup("LedgerHeaderExt")]]),
            e.enum("LedgerUpgradeType", {
                ledgerUpgradeVersion: 1,
                ledgerUpgradeBaseFee: 2,
                ledgerUpgradeMaxTxSetSize: 3,
                ledgerUpgradeBaseReserve: 4,
                ledgerUpgradeFlags: 5
            }),
            e.union("LedgerUpgrade", {
                switchOn: e.lookup("LedgerUpgradeType"),
                switchName: "type",
                switches: [["ledgerUpgradeVersion", "newLedgerVersion"], ["ledgerUpgradeBaseFee", "newBaseFee"], ["ledgerUpgradeMaxTxSetSize", "newMaxTxSetSize"], ["ledgerUpgradeBaseReserve", "newBaseReserve"], ["ledgerUpgradeFlags", "newFlags"]],
                arms: {
                    newLedgerVersion: e.lookup("Uint32"),
                    newBaseFee: e.lookup("Uint32"),
                    newMaxTxSetSize: e.lookup("Uint32"),
                    newBaseReserve: e.lookup("Uint32"),
                    newFlags: e.lookup("Uint32")
                }
            }),
            e.enum("BucketEntryType", {
                metaentry: -1,
                liveentry: 0,
                deadentry: 1,
                initentry: 2
            }),
            e.union("BucketMetadataExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("BucketMetadata", [["ledgerVersion", e.lookup("Uint32")], ["ext", e.lookup("BucketMetadataExt")]]),
            e.union("BucketEntry", {
                switchOn: e.lookup("BucketEntryType"),
                switchName: "type",
                switches: [["liveentry", "liveEntry"], ["initentry", "liveEntry"], ["deadentry", "deadEntry"], ["metaentry", "metaEntry"]],
                arms: {
                    liveEntry: e.lookup("LedgerEntry"),
                    deadEntry: e.lookup("LedgerKey"),
                    metaEntry: e.lookup("BucketMetadata")
                }
            }),
            e.enum("TxSetComponentType", {
                txsetCompTxsMaybeDiscountedFee: 0
            }),
            e.struct("TxSetComponentTxsMaybeDiscountedFee", [["baseFee", e.option(e.lookup("Int64"))], ["txes", e.varArray(e.lookup("TransactionEnvelope"), 0x7fffffff)]]),
            e.union("TxSetComponent", {
                switchOn: e.lookup("TxSetComponentType"),
                switchName: "type",
                switches: [["txsetCompTxsMaybeDiscountedFee", "txsMaybeDiscountedFee"]],
                arms: {
                    txsMaybeDiscountedFee: e.lookup("TxSetComponentTxsMaybeDiscountedFee")
                }
            }),
            e.union("TransactionPhase", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, "v0Components"]],
                arms: {
                    v0Components: e.varArray(e.lookup("TxSetComponent"), 0x7fffffff)
                }
            }),
            e.struct("TransactionSet", [["previousLedgerHash", e.lookup("Hash")], ["txes", e.varArray(e.lookup("TransactionEnvelope"), 0x7fffffff)]]),
            e.struct("TransactionSetV1", [["previousLedgerHash", e.lookup("Hash")], ["phases", e.varArray(e.lookup("TransactionPhase"), 0x7fffffff)]]),
            e.union("GeneralizedTransactionSet", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[1, "v1TxSet"]],
                arms: {
                    v1TxSet: e.lookup("TransactionSetV1")
                }
            }),
            e.struct("TransactionResultPair", [["transactionHash", e.lookup("Hash")], ["result", e.lookup("TransactionResult")]]),
            e.struct("TransactionResultSet", [["results", e.varArray(e.lookup("TransactionResultPair"), 0x7fffffff)]]),
            e.union("TransactionHistoryEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()], [1, "generalizedTxSet"]],
                arms: {
                    generalizedTxSet: e.lookup("GeneralizedTransactionSet")
                }
            }),
            e.struct("TransactionHistoryEntry", [["ledgerSeq", e.lookup("Uint32")], ["txSet", e.lookup("TransactionSet")], ["ext", e.lookup("TransactionHistoryEntryExt")]]),
            e.union("TransactionHistoryResultEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("TransactionHistoryResultEntry", [["ledgerSeq", e.lookup("Uint32")], ["txResultSet", e.lookup("TransactionResultSet")], ["ext", e.lookup("TransactionHistoryResultEntryExt")]]),
            e.union("LedgerHeaderHistoryEntryExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("LedgerHeaderHistoryEntry", [["hash", e.lookup("Hash")], ["header", e.lookup("LedgerHeader")], ["ext", e.lookup("LedgerHeaderHistoryEntryExt")]]),
            e.struct("LedgerScpMessages", [["ledgerSeq", e.lookup("Uint32")], ["messages", e.varArray(e.lookup("ScpEnvelope"), 0x7fffffff)]]),
            e.struct("ScpHistoryEntryV0", [["quorumSets", e.varArray(e.lookup("ScpQuorumSet"), 0x7fffffff)], ["ledgerMessages", e.lookup("LedgerScpMessages")]]),
            e.union("ScpHistoryEntry", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, "v0"]],
                arms: {
                    v0: e.lookup("ScpHistoryEntryV0")
                }
            }),
            e.enum("LedgerEntryChangeType", {
                ledgerEntryCreated: 0,
                ledgerEntryUpdated: 1,
                ledgerEntryRemoved: 2,
                ledgerEntryState: 3
            }),
            e.union("LedgerEntryChange", {
                switchOn: e.lookup("LedgerEntryChangeType"),
                switchName: "type",
                switches: [["ledgerEntryCreated", "created"], ["ledgerEntryUpdated", "updated"], ["ledgerEntryRemoved", "removed"], ["ledgerEntryState", "state"]],
                arms: {
                    created: e.lookup("LedgerEntry"),
                    updated: e.lookup("LedgerEntry"),
                    removed: e.lookup("LedgerKey"),
                    state: e.lookup("LedgerEntry")
                }
            }),
            e.typedef("LedgerEntryChanges", e.varArray(e.lookup("LedgerEntryChange"), 0x7fffffff)),
            e.struct("OperationMeta", [["changes", e.lookup("LedgerEntryChanges")]]),
            e.struct("TransactionMetaV1", [["txChanges", e.lookup("LedgerEntryChanges")], ["operations", e.varArray(e.lookup("OperationMeta"), 0x7fffffff)]]),
            e.struct("TransactionMetaV2", [["txChangesBefore", e.lookup("LedgerEntryChanges")], ["operations", e.varArray(e.lookup("OperationMeta"), 0x7fffffff)], ["txChangesAfter", e.lookup("LedgerEntryChanges")]]),
            e.union("TransactionMeta", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, "operations"], [1, "v1"], [2, "v2"]],
                arms: {
                    operations: e.varArray(e.lookup("OperationMeta"), 0x7fffffff),
                    v1: e.lookup("TransactionMetaV1"),
                    v2: e.lookup("TransactionMetaV2")
                }
            }),
            e.struct("TransactionResultMeta", [["result", e.lookup("TransactionResultPair")], ["feeProcessing", e.lookup("LedgerEntryChanges")], ["txApplyProcessing", e.lookup("TransactionMeta")]]),
            e.struct("UpgradeEntryMeta", [["upgrade", e.lookup("LedgerUpgrade")], ["changes", e.lookup("LedgerEntryChanges")]]),
            e.struct("LedgerCloseMetaV0", [["ledgerHeader", e.lookup("LedgerHeaderHistoryEntry")], ["txSet", e.lookup("TransactionSet")], ["txProcessing", e.varArray(e.lookup("TransactionResultMeta"), 0x7fffffff)], ["upgradesProcessing", e.varArray(e.lookup("UpgradeEntryMeta"), 0x7fffffff)], ["scpInfo", e.varArray(e.lookup("ScpHistoryEntry"), 0x7fffffff)]]),
            e.struct("LedgerCloseMetaV1", [["ledgerHeader", e.lookup("LedgerHeaderHistoryEntry")], ["txSet", e.lookup("GeneralizedTransactionSet")], ["txProcessing", e.varArray(e.lookup("TransactionResultMeta"), 0x7fffffff)], ["upgradesProcessing", e.varArray(e.lookup("UpgradeEntryMeta"), 0x7fffffff)], ["scpInfo", e.varArray(e.lookup("ScpHistoryEntry"), 0x7fffffff)]]),
            e.union("LedgerCloseMeta", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, "v0"], [1, "v1"]],
                arms: {
                    v0: e.lookup("LedgerCloseMetaV0"),
                    v1: e.lookup("LedgerCloseMetaV1")
                }
            }),
            e.enum("ErrorCode", {
                errMisc: 0,
                errData: 1,
                errConf: 2,
                errAuth: 3,
                errLoad: 4
            }),
            e.struct("Error", [["code", e.lookup("ErrorCode")], ["msg", e.string(100)]]),
            e.struct("SendMore", [["numMessages", e.lookup("Uint32")]]),
            e.struct("AuthCert", [["pubkey", e.lookup("Curve25519Public")], ["expiration", e.lookup("Uint64")], ["sig", e.lookup("Signature")]]),
            e.struct("Hello", [["ledgerVersion", e.lookup("Uint32")], ["overlayVersion", e.lookup("Uint32")], ["overlayMinVersion", e.lookup("Uint32")], ["networkId", e.lookup("Hash")], ["versionStr", e.string(100)], ["listeningPort", e.int()], ["peerId", e.lookup("NodeId")], ["cert", e.lookup("AuthCert")], ["nonce", e.lookup("Uint256")]]),
            e.struct("Auth", [["unused", e.int()]]),
            e.enum("IpAddrType", {
                iPv4: 0,
                iPv6: 1
            }),
            e.union("PeerAddressIp", {
                switchOn: e.lookup("IpAddrType"),
                switchName: "type",
                switches: [["iPv4", "ipv4"], ["iPv6", "ipv6"]],
                arms: {
                    ipv4: e.opaque(4),
                    ipv6: e.opaque(16)
                }
            }),
            e.struct("PeerAddress", [["ip", e.lookup("PeerAddressIp")], ["port", e.lookup("Uint32")], ["numFailures", e.lookup("Uint32")]]),
            e.enum("MessageType", {
                errorMsg: 0,
                auth: 2,
                dontHave: 3,
                getPeers: 4,
                peers: 5,
                getTxSet: 6,
                txSet: 7,
                generalizedTxSet: 17,
                transaction: 8,
                getScpQuorumset: 9,
                scpQuorumset: 10,
                scpMessage: 11,
                getScpState: 12,
                hello: 13,
                surveyRequest: 14,
                surveyResponse: 15,
                sendMore: 16
            }),
            e.struct("DontHave", [["type", e.lookup("MessageType")], ["reqHash", e.lookup("Uint256")]]),
            e.enum("SurveyMessageCommandType", {
                surveyTopology: 0
            }),
            e.struct("SurveyRequestMessage", [["surveyorPeerId", e.lookup("NodeId")], ["surveyedPeerId", e.lookup("NodeId")], ["ledgerNum", e.lookup("Uint32")], ["encryptionKey", e.lookup("Curve25519Public")], ["commandType", e.lookup("SurveyMessageCommandType")]]),
            e.struct("SignedSurveyRequestMessage", [["requestSignature", e.lookup("Signature")], ["request", e.lookup("SurveyRequestMessage")]]),
            e.typedef("EncryptedBody", e.varOpaque(64e3)),
            e.struct("SurveyResponseMessage", [["surveyorPeerId", e.lookup("NodeId")], ["surveyedPeerId", e.lookup("NodeId")], ["ledgerNum", e.lookup("Uint32")], ["commandType", e.lookup("SurveyMessageCommandType")], ["encryptedBody", e.lookup("EncryptedBody")]]),
            e.struct("SignedSurveyResponseMessage", [["responseSignature", e.lookup("Signature")], ["response", e.lookup("SurveyResponseMessage")]]),
            e.struct("PeerStats", [["id", e.lookup("NodeId")], ["versionStr", e.string(100)], ["messagesRead", e.lookup("Uint64")], ["messagesWritten", e.lookup("Uint64")], ["bytesRead", e.lookup("Uint64")], ["bytesWritten", e.lookup("Uint64")], ["secondsConnected", e.lookup("Uint64")], ["uniqueFloodBytesRecv", e.lookup("Uint64")], ["duplicateFloodBytesRecv", e.lookup("Uint64")], ["uniqueFetchBytesRecv", e.lookup("Uint64")], ["duplicateFetchBytesRecv", e.lookup("Uint64")], ["uniqueFloodMessageRecv", e.lookup("Uint64")], ["duplicateFloodMessageRecv", e.lookup("Uint64")], ["uniqueFetchMessageRecv", e.lookup("Uint64")], ["duplicateFetchMessageRecv", e.lookup("Uint64")]]),
            e.typedef("PeerStatList", e.varArray(e.lookup("PeerStats"), 25)),
            e.struct("TopologyResponseBody", [["inboundPeers", e.lookup("PeerStatList")], ["outboundPeers", e.lookup("PeerStatList")], ["totalInboundPeerCount", e.lookup("Uint32")], ["totalOutboundPeerCount", e.lookup("Uint32")]]),
            e.union("SurveyResponseBody", {
                switchOn: e.lookup("SurveyMessageCommandType"),
                switchName: "type",
                switches: [["surveyTopology", "topologyResponseBody"]],
                arms: {
                    topologyResponseBody: e.lookup("TopologyResponseBody")
                }
            }),
            e.union("StellarMessage", {
                switchOn: e.lookup("MessageType"),
                switchName: "type",
                switches: [["errorMsg", "error"], ["hello", "hello"], ["auth", "auth"], ["dontHave", "dontHave"], ["getPeers", e.void()], ["peers", "peers"], ["getTxSet", "txSetHash"], ["txSet", "txSet"], ["generalizedTxSet", "generalizedTxSet"], ["transaction", "transaction"], ["surveyRequest", "signedSurveyRequestMessage"], ["surveyResponse", "signedSurveyResponseMessage"], ["getScpQuorumset", "qSetHash"], ["scpQuorumset", "qSet"], ["scpMessage", "envelope"], ["getScpState", "getScpLedgerSeq"], ["sendMore", "sendMoreMessage"]],
                arms: {
                    error: e.lookup("Error"),
                    hello: e.lookup("Hello"),
                    auth: e.lookup("Auth"),
                    dontHave: e.lookup("DontHave"),
                    peers: e.varArray(e.lookup("PeerAddress"), 100),
                    txSetHash: e.lookup("Uint256"),
                    txSet: e.lookup("TransactionSet"),
                    generalizedTxSet: e.lookup("GeneralizedTransactionSet"),
                    transaction: e.lookup("TransactionEnvelope"),
                    signedSurveyRequestMessage: e.lookup("SignedSurveyRequestMessage"),
                    signedSurveyResponseMessage: e.lookup("SignedSurveyResponseMessage"),
                    qSetHash: e.lookup("Uint256"),
                    qSet: e.lookup("ScpQuorumSet"),
                    envelope: e.lookup("ScpEnvelope"),
                    getScpLedgerSeq: e.lookup("Uint32"),
                    sendMoreMessage: e.lookup("SendMore")
                }
            }),
            e.struct("AuthenticatedMessageV0", [["sequence", e.lookup("Uint64")], ["message", e.lookup("StellarMessage")], ["mac", e.lookup("HmacSha256Mac")]]),
            e.union("AuthenticatedMessage", {
                switchOn: e.lookup("Uint32"),
                switchName: "v",
                switches: [[0, "v0"]],
                arms: {
                    v0: e.lookup("AuthenticatedMessageV0")
                }
            }),
            e.union("LiquidityPoolParameters", {
                switchOn: e.lookup("LiquidityPoolType"),
                switchName: "type",
                switches: [["liquidityPoolConstantProduct", "constantProduct"]],
                arms: {
                    constantProduct: e.lookup("LiquidityPoolConstantProductParameters")
                }
            }),
            e.struct("MuxedAccountMed25519", [["id", e.lookup("Uint64")], ["ed25519", e.lookup("Uint256")]]),
            e.union("MuxedAccount", {
                switchOn: e.lookup("CryptoKeyType"),
                switchName: "type",
                switches: [["keyTypeEd25519", "ed25519"], ["keyTypeMuxedEd25519", "med25519"]],
                arms: {
                    ed25519: e.lookup("Uint256"),
                    med25519: e.lookup("MuxedAccountMed25519")
                }
            }),
            e.struct("DecoratedSignature", [["hint", e.lookup("SignatureHint")], ["signature", e.lookup("Signature")]]),
            e.enum("OperationType", {
                createAccount: 0,
                payment: 1,
                pathPaymentStrictReceive: 2,
                manageSellOffer: 3,
                createPassiveSellOffer: 4,
                setOptions: 5,
                changeTrust: 6,
                allowTrust: 7,
                accountMerge: 8,
                inflation: 9,
                manageData: 10,
                bumpSequence: 11,
                manageBuyOffer: 12,
                pathPaymentStrictSend: 13,
                createClaimableBalance: 14,
                claimClaimableBalance: 15,
                beginSponsoringFutureReserves: 16,
                endSponsoringFutureReserves: 17,
                revokeSponsorship: 18,
                clawback: 19,
                clawbackClaimableBalance: 20,
                setTrustLineFlags: 21,
                liquidityPoolDeposit: 22,
                liquidityPoolWithdraw: 23
            }),
            e.struct("CreateAccountOp", [["destination", e.lookup("AccountId")], ["startingBalance", e.lookup("Int64")]]),
            e.struct("PaymentOp", [["destination", e.lookup("MuxedAccount")], ["asset", e.lookup("Asset")], ["amount", e.lookup("Int64")]]),
            e.struct("PathPaymentStrictReceiveOp", [["sendAsset", e.lookup("Asset")], ["sendMax", e.lookup("Int64")], ["destination", e.lookup("MuxedAccount")], ["destAsset", e.lookup("Asset")], ["destAmount", e.lookup("Int64")], ["path", e.varArray(e.lookup("Asset"), 5)]]),
            e.struct("PathPaymentStrictSendOp", [["sendAsset", e.lookup("Asset")], ["sendAmount", e.lookup("Int64")], ["destination", e.lookup("MuxedAccount")], ["destAsset", e.lookup("Asset")], ["destMin", e.lookup("Int64")], ["path", e.varArray(e.lookup("Asset"), 5)]]),
            e.struct("ManageSellOfferOp", [["selling", e.lookup("Asset")], ["buying", e.lookup("Asset")], ["amount", e.lookup("Int64")], ["price", e.lookup("Price")], ["offerId", e.lookup("Int64")]]),
            e.struct("ManageBuyOfferOp", [["selling", e.lookup("Asset")], ["buying", e.lookup("Asset")], ["buyAmount", e.lookup("Int64")], ["price", e.lookup("Price")], ["offerId", e.lookup("Int64")]]),
            e.struct("CreatePassiveSellOfferOp", [["selling", e.lookup("Asset")], ["buying", e.lookup("Asset")], ["amount", e.lookup("Int64")], ["price", e.lookup("Price")]]),
            e.struct("SetOptionsOp", [["inflationDest", e.option(e.lookup("AccountId"))], ["clearFlags", e.option(e.lookup("Uint32"))], ["setFlags", e.option(e.lookup("Uint32"))], ["masterWeight", e.option(e.lookup("Uint32"))], ["lowThreshold", e.option(e.lookup("Uint32"))], ["medThreshold", e.option(e.lookup("Uint32"))], ["highThreshold", e.option(e.lookup("Uint32"))], ["homeDomain", e.option(e.lookup("String32"))], ["signer", e.option(e.lookup("Signer"))]]),
            e.union("ChangeTrustAsset", {
                switchOn: e.lookup("AssetType"),
                switchName: "type",
                switches: [["assetTypeNative", e.void()], ["assetTypeCreditAlphanum4", "alphaNum4"], ["assetTypeCreditAlphanum12", "alphaNum12"], ["assetTypePoolShare", "liquidityPool"]],
                arms: {
                    alphaNum4: e.lookup("AlphaNum4"),
                    alphaNum12: e.lookup("AlphaNum12"),
                    liquidityPool: e.lookup("LiquidityPoolParameters")
                }
            }),
            e.struct("ChangeTrustOp", [["line", e.lookup("ChangeTrustAsset")], ["limit", e.lookup("Int64")]]),
            e.struct("AllowTrustOp", [["trustor", e.lookup("AccountId")], ["asset", e.lookup("AssetCode")], ["authorize", e.lookup("Uint32")]]),
            e.struct("ManageDataOp", [["dataName", e.lookup("String64")], ["dataValue", e.option(e.lookup("DataValue"))]]),
            e.struct("BumpSequenceOp", [["bumpTo", e.lookup("SequenceNumber")]]),
            e.struct("CreateClaimableBalanceOp", [["asset", e.lookup("Asset")], ["amount", e.lookup("Int64")], ["claimants", e.varArray(e.lookup("Claimant"), 10)]]),
            e.struct("ClaimClaimableBalanceOp", [["balanceId", e.lookup("ClaimableBalanceId")]]),
            e.struct("BeginSponsoringFutureReservesOp", [["sponsoredId", e.lookup("AccountId")]]),
            e.enum("RevokeSponsorshipType", {
                revokeSponsorshipLedgerEntry: 0,
                revokeSponsorshipSigner: 1
            }),
            e.struct("RevokeSponsorshipOpSigner", [["accountId", e.lookup("AccountId")], ["signerKey", e.lookup("SignerKey")]]),
            e.union("RevokeSponsorshipOp", {
                switchOn: e.lookup("RevokeSponsorshipType"),
                switchName: "type",
                switches: [["revokeSponsorshipLedgerEntry", "ledgerKey"], ["revokeSponsorshipSigner", "signer"]],
                arms: {
                    ledgerKey: e.lookup("LedgerKey"),
                    signer: e.lookup("RevokeSponsorshipOpSigner")
                }
            }),
            e.struct("ClawbackOp", [["asset", e.lookup("Asset")], ["from", e.lookup("MuxedAccount")], ["amount", e.lookup("Int64")]]),
            e.struct("ClawbackClaimableBalanceOp", [["balanceId", e.lookup("ClaimableBalanceId")]]),
            e.struct("SetTrustLineFlagsOp", [["trustor", e.lookup("AccountId")], ["asset", e.lookup("Asset")], ["clearFlags", e.lookup("Uint32")], ["setFlags", e.lookup("Uint32")]]),
            e.const("LIQUIDITY_POOL_FEE_V18", 30),
            e.struct("LiquidityPoolDepositOp", [["liquidityPoolId", e.lookup("PoolId")], ["maxAmountA", e.lookup("Int64")], ["maxAmountB", e.lookup("Int64")], ["minPrice", e.lookup("Price")], ["maxPrice", e.lookup("Price")]]),
            e.struct("LiquidityPoolWithdrawOp", [["liquidityPoolId", e.lookup("PoolId")], ["amount", e.lookup("Int64")], ["minAmountA", e.lookup("Int64")], ["minAmountB", e.lookup("Int64")]]),
            e.union("OperationBody", {
                switchOn: e.lookup("OperationType"),
                switchName: "type",
                switches: [["createAccount", "createAccountOp"], ["payment", "paymentOp"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveOp"], ["manageSellOffer", "manageSellOfferOp"], ["createPassiveSellOffer", "createPassiveSellOfferOp"], ["setOptions", "setOptionsOp"], ["changeTrust", "changeTrustOp"], ["allowTrust", "allowTrustOp"], ["accountMerge", "destination"], ["inflation", e.void()], ["manageData", "manageDataOp"], ["bumpSequence", "bumpSequenceOp"], ["manageBuyOffer", "manageBuyOfferOp"], ["pathPaymentStrictSend", "pathPaymentStrictSendOp"], ["createClaimableBalance", "createClaimableBalanceOp"], ["claimClaimableBalance", "claimClaimableBalanceOp"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesOp"], ["endSponsoringFutureReserves", e.void()], ["revokeSponsorship", "revokeSponsorshipOp"], ["clawback", "clawbackOp"], ["clawbackClaimableBalance", "clawbackClaimableBalanceOp"], ["setTrustLineFlags", "setTrustLineFlagsOp"], ["liquidityPoolDeposit", "liquidityPoolDepositOp"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawOp"]],
                arms: {
                    createAccountOp: e.lookup("CreateAccountOp"),
                    paymentOp: e.lookup("PaymentOp"),
                    pathPaymentStrictReceiveOp: e.lookup("PathPaymentStrictReceiveOp"),
                    manageSellOfferOp: e.lookup("ManageSellOfferOp"),
                    createPassiveSellOfferOp: e.lookup("CreatePassiveSellOfferOp"),
                    setOptionsOp: e.lookup("SetOptionsOp"),
                    changeTrustOp: e.lookup("ChangeTrustOp"),
                    allowTrustOp: e.lookup("AllowTrustOp"),
                    destination: e.lookup("MuxedAccount"),
                    manageDataOp: e.lookup("ManageDataOp"),
                    bumpSequenceOp: e.lookup("BumpSequenceOp"),
                    manageBuyOfferOp: e.lookup("ManageBuyOfferOp"),
                    pathPaymentStrictSendOp: e.lookup("PathPaymentStrictSendOp"),
                    createClaimableBalanceOp: e.lookup("CreateClaimableBalanceOp"),
                    claimClaimableBalanceOp: e.lookup("ClaimClaimableBalanceOp"),
                    beginSponsoringFutureReservesOp: e.lookup("BeginSponsoringFutureReservesOp"),
                    revokeSponsorshipOp: e.lookup("RevokeSponsorshipOp"),
                    clawbackOp: e.lookup("ClawbackOp"),
                    clawbackClaimableBalanceOp: e.lookup("ClawbackClaimableBalanceOp"),
                    setTrustLineFlagsOp: e.lookup("SetTrustLineFlagsOp"),
                    liquidityPoolDepositOp: e.lookup("LiquidityPoolDepositOp"),
                    liquidityPoolWithdrawOp: e.lookup("LiquidityPoolWithdrawOp")
                }
            }),
            e.struct("Operation", [["sourceAccount", e.option(e.lookup("MuxedAccount"))], ["body", e.lookup("OperationBody")]]),
            e.struct("HashIdPreimageOperationId", [["sourceAccount", e.lookup("AccountId")], ["seqNum", e.lookup("SequenceNumber")], ["opNum", e.lookup("Uint32")]]),
            e.struct("HashIdPreimageRevokeId", [["sourceAccount", e.lookup("AccountId")], ["seqNum", e.lookup("SequenceNumber")], ["opNum", e.lookup("Uint32")], ["liquidityPoolId", e.lookup("PoolId")], ["asset", e.lookup("Asset")]]),
            e.union("HashIdPreimage", {
                switchOn: e.lookup("EnvelopeType"),
                switchName: "type",
                switches: [["envelopeTypeOpId", "operationId"], ["envelopeTypePoolRevokeOpId", "revokeId"]],
                arms: {
                    operationId: e.lookup("HashIdPreimageOperationId"),
                    revokeId: e.lookup("HashIdPreimageRevokeId")
                }
            }),
            e.enum("MemoType", {
                memoNone: 0,
                memoText: 1,
                memoId: 2,
                memoHash: 3,
                memoReturn: 4
            }),
            e.union("Memo", {
                switchOn: e.lookup("MemoType"),
                switchName: "type",
                switches: [["memoNone", e.void()], ["memoText", "text"], ["memoId", "id"], ["memoHash", "hash"], ["memoReturn", "retHash"]],
                arms: {
                    text: e.string(28),
                    id: e.lookup("Uint64"),
                    hash: e.lookup("Hash"),
                    retHash: e.lookup("Hash")
                }
            }),
            e.struct("TimeBounds", [["minTime", e.lookup("TimePoint")], ["maxTime", e.lookup("TimePoint")]]),
            e.struct("LedgerBounds", [["minLedger", e.lookup("Uint32")], ["maxLedger", e.lookup("Uint32")]]),
            e.struct("PreconditionsV2", [["timeBounds", e.option(e.lookup("TimeBounds"))], ["ledgerBounds", e.option(e.lookup("LedgerBounds"))], ["minSeqNum", e.option(e.lookup("SequenceNumber"))], ["minSeqAge", e.lookup("Duration")], ["minSeqLedgerGap", e.lookup("Uint32")], ["extraSigners", e.varArray(e.lookup("SignerKey"), 2)]]),
            e.enum("PreconditionType", {
                precondNone: 0,
                precondTime: 1,
                precondV2: 2
            }),
            e.union("Preconditions", {
                switchOn: e.lookup("PreconditionType"),
                switchName: "type",
                switches: [["precondNone", e.void()], ["precondTime", "timeBounds"], ["precondV2", "v2"]],
                arms: {
                    timeBounds: e.lookup("TimeBounds"),
                    v2: e.lookup("PreconditionsV2")
                }
            }),
            e.const("MAX_OPS_PER_TX", 100),
            e.union("TransactionV0Ext", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("TransactionV0", [["sourceAccountEd25519", e.lookup("Uint256")], ["fee", e.lookup("Uint32")], ["seqNum", e.lookup("SequenceNumber")], ["timeBounds", e.option(e.lookup("TimeBounds"))], ["memo", e.lookup("Memo")], ["operations", e.varArray(e.lookup("Operation"), e.lookup("MAX_OPS_PER_TX"))], ["ext", e.lookup("TransactionV0Ext")]]),
            e.struct("TransactionV0Envelope", [["tx", e.lookup("TransactionV0")], ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)]]),
            e.union("TransactionExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("Transaction", [["sourceAccount", e.lookup("MuxedAccount")], ["fee", e.lookup("Uint32")], ["seqNum", e.lookup("SequenceNumber")], ["cond", e.lookup("Preconditions")], ["memo", e.lookup("Memo")], ["operations", e.varArray(e.lookup("Operation"), e.lookup("MAX_OPS_PER_TX"))], ["ext", e.lookup("TransactionExt")]]),
            e.struct("TransactionV1Envelope", [["tx", e.lookup("Transaction")], ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)]]),
            e.union("FeeBumpTransactionInnerTx", {
                switchOn: e.lookup("EnvelopeType"),
                switchName: "type",
                switches: [["envelopeTypeTx", "v1"]],
                arms: {
                    v1: e.lookup("TransactionV1Envelope")
                }
            }),
            e.union("FeeBumpTransactionExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("FeeBumpTransaction", [["feeSource", e.lookup("MuxedAccount")], ["fee", e.lookup("Int64")], ["innerTx", e.lookup("FeeBumpTransactionInnerTx")], ["ext", e.lookup("FeeBumpTransactionExt")]]),
            e.struct("FeeBumpTransactionEnvelope", [["tx", e.lookup("FeeBumpTransaction")], ["signatures", e.varArray(e.lookup("DecoratedSignature"), 20)]]),
            e.union("TransactionEnvelope", {
                switchOn: e.lookup("EnvelopeType"),
                switchName: "type",
                switches: [["envelopeTypeTxV0", "v0"], ["envelopeTypeTx", "v1"], ["envelopeTypeTxFeeBump", "feeBump"]],
                arms: {
                    v0: e.lookup("TransactionV0Envelope"),
                    v1: e.lookup("TransactionV1Envelope"),
                    feeBump: e.lookup("FeeBumpTransactionEnvelope")
                }
            }),
            e.union("TransactionSignaturePayloadTaggedTransaction", {
                switchOn: e.lookup("EnvelopeType"),
                switchName: "type",
                switches: [["envelopeTypeTx", "tx"], ["envelopeTypeTxFeeBump", "feeBump"]],
                arms: {
                    tx: e.lookup("Transaction"),
                    feeBump: e.lookup("FeeBumpTransaction")
                }
            }),
            e.struct("TransactionSignaturePayload", [["networkId", e.lookup("Hash")], ["taggedTransaction", e.lookup("TransactionSignaturePayloadTaggedTransaction")]]),
            e.enum("ClaimAtomType", {
                claimAtomTypeV0: 0,
                claimAtomTypeOrderBook: 1,
                claimAtomTypeLiquidityPool: 2
            }),
            e.struct("ClaimOfferAtomV0", [["sellerEd25519", e.lookup("Uint256")], ["offerId", e.lookup("Int64")], ["assetSold", e.lookup("Asset")], ["amountSold", e.lookup("Int64")], ["assetBought", e.lookup("Asset")], ["amountBought", e.lookup("Int64")]]),
            e.struct("ClaimOfferAtom", [["sellerId", e.lookup("AccountId")], ["offerId", e.lookup("Int64")], ["assetSold", e.lookup("Asset")], ["amountSold", e.lookup("Int64")], ["assetBought", e.lookup("Asset")], ["amountBought", e.lookup("Int64")]]),
            e.struct("ClaimLiquidityAtom", [["liquidityPoolId", e.lookup("PoolId")], ["assetSold", e.lookup("Asset")], ["amountSold", e.lookup("Int64")], ["assetBought", e.lookup("Asset")], ["amountBought", e.lookup("Int64")]]),
            e.union("ClaimAtom", {
                switchOn: e.lookup("ClaimAtomType"),
                switchName: "type",
                switches: [["claimAtomTypeV0", "v0"], ["claimAtomTypeOrderBook", "orderBook"], ["claimAtomTypeLiquidityPool", "liquidityPool"]],
                arms: {
                    v0: e.lookup("ClaimOfferAtomV0"),
                    orderBook: e.lookup("ClaimOfferAtom"),
                    liquidityPool: e.lookup("ClaimLiquidityAtom")
                }
            }),
            e.enum("CreateAccountResultCode", {
                createAccountSuccess: 0,
                createAccountMalformed: -1,
                createAccountUnderfunded: -2,
                createAccountLowReserve: -3,
                createAccountAlreadyExist: -4
            }),
            e.union("CreateAccountResult", {
                switchOn: e.lookup("CreateAccountResultCode"),
                switchName: "code",
                switches: [["createAccountSuccess", e.void()], ["createAccountMalformed", e.void()], ["createAccountUnderfunded", e.void()], ["createAccountLowReserve", e.void()], ["createAccountAlreadyExist", e.void()]],
                arms: {}
            }),
            e.enum("PaymentResultCode", {
                paymentSuccess: 0,
                paymentMalformed: -1,
                paymentUnderfunded: -2,
                paymentSrcNoTrust: -3,
                paymentSrcNotAuthorized: -4,
                paymentNoDestination: -5,
                paymentNoTrust: -6,
                paymentNotAuthorized: -7,
                paymentLineFull: -8,
                paymentNoIssuer: -9
            }),
            e.union("PaymentResult", {
                switchOn: e.lookup("PaymentResultCode"),
                switchName: "code",
                switches: [["paymentSuccess", e.void()], ["paymentMalformed", e.void()], ["paymentUnderfunded", e.void()], ["paymentSrcNoTrust", e.void()], ["paymentSrcNotAuthorized", e.void()], ["paymentNoDestination", e.void()], ["paymentNoTrust", e.void()], ["paymentNotAuthorized", e.void()], ["paymentLineFull", e.void()], ["paymentNoIssuer", e.void()]],
                arms: {}
            }),
            e.enum("PathPaymentStrictReceiveResultCode", {
                pathPaymentStrictReceiveSuccess: 0,
                pathPaymentStrictReceiveMalformed: -1,
                pathPaymentStrictReceiveUnderfunded: -2,
                pathPaymentStrictReceiveSrcNoTrust: -3,
                pathPaymentStrictReceiveSrcNotAuthorized: -4,
                pathPaymentStrictReceiveNoDestination: -5,
                pathPaymentStrictReceiveNoTrust: -6,
                pathPaymentStrictReceiveNotAuthorized: -7,
                pathPaymentStrictReceiveLineFull: -8,
                pathPaymentStrictReceiveNoIssuer: -9,
                pathPaymentStrictReceiveTooFewOffers: -10,
                pathPaymentStrictReceiveOfferCrossSelf: -11,
                pathPaymentStrictReceiveOverSendmax: -12
            }),
            e.struct("SimplePaymentResult", [["destination", e.lookup("AccountId")], ["asset", e.lookup("Asset")], ["amount", e.lookup("Int64")]]),
            e.struct("PathPaymentStrictReceiveResultSuccess", [["offers", e.varArray(e.lookup("ClaimAtom"), 0x7fffffff)], ["last", e.lookup("SimplePaymentResult")]]),
            e.union("PathPaymentStrictReceiveResult", {
                switchOn: e.lookup("PathPaymentStrictReceiveResultCode"),
                switchName: "code",
                switches: [["pathPaymentStrictReceiveSuccess", "success"], ["pathPaymentStrictReceiveMalformed", e.void()], ["pathPaymentStrictReceiveUnderfunded", e.void()], ["pathPaymentStrictReceiveSrcNoTrust", e.void()], ["pathPaymentStrictReceiveSrcNotAuthorized", e.void()], ["pathPaymentStrictReceiveNoDestination", e.void()], ["pathPaymentStrictReceiveNoTrust", e.void()], ["pathPaymentStrictReceiveNotAuthorized", e.void()], ["pathPaymentStrictReceiveLineFull", e.void()], ["pathPaymentStrictReceiveNoIssuer", "noIssuer"], ["pathPaymentStrictReceiveTooFewOffers", e.void()], ["pathPaymentStrictReceiveOfferCrossSelf", e.void()], ["pathPaymentStrictReceiveOverSendmax", e.void()]],
                arms: {
                    success: e.lookup("PathPaymentStrictReceiveResultSuccess"),
                    noIssuer: e.lookup("Asset")
                }
            }),
            e.enum("PathPaymentStrictSendResultCode", {
                pathPaymentStrictSendSuccess: 0,
                pathPaymentStrictSendMalformed: -1,
                pathPaymentStrictSendUnderfunded: -2,
                pathPaymentStrictSendSrcNoTrust: -3,
                pathPaymentStrictSendSrcNotAuthorized: -4,
                pathPaymentStrictSendNoDestination: -5,
                pathPaymentStrictSendNoTrust: -6,
                pathPaymentStrictSendNotAuthorized: -7,
                pathPaymentStrictSendLineFull: -8,
                pathPaymentStrictSendNoIssuer: -9,
                pathPaymentStrictSendTooFewOffers: -10,
                pathPaymentStrictSendOfferCrossSelf: -11,
                pathPaymentStrictSendUnderDestmin: -12
            }),
            e.struct("PathPaymentStrictSendResultSuccess", [["offers", e.varArray(e.lookup("ClaimAtom"), 0x7fffffff)], ["last", e.lookup("SimplePaymentResult")]]),
            e.union("PathPaymentStrictSendResult", {
                switchOn: e.lookup("PathPaymentStrictSendResultCode"),
                switchName: "code",
                switches: [["pathPaymentStrictSendSuccess", "success"], ["pathPaymentStrictSendMalformed", e.void()], ["pathPaymentStrictSendUnderfunded", e.void()], ["pathPaymentStrictSendSrcNoTrust", e.void()], ["pathPaymentStrictSendSrcNotAuthorized", e.void()], ["pathPaymentStrictSendNoDestination", e.void()], ["pathPaymentStrictSendNoTrust", e.void()], ["pathPaymentStrictSendNotAuthorized", e.void()], ["pathPaymentStrictSendLineFull", e.void()], ["pathPaymentStrictSendNoIssuer", "noIssuer"], ["pathPaymentStrictSendTooFewOffers", e.void()], ["pathPaymentStrictSendOfferCrossSelf", e.void()], ["pathPaymentStrictSendUnderDestmin", e.void()]],
                arms: {
                    success: e.lookup("PathPaymentStrictSendResultSuccess"),
                    noIssuer: e.lookup("Asset")
                }
            }),
            e.enum("ManageSellOfferResultCode", {
                manageSellOfferSuccess: 0,
                manageSellOfferMalformed: -1,
                manageSellOfferSellNoTrust: -2,
                manageSellOfferBuyNoTrust: -3,
                manageSellOfferSellNotAuthorized: -4,
                manageSellOfferBuyNotAuthorized: -5,
                manageSellOfferLineFull: -6,
                manageSellOfferUnderfunded: -7,
                manageSellOfferCrossSelf: -8,
                manageSellOfferSellNoIssuer: -9,
                manageSellOfferBuyNoIssuer: -10,
                manageSellOfferNotFound: -11,
                manageSellOfferLowReserve: -12
            }),
            e.enum("ManageOfferEffect", {
                manageOfferCreated: 0,
                manageOfferUpdated: 1,
                manageOfferDeleted: 2
            }),
            e.union("ManageOfferSuccessResultOffer", {
                switchOn: e.lookup("ManageOfferEffect"),
                switchName: "effect",
                switches: [["manageOfferCreated", "offer"], ["manageOfferUpdated", "offer"], ["manageOfferDeleted", e.void()]],
                arms: {
                    offer: e.lookup("OfferEntry")
                }
            }),
            e.struct("ManageOfferSuccessResult", [["offersClaimed", e.varArray(e.lookup("ClaimAtom"), 0x7fffffff)], ["offer", e.lookup("ManageOfferSuccessResultOffer")]]),
            e.union("ManageSellOfferResult", {
                switchOn: e.lookup("ManageSellOfferResultCode"),
                switchName: "code",
                switches: [["manageSellOfferSuccess", "success"], ["manageSellOfferMalformed", e.void()], ["manageSellOfferSellNoTrust", e.void()], ["manageSellOfferBuyNoTrust", e.void()], ["manageSellOfferSellNotAuthorized", e.void()], ["manageSellOfferBuyNotAuthorized", e.void()], ["manageSellOfferLineFull", e.void()], ["manageSellOfferUnderfunded", e.void()], ["manageSellOfferCrossSelf", e.void()], ["manageSellOfferSellNoIssuer", e.void()], ["manageSellOfferBuyNoIssuer", e.void()], ["manageSellOfferNotFound", e.void()], ["manageSellOfferLowReserve", e.void()]],
                arms: {
                    success: e.lookup("ManageOfferSuccessResult")
                }
            }),
            e.enum("ManageBuyOfferResultCode", {
                manageBuyOfferSuccess: 0,
                manageBuyOfferMalformed: -1,
                manageBuyOfferSellNoTrust: -2,
                manageBuyOfferBuyNoTrust: -3,
                manageBuyOfferSellNotAuthorized: -4,
                manageBuyOfferBuyNotAuthorized: -5,
                manageBuyOfferLineFull: -6,
                manageBuyOfferUnderfunded: -7,
                manageBuyOfferCrossSelf: -8,
                manageBuyOfferSellNoIssuer: -9,
                manageBuyOfferBuyNoIssuer: -10,
                manageBuyOfferNotFound: -11,
                manageBuyOfferLowReserve: -12
            }),
            e.union("ManageBuyOfferResult", {
                switchOn: e.lookup("ManageBuyOfferResultCode"),
                switchName: "code",
                switches: [["manageBuyOfferSuccess", "success"], ["manageBuyOfferMalformed", e.void()], ["manageBuyOfferSellNoTrust", e.void()], ["manageBuyOfferBuyNoTrust", e.void()], ["manageBuyOfferSellNotAuthorized", e.void()], ["manageBuyOfferBuyNotAuthorized", e.void()], ["manageBuyOfferLineFull", e.void()], ["manageBuyOfferUnderfunded", e.void()], ["manageBuyOfferCrossSelf", e.void()], ["manageBuyOfferSellNoIssuer", e.void()], ["manageBuyOfferBuyNoIssuer", e.void()], ["manageBuyOfferNotFound", e.void()], ["manageBuyOfferLowReserve", e.void()]],
                arms: {
                    success: e.lookup("ManageOfferSuccessResult")
                }
            }),
            e.enum("SetOptionsResultCode", {
                setOptionsSuccess: 0,
                setOptionsLowReserve: -1,
                setOptionsTooManySigners: -2,
                setOptionsBadFlags: -3,
                setOptionsInvalidInflation: -4,
                setOptionsCantChange: -5,
                setOptionsUnknownFlag: -6,
                setOptionsThresholdOutOfRange: -7,
                setOptionsBadSigner: -8,
                setOptionsInvalidHomeDomain: -9,
                setOptionsAuthRevocableRequired: -10
            }),
            e.union("SetOptionsResult", {
                switchOn: e.lookup("SetOptionsResultCode"),
                switchName: "code",
                switches: [["setOptionsSuccess", e.void()], ["setOptionsLowReserve", e.void()], ["setOptionsTooManySigners", e.void()], ["setOptionsBadFlags", e.void()], ["setOptionsInvalidInflation", e.void()], ["setOptionsCantChange", e.void()], ["setOptionsUnknownFlag", e.void()], ["setOptionsThresholdOutOfRange", e.void()], ["setOptionsBadSigner", e.void()], ["setOptionsInvalidHomeDomain", e.void()], ["setOptionsAuthRevocableRequired", e.void()]],
                arms: {}
            }),
            e.enum("ChangeTrustResultCode", {
                changeTrustSuccess: 0,
                changeTrustMalformed: -1,
                changeTrustNoIssuer: -2,
                changeTrustInvalidLimit: -3,
                changeTrustLowReserve: -4,
                changeTrustSelfNotAllowed: -5,
                changeTrustTrustLineMissing: -6,
                changeTrustCannotDelete: -7,
                changeTrustNotAuthMaintainLiabilities: -8
            }),
            e.union("ChangeTrustResult", {
                switchOn: e.lookup("ChangeTrustResultCode"),
                switchName: "code",
                switches: [["changeTrustSuccess", e.void()], ["changeTrustMalformed", e.void()], ["changeTrustNoIssuer", e.void()], ["changeTrustInvalidLimit", e.void()], ["changeTrustLowReserve", e.void()], ["changeTrustSelfNotAllowed", e.void()], ["changeTrustTrustLineMissing", e.void()], ["changeTrustCannotDelete", e.void()], ["changeTrustNotAuthMaintainLiabilities", e.void()]],
                arms: {}
            }),
            e.enum("AllowTrustResultCode", {
                allowTrustSuccess: 0,
                allowTrustMalformed: -1,
                allowTrustNoTrustLine: -2,
                allowTrustTrustNotRequired: -3,
                allowTrustCantRevoke: -4,
                allowTrustSelfNotAllowed: -5,
                allowTrustLowReserve: -6
            }),
            e.union("AllowTrustResult", {
                switchOn: e.lookup("AllowTrustResultCode"),
                switchName: "code",
                switches: [["allowTrustSuccess", e.void()], ["allowTrustMalformed", e.void()], ["allowTrustNoTrustLine", e.void()], ["allowTrustTrustNotRequired", e.void()], ["allowTrustCantRevoke", e.void()], ["allowTrustSelfNotAllowed", e.void()], ["allowTrustLowReserve", e.void()]],
                arms: {}
            }),
            e.enum("AccountMergeResultCode", {
                accountMergeSuccess: 0,
                accountMergeMalformed: -1,
                accountMergeNoAccount: -2,
                accountMergeImmutableSet: -3,
                accountMergeHasSubEntries: -4,
                accountMergeSeqnumTooFar: -5,
                accountMergeDestFull: -6,
                accountMergeIsSponsor: -7
            }),
            e.union("AccountMergeResult", {
                switchOn: e.lookup("AccountMergeResultCode"),
                switchName: "code",
                switches: [["accountMergeSuccess", "sourceAccountBalance"], ["accountMergeMalformed", e.void()], ["accountMergeNoAccount", e.void()], ["accountMergeImmutableSet", e.void()], ["accountMergeHasSubEntries", e.void()], ["accountMergeSeqnumTooFar", e.void()], ["accountMergeDestFull", e.void()], ["accountMergeIsSponsor", e.void()]],
                arms: {
                    sourceAccountBalance: e.lookup("Int64")
                }
            }),
            e.enum("InflationResultCode", {
                inflationSuccess: 0,
                inflationNotTime: -1
            }),
            e.struct("InflationPayout", [["destination", e.lookup("AccountId")], ["amount", e.lookup("Int64")]]),
            e.union("InflationResult", {
                switchOn: e.lookup("InflationResultCode"),
                switchName: "code",
                switches: [["inflationSuccess", "payouts"], ["inflationNotTime", e.void()]],
                arms: {
                    payouts: e.varArray(e.lookup("InflationPayout"), 0x7fffffff)
                }
            }),
            e.enum("ManageDataResultCode", {
                manageDataSuccess: 0,
                manageDataNotSupportedYet: -1,
                manageDataNameNotFound: -2,
                manageDataLowReserve: -3,
                manageDataInvalidName: -4
            }),
            e.union("ManageDataResult", {
                switchOn: e.lookup("ManageDataResultCode"),
                switchName: "code",
                switches: [["manageDataSuccess", e.void()], ["manageDataNotSupportedYet", e.void()], ["manageDataNameNotFound", e.void()], ["manageDataLowReserve", e.void()], ["manageDataInvalidName", e.void()]],
                arms: {}
            }),
            e.enum("BumpSequenceResultCode", {
                bumpSequenceSuccess: 0,
                bumpSequenceBadSeq: -1
            }),
            e.union("BumpSequenceResult", {
                switchOn: e.lookup("BumpSequenceResultCode"),
                switchName: "code",
                switches: [["bumpSequenceSuccess", e.void()], ["bumpSequenceBadSeq", e.void()]],
                arms: {}
            }),
            e.enum("CreateClaimableBalanceResultCode", {
                createClaimableBalanceSuccess: 0,
                createClaimableBalanceMalformed: -1,
                createClaimableBalanceLowReserve: -2,
                createClaimableBalanceNoTrust: -3,
                createClaimableBalanceNotAuthorized: -4,
                createClaimableBalanceUnderfunded: -5
            }),
            e.union("CreateClaimableBalanceResult", {
                switchOn: e.lookup("CreateClaimableBalanceResultCode"),
                switchName: "code",
                switches: [["createClaimableBalanceSuccess", "balanceId"], ["createClaimableBalanceMalformed", e.void()], ["createClaimableBalanceLowReserve", e.void()], ["createClaimableBalanceNoTrust", e.void()], ["createClaimableBalanceNotAuthorized", e.void()], ["createClaimableBalanceUnderfunded", e.void()]],
                arms: {
                    balanceId: e.lookup("ClaimableBalanceId")
                }
            }),
            e.enum("ClaimClaimableBalanceResultCode", {
                claimClaimableBalanceSuccess: 0,
                claimClaimableBalanceDoesNotExist: -1,
                claimClaimableBalanceCannotClaim: -2,
                claimClaimableBalanceLineFull: -3,
                claimClaimableBalanceNoTrust: -4,
                claimClaimableBalanceNotAuthorized: -5
            }),
            e.union("ClaimClaimableBalanceResult", {
                switchOn: e.lookup("ClaimClaimableBalanceResultCode"),
                switchName: "code",
                switches: [["claimClaimableBalanceSuccess", e.void()], ["claimClaimableBalanceDoesNotExist", e.void()], ["claimClaimableBalanceCannotClaim", e.void()], ["claimClaimableBalanceLineFull", e.void()], ["claimClaimableBalanceNoTrust", e.void()], ["claimClaimableBalanceNotAuthorized", e.void()]],
                arms: {}
            }),
            e.enum("BeginSponsoringFutureReservesResultCode", {
                beginSponsoringFutureReservesSuccess: 0,
                beginSponsoringFutureReservesMalformed: -1,
                beginSponsoringFutureReservesAlreadySponsored: -2,
                beginSponsoringFutureReservesRecursive: -3
            }),
            e.union("BeginSponsoringFutureReservesResult", {
                switchOn: e.lookup("BeginSponsoringFutureReservesResultCode"),
                switchName: "code",
                switches: [["beginSponsoringFutureReservesSuccess", e.void()], ["beginSponsoringFutureReservesMalformed", e.void()], ["beginSponsoringFutureReservesAlreadySponsored", e.void()], ["beginSponsoringFutureReservesRecursive", e.void()]],
                arms: {}
            }),
            e.enum("EndSponsoringFutureReservesResultCode", {
                endSponsoringFutureReservesSuccess: 0,
                endSponsoringFutureReservesNotSponsored: -1
            }),
            e.union("EndSponsoringFutureReservesResult", {
                switchOn: e.lookup("EndSponsoringFutureReservesResultCode"),
                switchName: "code",
                switches: [["endSponsoringFutureReservesSuccess", e.void()], ["endSponsoringFutureReservesNotSponsored", e.void()]],
                arms: {}
            }),
            e.enum("RevokeSponsorshipResultCode", {
                revokeSponsorshipSuccess: 0,
                revokeSponsorshipDoesNotExist: -1,
                revokeSponsorshipNotSponsor: -2,
                revokeSponsorshipLowReserve: -3,
                revokeSponsorshipOnlyTransferable: -4,
                revokeSponsorshipMalformed: -5
            }),
            e.union("RevokeSponsorshipResult", {
                switchOn: e.lookup("RevokeSponsorshipResultCode"),
                switchName: "code",
                switches: [["revokeSponsorshipSuccess", e.void()], ["revokeSponsorshipDoesNotExist", e.void()], ["revokeSponsorshipNotSponsor", e.void()], ["revokeSponsorshipLowReserve", e.void()], ["revokeSponsorshipOnlyTransferable", e.void()], ["revokeSponsorshipMalformed", e.void()]],
                arms: {}
            }),
            e.enum("ClawbackResultCode", {
                clawbackSuccess: 0,
                clawbackMalformed: -1,
                clawbackNotClawbackEnabled: -2,
                clawbackNoTrust: -3,
                clawbackUnderfunded: -4
            }),
            e.union("ClawbackResult", {
                switchOn: e.lookup("ClawbackResultCode"),
                switchName: "code",
                switches: [["clawbackSuccess", e.void()], ["clawbackMalformed", e.void()], ["clawbackNotClawbackEnabled", e.void()], ["clawbackNoTrust", e.void()], ["clawbackUnderfunded", e.void()]],
                arms: {}
            }),
            e.enum("ClawbackClaimableBalanceResultCode", {
                clawbackClaimableBalanceSuccess: 0,
                clawbackClaimableBalanceDoesNotExist: -1,
                clawbackClaimableBalanceNotIssuer: -2,
                clawbackClaimableBalanceNotClawbackEnabled: -3
            }),
            e.union("ClawbackClaimableBalanceResult", {
                switchOn: e.lookup("ClawbackClaimableBalanceResultCode"),
                switchName: "code",
                switches: [["clawbackClaimableBalanceSuccess", e.void()], ["clawbackClaimableBalanceDoesNotExist", e.void()], ["clawbackClaimableBalanceNotIssuer", e.void()], ["clawbackClaimableBalanceNotClawbackEnabled", e.void()]],
                arms: {}
            }),
            e.enum("SetTrustLineFlagsResultCode", {
                setTrustLineFlagsSuccess: 0,
                setTrustLineFlagsMalformed: -1,
                setTrustLineFlagsNoTrustLine: -2,
                setTrustLineFlagsCantRevoke: -3,
                setTrustLineFlagsInvalidState: -4,
                setTrustLineFlagsLowReserve: -5
            }),
            e.union("SetTrustLineFlagsResult", {
                switchOn: e.lookup("SetTrustLineFlagsResultCode"),
                switchName: "code",
                switches: [["setTrustLineFlagsSuccess", e.void()], ["setTrustLineFlagsMalformed", e.void()], ["setTrustLineFlagsNoTrustLine", e.void()], ["setTrustLineFlagsCantRevoke", e.void()], ["setTrustLineFlagsInvalidState", e.void()], ["setTrustLineFlagsLowReserve", e.void()]],
                arms: {}
            }),
            e.enum("LiquidityPoolDepositResultCode", {
                liquidityPoolDepositSuccess: 0,
                liquidityPoolDepositMalformed: -1,
                liquidityPoolDepositNoTrust: -2,
                liquidityPoolDepositNotAuthorized: -3,
                liquidityPoolDepositUnderfunded: -4,
                liquidityPoolDepositLineFull: -5,
                liquidityPoolDepositBadPrice: -6,
                liquidityPoolDepositPoolFull: -7
            }),
            e.union("LiquidityPoolDepositResult", {
                switchOn: e.lookup("LiquidityPoolDepositResultCode"),
                switchName: "code",
                switches: [["liquidityPoolDepositSuccess", e.void()], ["liquidityPoolDepositMalformed", e.void()], ["liquidityPoolDepositNoTrust", e.void()], ["liquidityPoolDepositNotAuthorized", e.void()], ["liquidityPoolDepositUnderfunded", e.void()], ["liquidityPoolDepositLineFull", e.void()], ["liquidityPoolDepositBadPrice", e.void()], ["liquidityPoolDepositPoolFull", e.void()]],
                arms: {}
            }),
            e.enum("LiquidityPoolWithdrawResultCode", {
                liquidityPoolWithdrawSuccess: 0,
                liquidityPoolWithdrawMalformed: -1,
                liquidityPoolWithdrawNoTrust: -2,
                liquidityPoolWithdrawUnderfunded: -3,
                liquidityPoolWithdrawLineFull: -4,
                liquidityPoolWithdrawUnderMinimum: -5
            }),
            e.union("LiquidityPoolWithdrawResult", {
                switchOn: e.lookup("LiquidityPoolWithdrawResultCode"),
                switchName: "code",
                switches: [["liquidityPoolWithdrawSuccess", e.void()], ["liquidityPoolWithdrawMalformed", e.void()], ["liquidityPoolWithdrawNoTrust", e.void()], ["liquidityPoolWithdrawUnderfunded", e.void()], ["liquidityPoolWithdrawLineFull", e.void()], ["liquidityPoolWithdrawUnderMinimum", e.void()]],
                arms: {}
            }),
            e.enum("OperationResultCode", {
                opInner: 0,
                opBadAuth: -1,
                opNoAccount: -2,
                opNotSupported: -3,
                opTooManySubentries: -4,
                opExceededWorkLimit: -5,
                opTooManySponsoring: -6
            }),
            e.union("OperationResultTr", {
                switchOn: e.lookup("OperationType"),
                switchName: "type",
                switches: [["createAccount", "createAccountResult"], ["payment", "paymentResult"], ["pathPaymentStrictReceive", "pathPaymentStrictReceiveResult"], ["manageSellOffer", "manageSellOfferResult"], ["createPassiveSellOffer", "createPassiveSellOfferResult"], ["setOptions", "setOptionsResult"], ["changeTrust", "changeTrustResult"], ["allowTrust", "allowTrustResult"], ["accountMerge", "accountMergeResult"], ["inflation", "inflationResult"], ["manageData", "manageDataResult"], ["bumpSequence", "bumpSeqResult"], ["manageBuyOffer", "manageBuyOfferResult"], ["pathPaymentStrictSend", "pathPaymentStrictSendResult"], ["createClaimableBalance", "createClaimableBalanceResult"], ["claimClaimableBalance", "claimClaimableBalanceResult"], ["beginSponsoringFutureReserves", "beginSponsoringFutureReservesResult"], ["endSponsoringFutureReserves", "endSponsoringFutureReservesResult"], ["revokeSponsorship", "revokeSponsorshipResult"], ["clawback", "clawbackResult"], ["clawbackClaimableBalance", "clawbackClaimableBalanceResult"], ["setTrustLineFlags", "setTrustLineFlagsResult"], ["liquidityPoolDeposit", "liquidityPoolDepositResult"], ["liquidityPoolWithdraw", "liquidityPoolWithdrawResult"]],
                arms: {
                    createAccountResult: e.lookup("CreateAccountResult"),
                    paymentResult: e.lookup("PaymentResult"),
                    pathPaymentStrictReceiveResult: e.lookup("PathPaymentStrictReceiveResult"),
                    manageSellOfferResult: e.lookup("ManageSellOfferResult"),
                    createPassiveSellOfferResult: e.lookup("ManageSellOfferResult"),
                    setOptionsResult: e.lookup("SetOptionsResult"),
                    changeTrustResult: e.lookup("ChangeTrustResult"),
                    allowTrustResult: e.lookup("AllowTrustResult"),
                    accountMergeResult: e.lookup("AccountMergeResult"),
                    inflationResult: e.lookup("InflationResult"),
                    manageDataResult: e.lookup("ManageDataResult"),
                    bumpSeqResult: e.lookup("BumpSequenceResult"),
                    manageBuyOfferResult: e.lookup("ManageBuyOfferResult"),
                    pathPaymentStrictSendResult: e.lookup("PathPaymentStrictSendResult"),
                    createClaimableBalanceResult: e.lookup("CreateClaimableBalanceResult"),
                    claimClaimableBalanceResult: e.lookup("ClaimClaimableBalanceResult"),
                    beginSponsoringFutureReservesResult: e.lookup("BeginSponsoringFutureReservesResult"),
                    endSponsoringFutureReservesResult: e.lookup("EndSponsoringFutureReservesResult"),
                    revokeSponsorshipResult: e.lookup("RevokeSponsorshipResult"),
                    clawbackResult: e.lookup("ClawbackResult"),
                    clawbackClaimableBalanceResult: e.lookup("ClawbackClaimableBalanceResult"),
                    setTrustLineFlagsResult: e.lookup("SetTrustLineFlagsResult"),
                    liquidityPoolDepositResult: e.lookup("LiquidityPoolDepositResult"),
                    liquidityPoolWithdrawResult: e.lookup("LiquidityPoolWithdrawResult")
                }
            }),
            e.union("OperationResult", {
                switchOn: e.lookup("OperationResultCode"),
                switchName: "code",
                switches: [["opInner", "tr"], ["opBadAuth", e.void()], ["opNoAccount", e.void()], ["opNotSupported", e.void()], ["opTooManySubentries", e.void()], ["opExceededWorkLimit", e.void()], ["opTooManySponsoring", e.void()]],
                arms: {
                    tr: e.lookup("OperationResultTr")
                }
            }),
            e.enum("TransactionResultCode", {
                txFeeBumpInnerSuccess: 1,
                txSuccess: 0,
                txFailed: -1,
                txTooEarly: -2,
                txTooLate: -3,
                txMissingOperation: -4,
                txBadSeq: -5,
                txBadAuth: -6,
                txInsufficientBalance: -7,
                txNoAccount: -8,
                txInsufficientFee: -9,
                txBadAuthExtra: -10,
                txInternalError: -11,
                txNotSupported: -12,
                txFeeBumpInnerFailed: -13,
                txBadSponsorship: -14,
                txBadMinSeqAgeOrGap: -15,
                txMalformed: -16
            }),
            e.union("InnerTransactionResultResult", {
                switchOn: e.lookup("TransactionResultCode"),
                switchName: "code",
                switches: [["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", e.void()], ["txTooLate", e.void()], ["txMissingOperation", e.void()], ["txBadSeq", e.void()], ["txBadAuth", e.void()], ["txInsufficientBalance", e.void()], ["txNoAccount", e.void()], ["txInsufficientFee", e.void()], ["txBadAuthExtra", e.void()], ["txInternalError", e.void()], ["txNotSupported", e.void()], ["txBadSponsorship", e.void()], ["txBadMinSeqAgeOrGap", e.void()], ["txMalformed", e.void()]],
                arms: {
                    results: e.varArray(e.lookup("OperationResult"), 0x7fffffff)
                }
            }),
            e.union("InnerTransactionResultExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("InnerTransactionResult", [["feeCharged", e.lookup("Int64")], ["result", e.lookup("InnerTransactionResultResult")], ["ext", e.lookup("InnerTransactionResultExt")]]),
            e.struct("InnerTransactionResultPair", [["transactionHash", e.lookup("Hash")], ["result", e.lookup("InnerTransactionResult")]]),
            e.union("TransactionResultResult", {
                switchOn: e.lookup("TransactionResultCode"),
                switchName: "code",
                switches: [["txFeeBumpInnerSuccess", "innerResultPair"], ["txFeeBumpInnerFailed", "innerResultPair"], ["txSuccess", "results"], ["txFailed", "results"], ["txTooEarly", e.void()], ["txTooLate", e.void()], ["txMissingOperation", e.void()], ["txBadSeq", e.void()], ["txBadAuth", e.void()], ["txInsufficientBalance", e.void()], ["txNoAccount", e.void()], ["txInsufficientFee", e.void()], ["txBadAuthExtra", e.void()], ["txInternalError", e.void()], ["txNotSupported", e.void()], ["txBadSponsorship", e.void()], ["txBadMinSeqAgeOrGap", e.void()], ["txMalformed", e.void()]],
                arms: {
                    innerResultPair: e.lookup("InnerTransactionResultPair"),
                    results: e.varArray(e.lookup("OperationResult"), 0x7fffffff)
                }
            }),
            e.union("TransactionResultExt", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.struct("TransactionResult", [["feeCharged", e.lookup("Int64")], ["result", e.lookup("TransactionResultResult")], ["ext", e.lookup("TransactionResultExt")]]),
            e.typedef("Hash", e.opaque(32)),
            e.typedef("Uint256", e.opaque(32)),
            e.typedef("Uint32", e.uint()),
            e.typedef("Int32", e.int()),
            e.typedef("Uint64", e.uhyper()),
            e.typedef("Int64", e.hyper()),
            e.union("ExtensionPoint", {
                switchOn: e.int(),
                switchName: "v",
                switches: [[0, e.void()]],
                arms: {}
            }),
            e.enum("CryptoKeyType", {
                keyTypeEd25519: 0,
                keyTypePreAuthTx: 1,
                keyTypeHashX: 2,
                keyTypeEd25519SignedPayload: 3,
                keyTypeMuxedEd25519: 256
            }),
            e.enum("PublicKeyType", {
                publicKeyTypeEd25519: 0
            }),
            e.enum("SignerKeyType", {
                signerKeyTypeEd25519: 0,
                signerKeyTypePreAuthTx: 1,
                signerKeyTypeHashX: 2,
                signerKeyTypeEd25519SignedPayload: 3
            }),
            e.union("PublicKey", {
                switchOn: e.lookup("PublicKeyType"),
                switchName: "type",
                switches: [["publicKeyTypeEd25519", "ed25519"]],
                arms: {
                    ed25519: e.lookup("Uint256")
                }
            }),
            e.struct("SignerKeyEd25519SignedPayload", [["ed25519", e.lookup("Uint256")], ["payload", e.varOpaque(64)]]),
            e.union("SignerKey", {
                switchOn: e.lookup("SignerKeyType"),
                switchName: "type",
                switches: [["signerKeyTypeEd25519", "ed25519"], ["signerKeyTypePreAuthTx", "preAuthTx"], ["signerKeyTypeHashX", "hashX"], ["signerKeyTypeEd25519SignedPayload", "ed25519SignedPayload"]],
                arms: {
                    ed25519: e.lookup("Uint256"),
                    preAuthTx: e.lookup("Uint256"),
                    hashX: e.lookup("Uint256"),
                    ed25519SignedPayload: e.lookup("SignerKeyEd25519SignedPayload")
                }
            }),
            e.typedef("Signature", e.varOpaque(64)),
            e.typedef("SignatureHint", e.opaque(4)),
            e.typedef("NodeId", e.lookup("PublicKey")),
            e.struct("Curve25519Secret", [["key", e.opaque(32)]]),
            e.struct("Curve25519Public", [["key", e.opaque(32)]]),
            e.struct("HmacSha256Key", [["key", e.opaque(32)]]),
            e.struct("HmacSha256Mac", [["mac", e.opaque(32)]])
        })
    }
}]);
