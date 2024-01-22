export namespace FIX40 {
  export interface Header {
    BeginString: 'FIX.4.0'
    BodyLength: number
    MsgType: /** HEARTBEAT */ '0' | /** TEST_REQUEST */ '1' | /** RESEND_REQUEST */ '2' | /** REJECT */ '3' | /** SEQUENCE_RESET */ '4' | /** LOGOUT */ '5' | /** INDICATION_OF_INTEREST */ '6' | /** ADVERTISEMENT */ '7' | /** EXECUTION_REPORT */ '8' | /** ORDER_CANCEL_REJECT */ '9' | /** LOGON */ 'A' | /** NEWS */ 'B' | /** EMAIL */ 'C' | /** ORDER_SINGLE */ 'D' | /** ORDER_LIST */ 'E' | /** ORDER_CANCEL_REQUEST */ 'F' | /** ORDER_CANCEL */ 'G' | /** ORDER_STATUS_REQUEST */ 'H' | /** ALLOCATION */ 'J' | /** LIST_CANCEL_REQUEST */ 'K' | /** LIST_EXECUTE */ 'L' | /** LIST_STATUS_REQUEST */ 'M' | /** LIST_STATUS */ 'N' | /** ALLOCATION_ACK */ 'P' | /** DONT_KNOW_TRADE */ 'Q' | /** QUOTE_REQUEST */ 'R' | /** QUOTE */ 'S'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: number
    SecureData?: string
    MsgSeqNum: number
    SenderSubID?: string
    TargetSubID?: string
    OnBehalfOfSubID?: string
    DeliverToSubID?: string
    PossDupFlag?: /** POSSIBLE_DUPLICATE */ 'Y' | /** ORIGINAL_TRANSMISSION */ 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
  }

  interface HeartbeatMessage {
    MsgType: '0'
    TestReqID?: string
  }

  interface LogonMessage {
    MsgType: 'A'
    EncryptMethod: /** NONE_OTHER */ 0 | /** PKCS */ 1 | /** DES */ 2 | /** PKCSDES */ 3 | /** PGPDES */ 4 | /** PGPDESMD5 */ 5 | /** PEMDESMD5 */ 6
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
  }

  interface TestRequestMessage {
    MsgType: '1'
    TestReqID: string
  }

  interface ResendRequestMessage {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  interface RejectMessage {
    MsgType: '3'
    RefSeqNum: number
    Text?: string
  }

  interface SequenceResetMessage {
    MsgType: '4'
    GapFillFlag?: /** GAP_FILL_MESSAGE_MSGSEQNUM_FIELD_VALID */ 'Y' | /** SEQUENCE_RESET_IGNORE_MSGSEQNUM */ 'N'
    NewSeqNo: number
  }

  interface LogoutMessage {
    MsgType: '5'
    Text?: string
  }

  interface AdvertisementMessage {
    MsgType: '7'
    AdvId: number
    AdvTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    AdvRefID?: number
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    AdvSide: /** BUY */ 'B' | /** SELL */ 'S' | /** CROSS */ 'X' | /** TRADE */ 'T'
    Shares: number
    Price?: number
    Currency?: string
    TransactTime?: string
    Text?: string
  }

  interface IndicationofInterestMessage {
    MsgType: '6'
    IOIID: number
    IOITransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    IOIRefID?: number
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: /** LOW */ 'L' | /** MEDIUM */ 'M' | /** HIGH */ 'H'
    IOIOthSvc?: string
    IOINaturalFlag?: /** NATURAL */ 'Y' | /** NOT_NATURAL */ 'N'
    IOIQualifier?: /** CROSSING_OPPORTUNITY */ 'X' | /** AT_THE_OPEN */ 'O' | /** MORE_BEHIND */ 'M' | /** TAKING_A_POSITION */ 'P' | /** VERSUS */ 'V' | /** CURRENT_QUOTE */ 'Q' | /** AT_THE_CLOSE */ 'C' | /** PORTFOLIO_SHOWN */ 'S' | /** IN_TOUCH_WITH */ 'I' | /** INDICATION_WORKING_AWAY */ 'W' | /** ALL_OR_NONE */ 'A' | /** LIMIT */ 'L' | /** THROUGH_THE_DAY */ 'T'
    Text?: string
  }

  interface NewsMessage {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: /** NORMAL */ '0' | /** FLASH */ '1' | /** BACKGROUND */ '2'
    RelatdSym?: string
    LinesOfText: { Text: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface EmailMessage {
    MsgType: 'C'
    EmailType: /** NEW */ '0' | /** REPLY */ '1' | /** ADMIN_REPLY */ '2'
    OrigTime?: string
    RelatdSym?: string
    OrderID?: string
    ClOrdID?: string
    LinesOfText: { Text: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface QuoteRequestMessage {
    MsgType: 'R'
    QuoteReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    OrderQty?: number
  }

  interface QuoteMessage {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    BidPx: number
    OfferPx?: number
    BidSize?: number
    OfferSize?: number
    ValidUntilTime?: string
  }

  interface NewOrderSingleMessage {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: /** NONE */ '0' | /** POSIT */ '4'
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    OrderQty: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    IOIID?: number
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
  }

  interface ExecutionReportMessage {
    MsgType: '8'
    OrderID: string
    ClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    ExecID: number
    ExecTransType: /** NEW */ '0' | /** CANCEL */ '1' | /** CORRECT */ '2' | /** STATUS */ '3'
    ExecRefID?: number
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCELREPLACE */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C'
    OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    OrderQty: number
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W'
    LastShares: number
    LastPx: number
    LastMkt?: string
    LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4'
    CumQty: number
    AvgPx: number
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: /** YES */ 'Y' | /** NO */ 'N'
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    NoMiscFees?: { MiscFeeAmt?: number, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' }[]
    NetMoney?: number
    SettlCurrAmt?: number
    SettlCurrency?: string
    Text?: string
  }

  interface DontKnowTradeMessage {
    MsgType: 'Q'
    OrderID?: string
    ExecID?: number
    DKReason: /** UNKNOWN_SYMBOL */ 'A' | /** WRONG_SIDE */ 'B' | /** QUANTITY_EXCEEDS_ORDER */ 'C' | /** NO_MATCHING_ORDER */ 'D' | /** PRICE_EXCEEDS_LIMIT */ 'E' | /** OTHER */ 'Z'
    Symbol: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    OrderQty: number
    LastShares: number
    LastPx: number
    Text?: string
  }

  interface OrderCancelReplaceRequestMessage {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: /** NONE */ '0' | /** POSIT */ '4'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    OrderQty: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
  }

  interface OrderCancelRequestMessage {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    ListID?: string
    CxlType: /** PARTIAL_CANCEL */ 'P' | /** FULL_REMAINING_QUANTITY */ 'F'
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    OrderQty: number
    Text?: string
  }

  interface OrderCancelRejectMessage {
    MsgType: '9'
    OrderID: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    CxlRejReason?: /** TOO_LATE_TO_CANCEL */ 0 | /** UNKNOWN_ORDER */ 1
    Text?: string
  }

  interface OrderStatusRequestMessage {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
  }

  interface AllocationMessage {
    MsgType: 'J'
    AllocID: number
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2'
    RefAllocID?: number
    NoOrders: { ClOrdID: string, OrderID?: string, ListID?: string, WaveNo?: string }[]
    NoExecs?: { ExecID?: number, LastShares?: number, LastPx?: number, LastMkt?: string }[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    Shares: number
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    NetMoney?: number
    NoMiscFees?: { MiscFeeAmt?: number, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' }[]
    SettlCurrAmt?: number
    SettlCurrency?: string
    OpenClose?: string
    Text?: string
    NoAllocs: { AllocAccount: string, AllocShares: number, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6', ExecBroker?: string, ClientID?: string, Commission?: number, CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3', NoDlvyInst?: { BrokerOfCredit?: string, DlvyInst?: string }[] }[]
  }

  interface AllocationACKMessage {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: number
    TradeDate: string
    TransactTime?: string
    AllocStatus: /** ACCEPTED */ 0 | /** REJECTED */ 1 | /** PARTIAL_ACCEPT */ 2 | /** RECEIVED */ 3
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7
    Text?: string
  }

  interface NewOrderListMessage {
    MsgType: 'E'
    ListID: string
    WaveNo?: string
    ListSeqNo: number
    ListNoOrds: number
    ListExecInst?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: /** NONE */ '0' | /** POSIT */ '4'
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6'
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    OrderQty: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
  }

  interface ListStatusMessage {
    MsgType: 'N'
    ListID: string
    WaveNo?: string
    NoRpts: number
    RptSeq: number
    NoOrders: { ClOrdID: string, CumQty: number, CxlQty: number, AvgPx: number }[]
  }

  interface ListExecuteMessage {
    MsgType: 'L'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  interface ListCancelRequestMessage {
    MsgType: 'K'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  interface ListStatusRequestMessage {
    MsgType: 'M'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface Trailer {
    SignatureLength?: number
    Signature?: string
    CheckSum: string
  }

  export type Messages =
    | HeartbeatMessage
    | LogonMessage
    | TestRequestMessage
    | ResendRequestMessage
    | RejectMessage
    | SequenceResetMessage
    | LogoutMessage
    | AdvertisementMessage
    | IndicationofInterestMessage
    | NewsMessage
    | EmailMessage
    | QuoteRequestMessage
    | QuoteMessage
    | NewOrderSingleMessage
    | ExecutionReportMessage
    | DontKnowTradeMessage
    | OrderCancelReplaceRequestMessage
    | OrderCancelRequestMessage
    | OrderCancelRejectMessage
    | OrderStatusRequestMessage
    | AllocationMessage
    | AllocationACKMessage
    | NewOrderListMessage
    | ListStatusMessage
    | ListExecuteMessage
    | ListCancelRequestMessage
    | ListStatusRequestMessage
}

export namespace FIX41 {
  export interface Header {
    BeginString: 'FIX.4.1'
    BodyLength: number
    MsgType: /** HEARTBEAT */ '0' | /** TEST_REQUEST */ '1' | /** RESEND_REQUEST */ '2' | /** REJECT */ '3' | /** SEQUENCE_RESET */ '4' | /** LOGOUT */ '5' | /** INDICATION_OF_INTEREST */ '6' | /** ADVERTISEMENT */ '7' | /** EXECUTION_REPORT */ '8' | /** ORDER_CANCEL_REJECT */ '9' | /** LOGON */ 'A' | /** NEWS */ 'B' | /** EMAIL */ 'C' | /** ORDER_SINGLE */ 'D' | /** ORDER_LIST */ 'E' | /** ORDER_CANCEL_REQUEST */ 'F' | /** ORDER_CANCEL */ 'G' | /** ORDER_STATUS_REQUEST */ 'H' | /** ALLOCATION */ 'J' | /** LIST_CANCEL_REQUEST */ 'K' | /** LIST_EXECUTE */ 'L' | /** LIST_STATUS_REQUEST */ 'M' | /** LIST_STATUS */ 'N' | /** ALLOCATION_ACK */ 'P' | /** DONT_KNOW_TRADE */ 'Q' | /** QUOTE_REQUEST */ 'R' | /** QUOTE */ 'S' | /** SETTLEMENT_INSTRUCTIONS */ 'T'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: number
    SecureData?: string
    MsgSeqNum: number
    SenderSubID?: string
    SenderLocationID?: string
    TargetSubID?: string
    TargetLocationID?: string
    OnBehalfOfSubID?: string
    OnBehalfOfLocationID?: string
    DeliverToSubID?: string
    DeliverToLocationID?: string
    PossDupFlag?: /** POSSIBLE_DUPLICATE */ 'Y' | /** ORIGINAL_TRANSMISSION */ 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
  }

  interface HeartbeatMessage {
    MsgType: '0'
    TestReqID?: string
  }

  interface LogonMessage {
    MsgType: 'A'
    EncryptMethod: /** NONE_OTHER */ 0 | /** PKCS */ 1 | /** DES */ 2 | /** PKCSDES */ 3 | /** PGPDES */ 4 | /** PGPDESMD5 */ 5 | /** PEMDESMD5 */ 6
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: /** YES_RESET_SEQUENCE_NUMBERS */ 'Y' | /** NO */ 'N'
  }

  interface TestRequestMessage {
    MsgType: '1'
    TestReqID: string
  }

  interface ResendRequestMessage {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  interface RejectMessage {
    MsgType: '3'
    RefSeqNum: number
    Text?: string
  }

  interface SequenceResetMessage {
    MsgType: '4'
    GapFillFlag?: /** GAP_FILL_MESSAGE_MSGSEQNUM_FIELD_VALID */ 'Y' | /** SEQUENCE_RESET_IGNORE_MSGSEQNUM */ 'N'
    NewSeqNo: number
  }

  interface LogoutMessage {
    MsgType: '5'
    Text?: string
  }

  interface AdvertisementMessage {
    MsgType: '7'
    AdvId: string
    AdvTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    AdvRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    AdvSide: /** BUY */ 'B' | /** SELL */ 'S' | /** CROSS */ 'X' | /** TRADE */ 'T'
    Shares: number
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    URLLink?: string
    LastMkt?: string
  }

  interface IndicationofInterestMessage {
    MsgType: '6'
    IOIID: string
    IOITransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    IOIRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: /** LOW */ 'L' | /** MEDIUM */ 'M' | /** HIGH */ 'H'
    IOIOthSvc?: string
    IOINaturalFlag?: /** NATURAL */ 'Y' | /** NOT_NATURAL */ 'N'
    NoIOIQualifiers?: { IOIQualifier?: /** CROSSING_OPPORTUNITY */ 'X' | /** AT_THE_OPEN */ 'O' | /** MORE_BEHIND */ 'M' | /** TAKING_A_POSITION */ 'P' | /** VERSUS */ 'V' | /** AT_THE_MARKET */ 'Q' | /** AT_THE_CLOSE */ 'C' | /** PORTFOLIO_SHOWN */ 'S' | /** IN_TOUCH_WITH */ 'I' | /** INDICATION_WORKING_AWAY */ 'W' | /** ALL_OR_NONE */ 'A' | /** LIMIT */ 'L' | /** THROUGH_THE_DAY */ 'T' | /** AT_THE_MIDPOINT */ 'Y' | /** PREOPEN */ 'Z' }[]
    Text?: string
    TransactTime?: string
    URLLink?: string
  }

  interface NewsMessage {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: /** NORMAL */ '0' | /** FLASH */ '1' | /** BACKGROUND */ '2'
    Headline: string
    NoRelatedSym?: { RelatdSym?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, SecurityExchange?: string, Issuer?: string, SecurityDesc?: string }[]
    LinesOfText: { Text: string }[]
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  interface EmailMessage {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: /** NEW */ '0' | /** REPLY */ '1' | /** ADMIN_REPLY */ '2'
    OrigTime?: string
    Subject: string
    NoRelatedSym?: { RelatdSym?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, SecurityExchange?: string, Issuer?: string, SecurityDesc?: string }[]
    OrderID?: string
    ClOrdID?: string
    LinesOfText: { Text: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface QuoteRequestMessage {
    MsgType: 'R'
    QuoteReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    OrderQty?: number
    FutSettDate?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    FutSettDate2?: string
    OrderQty2?: number
  }

  interface QuoteMessage {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    BidPx?: number
    OfferPx?: number
    BidSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    TransactTime?: string
    FutSettDate?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    FutSettDate2?: string
    OrderQty2?: number
  }

  interface NewOrderSingleMessage {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    OrderQty?: number
    CashOrderQty?: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1
    MaxShow?: number
    PegDifference?: number
  }

  interface ExecutionReportMessage {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    ExecID: string
    ExecTransType: /** NEW */ '0' | /** CANCEL */ '1' | /** CORRECT */ '2' | /** STATUS */ '3'
    ExecRefID?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELLED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCELREPLACE */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C'
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCELREPLACE */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C'
    OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    OrderQty: number
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    LastShares: number
    LastPx: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: /** YES */ 'Y' | /** NO */ 'N'
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    SettlCurrAmt?: number
    SettlCurrency?: string
    Text?: string
  }

  interface DontKnowTradeMessage {
    MsgType: 'Q'
    OrderID?: string
    ExecID?: string
    DKReason: /** UNKNOWN_SYMBOL */ 'A' | /** WRONG_SIDE */ 'B' | /** QUANTITY_EXCEEDS_ORDER */ 'C' | /** NO_MATCHING_ORDER */ 'D' | /** PRICE_EXCEEDS_LIMIT */ 'E' | /** OTHER */ 'Z'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    OrderQty?: number
    CashOrderQty?: number
    LastShares?: number
    LastPx?: number
    Text?: string
  }

  interface OrderCancelReplaceRequestMessage {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    OrderQty?: number
    CashOrderQty?: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1
    MaxShow?: number
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
  }

  interface OrderCancelRequestMessage {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    ListID?: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    OrderQty?: number
    CashOrderQty?: number
    Text?: string
  }

  interface OrderCancelRejectMessage {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID: string
    OrigClOrdID: string
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCELREPLACE */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C'
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    CxlRejReason?: /** TOO_LATE_TO_CANCEL */ 0 | /** UNKNOWN_ORDER */ 1
    Text?: string
  }

  interface OrderStatusRequestMessage {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
  }

  interface AllocationMessage {
    MsgType: 'J'
    AllocID: string
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2' | /** PRELIMINARY */ '3' | /** CALCULATED */ '4'
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: /** FX_NETTING */ 0 | /** FX_SWAP */ 1
    NoOrders: { ClOrdID: string, OrderID?: string, SecondaryOrderID?: string, ListID?: string, WaveNo?: string }[]
    NoExecs?: { LastShares?: number, ExecID?: string, LastPx?: number, LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4' }[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Shares: number
    LastMkt?: string
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    NetMoney?: number
    OpenClose?: string
    Text?: string
    NumDaysInterest?: number
    AccruedInterestRate?: number
    NoAllocs: { AllocAccount: string, AllocShares: number, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6', BrokerOfCredit?: string, NotifyBrokerOfCredit?: /** DETAILS_SHOULD_BE_COMMUNICATED */ 'Y' | /** DETAILS_SHOULD_NOT_BE_COMMUNICATED */ 'N', AllocHandlInst?: /** MATCH */ 1 | /** FORWARD */ 2 | /** FORWARD_AND_MATCH */ 3, AllocText?: string, ExecBroker?: string, ClientID?: string, Commission?: number, CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3', AllocAvgPx?: number, AllocNetMoney?: number, SettlCurrAmt?: number, SettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: string, AccruedInterestAmt?: number, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3', NoMiscFees?: { MiscFeeAmt?: number, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' }[] }[]
  }

  interface AllocationACKMessage {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: /** ACCEPTED */ 0 | /** REJECTED */ 1 | /** PARTIAL_ACCEPT */ 2 | /** RECEIVED */ 3
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7
    Text?: string
  }

  interface SettlementInstructionsMessage {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    SettlInstMode: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3'
    SettlInstSource: /** BROKER */ '1' | /** INSTITUTION */ '2'
    AllocAccount: string
    SettlLocation?: /** CEDEL */ 'CED' | /** DEPOSITORY_TRUST_COMPANY */ 'DTC' | /** EUROCLEAR */ 'EUR' | /** FEDERAL_BOOK_ENTRY */ 'FED' | /** PHYSICAL */ 'PNY' | /** PARTICIPANT_TRUST_COMPANY */ 'PTC' | /** LOCAL_MARKET_SETTLE_LOCATION */ 'ISO'
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    EffectiveTime?: string
    TransactTime: string
    ClientID?: string
    ExecBroker?: string
    StandInstDbType?: /** OTHER */ 0 | /** DTC_SID */ 1 | /** THOMSON_ALERT */ 2 | /** A_GLOBAL_CUSTODIAN */ 3
    StandInstDbName?: string
    StandInstDbID?: string
    SettlDeliveryType?: number
    SettlDepositoryCode?: string
    SettlBrkrCode?: string
    SettlInstCode?: string
    SecuritySettlAgentName?: string
    SecuritySettlAgentCode?: string
    SecuritySettlAgentAcctNum?: string
    SecuritySettlAgentAcctName?: string
    SecuritySettlAgentContactName?: string
    SecuritySettlAgentContactPhone?: string
    CashSettlAgentName?: string
    CashSettlAgentCode?: string
    CashSettlAgentAcctNum?: string
    CashSettlAgentAcctName?: string
    CashSettlAgentContactName?: string
    CashSettlAgentContactPhone?: string
  }

  interface NewOrderListMessage {
    MsgType: 'E'
    ListID: string
    WaveNo?: string
    ListSeqNo: number
    ListNoOrds: number
    ListExecInst?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPLE_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8'
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    OrderQty: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    ExpireTime?: string
    Commission?: number
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1
    MaxShow?: number
  }

  interface ListStatusMessage {
    MsgType: 'N'
    ListID: string
    WaveNo?: string
    NoRpts: number
    RptSeq: number
    NoOrders: { ClOrdID: string, CumQty: number, LeavesQty: number, CxlQty: number, AvgPx: number }[]
  }

  interface ListExecuteMessage {
    MsgType: 'L'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  interface ListCancelRequestMessage {
    MsgType: 'K'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  interface ListStatusRequestMessage {
    MsgType: 'M'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface Trailer {
    SignatureLength?: number
    Signature?: string
    CheckSum: string
  }

  export type Messages =
    | HeartbeatMessage
    | LogonMessage
    | TestRequestMessage
    | ResendRequestMessage
    | RejectMessage
    | SequenceResetMessage
    | LogoutMessage
    | AdvertisementMessage
    | IndicationofInterestMessage
    | NewsMessage
    | EmailMessage
    | QuoteRequestMessage
    | QuoteMessage
    | NewOrderSingleMessage
    | ExecutionReportMessage
    | DontKnowTradeMessage
    | OrderCancelReplaceRequestMessage
    | OrderCancelRequestMessage
    | OrderCancelRejectMessage
    | OrderStatusRequestMessage
    | AllocationMessage
    | AllocationACKMessage
    | SettlementInstructionsMessage
    | NewOrderListMessage
    | ListStatusMessage
    | ListExecuteMessage
    | ListCancelRequestMessage
    | ListStatusRequestMessage
}

export namespace FIX42 {
  export interface Header {
    BeginString: 'FIX.4.2'
    BodyLength: number
    MsgType: /** HEARTBEAT */ '0' | /** TEST_REQUEST */ '1' | /** RESEND_REQUEST */ '2' | /** REJECT */ '3' | /** SEQUENCE_RESET */ '4' | /** LOGOUT */ '5' | /** INDICATION_OF_INTEREST */ '6' | /** ADVERTISEMENT */ '7' | /** EXECUTION_REPORT */ '8' | /** ORDER_CANCEL_REJECT */ '9' | /** LOGON */ 'A' | /** NEWS */ 'B' | /** EMAIL */ 'C' | /** ORDER_SINGLE */ 'D' | /** ORDER_LIST */ 'E' | /** ORDER_CANCEL_REQUEST */ 'F' | /** ORDER_CANCEL_REPLACE_REQUEST */ 'G' | /** ORDER_STATUS_REQUEST */ 'H' | /** ALLOCATION */ 'J' | /** LIST_CANCEL_REQUEST */ 'K' | /** LIST_EXECUTE */ 'L' | /** LIST_STATUS_REQUEST */ 'M' | /** LIST_STATUS */ 'N' | /** ALLOCATION_ACK */ 'P' | /** DONT_KNOW_TRADE */ 'Q' | /** QUOTE_REQUEST */ 'R' | /** QUOTE */ 'S' | /** SETTLEMENT_INSTRUCTIONS */ 'T' | /** MARKET_DATA_REQUEST */ 'V' | /** MARKET_DATA_SNAPSHOT */ 'W' | /** MARKET_DATA_INCREMENTAL_REFRESH */ 'X' | /** MARKET_DATA_REQUEST_REJECT */ 'Y' | /** QUOTE_CANCEL */ 'Z' | /** QUOTE_STATUS_REQUEST */ 'a' | /** MASS_QUOTE_ACKNOWLEDGEMENT */ 'b' | /** SECURITY_DEFINITION_REQUEST */ 'c' | /** SECURITY_DEFINITION */ 'd' | /** SECURITY_STATUS_REQUEST */ 'e' | /** SECURITY_STATUS */ 'f' | /** TRADING_SESSION_STATUS_REQUEST */ 'g' | /** TRADING_SESSION_STATUS */ 'h' | /** MASS_QUOTE */ 'i' | /** BUSINESS_MESSAGE_REJECT */ 'j' | /** BID_REQUEST */ 'k' | /** BID_RESPONSE */ 'l' | /** LIST_STRIKE_PRICE */ 'm'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: number
    SecureData?: string
    MsgSeqNum: number
    SenderSubID?: string
    SenderLocationID?: string
    TargetSubID?: string
    TargetLocationID?: string
    OnBehalfOfSubID?: string
    OnBehalfOfLocationID?: string
    DeliverToSubID?: string
    DeliverToLocationID?: string
    PossDupFlag?: /** POSSIBLE_DUPLICATE */ 'Y' | /** ORIGINAL_TRANSMISSION */ 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
    XmlDataLen?: number
    XmlData?: string
    MessageEncoding?: string
    LastMsgSeqNumProcessed?: number
    OnBehalfOfSendingTime?: string
  }

  interface HeartbeatMessage {
    MsgType: '0'
    TestReqID?: string
  }

  interface LogonMessage {
    MsgType: 'A'
    EncryptMethod: /** NONE_OTHER */ 0 | /** PKCS */ 1 | /** DES */ 2 | /** PKCSDES */ 3 | /** PGPDES */ 4 | /** PGPDESMD5 */ 5 | /** PEMDESMD5 */ 6
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: /** YES_RESET_SEQUENCE_NUMBERS */ 'Y' | /** NO */ 'N'
    MaxMessageSize?: number
    NoMsgTypes?: { RefMsgType?: string, MsgDirection?: /** SEND */ 'S' | /** RECEIVE */ 'R' }[]
  }

  interface TestRequestMessage {
    MsgType: '1'
    TestReqID: string
  }

  interface ResendRequestMessage {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  interface RejectMessage {
    MsgType: '3'
    RefSeqNum: number
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: /** INVALID_TAG_NUMBER */ 0 | /** REQUIRED_TAG_MISSING */ 1 | /** TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE */ 2 | /** UNDEFINED_TAG */ 3 | /** TAG_SPECIFIED_WITHOUT_A_VALUE */ 4 | /** VALUE_IS_INCORRECT */ 5 | /** INCORRECT_DATA_FORMAT_FOR_VALUE */ 6 | /** DECRYPTION_PROBLEM */ 7 | /** SIGNATURE_PROBLEM */ 8 | /** COMPID_PROBLEM */ 9 | /** SENDINGTIME_ACCURACY_PROBLEM */ 10 | /** E */ 11
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SequenceResetMessage {
    MsgType: '4'
    GapFillFlag?: /** GAP_FILL_MESSAGE_MSGSEQNUM_FIELD_VALID */ 'Y' | /** SEQUENCE_RESET_IGNORE_MSGSEQNUM */ 'N'
    NewSeqNo: number
  }

  interface LogoutMessage {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface AdvertisementMessage {
    MsgType: '7'
    AdvId: string
    AdvTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    AdvRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    AdvSide: /** BUY */ 'B' | /** SELL */ 'S' | /** CROSS */ 'X' | /** TRADE */ 'T'
    Shares: number
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    URLLink?: string
    LastMkt?: string
    TradingSessionID?: string
  }

  interface IndicationofInterestMessage {
    MsgType: '6'
    IOIID: string
    IOITransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    IOIRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: /** LOW */ 'L' | /** MEDIUM */ 'M' | /** HIGH */ 'H'
    IOINaturalFlag?: /** NATURAL */ 'Y' | /** NOT_NATURAL */ 'N'
    NoIOIQualifiers?: { IOIQualifier?: /** ALL_OR_NONE */ 'A' | /** AT_THE_CLOSE */ 'C' | /** IN_TOUCH_WITH */ 'I' | /** LIMIT */ 'L' | /** MORE_BEHIND */ 'M' | /** AT_THE_OPEN */ 'O' | /** TAKING_A_POSITION */ 'P' | /** AT_THE_MARKET */ 'Q' | /** READY_TO_TRADE */ 'R' | /** PORTFOLIO_SHOWN */ 'S' | /** THROUGH_THE_DAY */ 'T' | /** VERSUS */ 'V' | /** INDICATION_WORKING_AWAY */ 'W' | /** CROSSING_OPPORTUNITY */ 'X' | /** AT_THE_MIDPOINT */ 'Y' | /** PREOPEN */ 'Z' }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    SpreadToBenchmark?: number
    Benchmark?: /** CURVE */ '1' | /** FIVEYR */ '2' | /** OLD5 */ '3' | /** TENYR */ '4' | /** OLD10 */ '5' | /** THIRTYYR */ '6' | /** OLD30 */ '7' | /** THREEMOLIBOR */ '8' | /** SIXMOLIBOR */ '9'
  }

  interface NewsMessage {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: /** NORMAL */ '0' | /** FLASH */ '1' | /** BACKGROUND */ '2'
    Headline: string
    EncodedHeadlineLen?: number
    EncodedHeadline?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: { RelatdSym?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string }[]
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  interface EmailMessage {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: /** NEW */ '0' | /** REPLY */ '1' | /** ADMIN_REPLY */ '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: number
    EncodedSubject?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: { RelatdSym?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string }[]
    OrderID?: string
    ClOrdID?: string
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface QuoteRequestMessage {
    MsgType: 'R'
    QuoteReqID: string
    NoRelatedSym: { Symbol: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, PrevClosePx?: number, QuoteRequestType?: number, TradingSessionID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', OrderQty?: number, FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, ExpireTime?: string, TransactTime?: string, Currency?: string }[]
  }

  interface QuoteMessage {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteResponseLevel?: number
    TradingSessionID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    BidPx?: number
    OfferPx?: number
    BidSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    TransactTime?: string
    FutSettDate?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P'
    FutSettDate2?: string
    OrderQty2?: number
    Currency?: string
  }

  interface MassQuoteMessage {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteResponseLevel?: number
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: { QuoteSetID: string, UnderlyingSymbol: string, UnderlyingSymbolSfx?: string, UnderlyingSecurityID?: string, UnderlyingIDSource?: string, UnderlyingSecurityType?: string, UnderlyingMaturityMonthYear?: string, UnderlyingMaturityDay?: string, UnderlyingPutOrCall?: number, UnderlyingStrikePrice?: number, UnderlyingOptAttribute?: string, UnderlyingContractMultiplier?: number, UnderlyingCouponRate?: number, UnderlyingSecurityExchange?: string, UnderlyingIssuer?: string, EncodedUnderlyingIssuerLen?: number, EncodedUnderlyingIssuer?: string, UnderlyingSecurityDesc?: string, EncodedUnderlyingSecurityDescLen?: number, EncodedUnderlyingSecurityDesc?: string, QuoteSetValidUntilTime?: string, TotQuoteEntries: number, NoQuoteEntries: { QuoteEntryID: string, Symbol?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, BidPx?: number, OfferPx?: number, BidSize?: number, OfferSize?: number, ValidUntilTime?: string, BidSpotRate?: number, OfferSpotRate?: number, BidForwardPoints?: number, OfferForwardPoints?: number, TransactTime?: string, TradingSessionID?: string, FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, Currency?: string }[] }[]
  }

  interface QuoteCancelMessage {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: number
    QuoteResponseLevel?: number
    TradingSessionID?: string
    NoQuoteEntries: { Symbol: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, UnderlyingSymbol?: string }[]
  }

  interface QuoteStatusRequestMessage {
    MsgType: 'a'
    QuoteID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    TradingSessionID?: string
  }

  interface QuoteAcknowledgementMessage {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteAckStatus: number
    QuoteRejectReason?: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE */ 2 | /** QUOTE_REQUEST_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_QUOTE */ 5 | /** DUPLICATE_QUOTE_7 */ 6 | /** INVALID_PRICE */ 8 | /** NOT_AUTHORIZED_TO_QUOTE_SECURITY */ 9
    QuoteResponseLevel?: number
    TradingSessionID?: string
    Text?: string
    NoQuoteSets?: { QuoteSetID?: string, UnderlyingSymbol?: string, UnderlyingSymbolSfx?: string, UnderlyingSecurityID?: string, UnderlyingIDSource?: string, UnderlyingSecurityType?: string, UnderlyingMaturityMonthYear?: string, UnderlyingMaturityDay?: string, UnderlyingPutOrCall?: number, UnderlyingStrikePrice?: number, UnderlyingOptAttribute?: string, UnderlyingContractMultiplier?: number, UnderlyingCouponRate?: number, UnderlyingSecurityExchange?: string, UnderlyingIssuer?: string, EncodedUnderlyingIssuerLen?: number, EncodedUnderlyingIssuer?: string, UnderlyingSecurityDesc?: string, EncodedUnderlyingSecurityDescLen?: number, EncodedUnderlyingSecurityDesc?: string, TotQuoteEntries?: number, NoQuoteEntries?: { QuoteEntryID?: string, Symbol?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, QuoteEntryRejectReason?: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE */ 2 | /** QUOTE_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_QUOTE */ 5 | /** DUPLICATE_QUOTE */ 6 | /** INVALID_BIDASK_SPREAD */ 7 | /** INVALID_PRICE */ 8 | /** NOT_AUTHORIZED_TO_QUOTE_SECURITY */ 9 }[] }[]
  }

  interface MarketDataRequestMessage {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS */ '2'
    MarketDepth: number
    MDUpdateType?: /** FULL_REFRESH */ 0 | /** INCREMENTAL_REFRESH */ 1
    AggregatedBook?: /** ONE_BOOK_ENTRY_PER_SIDE_PER_PRICE */ 'Y' | /** MULTIPLE_ENTRIES_PER_SIDE_PER_PRICE_ALLOWED */ 'N'
    NoMDEntryTypes: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' }[]
    NoRelatedSym: { Symbol: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, TradingSessionID?: string }[]
  }

  interface MarketDataSnapshotFullRefreshMessage {
    MsgType: 'W'
    MDReqID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    FinancialStatus?: /** BANKRUPT */ '1'
    CorporateAction?: /** EXDIVIDEND */ 'A' | /** EXDISTRIBUTION */ 'B' | /** EXRIGHTS */ 'C' | /** NEW */ 'D' | /** EXINTEREST */ 'E'
    TotalVolumeTraded?: number
    NoMDEntries: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9', MDEntryPx: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZEROPLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZEROMINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, QuoteCondition?: /** OPEN_ACTIVE */ 'A' | /** CLOSED_INACTIVE */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NONFIRM */ 'I', TradeCondition?: /** CASH */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY */ 'D' | /** OPENING_REOPENING_TRADE_DETAIL */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE_127_TRADE */ 'G' | /** RULE_155_TRADE */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettleFlag?: /** DAILY_OPEN_CLOSE__SETTLEMENT_PRICE */ '0' | /** SESSION_OPEN_CLOSE__SETTLEMENT_PRICE */ '1' | /** DELIVERY_SETTLEMENT_PRICE */ '2', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface MarketDataIncrementalRefreshMessage {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: { MDUpdateAction: /** NEW */ '0' | /** CHANGE */ '1' | /** DELETE */ '2', DeleteReason?: /** CANCELATION_TRADE_BUST */ '0' | /** ERROR */ '1', MDEntryType?: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9', MDEntryID?: string, MDEntryRefID?: string, Symbol?: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, FinancialStatus?: /** BANKRUPT */ '1', CorporateAction?: /** EXDIVIDEND */ 'A' | /** EXDISTRIBUTION */ 'B' | /** EXRIGHTS */ 'C' | /** NEW */ 'D' | /** EXINTEREST */ 'E', MDEntryPx?: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZEROPLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZEROMINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, QuoteCondition?: /** OPEN_ACTIVE */ 'A' | /** CLOSED_INACTIVE */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NONFIRM */ 'I', TradeCondition?: /** CASH */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY */ 'D' | /** OPENING_REOPENING_TRADE_DETAIL */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE_127_TRADE */ 'G' | /** RULE_155_TRADE */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettleFlag?: /** DAILY_OPEN_CLOSE__SETTLEMENT_PRICE */ '0' | /** SESSION_OPEN_CLOSE__SETTLEMENT_PRICE */ '1' | /** DELIVERY_SETTLEMENT_PRICE */ '2', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, TotalVolumeTraded?: number, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface MarketDataRequestRejectMessage {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: /** UNKNOWN_SYMBOL */ '0' | /** DUPLICATE_MDREQID */ '1' | /** INSUFFICIENT_BANDWIDTH */ '2' | /** INSUFFICIENT_PERMISSIONS */ '3' | /** UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE */ '4' | /** UNSUPPORTED_MARKETDEPTH */ '5' | /** UNSUPPORTED_MDUPDATETYPE */ '6' | /** UNSUPPORTED_AGGREGATEDBOOK */ '7' | /** UNSUPPORTED_MDENTRYTYPE */ '8'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SecurityDefinitionRequestMessage {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: /** REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS */ 0 | /** REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED */ 1 | /** REQUEST_LIST_SECURITY_TYPES */ 2 | /** REQUEST_LIST_SECURITIES */ 3
    Symbol?: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    NoRelatedSym?: { UnderlyingSymbol?: string, UnderlyingSymbolSfx?: string, UnderlyingSecurityID?: string, UnderlyingIDSource?: string, UnderlyingSecurityType?: string, UnderlyingMaturityMonthYear?: string, UnderlyingMaturityDay?: string, UnderlyingPutOrCall?: number, UnderlyingStrikePrice?: number, UnderlyingOptAttribute?: string, UnderlyingContractMultiplier?: number, UnderlyingCouponRate?: number, UnderlyingSecurityExchange?: string, UnderlyingIssuer?: string, EncodedUnderlyingIssuerLen?: number, EncodedUnderlyingIssuer?: string, UnderlyingSecurityDesc?: string, EncodedUnderlyingSecurityDescLen?: number, EncodedUnderlyingSecurityDesc?: string, RatioQty?: number, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', UnderlyingCurrency?: string }[]
  }

  interface SecurityDefinitionMessage {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType?: /** ACCEPT_SECURITY_PROPOSAL_AS_IS */ 1 | /** ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE */ 2 | /** LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST */ 3 | /** LIST_OF_SECURITIES_RETURNED_PER_REQUEST */ 4 | /** REJECT_SECURITY_PROPOSAL */ 5 | /** CAN_NOT_MATCH_SELECTION_CRITERIA */ 6
    TotalNumSecurities: number
    Symbol?: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Currency?: string
    TradingSessionID?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoRelatedSym?: { UnderlyingSymbol?: string, UnderlyingSymbolSfx?: string, UnderlyingSecurityID?: string, UnderlyingIDSource?: string, UnderlyingSecurityType?: string, UnderlyingMaturityMonthYear?: string, UnderlyingMaturityDay?: string, UnderlyingPutOrCall?: number, UnderlyingStrikePrice?: number, UnderlyingOptAttribute?: string, UnderlyingContractMultiplier?: number, UnderlyingCouponRate?: number, UnderlyingSecurityExchange?: string, UnderlyingIssuer?: string, EncodedUnderlyingIssuerLen?: number, EncodedUnderlyingIssuer?: string, UnderlyingSecurityDesc?: string, EncodedUnderlyingSecurityDescLen?: number, EncodedUnderlyingSecurityDesc?: string, RatioQty?: number, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', UnderlyingCurrency?: string }[]
  }

  interface SecurityStatusRequestMessage {
    MsgType: 'e'
    SecurityStatusReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Currency?: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS */ '2'
    TradingSessionID?: string
  }

  interface SecurityStatusMessage {
    MsgType: 'f'
    SecurityStatusReqID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Currency?: string
    TradingSessionID?: string
    UnsolicitedIndicator?: /** MESSAGE_IS_BEING_SENT_UNSOLICITED */ 'Y' | /** MESSAGE_IS_BEING_SENT_AS_A_RESULT_OF_A_PRIOR_REQUEST */ 'N'
    SecurityTradingStatus?: /** OPENING_DELAY */ 1 | /** TRADING_HALT */ 2 | /** RESUME */ 3 | /** NO_OPENNO_RESUME */ 4 | /** PRICE_INDICATION */ 5 | /** TRADING_RANGE_INDICATION */ 6 | /** MARKET_IMBALANCE_BUY */ 7 | /** MARKET_IMBALANCE_SELL */ 8 | /** MARKET_ON_CLOSE_IMBALANCE_BUY */ 9 | /** MARKET_ON_CLOSE_IMBALANCE_SELL */ 10 | /** NOT_ASSIGNED */ 11 | /** NO_MARKET_IMBALANCE */ 12 | /** NO_MARKET_ON_CLOSE_IMBALANCE */ 13 | /** ITS_PREOPENING */ 14 | /** NEW_PRICE_INDICATION */ 15 | /** TRADE_DISSEMINATION_TIME */ 16 | /** READY_TO_TRADE */ 17 | /** NOT_AVAILABLE_FOR_TRADING */ 18 | /** NOT_TRADED_ON_THIS_MARKET */ 19 | /** UNKNOWN_OR_INVALID */ 20
    FinancialStatus?: /** BANKRUPT */ '1'
    CorporateAction?: /** EXDIVIDEND */ 'A' | /** EXDISTRIBUTION */ 'B' | /** EXRIGHTS */ 'C' | /** NEW */ 'D' | /** EXINTEREST */ 'E'
    HaltReason?: /** ORDER_IMBALANCE */ 'I' | /** EQUIPMENT_CHANGEOVER */ 'X' | /** NEWS_PENDING */ 'P' | /** NEWS_DISSEMINATION */ 'D' | /** ORDER_INFLUX */ 'E' | /** ADDITIONAL_INFORMATION */ 'M'
    InViewOfCommon?: /** HALT_WAS_DUE_TO_COMMON_STOCK_BEING_HALTED */ 'Y' | /** HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_COMMON_STOCK */ 'N'
    DueToRelated?: /** HALT_WAS_DUE_TO_RELATED_SECURITY_BEING_HALTED */ 'Y' | /** HALT_WAS_NOT_RELATED_TO_A_HALT_OF_THE_RELATED_SECURITY */ 'N'
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: /** CANCEL */ 1 | /** ERROR */ 2 | /** CORRECTION */ 3
  }

  interface TradingSessionStatusRequestMessage {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS */ '2'
  }

  interface TradingSessionStatusMessage {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    UnsolicitedIndicator?: /** MESSAGE_IS_BEING_SENT_UNSOLICITED */ 'Y' | /** MESSAGE_IS_BEING_SENT_AS_A_RESULT_OF_A_PRIOR_REQUEST */ 'N'
    TradSesStatus: /** HALTED */ 1 | /** OPEN */ 2 | /** CLOSED */ 3 | /** PREOPEN */ 4 | /** PRECLOSE */ 5
    TradSesStartTime?: string
    TradSesOpenTime?: string
    TradSesPreCloseTime?: string
    TradSesCloseTime?: string
    TradSesEndTime?: string
    TotalVolumeTraded?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface NewOrderSingleMessage {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    NoAllocs?: { AllocAccount?: string, AllocShares?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: /** WAS_SOLCITIED */ 'Y' | /** WAS_NOT_SOLICITED */ 'N'
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    Commission?: string
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: /** OPEN */ 'O' | /** CLOSE */ 'C'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    ClearingFirm?: string
    ClearingAccount?: string
  }

  interface ExecutionReportMessage {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    NoContraBrokers?: { ContraBroker?: string, ContraTrader?: string, ContraTradeQty?: number, ContraTradeTime?: string }[]
    ListID?: string
    ExecID: string
    ExecTransType: /** NEW */ '0' | /** CANCEL */ '1' | /** CORRECT */ '2' | /** STATUS */ '3'
    ExecRefID?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E'
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_VERBALYES */ 7 | /** STALE_ORDER */ 8
    ExecRestatementReason?: /** GT_CORPORATE_ACTION */ 0 | /** GT_RENEWAL_RESTATEMENT */ 1 | /** VERBAL_CHANGE */ 2 | /** REPRICING_OF_ORDER */ 3 | /** BROKER_OPTION */ 4 | /** PARTIAL_DECLINE_OF_ORDERQTY */ 5
    Account?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    OrderQty?: number
    CashOrderQty?: number
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: /** WAS_SOLCITIED */ 'Y' | /** WAS_NOT_SOLICITED */ 'N'
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    LastShares?: number
    LastPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradingSessionID?: string
    LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: /** YES */ 'Y' | /** NO */ 'N'
    Commission?: string
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    GrossTradeAmt?: string
    SettlCurrAmt?: string
    SettlCurrency?: string
    SettlCurrFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    MinQty?: number
    MaxFloor?: number
    OpenClose?: /** OPEN */ 'O' | /** CLOSE */ 'C'
    MaxShow?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    ClearingFirm?: string
    ClearingAccount?: string
    MultiLegReportingType?: string
  }

  interface DontKnowTradeMessage {
    MsgType: 'Q'
    OrderID: string
    ExecID: string
    DKReason: /** UNKNOWN_SYMBOL */ 'A' | /** WRONG_SIDE */ 'B' | /** QUANTITY_EXCEEDS_ORDER */ 'C' | /** NO_MATCHING_ORDER */ 'D' | /** PRICE_EXCEEDS_LIMIT */ 'E' | /** OTHER */ 'Z'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    OrderQty?: number
    CashOrderQty?: number
    LastShares?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelReplaceRequestMessage {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    NoAllocs?: { AllocAccount?: string, AllocShares?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string }[]
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    ComplianceID?: string
    SolicitedFlag?: /** WAS_SOLCITIED */ 'Y' | /** WAS_NOT_SOLICITED */ 'N'
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    Commission?: string
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3'
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: /** OPEN */ 'O' | /** CLOSE */ 'C'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1
    MaxShow?: number
    LocateReqd?: /** YES */ 'Y' | /** NO */ 'N'
    ClearingFirm?: string
    ClearingAccount?: string
  }

  interface OrderCancelRequestMessage {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    ListID?: string
    Account?: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    ComplianceID?: string
    SolicitedFlag?: /** WAS_SOLCITIED */ 'Y' | /** WAS_NOT_SOLICITED */ 'N'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelRejectMessage {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID: string
    OrigClOrdID: string
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    Account?: string
    TransactTime?: string
    CxlRejResponseTo: string
    CxlRejReason?: /** TOO_LATE_TO_CANCEL */ 0 | /** UNKNOWN_ORDER */ 1 | /** BROKER_OPTION */ 2 | /** ALREADY_PENDING */ 3
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderStatusRequestMessage {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    Account?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
  }

  interface AllocationMessage {
    MsgType: 'J'
    AllocID: string
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2' | /** PRELIMINARY */ '3' | /** CALCULATED */ '4' | /** CALCULATED_WITHOUT_PRELIMINARY */ '5'
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: /** FX_NETTING */ 0 | /** FX_SWAP */ 1
    NoOrders: { ClOrdID: string, OrderID?: string, SecondaryOrderID?: string, ListID?: string, WaveNo?: string }[]
    NoExecs?: { LastShares?: number, ExecID?: string, LastPx?: number, LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4' }[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: /** PUT */ 0 | /** CALL */ 1
    StrikePrice?: number
    OptAttribute?: string
    ContractMultiplier?: number
    CouponRate?: number
    SecurityExchange?: string
    Issuer?: string
    EncodedIssuerLen?: number
    EncodedIssuer?: string
    SecurityDesc?: string
    EncodedSecurityDescLen?: number
    EncodedSecurityDesc?: string
    Shares: number
    LastMkt?: string
    TradingSessionID?: string
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9'
    FutSettDate?: string
    GrossTradeAmt?: string
    NetMoney?: string
    OpenClose?: /** OPEN */ 'O' | /** CLOSE */ 'C'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: number
    NoAllocs: { AllocAccount: string, AllocPrice?: number, AllocShares: number, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6', BrokerOfCredit?: string, NotifyBrokerOfCredit?: /** DETAILS_SHOULD_BE_COMMUNICATED */ 'Y' | /** DETAILS_SHOULD_NOT_BE_COMMUNICATED */ 'N', AllocHandlInst?: /** MATCH */ 1 | /** FORWARD */ 2 | /** FORWARD_AND_MATCH */ 3, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string, ExecBroker?: string, ClientID?: string, Commission?: string, CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3', AllocAvgPx?: number, AllocNetMoney?: string, SettlCurrAmt?: string, SettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D', AccruedInterestAmt?: string, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3', NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' }[] }[]
  }

  interface AllocationACKMessage {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: /** ACCEPTED */ 0 | /** REJECTED */ 1 | /** PARTIAL_ACCEPT */ 2 | /** RECEIVED */ 3
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SettlementInstructionsMessage {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    SettlInstRefID: string
    SettlInstMode: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3'
    SettlInstSource: /** BROKER */ '1' | /** INSTITUTION */ '2'
    AllocAccount: string
    SettlLocation?: /** CEDEL */ 'CED' | /** DEPOSITORY_TRUST_COMPANY */ 'DTC' | /** EUROCLEAR */ 'EUR' | /** FEDERAL_BOOK_ENTRY */ 'FED' | /** PHYSICAL */ 'PNY' | /** PARTICIPANT_TRUST_COMPANY */ 'PTC' | /** LOCAL_MARKET_SETTLE_LOCATION */ 'ISO'
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    TradingSessionID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9'
    SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO'
    EffectiveTime?: string
    TransactTime: string
    ClientID?: string
    ExecBroker?: string
    StandInstDbType?: /** OTHER */ 0 | /** DTC_SID */ 1 | /** THOMSON_ALERT */ 2 | /** A_GLOBAL_CUSTODIAN */ 3
    StandInstDbName?: string
    StandInstDbID?: string
    SettlDeliveryType?: number
    SettlDepositoryCode?: string
    SettlBrkrCode?: string
    SettlInstCode?: string
    SecuritySettlAgentName?: string
    SecuritySettlAgentCode?: string
    SecuritySettlAgentAcctNum?: string
    SecuritySettlAgentAcctName?: string
    SecuritySettlAgentContactName?: string
    SecuritySettlAgentContactPhone?: string
    CashSettlAgentName?: string
    CashSettlAgentCode?: string
    CashSettlAgentAcctNum?: string
    CashSettlAgentAcctName?: string
    CashSettlAgentContactName?: string
    CashSettlAgentContactPhone?: string
  }

  interface BidRequestMessage {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: /** NEW */ 'N' | /** CANCEL */ 'C'
    ListName?: string
    TotalNumSecurities: number
    BidType: number
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: { BidDescriptorType?: number, BidDescriptor?: string, SideValueInd?: number, LiquidityValue?: string, LiquidityNumSecurities?: number, LiquidityPctLow?: number, LiquidityPctHigh?: number, EFPTrackingError?: number, FairValue?: string, OutsideIndexPct?: number, ValueOfFutures?: string }[]
    NoBidComponents?: { ListID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', TradingSessionID?: string, NetGrossInd?: number, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9', FutSettDate?: string, Account?: string }[]
    LiquidityIndType?: number
    WtAverageLiquidity?: number
    ExchangeForPhysical?: /** TRUE */ 'Y' | /** FALSE */ 'N'
    OutMainCntryUIndex?: string
    CrossPercent?: number
    ProgRptReqs?: number
    ProgPeriodInterval?: number
    IncTaxInd?: number
    ForexReq?: /** YES */ 'Y' | /** NO */ 'N'
    NumBidders?: number
    TradeDate?: string
    TradeType: string
    BasisPxType: string
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BidResponseMessage {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: { Commission: string, CommType: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3', ListID?: string, Country?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', Price?: number, PriceType?: number, FairValue?: string, NetGrossInd?: number, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9', FutSettDate?: string, TradingSessionID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface NewOrderListMessage {
    MsgType: 'E'
    ListID: string
    BidID?: string
    ClientBidID?: string
    ProgRptReqs?: number
    BidType: number
    ProgPeriodInterval?: number
    ListExecInstType?: string
    ListExecInst?: string
    EncodedListExecInstLen?: number
    EncodedListExecInst?: string
    TotNoOrders: number
    NoOrders: { ClOrdID: string, ListSeqNo: number, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3', ClientID?: string, ExecBroker?: string, Account?: string, NoAllocs?: { AllocAccount?: string, AllocShares?: number }[], SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** TPLUS2 */ '3' | /** TPLUS3 */ '4' | /** TPLUS4 */ '5' | /** FUTURE */ '6' | /** WHEN_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** TPLUS5 */ '9', FutSettDate?: string, HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE_NO_BROKER_INTERVENTION */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC_BROKER_INTERVENTION_OK */ '2' | /** MANUAL_ORDER_BEST_EXECUTION */ '3', ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE_DNI */ 'E' | /** DO_NOT_REDUCE_DNR */ 'F' | /** ALL_OR_NONE_AON */ 'G' | /** INSTITUTIONS_ONLY */ 'I' | /** LAST_PEG */ 'L' | /** MIDPRICE_PEG */ 'M' | /** NONNEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W', MinQty?: number, MaxFloor?: number, ExDestination?: string, NoTradingSessions?: { TradingSessionID?: string }[], ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEPIN */ '2' | /** STEPOUT */ '3' | /** SOFTDOLLAR_STEPIN */ '4' | /** SOFTDOLLAR_STEPOUT */ '5' | /** PLAN_SPONSOR */ '6', Symbol: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, PrevClosePx?: number, Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', SideValueInd?: number, LocateReqd?: /** YES */ 'Y' | /** NO */ 'N', TransactTime?: string, OrderQty?: number, CashOrderQty?: number, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** PEGGED */ 'P', Price?: number, StopPx?: number, Currency?: string, ComplianceID?: string, SolicitedFlag?: /** WAS_SOLCITIED */ 'Y' | /** WAS_NOT_SOLICITED */ 'N', IOIID?: string, QuoteID?: string, TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6', EffectiveTime?: string, ExpireDate?: string, ExpireTime?: string, GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2, Commission?: string, CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3', Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_B */ 'B' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_MEMBER_FIRMORG */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRMORG */ 'D' | /** REGISTERED_EQUITY_MARKET_MAKER_TRADES */ 'E' | /** SHORT_EXEMPT_TRANSACTION_F */ 'F' | /** SHORT_EXEMPT_TRANSACTION_H */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** COMPETING_DEALER_TRADES_O */ 'O' | /** PRINCIPAL */ 'P' | /** COMPETING_DEALER_TRADES_R */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** COMPETING_DEALER_TRADES_T */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NONINDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z', ForexReq?: /** YES */ 'Y' | /** NO */ 'N', SettlCurrency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string, FutSettDate2?: string, OrderQty2?: number, OpenClose?: /** OPEN */ 'O' | /** CLOSE */ 'C', CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, CustomerOrFirm?: /** CUSTOMER */ 0 | /** FIRM */ 1, MaxShow?: number, PegDifference?: number, DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5', DiscretionOffset?: number, ClearingFirm?: string, ClearingAccount?: string }[]
  }

  interface ListStrikePriceMessage {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    NoStrikes: { Symbol: string, SymbolSfx?: string, SecurityID?: string, IDSource?: /** CUSIP */ '1' | /** SEDOL */ '2' | /** QUIK */ '3' | /** ISIN_NUMBER */ '4' | /** RIC_CODE */ '5' | /** ISO_CURRENCY_CODE */ '6' | /** ISO_COUNTRY_CODE */ '7' | /** EXCHANGE_SYMBOL */ '8' | /** CONSOLIDATED_TAPE_ASSOCIATION */ '9', SecurityType?: /** BANKERS_ACCEPTANCE */ 'BA' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** COLLATERALIZE_MORTGAGE_OBLIGATION */ 'CMO' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** FEDERAL_HOUSING_AUTHORITY */ 'FHA' | /** FEDERAL_HOME_LOAN */ 'FHL' | /** FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION */ 'FN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FUTURE */ 'FUT' | /** GOVERNMENT_NATIONAL_MORTGAGE_ASSOCIATION */ 'GN' | /** TREASURIES_PLUS_AGENCY_DEBENTURE */ 'GOVT' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASSTHRU */ 'MPT' | /** MUNICIPAL_BOND */ 'MUNI' | /** NO_ISITC_SECURITY_TYPE */ 'NONE' | /** OPTION */ 'OPT' | /** PREFERRED_STOCK */ 'PS' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** STUDENT_LOAN_MARKETING_ASSOCIATION */ 'SL' | /** TIME_DEPOSIT */ 'TD' | /** US_TREASURY_BILL */ 'USTB' | /** WARRANT */ 'WAR' | /** CATS_TIGERS */ 'ZOO', MaturityMonthYear?: string, MaturityDay?: string, PutOrCall?: /** PUT */ 0 | /** CALL */ 1, StrikePrice?: number, OptAttribute?: string, ContractMultiplier?: number, CouponRate?: number, SecurityExchange?: string, Issuer?: string, EncodedIssuerLen?: number, EncodedIssuer?: string, SecurityDesc?: string, EncodedSecurityDescLen?: number, EncodedSecurityDesc?: string, PrevClosePx?: number, ClOrdID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** D */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9', Price: number, Currency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface ListStatusMessage {
    MsgType: 'N'
    ListID: string
    ListStatusType: number
    NoRpts: number
    ListOrderStatus: number
    RptSeq: number
    ListStatusText?: string
    EncodedListStatusTextLen?: number
    EncodedListStatusText?: string
    TransactTime?: string
    TotNoOrders: number
    NoOrders: { ClOrdID: string, CumQty: number, OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E', LeavesQty: number, CxlQty: number, AvgPx: number, OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_VERBALYES */ 7 | /** STALE_ORDER */ 8, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface ListExecuteMessage {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListCancelRequestMessage {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListStatusRequestMessage {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BusinessMessageRejectMessage {
    MsgType: 'j'
    RefSeqNum?: number
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: /** OTHER */ 0 | /** UNKOWN_ID */ 1 | /** UNKNOWN_SECURITY */ 2 | /** UNSUPPORTED_MESSAGE_TYPE */ 3 | /** APPLICATION_NOT_AVAILABLE */ 4 | /** CONDITIONALLY_REQUIRED_FIELD_MISSING */ 5
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface Trailer {
    SignatureLength?: number
    Signature?: string
    CheckSum: string
  }

  export type Messages =
    | HeartbeatMessage
    | LogonMessage
    | TestRequestMessage
    | ResendRequestMessage
    | RejectMessage
    | SequenceResetMessage
    | LogoutMessage
    | AdvertisementMessage
    | IndicationofInterestMessage
    | NewsMessage
    | EmailMessage
    | QuoteRequestMessage
    | QuoteMessage
    | MassQuoteMessage
    | QuoteCancelMessage
    | QuoteStatusRequestMessage
    | QuoteAcknowledgementMessage
    | MarketDataRequestMessage
    | MarketDataSnapshotFullRefreshMessage
    | MarketDataIncrementalRefreshMessage
    | MarketDataRequestRejectMessage
    | SecurityDefinitionRequestMessage
    | SecurityDefinitionMessage
    | SecurityStatusRequestMessage
    | SecurityStatusMessage
    | TradingSessionStatusRequestMessage
    | TradingSessionStatusMessage
    | NewOrderSingleMessage
    | ExecutionReportMessage
    | DontKnowTradeMessage
    | OrderCancelReplaceRequestMessage
    | OrderCancelRequestMessage
    | OrderCancelRejectMessage
    | OrderStatusRequestMessage
    | AllocationMessage
    | AllocationACKMessage
    | SettlementInstructionsMessage
    | BidRequestMessage
    | BidResponseMessage
    | NewOrderListMessage
    | ListStrikePriceMessage
    | ListStatusMessage
    | ListExecuteMessage
    | ListCancelRequestMessage
    | ListStatusRequestMessage
    | BusinessMessageRejectMessage
}

export namespace FIX43 {
  export interface Header {
    BeginString: 'FIX.4.3'
    BodyLength: number
    MsgType: /** HEARTBEAT */ '0' | /** TEST_REQUEST */ '1' | /** RESEND_REQUEST */ '2' | /** REJECT */ '3' | /** SEQUENCE_RESET */ '4' | /** LOGOUT */ '5' | /** INDICATION_OF_INTEREST */ '6' | /** ADVERTISEMENT */ '7' | /** EXECUTION_REPORT */ '8' | /** ORDER_CANCEL_REJECT */ '9' | /** LOGON */ 'A' | /** NEWS */ 'B' | /** EMAIL */ 'C' | /** ORDER_SINGLE */ 'D' | /** ORDER_LIST */ 'E' | /** ORDER_CANCEL_REQUEST */ 'F' | /** ORDER_CANCEL */ 'G' | /** ORDER_STATUS_REQUEST */ 'H' | /** ALLOCATION */ 'J' | /** LIST_CANCEL_REQUEST */ 'K' | /** LIST_EXECUTE */ 'L' | /** LIST_STATUS_REQUEST */ 'M' | /** LIST_STATUS */ 'N' | /** ALLOCATION_ACK */ 'P' | /** DONT_KNOW_TRADE */ 'Q' | /** QUOTE_REQUEST */ 'R' | /** QUOTE */ 'S' | /** SETTLEMENT_INSTRUCTIONS */ 'T' | /** MARKET_DATA_REQUEST */ 'V' | /** MARKET_DATA_SNAPSHOT */ 'W' | /** MARKET_DATA_INCREMENTAL_REFRESH */ 'X' | /** MARKET_DATA_REQUEST_REJECT */ 'Y' | /** QUOTE_CANCEL */ 'Z' | /** QUOTE_STATUS_REQUEST */ 'a' | /** MASS_QUOTE_ACKNOWLEDGEMENT */ 'b' | /** SECURITY_DEFINITION_REQUEST */ 'c' | /** SECURITY_DEFINITION */ 'd' | /** SECURITY_STATUS_REQUEST */ 'e' | /** SECURITY_STATUS */ 'f' | /** TRADING_SESSION_STATUS_REQUEST */ 'g' | /** TRADING_SESSION_STATUS */ 'h' | /** MASS_QUOTE */ 'i' | /** BUSINESS_MESSAGE_REJECT */ 'j' | /** BID_REQUEST */ 'k' | /** BID_RESPONSE */ 'l' | /** LIST_STRIKE_PRICE */ 'm' | /** XML_MESSAGE */ 'n' | /** REGISTRATION_INSTRUCTIONS */ 'o' | /** REGISTRATION_INSTRUCTIONS_RESPONSE */ 'p' | /** ORDER_MASS_CANCEL_REQUEST */ 'q' | /** ORDER_MASS_CANCEL_REPORT */ 'r' | /** NEW_ORDER_CROSS */ 's' | /** CROSS_ORDER_CANCEL */ 't' | /** CROSS_ORDER_CANCEL_REQUEST */ 'u' | /** SECURITY_TYPE_REQUEST */ 'v' | /** SECURITY_TYPES */ 'w' | /** SECURITY_LIST_REQUEST */ 'x' | /** SECURITY_LIST */ 'y' | /** DERIVATIVE_SECURITY_LIST_REQUEST */ 'z' | /** DERIVATIVE_SECURITY_LIST */ 'AA' | /** NEW_ORDER_MULTILEG */ 'AB' | /** MULTILEG_ORDER_CANCEL */ 'AC' | /** TRADE_CAPTURE_REPORT_REQUEST */ 'AD' | /** TRADE_CAPTURE_REPORT */ 'AE' | /** ORDER_MASS_STATUS_REQUEST */ 'AF' | /** QUOTE_REQUEST_REJECT */ 'AG' | /** RFQ_REQUEST */ 'AH' | /** QUOTE_STATUS_REPORT */ 'AI'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: number
    SecureData?: string
    MsgSeqNum: number
    SenderSubID?: string
    SenderLocationID?: string
    TargetSubID?: string
    TargetLocationID?: string
    OnBehalfOfSubID?: string
    OnBehalfOfLocationID?: string
    DeliverToSubID?: string
    DeliverToLocationID?: string
    PossDupFlag?: string
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
    XmlDataLen?: number
    XmlData?: string
    MessageEncoding?: string
    LastMsgSeqNumProcessed?: number
    OnBehalfOfSendingTime?: string
    NoHops?: { HopCompID?: string, HopSendingTime?: string, HopRefID?: number }[]
  }

  interface HeartbeatMessage {
    MsgType: '0'
    TestReqID?: string
  }

  interface LogonMessage {
    MsgType: 'A'
    EncryptMethod: /** NONE */ 0 | /** PKCS_PROPRIETARY */ 1 | /** DES */ 2 | /** PKCS_DES */ 3 | /** PGP_DES */ 4 | /** PGP_DES_MD5 */ 5 | /** PEM */ 6
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: string
    MaxMessageSize?: number
    NoMsgTypes?: { RefMsgType?: string, MsgDirection?: /** SEND */ 'S' | /** RECEIVE */ 'R' }[]
    TestMessageIndicator?: string
    Username?: string
    Password?: string
  }

  interface TestRequestMessage {
    MsgType: '1'
    TestReqID: string
  }

  interface ResendRequestMessage {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  interface RejectMessage {
    MsgType: '3'
    RefSeqNum: number
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: /** INVALID_TAG_NUMBER */ 0 | /** REQUIRED_TAG_MISSING */ 1 | /** TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE */ 2 | /** UNDEFINED_TAG */ 3 | /** TAG_SPECIFIED_WITHOUT_A_VALUE */ 4 | /** VALUE_IS_INCORRECT */ 5 | /** INCORRECT_DATA_FORMAT_FOR_VALUE */ 6 | /** DECRYPTION_PROBLEM */ 7 | /** SIGNATURE_PROBLEM */ 8 | /** COMPID_PROBLEM */ 9 | /** SENDINGTIME_ACCURACY_PROBLEM */ 10 | /** INVALID_MSGTYPE */ 11 | /** XML_VALIDATION_ERROR */ 12 | /** TAG_APPEARS_MORE_THAN_ONCE */ 13 | /** TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER */ 14 | /** REPEATING_GROUP_FIELDS_OUT_OF_ORDER */ 15 | /** INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP */ 16 | /** NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER */ 17
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SequenceResetMessage {
    MsgType: '4'
    GapFillFlag?: string
    NewSeqNo: number
  }

  interface LogoutMessage {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BusinessMessageRejectMessage {
    MsgType: 'j'
    RefSeqNum?: number
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: /** OTHER */ 0 | /** UNKOWN_ID */ 1 | /** UNKNOWN_SECURITY */ 2 | /** UNSUPPORTED_MESSAGE_TYPE */ 3 | /** APPLICATION_NOT_AVAILABLE */ 4 | /** CONDITIONALLY_REQUIRED_FIELD_MISSING */ 5 | /** NOT_AUTHORIZED */ 6 | /** DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME */ 7
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface AdvertisementMessage {
    MsgType: '7'
    AdvId: string
    AdvTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    AdvRefID?: string
    AdvSide: /** BUY */ 'B' | /** SELL */ 'S' | /** CROSS */ 'X' | /** TRADE */ 'T'
    Quantity: number
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    URLLink?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  interface IndicationOfInterestMessage {
    MsgType: '6'
    IOIID: string
    IOITransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    IOIRefID?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    IOIQty: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: /** LOW */ 'L' | /** MEDIUM */ 'M' | /** HIGH */ 'H'
    IOINaturalFlag?: string
    NoIOIQualifiers?: { IOIQualifier?: /** ALL_OR_NONE */ 'A' | /** MARKET_ON_CLOSE */ 'B' | /** AT_THE_CLOSE */ 'C' | /** VWAP */ 'D' | /** IN_TOUCH_WITH */ 'I' | /** LIMIT */ 'L' | /** MORE_BEHIND */ 'M' | /** AT_THE_OPEN */ 'O' | /** TAKING_A_POSITION */ 'P' | /** AT_THE_MARKET */ 'Q' | /** READY_TO_TRADE */ 'R' | /** PORTFOLIO_SHOWN */ 'S' | /** THROUGH_THE_DAY */ 'T' | /** VERSUS */ 'V' | /** INDICATION */ 'W' | /** CROSSING_OPPORTUNITY */ 'X' | /** AT_THE_MIDPOINT */ 'Y' | /** PRE_OPEN */ 'Z' }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    Benchmark?: /** CURVE */ '1' | /** FIVEYR */ '2' | /** OLD5 */ '3' | /** TENYR */ '4' | /** OLD10 */ '5' | /** THIRTYYR */ '6' | /** OLD30 */ '7' | /** THREEMOLIBOR */ '8' | /** SIXMOLIBOR */ '9'
  }

  interface NewsMessage {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: /** NORMAL */ '0' | /** FLASH */ '1' | /** BACKGROUND */ '2'
    Headline: string
    EncodedHeadlineLen?: number
    EncodedHeadline?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: {}[]
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  interface EmailMessage {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: /** NEW */ '0' | /** REPLY */ '1' | /** ADMIN_REPLY */ '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: number
    EncodedSubject?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: {}[]
    OrderID?: string
    ClOrdID?: string
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface QuoteRequestMessage {
    MsgType: 'R'
    QuoteReqID: string
    RFQReqID?: string
    NoRelatedSym: { PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2, TradingSessionID?: string, TradingSessionSubID?: string, TradeOriginationDate?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8, OrderQty?: number, CashOrderQty?: number, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A', FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, ExpireTime?: string, TransactTime?: string, Currency?: string, PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8, Price?: number, Price2?: number }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface QuoteRequestRejectMessage {
    MsgType: 'AG'
    QuoteReqID: string
    RFQReqID?: string
    QuoteRequestRejectReason: number
    NoRelatedSym: { PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2, TradingSessionID?: string, TradingSessionSubID?: string, TradeOriginationDate?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8, OrderQty?: number, CashOrderQty?: number, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A', FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, ExpireTime?: string, TransactTime?: string, Currency?: string, PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8, Price?: number, Price2?: number }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface RFQRequestMessage {
    MsgType: 'AH'
    RFQReqID: string
    NoRelatedSym: { PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2, TradingSessionID?: string, TradingSessionSubID?: string }[]
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface QuoteMessage {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    BidPx?: number
    OfferPx?: number
    MktBidPx?: number
    MktOfferPx?: number
    MinBidSize?: number
    BidSize?: number
    MinOfferSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    MidPx?: number
    BidYield?: string
    MidYield?: string
    OfferYield?: string
    TransactTime?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    FutSettDate2?: string
    OrderQty2?: number
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    Currency?: string
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: string
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3' | /** PERCENTAGE_WAIVED_CASH_DISCOUNT */ '4' | /** PERCENTAGE_WAIVED_ENHANCED_UNITS */ '5' | /** PER_BOND */ '6'
    Commission?: string
    CustOrderCapacity?: number
    ExDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface QuoteCancelMessage {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: number
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoQuoteEntries?: {}[]
  }

  interface QuoteStatusRequestMessage {
    MsgType: 'a'
    QuoteStatusReqID?: string
    QuoteID?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface QuoteStatusReportMessage {
    MsgType: 'AI'
    QuoteStatusReqID?: string
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    BidPx?: number
    OfferPx?: number
    MktBidPx?: number
    MktOfferPx?: number
    MinBidSize?: number
    BidSize?: number
    MinOfferSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    MidPx?: number
    BidYield?: string
    MidYield?: string
    OfferYield?: string
    TransactTime?: string
    FutSettDate?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    FutSettDate2?: string
    OrderQty2?: number
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    Currency?: string
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: string
    CommType?: /** PER_SHARE */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3' | /** PERCENTAGE_WAIVED_CASH_DISCOUNT */ '4' | /** PERCENTAGE_WAIVED_ENHANCED_UNITS */ '5' | /** PER_BOND */ '6'
    Commission?: string
    CustOrderCapacity?: number
    ExDestination?: string
    QuoteStatus?: /** ACCEPTED */ 0 | /** CANCELED_FOR_SYMBOL */ 1 | /** CANCELED_FOR_SECURITY_TYPE */ 2 | /** CANCELED_FOR_UNDERLYING */ 3 | /** CANCELED_ALL */ 4 | /** REJECTED */ 5 | /** REMOVED_FROM_MARKET */ 6 | /** EXPIRED */ 7 | /** QUERY */ 8 | /** QUOTE_NOT_FOUND */ 9 | /** PENDING */ 10
  }

  interface MassQuoteMessage {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: { QuoteSetID: string, QuoteSetValidUntilTime?: string, TotQuoteEntries: number, NoQuoteEntries?: { QuoteEntryID: string, BidPx?: number, OfferPx?: number, BidSize?: number, OfferSize?: number, ValidUntilTime?: string, BidSpotRate?: number, OfferSpotRate?: number, BidForwardPoints?: number, OfferForwardPoints?: number, MidPx?: number, BidYield?: string, MidYield?: string, OfferYield?: string, TransactTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, BidForwardPoints2?: number, OfferForwardPoints2?: number, Currency?: string }[] }[]
  }

  interface MassQuoteAcknowledgementMessage {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteStatus: /** ACCEPTED */ 0 | /** CANCELED_FOR_SYMBOL */ 1 | /** CANCELED_FOR_SECURITY_TYPE */ 2 | /** CANCELED_FOR_UNDERLYING */ 3 | /** CANCELED_ALL */ 4 | /** REJECTED */ 5 | /** REMOVED_FROM_MARKET */ 6 | /** EXPIRED */ 7 | /** QUERY */ 8 | /** QUOTE_NOT_FOUND */ 9 | /** PENDING */ 10
    QuoteRejectReason?: number
    QuoteResponseLevel?: number
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Text?: string
    NoQuoteSets?: { QuoteSetID?: string, TotQuoteEntries?: number, NoQuoteEntries?: { QuoteEntryID?: string, BidPx?: number, OfferPx?: number, BidSize?: number, OfferSize?: number, ValidUntilTime?: string, BidSpotRate?: number, OfferSpotRate?: number, BidForwardPoints?: number, OfferForwardPoints?: number, MidPx?: number, BidYield?: string, MidYield?: string, OfferYield?: string, TransactTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, FutSettDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', FutSettDate2?: string, OrderQty2?: number, BidForwardPoints2?: number, OfferForwardPoints2?: number, Currency?: string, QuoteEntryRejectReason?: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE */ 2 | /** QUOTE_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_QUOTE */ 5 | /** DUPLICATE_QUOTE */ 6 | /** INVALID_BID */ 7 | /** INVALID_PRICE */ 8 | /** NOT_AUTHORIZED_TO_QUOTE_SECURITY */ 9 }[] }[]
  }

  interface MarketDataRequestMessage {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    MarketDepth: number
    MDUpdateType?: /** FULL_REFRESH */ 0 | /** INCREMENTAL_REFRESH */ 1
    AggregatedBook?: string
    OpenCloseSettleFlag?: /** DAILY_OPEN */ '0' | /** SESSION_OPEN */ '1' | /** DELIVERY_SETTLEMENT_PRICE */ '2' | /** EXPECTED_PRICE */ '3' | /** PRICE_FROM_PREVIOUS_BUSINESS_DAY */ '4'
    Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3'
    MDImplicitDelete?: string
    NoMDEntryTypes: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A' }[]
    NoRelatedSym: {}[]
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
  }

  interface MarketDataSnapshotFullRefreshMessage {
    MsgType: 'W'
    MDReqID?: string
    FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2'
    CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E'
    TotalVolumeTraded?: number
    TotalVolumeTradedDate?: string
    TotalVolumeTradedTime?: string
    NetChgPrevDay?: number
    NoMDEntries: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A', MDEntryPx?: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZERO_PLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZERO_MINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, TradingSessionSubID?: string, QuoteCondition?: /** OPEN */ 'A' | /** CLOSED */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NON_FIRM */ 'I', TradeCondition?: /** CASH */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY */ 'D' | /** OPENING */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE_127_TRADE */ 'G' | /** RULE_155_TRADE */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N' | /** IMBALANCE_MORE_BUYERS */ 'P' | /** IMBALANCE_MORE_SELLERS */ 'Q' | /** OPENING_PRICE */ 'R', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettleFlag?: /** DAILY_OPEN */ '0' | /** SESSION_OPEN */ '1' | /** DELIVERY_SETTLEMENT_PRICE */ '2' | /** EXPECTED_PRICE */ '3' | /** PRICE_FROM_PREVIOUS_BUSINESS_DAY */ '4', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3', Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface MarketDataIncrementalRefreshMessage {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: { MDUpdateAction: /** NEW */ '0' | /** CHANGE */ '1' | /** DELETE */ '2', DeleteReason?: /** CANCELATION */ '0' | /** ERROR */ '1', MDEntryType?: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A', MDEntryID?: string, MDEntryRefID?: string, FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2', CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E', MDEntryPx?: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZERO_PLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZERO_MINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, TradingSessionSubID?: string, QuoteCondition?: /** OPEN */ 'A' | /** CLOSED */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NON_FIRM */ 'I', TradeCondition?: /** CASH */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY */ 'D' | /** OPENING */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE_127_TRADE */ 'G' | /** RULE_155_TRADE */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N' | /** IMBALANCE_MORE_BUYERS */ 'P' | /** IMBALANCE_MORE_SELLERS */ 'Q' | /** OPENING_PRICE */ 'R', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettleFlag?: /** DAILY_OPEN */ '0' | /** SESSION_OPEN */ '1' | /** DELIVERY_SETTLEMENT_PRICE */ '2' | /** EXPECTED_PRICE */ '3' | /** PRICE_FROM_PREVIOUS_BUSINESS_DAY */ '4', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3', TotalVolumeTraded?: number, TotalVolumeTradedDate?: string, TotalVolumeTradedTime?: string, NetChgPrevDay?: number, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface MarketDataRequestRejectMessage {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: /** UNKNOWN_SYMBOL */ '0' | /** DUPLICATE_MDREQID */ '1' | /** INSUFFICIENT_BANDWIDTH */ '2' | /** INSUFFICIENT_PERMISSIONS */ '3' | /** UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE */ '4' | /** UNSUPPORTED_MARKETDEPTH */ '5' | /** UNSUPPORTED_MDUPDATETYPE */ '6' | /** UNSUPPORTED_AGGREGATEDBOOK */ '7' | /** UNSUPPORTED_MDENTRYTYPE */ '8' | /** UNSUPPORTED_TRADINGSESSIONID */ '9' | /** UNSUPPORTED_SCOPE */ 'A' | /** UNSUPPORTED_OPENCLOSESETTLEFLAG */ 'B' | /** UNSUPPORTED_MDIMPLICITDELETE */ 'C'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SecurityDefinitionRequestMessage {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: /** REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS */ 0 | /** REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED */ 1 | /** REQUEST_LIST_SECURITY_TYPES */ 2 | /** REQUEST_LIST_SECURITIES */ 3
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoLegs?: { LegCurrency?: string }[]
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityDefinitionMessage {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: /** ACCEPT_SECURITY_PROPOSAL_AS_IS */ 1 | /** ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE */ 2 | /** LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST */ 3 | /** LIST_OF_SECURITIES_RETURNED_PER_REQUEST */ 4 | /** REJECT_SECURITY_PROPOSAL */ 5 | /** CAN_NOT_MATCH_SELECTION_CRITERIA */ 6
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoLegs?: { LegCurrency?: string }[]
    RoundLot?: number
    MinTradeVol?: number
  }

  interface SecurityTypeRequestMessage {
    MsgType: 'v'
    SecurityReqID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  interface SecurityTypesMessage {
    MsgType: 'w'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: /** ACCEPT_SECURITY_PROPOSAL_AS_IS */ 1 | /** ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE */ 2 | /** LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST */ 3 | /** LIST_OF_SECURITIES_RETURNED_PER_REQUEST */ 4 | /** REJECT_SECURITY_PROPOSAL */ 5 | /** CAN_NOT_MATCH_SELECTION_CRITERIA */ 6
    TotalNumSecurityTypes?: number
    NoSecurityTypes?: { SecurityType?: /** CORPORATE_BOND */ 'CORP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** CONVERTABLE_BOND */ 'CB' | /** DUAL_CURRENCY */ 'DUAL' | /** INDEX_LINKED */ 'XLINKD' | /** STRUCTURED_NOTES */ 'STRUCT' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** COMMON_STOCK */ 'CS' | /** PREFERED_STOCK */ 'PS' | /** BRADY_BOND */ 'BRADY' | /** US_TREASURY_BOND */ 'TBOND' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** US_TREASURY_NOTE_BOND */ 'UST' | /** US_TREASURY_BILL */ 'USTB' | /** TERM_LOAN */ 'TERM' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** BRIDGE_LOAN */ 'BRIDGE' | /** LETTER_OF_CREDIT */ 'LOFC' | /** SWING_LINE_FACILITY */ 'SWING' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEFAULTED */ 'DEFLTED' | /** WITHDRAWN */ 'WITHDRN' | /** REPLACED */ 'REPLACD' | /** MATURED */ 'MATURED' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** RETIRED */ 'RETIRED' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** COMMERCIAL_PAPER */ 'CP' | /** DEPOSIT_NOTES */ 'DP' | /** LIQUIDITY_NOTES */ 'LQN' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** OVERNITE */ 'ONITE' | /** PROMISSORY_NOTES */ 'PN' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** TIME_DEPOSIT */ 'TD' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** AGENCY_POOLS */ 'POOL' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** IOETTE_MORTGAGE */ 'IET' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** MANDATORY_TENDER */ 'MT' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REVENUE_BONDS */ 'REV' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** MUTUAL_FUND */ 'MF' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** NO_SECURITY_TYPE */ 'NONE' | /** WILDCARD */ '?', Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12, CFICode?: string }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityListRequestMessage {
    MsgType: 'x'
    SecurityReqID: string
    SecurityListRequestType: /** SYMBOL */ 0 | /** SECURITYTYPE_AND */ 1 | /** PRODUCT */ 2 | /** TRADINGSESSIONID */ 3 | /** ALL_SECURITIES */ 4
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityListMessage {
    MsgType: 'y'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA */ 3 | /** INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE */ 4 | /** REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED */ 5
    TotalNumSecurities?: number
    NoRelatedSym?: { Currency?: string, NoLegs?: { LegCurrency?: string }[], RoundLot?: number, MinTradeVol?: number, TradingSessionID?: string, TradingSessionSubID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface DerivativeSecurityListRequestMessage {
    MsgType: 'z'
    SecurityReqID: string
    SecurityListRequestType: /** SYMBOL */ 0 | /** SECURITYTYPE_AND */ 1 | /** PRODUCT */ 2 | /** TRADINGSESSIONID */ 3 | /** ALL_SECURITIES */ 4
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface DerivativeSecurityListMessage {
    MsgType: 'AA'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA */ 3 | /** INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE */ 4 | /** REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED */ 5
    TotalNumSecurities?: number
    NoRelatedSym?: { Currency?: string, NoLegs?: { LegCurrency?: string }[], TradingSessionID?: string, TradingSessionSubID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface SecurityStatusRequestMessage {
    MsgType: 'e'
    SecurityStatusReqID: string
    Currency?: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  interface SecurityStatusMessage {
    MsgType: 'f'
    SecurityStatusReqID?: string
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    UnsolicitedIndicator?: string
    SecurityTradingStatus?: /** OPENING_DELAY */ 1 | /** TRADING_HALT */ 2 | /** RESUME */ 3 | /** NO_OPEN */ 4 | /** PRICE_INDICATION */ 5 | /** TRADING_RANGE_INDICATION */ 6 | /** MARKET_IMBALANCE_BUY */ 7 | /** MARKET_IMBALANCE_SELL */ 8 | /** MARKET_ON_CLOSE_IMBALANCE_BUY */ 9 | /** MARKET_ON_CLOSE_IMBALANCE_SELL */ 10 | /** NOT_ASSIGNED */ 11 | /** NO_MARKET_IMBALANCE */ 12 | /** NO_MARKET_ON_CLOSE_IMBALANCE */ 13 | /** ITS_PRE_OPENING */ 14 | /** NEW_PRICE_INDICATION */ 15 | /** TRADE_DISSEMINATION_TIME */ 16 | /** READY_TO_TRADE */ 17 | /** NOT_AVAILABLE_FOR_TRADING */ 18 | /** NOT_TRADED_ON_THIS_MARKET */ 19 | /** UNKNOWN_OR_INVALID */ 20 | /** PRE_OPEN */ 21 | /** OPENING_ROTATION */ 22 | /** FAST_MARKET */ 23
    FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2'
    CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E'
    HaltReason?: /** ORDER_IMBALANCE */ 'I' | /** EQUIPMENT_CHANGEOVER */ 'X' | /** NEWS_PENDING */ 'P' | /** NEWS_DISSEMINATION */ 'D' | /** ORDER_INFLUX */ 'E' | /** ADDITIONAL_INFORMATION */ 'M'
    InViewOfCommon?: string
    DueToRelated?: string
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: /** CANCEL */ 1 | /** ERROR */ 2 | /** CORRECTION */ 3
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface TradingSessionStatusRequestMessage {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface TradingSessionStatusMessage {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradingSessionSubID?: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    UnsolicitedIndicator?: string
    TradSesStatus: /** UNKNOWN */ 0 | /** HALTED */ 1 | /** OPEN */ 2 | /** CLOSED */ 3 | /** PRE_OPEN */ 4 | /** PRE_CLOSE */ 5 | /** REQUEST_REJECTED */ 6
    TradSesStatusRejReason?: /** UNKNOWN_OR_INVALID_TRADINGSESSIONID */ 1
    TradSesStartTime?: string
    TradSesOpenTime?: string
    TradSesPreCloseTime?: string
    TradSesCloseTime?: string
    TradSesEndTime?: string
    TotalVolumeTraded?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface NewOrderSingleMessage {
    MsgType: 'D'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    LocateReqd?: string
    TransactTime: string
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: number
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_A_TYPE */ 'B' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM */ 'D' | /** SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL */ 'E' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_W_TYPE */ 'F' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_I_TYPE */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** PROPRIETARY_AFFILIATED */ 'O' | /** PRINCIPAL */ 'P' | /** TRANSACTIONS_NON_MEMBER */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** TRANSACTIONS_UNAFFILIATED_MEMBER */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  interface ExecutionReportMessage {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    SecondaryExecID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    NoContraBrokers?: { ContraBroker?: string, ContraTrader?: string, ContraTradeQty?: number, ContraTradeTime?: string, ContraLegRefID?: string }[]
    ListID?: string
    CrossID?: string
    OrigCrossID?: string
    CrossType?: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    ExecID: string
    ExecRefID?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    WorkingIndicator?: string
    OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_VERBAL */ 7 | /** STALE_ORDER */ 8 | /** TRADE_ALONG_REQUIRED */ 9 | /** INVALID_INVESTOR_ID */ 10 | /** UNSUPPORTED_ORDER_CHARACTERISTIC */ 11 | /** SURVEILLENCE_OPTION */ 12
    ExecRestatementReason?: /** GT_CORPORATE_ACTION */ 0 | /** GT_RENEWAL */ 1 | /** VERBAL_CHANGE */ 2 | /** REPRICING_OF_ORDER */ 3 | /** BROKER_OPTION */ 4 | /** PARTIAL_DECLINE_OF_ORDERQTY */ 5 | /** CANCEL_ON_TRADING_HALT */ 6 | /** CANCEL_ON_SYSTEM_FAILURE */ 7 | /** MARKET */ 8
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: number
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_A_TYPE */ 'B' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM */ 'D' | /** SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL */ 'E' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_W_TYPE */ 'F' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_I_TYPE */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** PROPRIETARY_AFFILIATED */ 'O' | /** PRINCIPAL */ 'P' | /** TRANSACTIONS_NON_MEMBER */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** TRANSACTIONS_UNAFFILIATED_MEMBER */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    LastQty?: number
    UnderlyingLastQty?: number
    LastPx?: number
    UnderlyingLastPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: string
    GrossTradeAmt?: string
    NumDaysInterest?: number
    ExDate?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    TradedFlatSwitch?: string
    BasisFeatureDate?: string
    BasisFeaturePrice?: number
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    SettlCurrAmt?: string
    SettlCurrency?: string
    SettlCurrFxRate?: number
    SettlCurrFxRateCalc?: string
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    MinQty?: number
    MaxFloor?: number
    PositionEffect?: string
    MaxShow?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    LastForwardPoints2?: number
    MultiLegReportingType?: string
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    TransBkdTime?: string
    ExecValuationPoint?: string
    ExecPriceType?: string
    ExecPriceAdjustment?: number
    PriorityIndicator?: /** PRIORITY_UNCHANGED */ 0 | /** LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE */ 1
    PriceImprovement?: number
    NoContAmts?: { ContAmtType?: number, ContAmtValue?: number, ContAmtCurr?: string }[]
    NoLegs?: { LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlmntTyp?: string, LegFutSettDate?: string, LegLastPx?: number }[]
  }

  interface DontKnowTradeMessage {
    MsgType: 'Q'
    OrderID: string
    ExecID: string
    DKReason: /** UNKNOWN_SYMBOL */ 'A' | /** WRONG_SIDE */ 'B' | /** QUANTITY_EXCEEDS_ORDER */ 'C' | /** NO_MATCHING_ORDER */ 'D' | /** PRICE_EXCEEDS_LIMIT */ 'E' | /** OTHER */ 'Z'
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    LastQty?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelReplaceRequestMessage {
    MsgType: 'G'
    OrderID?: string
    TradeOriginationDate?: string
    OrigClOrdID: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    TransactTime: string
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    ComplianceID?: string
    SolicitedFlag?: string
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: number
    Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_A_TYPE */ 'B' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM */ 'D' | /** SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL */ 'E' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_W_TYPE */ 'F' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_I_TYPE */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** PROPRIETARY_AFFILIATED */ 'O' | /** PRINCIPAL */ 'P' | /** TRANSACTIONS_NON_MEMBER */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** TRANSACTIONS_UNAFFILIATED_MEMBER */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z'
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    LocateReqd?: string
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  interface OrderCancelRequestMessage {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    TransactTime: string
    ComplianceID?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelRejectMessage {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    ClOrdID: string
    ClOrdLinkID?: string
    OrigClOrdID: string
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    WorkingIndicator?: string
    OrigOrdModTime?: string
    ListID?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradeOriginationDate?: string
    TransactTime?: string
    CxlRejResponseTo: /** ORDER_CANCEL_REQUEST */ '1' | /** ORDER_CANCEL_REPLACE_REQUEST */ '2'
    CxlRejReason?: /** TOO_LATE_TO_CANCEL */ 0 | /** UNKNOWN_ORDER */ 1 | /** BROKER */ 2 | /** ALREADY_PENDING */ 3 | /** UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST */ 4 | /** ORIGORDMODTIME_DID_NOT_MATCH_LAST_TRANSACTTIME_OF_ORDER */ 5 | /** DUPLICATE_CLORDID_RECEIVED */ 6
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderStatusRequestMessage {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    Account?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
  }

  interface OrderMassCancelRequestMessage {
    MsgType: 'q'
    ClOrdID: string
    SecondaryClOrdID?: string
    MassCancelRequestType: /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderMassCancelReportMessage {
    MsgType: 'r'
    ClOrdID?: string
    SecondaryClOrdID?: string
    OrderID: string
    SecondaryOrderID?: string
    MassCancelRequestType: /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    MassCancelResponse: /** CANCEL_REQUEST_REJECTED */ '0' | /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    MassCancelRejectReason?: string
    TotalAffectedOrders?: number
    NoAffectedOrders?: { OrigClOrdID?: string, AffectedOrderID?: string, AffectedSecondaryOrderID?: string }[]
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    TransactTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderMassStatusRequestMessage {
    MsgType: 'AF'
    MassStatusReqID: string
    MassStatusReqType: /** STATUS_FOR_ORDERS_FOR_A_SECURITY */ 1 | /** STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY */ 2 | /** STATUS_FOR_ORDERS_FOR_A_PRODUCT */ 3 | /** STATUS_FOR_ORDERS_FOR_A_CFICODE */ 4 | /** STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE */ 5 | /** STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION */ 6 | /** STATUS_FOR_ALL_ORDERS */ 7 | /** STATUS_FOR_ORDERS_FOR_A_PARTYID */ 8
    Account?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
  }

  interface NewOrderCrossMessage {
    MsgType: 's'
    CrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: number
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, TradeOriginationDate?: string, Account?: string, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: string, BookingUnit?: string, PreallocMethod?: string, NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[], QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: number, ForexReq?: string, SettlCurrency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string, PositionEffect?: string, CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: string, SolicitedFlag?: string, SideComplianceID?: string }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  interface CrossOrderCancelReplaceRequestMessage {
    MsgType: 't'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: number
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', OrigClOrdID?: string, ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, OrigOrdModTime?: string, TradeOriginationDate?: string, Account?: string, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: string, BookingUnit?: string, PreallocMethod?: string, NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[], QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: number, ForexReq?: string, SettlCurrency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string, PositionEffect?: string, CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: string, SolicitedFlag?: string, SideComplianceID?: string }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  interface CrossOrderCancelRequestMessage {
    MsgType: 'u'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: number
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', OrigClOrdID?: string, ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, OrigOrdModTime?: string, TradeOriginationDate?: string, ComplianceID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
    TransactTime: string
  }

  interface NewOrderMultilegMessage {
    MsgType: 'AB'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    PrevClosePx?: number
    NoLegs?: { LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlmntTyp?: string, LegFutSettDate?: string }[]
    LocateReqd?: string
    TransactTime: string
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: number
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    PositionEffect?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: number
    NetMoney?: string
  }

  interface MultilegOrderCancelReplaceRequestMessage {
    MsgType: 'AC'
    OrderID?: string
    OrigClOrdID: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    OrigOrdModTime?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: string
    HandlInst: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    PrevClosePx?: number
    NoLegs?: { LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlmntTyp?: string, LegFutSettDate?: string }[]
    LocateReqd?: string
    TransactTime: string
    QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: number
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    PositionEffect?: string
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: number
    NetMoney?: string
  }

  interface BidRequestMessage {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: /** NEW */ 'N' | /** CANCEL */ 'C'
    ListName?: string
    TotalNumSecurities: number
    BidType: /** NON_DISCLOSED_STYLE */ 1 | /** DISCLOSED_STYLE */ 2 | /** NO_BIDDING_PROCESS */ 3
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: { BidDescriptorType?: /** SECTOR */ 1 | /** COUNTRY */ 2 | /** INDEX */ 3, BidDescriptor?: string, SideValueInd?: /** SIDEVALUE1 */ 1 | /** SIDEVALUE_2 */ 2, LiquidityValue?: string, LiquidityNumSecurities?: number, LiquidityPctLow?: string, LiquidityPctHigh?: string, EFPTrackingError?: string, FairValue?: string, OutsideIndexPct?: string, ValueOfFutures?: string }[]
    NoBidComponents?: { ListID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', TradingSessionID?: string, TradingSessionSubID?: string, NetGrossInd?: /** NET */ 1 | /** GROSS */ 2, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A', FutSettDate?: string, Account?: string }[]
    LiquidityIndType?: /** FIVEDAY_MOVING_AVERAGE */ 1 | /** TWENTYDAY_MOVING_AVERAGE */ 2 | /** NORMAL_MARKET_SIZE */ 3 | /** OTHER */ 4
    WtAverageLiquidity?: string
    ExchangeForPhysical?: string
    OutMainCntryUIndex?: string
    CrossPercent?: string
    ProgRptReqs?: /** BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST */ 1 | /** SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS */ 2 | /** REAL_TIME_EXECUTION_REPORTS */ 3
    ProgPeriodInterval?: number
    IncTaxInd?: /** NET */ 1 | /** GROSS */ 2
    ForexReq?: string
    NumBidders?: number
    TradeDate?: string
    TradeType: string
    BasisPxType: /** CLOSING_PRICE_AT_MORNING_SESSION */ '2' | /** CLOSING_PRICE */ '3' | /** CURRENT_PRICE */ '4' | /** SQ */ '5' | /** VWAP_THROUGH_A_DAY */ '6' | /** VWAP_THROUGH_A_MORNING_SESSION */ '7' | /** VWAP_THROUGH_AN_AFTERNOON_SESSION */ '8' | /** VWAP_THROUGH_A_DAY_EXCEPT_YORI */ '9' | /** VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI */ 'A' | /** VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI */ 'B' | /** STRIKE */ 'C' | /** OPEN */ 'D' | /** OTHERS */ 'Z'
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BidResponseMessage {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: { ListID?: string, Country?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', Price?: number, PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8, FairValue?: string, NetGrossInd?: /** NET */ 1 | /** GROSS */ 2, SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A', FutSettDate?: string, TradingSessionID?: string, TradingSessionSubID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface NewOrderListMessage {
    MsgType: 'E'
    ListID: string
    BidID?: string
    ClientBidID?: string
    ProgRptReqs?: /** BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST */ 1 | /** SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS */ 2 | /** REAL_TIME_EXECUTION_REPORTS */ 3
    BidType: /** NON_DISCLOSED_STYLE */ 1 | /** DISCLOSED_STYLE */ 2 | /** NO_BIDDING_PROCESS */ 3
    ProgPeriodInterval?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    ListExecInstType?: /** IMMEDIATE */ '1' | /** WAIT_FOR_EXECUTE_INSTRUCTION */ '2' | /** EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN */ '3' | /** EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP */ '4' | /** EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW */ '5'
    ListExecInst?: string
    EncodedListExecInstLen?: number
    EncodedListExecInst?: string
    TotNoOrders: number
    NoOrders: { ClOrdID: string, SecondaryClOrdID?: string, ListSeqNo: number, ClOrdLinkID?: string, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4', TradeOriginationDate?: string, Account?: string, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: string, BookingUnit?: string, PreallocMethod?: string, NoAllocs?: { AllocAccount?: string, IndividualAllocID?: string, AllocQty?: number }[], SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A', FutSettDate?: string, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: string, HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3', ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE_PEG */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y', MinQty?: number, MaxFloor?: number, ExDestination?: string, NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[], ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', PrevClosePx?: number, Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', SideValueInd?: /** SIDEVALUE1 */ 1 | /** SIDEVALUE_2 */ 2, LocateReqd?: string, TransactTime?: string, QuantityType?: /** SHARES */ 1 | /** BONDS */ 2 | /** CURRENTFACE */ 3 | /** ORIGINALFACE */ 4 | /** CURRENCY */ 5 | /** CONTRACTS */ 6 | /** OTHER */ 7 | /** PAR */ 8, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8, Price?: number, StopPx?: number, Currency?: string, ComplianceID?: string, SolicitedFlag?: string, IOIID?: string, QuoteID?: string, TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', EffectiveTime?: string, ExpireDate?: string, ExpireTime?: string, GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: number, Rule80A?: /** AGENCY_SINGLE_ORDER */ 'A' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_A_TYPE */ 'B' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_MEMBER_FIRM */ 'C' | /** PROGRAM_ORDER_INDEX_ARB_FOR_MEMBER_FIRM */ 'D' | /** SHORT_EXEMPT_TRANSACTION_FOR_PRINCIPAL */ 'E' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_W_TYPE */ 'F' | /** SHORT_EXEMPT_TRANSACTION_REFER_TO_I_TYPE */ 'H' | /** INDIVIDUAL_INVESTOR */ 'I' | /** PROGRAM_ORDER_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'J' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_INDIVIDUAL_CUSTOMER */ 'K' | /** SHORT_EXEMPT_AFFILIATED */ 'L' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_MEMBER */ 'M' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_MEMBER */ 'N' | /** PROPRIETARY_AFFILIATED */ 'O' | /** PRINCIPAL */ 'P' | /** TRANSACTIONS_NON_MEMBER */ 'R' | /** SPECIALIST_TRADES */ 'S' | /** TRANSACTIONS_UNAFFILIATED_MEMBER */ 'T' | /** PROGRAM_ORDER_INDEX_ARB_FOR_OTHER_AGENCY */ 'U' | /** ALL_OTHER_ORDERS_AS_AGENT_FOR_OTHER_MEMBER */ 'W' | /** SHORT_EXEMPT_NOT_AFFILIATED */ 'X' | /** PROGRAM_ORDER_NON_INDEX_ARB_FOR_OTHER_AGENCY */ 'Y' | /** SHORT_EXEMPT_NONMEMBER */ 'Z', ForexReq?: string, SettlCurrency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string, FutSettDate2?: string, OrderQty2?: number, Price2?: number, PositionEffect?: string, CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, MaxShow?: number, PegDifference?: number, DiscretionInst?: /** RELATED_TO_DISPLAYED_PRICE */ '0' | /** RELATED_TO_MARKET_PRICE */ '1' | /** RELATED_TO_PRIMARY_PRICE */ '2' | /** RELATED_TO_LOCAL_PRIMARY_PRICE */ '3' | /** RELATED_TO_MIDPOINT_PRICE */ '4' | /** RELATED_TO_LAST_TRADE_PRICE */ '5', DiscretionOffset?: number, Designation?: string, AccruedInterestRate?: string, AccruedInterestAmt?: string, NetMoney?: string }[]
  }

  interface ListStrikePriceMessage {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    NoStrikes: { PrevClosePx?: number, ClOrdID?: string, SecondaryClOrdID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', Price: number, Currency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface ListExecuteMessage {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListCancelRequestMessage {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    TradeOriginationDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListStatusRequestMessage {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListStatusMessage {
    MsgType: 'N'
    ListID: string
    ListStatusType: /** ACK */ 1 | /** RESPONSE */ 2 | /** TIMED */ 3 | /** EXECSTARTED */ 4 | /** ALLDONE */ 5 | /** ALERT */ 6
    NoRpts: string
    ListOrderStatus: /** INBIDDINGPROCESS */ 1 | /** RECEIVEDFOREXECUTION */ 2 | /** EXECUTING */ 3 | /** CANCELING */ 4 | /** ALERT */ 5 | /** ALL_DONE */ 6 | /** REJECT */ 7
    RptSeq: number
    ListStatusText?: string
    EncodedListStatusTextLen?: number
    EncodedListStatusText?: string
    TransactTime?: string
    TotNoOrders: number
    NoOrders: { ClOrdID: string, SecondaryClOrdID?: string, CumQty: number, OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E', WorkingIndicator?: string, LeavesQty: number, CxlQty: number, AvgPx: number, OrdRejReason?: /** BROKER_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_VERBAL */ 7 | /** STALE_ORDER */ 8 | /** TRADE_ALONG_REQUIRED */ 9 | /** INVALID_INVESTOR_ID */ 10 | /** UNSUPPORTED_ORDER_CHARACTERISTIC */ 11 | /** SURVEILLENCE_OPTION */ 12, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface AllocationMessage {
    MsgType: 'J'
    AllocID: string
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2' | /** PRELIMINARY */ '3' | /** CALCULATED */ '4' | /** CALCULATED_WITHOUT_PRELIMINARY */ '5'
    AllocType: /** BUYSIDE_CALCULATED */ 1 | /** BUYSIDE_PRELIMINARY */ 2 | /** SELLSIDE_CALCULATED_USING_PRELIMINARY */ 3 | /** SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY */ 4 | /** BUYSIDE_READY_TO_BOOK_SINGLE_ORDER */ 5 | /** BUYSIDE_READY_TO_BOOK_COMBINED_SET_OF_ORDERS */ 6
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: /** F_X_NETTING */ 0 | /** F_X_SWAP */ 1
    BookingRefID?: string
    NoOrders: { ClOrdID: string, OrderID?: string, SecondaryOrderID?: string, SecondaryClOrdID?: string, ListID?: string }[]
    NoExecs?: { LastQty?: number, ExecID?: string, SecondaryExecID?: string, LastPx?: number, LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4' }[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    Quantity: number
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: string
    TotalAccruedInterestAmt?: string
    LegalConfirm?: string
    NoAllocs: { AllocAccount: string, AllocPrice?: number, AllocQty: number, IndividualAllocID?: string, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', NotifyBrokerOfCredit?: string, AllocHandlInst?: /** MATCH */ 1 | /** FORWARD */ 2 | /** FORWARD_AND_MATCH */ 3, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string, AllocAvgPx?: number, AllocNetMoney?: string, SettlCurrAmt?: string, SettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: string, AccruedInterestAmt?: string, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4', NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' }[] }[]
  }

  interface AllocationACKMessage {
    MsgType: 'P'
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: /** ACCEPTED */ 0 | /** REJECTED */ 1 | /** PARTIAL_ACCEPT */ 2 | /** RECEIVED */ 3
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    LegalConfirm?: string
  }

  interface SettlementInstructionsMessage {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    SettlInstRefID: string
    SettlInstMode: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ALLOCATION_ACCOUNT_OVERRIDING */ '2' | /** SPECIFIC_ALLOCATION_ACCOUNT_STANDING */ '3' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4'
    SettlInstSource: /** BROKERS_INSTRUCTIONS */ '1' | /** INSTITUTIONS_INSTRUCTIONS */ '2' | /** INVESTOR */ '3'
    AllocAccount: string
    IndividualAllocID?: string
    ClOrdID?: string
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    SecurityType?: /** CORPORATE_BOND */ 'CORP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** CONVERTABLE_BOND */ 'CB' | /** DUAL_CURRENCY */ 'DUAL' | /** INDEX_LINKED */ 'XLINKD' | /** STRUCTURED_NOTES */ 'STRUCT' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** COMMON_STOCK */ 'CS' | /** PREFERED_STOCK */ 'PS' | /** BRADY_BOND */ 'BRADY' | /** US_TREASURY_BOND */ 'TBOND' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** US_TREASURY_NOTE_BOND */ 'UST' | /** US_TREASURY_BILL */ 'USTB' | /** TERM_LOAN */ 'TERM' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** BRIDGE_LOAN */ 'BRIDGE' | /** LETTER_OF_CREDIT */ 'LOFC' | /** SWING_LINE_FACILITY */ 'SWING' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEFAULTED */ 'DEFLTED' | /** WITHDRAWN */ 'WITHDRN' | /** REPLACED */ 'REPLACD' | /** MATURED */ 'MATURED' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** RETIRED */ 'RETIRED' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** COMMERCIAL_PAPER */ 'CP' | /** DEPOSIT_NOTES */ 'DP' | /** LIQUIDITY_NOTES */ 'LQN' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** OVERNITE */ 'ONITE' | /** PROMISSORY_NOTES */ 'PN' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REPURCHASE_AGREEMENT */ 'RP' | /** REVERSE_REPURCHASE_AGREEMENT */ 'RVRP' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** TIME_DEPOSIT */ 'TD' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** AGENCY_POOLS */ 'POOL' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** IOETTE_MORTGAGE */ 'IET' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** MANDATORY_TENDER */ 'MT' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REVENUE_BONDS */ 'REV' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** MUTUAL_FUND */ 'MF' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** NO_SECURITY_TYPE */ 'NONE' | /** WILDCARD */ '?'
    EffectiveTime?: string
    TransactTime: string
    StandInstDbType?: /** OTHER */ 0 | /** DTC_SID */ 1 | /** THOMSON_ALERT */ 2 | /** A_GLOBAL_CUSTODIAN */ 3
    StandInstDbName?: string
    StandInstDbID?: string
    SettlDeliveryType?: number
    SettlDepositoryCode?: string
    SettlBrkrCode?: string
    SettlInstCode?: string
    SecuritySettlAgentName?: string
    SecuritySettlAgentCode?: string
    SecuritySettlAgentAcctNum?: string
    SecuritySettlAgentAcctName?: string
    SecuritySettlAgentContactName?: string
    SecuritySettlAgentContactPhone?: string
    CashSettlAgentName?: string
    CashSettlAgentCode?: string
    CashSettlAgentAcctNum?: string
    CashSettlAgentAcctName?: string
    CashSettlAgentContactName?: string
    CashSettlAgentContactPhone?: string
    PaymentMethod?: number
    PaymentRef?: string
    CardHolderName?: string
    CardNumber?: string
    CardStartDate?: string
    CardExpDate?: string
    CardIssNo?: string
    PaymentDate?: string
    PaymentRemitterID?: string
  }

  interface TradeCaptureReportRequestMessage {
    MsgType: 'AD'
    TradeRequestID: string
    TradeRequestType: /** ALL_TRADES */ 0 | /** MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST */ 1 | /** UNMATCHED_TRADES_THAT_MATCH_CRITERIA */ 2 | /** UNREPORTED_TRADES_THAT_MATCH_CRITERIA */ 3 | /** ADVISORIES_THAT_MATCH_CRITERIA */ 4
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    ExecID?: string
    OrderID?: string
    ClOrdID?: string
    MatchStatus?: /** COMPARED */ '0' | /** UNCOMPARED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    NoDates?: { TradeDate?: string, TransactTime?: string }[]
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradeInputSource?: string
    TradeInputDevice?: string
  }

  interface TradeCaptureReportMessage {
    MsgType: 'AE'
    TradeReportID: string
    TradeReportTransType?: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    TradeRequestID?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    TradeReportRefID?: string
    ExecID?: string
    SecondaryExecID?: string
    ExecRestatementReason?: /** GT_CORPORATE_ACTION */ 0 | /** GT_RENEWAL */ 1 | /** VERBAL_CHANGE */ 2 | /** REPRICING_OF_ORDER */ 3 | /** BROKER_OPTION */ 4 | /** PARTIAL_DECLINE_OF_ORDERQTY */ 5 | /** CANCEL_ON_TRADING_HALT */ 6 | /** CANCEL_ON_SYSTEM_FAILURE */ 7 | /** MARKET */ 8
    PreviouslyReported: string
    LastQty: number
    LastPx: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradeDate: string
    TransactTime: string
    SettlmntTyp?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9' | /** T_PLUS_1 */ 'A'
    FutSettDate?: string
    MatchStatus?: /** COMPARED */ '0' | /** UNCOMPARED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    MatchType?: /** EXACT_MATCH_PLUS_FOUR_BADGES_AND_EXECUTION_TIME */ 'A1' | /** EXACT_MATCH_PLUS_FOUR_BADGES */ 'A2' | /** EXACT_MATCH_PLUS_TWO_BADGES_AND_EXECUTION_TIME */ 'A3' | /** EXACT_MATCH_PLUS_TWO_BADGES */ 'A4' | /** EXACT_MATCH_PLUS_EXECUTION_TIME */ 'A5' | /** COMPARED_RECORDS_RESULTING_FROM_STAMPED_ADVISORIES_OR_SPECIALIST_ACCEPTS */ 'AQ' | /** SUMMARIZED_MATCH_USING_A1_TO_A5 */ 'S5' | /** ACT_M1_MATCH */ 'M1' | /** ACT_M2_MATCH */ 'M2' | /** NON_ACT */ 'MT' | /** ACT_ACCEPTED_TRADE */ 'M3' | /** ACT_DEFAULT_TRADE */ 'M4' | /** ACT_DEFAULT_AFTER_M2 */ 'M5' | /** ACT_M6_MATCH */ 'M6'
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C', OrderID: string, SecondaryOrderID?: string, ClOrdID?: string, Account?: string, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', OddLot?: string, NoClearingInstructions?: { ClearingInstruction?: /** PROCESS_NORMALLY */ 0 | /** EXCLUDE_FROM_ALL_NETTING */ 1 | /** BILATERAL_NETTING_ONLY */ 2 | /** EX_CLEARING */ 3 | /** SPECIAL_TRADE */ 4 | /** MULTILATERAL_NETTING */ 5 | /** CLEAR_AGAINST_CENTRAL_COUNTERPARTY */ 6 | /** EXCLUDE_FROM_CENTRAL_COUNTERPARTY */ 7 | /** MANUAL_MODE */ 8 | /** AUTOMATIC_POSTING_MODE */ 9 | /** AUTOMATIC_GIVE_UP_MODE */ 10 }[], ClearingFeeIndicator?: string, TradeInputSource?: string, TradeInputDevice?: string, Currency?: string, ComplianceID?: string, SolicitedFlag?: string, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: number, TransBkdTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, GrossTradeAmt?: string, NumDaysInterest?: number, ExDate?: string, AccruedInterestRate?: string, AccruedInterestAmt?: string, Concession?: string, TotalTakedown?: string, NetMoney?: string, SettlCurrAmt?: string, SettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: string, PositionEffect?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string, MultiLegReportingType?: string, NoContAmts?: { ContAmtType?: number, ContAmtValue?: number, ContAmtCurr?: string }[], NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' }[] }[]
  }

  interface RegistrationInstructionsMessage {
    MsgType: 'o'
    RegistID: string
    RegistTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    RegistAcctType?: string
    TaxAdvantageType?: number
    OwnershipType?: string
    NoRegistDtls?: { RegistDetls?: string, RegistEmail?: string, MailingDtls?: string, MailingInst?: string, OwnerType?: /** INDIVIDUAL_INVESTOR */ 1 | /** PUBLIC_COMPANY */ 2 | /** PRIVATE_COMPANY */ 3 | /** INDIVIDUAL_TRUSTEE */ 4 | /** COMPANY_TRUSTEE */ 5 | /** PENSION_PLAN */ 6 | /** CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT */ 7 | /** TRUSTS */ 8 | /** FIDUCIARIES */ 9 | /** NETWORKING_SUB_ACCOUNT */ 10 | /** NON_PROFIT_ORGANIZATION */ 11 | /** CORPORATE_BODY */ 12 | /** NOMINEE */ 13, DateOfBirth?: string, InvestorCountryOfResidence?: string }[]
    NoDistribInsts?: { DistribPaymentMethod?: number, DistribPercentage?: string, CashDistribCurr?: string, CashDistribAgentName?: string, CashDistribAgentCode?: string, CashDistribAgentAcctNumber?: string, CashDistribPayRef?: string, CashDistribAgentAcctName?: string }[]
  }

  interface RegistrationInstructionsResponseMessage {
    MsgType: 'p'
    RegistID: string
    RegistTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    RegistStatus: string
    RegistRejReasonCode?: number
    RegistRejReasonText?: string
  }

  export interface Trailer {
    SignatureLength?: number
    Signature?: string
    CheckSum: string
  }

  export type Messages =
    | HeartbeatMessage
    | LogonMessage
    | TestRequestMessage
    | ResendRequestMessage
    | RejectMessage
    | SequenceResetMessage
    | LogoutMessage
    | BusinessMessageRejectMessage
    | AdvertisementMessage
    | IndicationOfInterestMessage
    | NewsMessage
    | EmailMessage
    | QuoteRequestMessage
    | QuoteRequestRejectMessage
    | RFQRequestMessage
    | QuoteMessage
    | QuoteCancelMessage
    | QuoteStatusRequestMessage
    | QuoteStatusReportMessage
    | MassQuoteMessage
    | MassQuoteAcknowledgementMessage
    | MarketDataRequestMessage
    | MarketDataSnapshotFullRefreshMessage
    | MarketDataIncrementalRefreshMessage
    | MarketDataRequestRejectMessage
    | SecurityDefinitionRequestMessage
    | SecurityDefinitionMessage
    | SecurityTypeRequestMessage
    | SecurityTypesMessage
    | SecurityListRequestMessage
    | SecurityListMessage
    | DerivativeSecurityListRequestMessage
    | DerivativeSecurityListMessage
    | SecurityStatusRequestMessage
    | SecurityStatusMessage
    | TradingSessionStatusRequestMessage
    | TradingSessionStatusMessage
    | NewOrderSingleMessage
    | ExecutionReportMessage
    | DontKnowTradeMessage
    | OrderCancelReplaceRequestMessage
    | OrderCancelRequestMessage
    | OrderCancelRejectMessage
    | OrderStatusRequestMessage
    | OrderMassCancelRequestMessage
    | OrderMassCancelReportMessage
    | OrderMassStatusRequestMessage
    | NewOrderCrossMessage
    | CrossOrderCancelReplaceRequestMessage
    | CrossOrderCancelRequestMessage
    | NewOrderMultilegMessage
    | MultilegOrderCancelReplaceRequestMessage
    | BidRequestMessage
    | BidResponseMessage
    | NewOrderListMessage
    | ListStrikePriceMessage
    | ListExecuteMessage
    | ListCancelRequestMessage
    | ListStatusRequestMessage
    | ListStatusMessage
    | AllocationMessage
    | AllocationACKMessage
    | SettlementInstructionsMessage
    | TradeCaptureReportRequestMessage
    | TradeCaptureReportMessage
    | RegistrationInstructionsMessage
    | RegistrationInstructionsResponseMessage
}

export namespace FIX44 {
  export interface Header {
    BeginString: 'FIX.4.4'
    BodyLength: number
    MsgType: /** HEARTBEAT */ '0' | /** TEST_REQUEST */ '1' | /** RESEND_REQUEST */ '2' | /** REJECT */ '3' | /** SEQUENCE_RESET */ '4' | /** LOGOUT */ '5' | /** INDICATION_OF_INTEREST */ '6' | /** ADVERTISEMENT */ '7' | /** EXECUTION_REPORT */ '8' | /** ORDER_CANCEL_REJECT */ '9' | /** LOGON */ 'A' | /** NEWS */ 'B' | /** EMAIL */ 'C' | /** ORDER_SINGLE */ 'D' | /** ORDER_LIST */ 'E' | /** ORDER_CANCEL_REQUEST */ 'F' | /** ORDER_CANCEL_REPLACE_REQUEST */ 'G' | /** ORDER_STATUS_REQUEST */ 'H' | /** ALLOCATION_INSTRUCTION */ 'J' | /** LIST_CANCEL_REQUEST */ 'K' | /** LIST_EXECUTE */ 'L' | /** LIST_STATUS_REQUEST */ 'M' | /** LIST_STATUS */ 'N' | /** ALLOCATION_INSTRUCTION_ACK */ 'P' | /** DONT_KNOW_TRADE */ 'Q' | /** QUOTE_REQUEST */ 'R' | /** QUOTE */ 'S' | /** SETTLEMENT_INSTRUCTIONS */ 'T' | /** MARKET_DATA_REQUEST */ 'V' | /** MARKET_DATA_SNAPSHOT_FULL_REFRESH */ 'W' | /** MARKET_DATA_INCREMENTAL_REFRESH */ 'X' | /** MARKET_DATA_REQUEST_REJECT */ 'Y' | /** QUOTE_CANCEL */ 'Z' | /** QUOTE_STATUS_REQUEST */ 'a' | /** MASS_QUOTE_ACKNOWLEDGEMENT */ 'b' | /** SECURITY_DEFINITION_REQUEST */ 'c' | /** SECURITY_DEFINITION */ 'd' | /** SECURITY_STATUS_REQUEST */ 'e' | /** SECURITY_STATUS */ 'f' | /** TRADING_SESSION_STATUS_REQUEST */ 'g' | /** TRADING_SESSION_STATUS */ 'h' | /** MASS_QUOTE */ 'i' | /** BUSINESS_MESSAGE_REJECT */ 'j' | /** BID_REQUEST */ 'k' | /** BID_RESPONSE */ 'l' | /** LIST_STRIKE_PRICE */ 'm' | /** XML_MESSAGE */ 'n' | /** REGISTRATION_INSTRUCTIONS */ 'o' | /** REGISTRATION_INSTRUCTIONS_RESPONSE */ 'p' | /** ORDER_MASS_CANCEL_REQUEST */ 'q' | /** ORDER_MASS_CANCEL_REPORT */ 'r' | /** NEW_ORDER_CROSS */ 's' | /** CROSS_ORDER_CANCEL_REPLACE_REQUEST */ 't' | /** CROSS_ORDER_CANCEL_REQUEST */ 'u' | /** SECURITY_TYPE_REQUEST */ 'v' | /** SECURITY_TYPES */ 'w' | /** SECURITY_LIST_REQUEST */ 'x' | /** SECURITY_LIST */ 'y' | /** DERIVATIVE_SECURITY_LIST_REQUEST */ 'z' | /** DERIVATIVE_SECURITY_LIST */ 'AA' | /** NEW_ORDER_MULTILEG */ 'AB' | /** MULTILEG_ORDER_CANCEL_REPLACE */ 'AC' | /** TRADE_CAPTURE_REPORT_REQUEST */ 'AD' | /** TRADE_CAPTURE_REPORT */ 'AE' | /** ORDER_MASS_STATUS_REQUEST */ 'AF' | /** QUOTE_REQUEST_REJECT */ 'AG' | /** RFQ_REQUEST */ 'AH' | /** QUOTE_STATUS_REPORT */ 'AI' | /** QUOTE_RESPONSE */ 'AJ' | /** CONFIRMATION */ 'AK' | /** POSITION_MAINTENANCE_REQUEST */ 'AL' | /** POSITION_MAINTENANCE_REPORT */ 'AM' | /** REQUEST_FOR_POSITIONS */ 'AN' | /** REQUEST_FOR_POSITIONS_ACK */ 'AO' | /** POSITION_REPORT */ 'AP' | /** TRADE_CAPTURE_REPORT_REQUEST_ACK */ 'AQ' | /** TRADE_CAPTURE_REPORT_ACK */ 'AR' | /** ALLOCATION_REPORT */ 'AS' | /** ALLOCATION_REPORT_ACK */ 'AT' | /** CONFIRMATION_ACK */ 'AU' | /** SETTLEMENT_INSTRUCTION_REQUEST */ 'AV' | /** ASSIGNMENT_REPORT */ 'AW' | /** COLLATERAL_REQUEST */ 'AX' | /** COLLATERAL_ASSIGNMENT */ 'AY' | /** COLLATERAL_RESPONSE */ 'AZ' | /** COLLATERAL_REPORT */ 'BA' | /** COLLATERAL_INQUIRY */ 'BB' | /** NETWORK_STATUS_REQUEST */ 'BC' | /** NETWORK_STATUS_RESPONSE */ 'BD' | /** USER_REQUEST */ 'BE' | /** USER_RESPONSE */ 'BF' | /** COLLATERAL_INQUIRY_ACK */ 'BG' | /** CONFIRMATION_REQUEST */ 'BH'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: number
    SecureData?: string
    MsgSeqNum: number
    SenderSubID?: string
    SenderLocationID?: string
    TargetSubID?: string
    TargetLocationID?: string
    OnBehalfOfSubID?: string
    OnBehalfOfLocationID?: string
    DeliverToSubID?: string
    DeliverToLocationID?: string
    PossDupFlag?: string
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
    XmlDataLen?: number
    XmlData?: string
    MessageEncoding?: /** ISO_2022_JP */ 'ISO-2022-JP' | /** EUC_JP */ 'EUC-JP' | /** SHIFT_JIS */ 'SHIFT_JIS' | /** UTF_8 */ 'UTF-8'
    LastMsgSeqNumProcessed?: number
    NoHops?: { HopCompID?: string, HopSendingTime?: string, HopRefID?: number }[]
  }

  interface HeartbeatMessage {
    MsgType: '0'
    TestReqID?: string
  }

  interface LogonMessage {
    MsgType: 'A'
    EncryptMethod: /** NONE_OTHER */ 0 | /** PKCS */ 1 | /** DES */ 2 | /** PKCS_DES */ 3 | /** PGP_DES */ 4 | /** PGP_DES_MD5 */ 5 | /** PEM_DES_MD5 */ 6
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: string
    NextExpectedMsgSeqNum?: number
    MaxMessageSize?: number
    NoMsgTypes?: { RefMsgType?: string, MsgDirection?: /** SEND */ 'S' | /** RECEIVE */ 'R' }[]
    TestMessageIndicator?: string
    Username?: string
    Password?: string
  }

  interface TestRequestMessage {
    MsgType: '1'
    TestReqID: string
  }

  interface ResendRequestMessage {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  interface RejectMessage {
    MsgType: '3'
    RefSeqNum: number
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: /** INVALID_TAG_NUMBER */ 0 | /** REQUIRED_TAG_MISSING */ 1 | /** TAG_NOT_DEFINED_FOR_THIS_MESSAGE_TYPE */ 2 | /** UNDEFINED_TAG */ 3 | /** TAG_SPECIFIED_WITHOUT_A_VALUE */ 4 | /** VALUE_IS_INCORRECT */ 5 | /** INCORRECT_DATA_FORMAT_FOR_VALUE */ 6 | /** DECRYPTION_PROBLEM */ 7 | /** SIGNATURE_PROBLEM */ 8 | /** COMPID_PROBLEM */ 9 | /** SENDINGTIME_ACCURACY_PROBLEM */ 10 | /** INVALID_MSGTYPE */ 11 | /** XML_VALIDATION_ERROR */ 12 | /** TAG_APPEARS_MORE_THAN_ONCE */ 13 | /** TAG_SPECIFIED_OUT_OF_REQUIRED_ORDER */ 14 | /** REPEATING_GROUP_FIELDS_OUT_OF_ORDER */ 15 | /** INCORRECT_NUMINGROUP_COUNT_FOR_REPEATING_GROUP */ 16 | /** NON_DATA_VALUE_INCLUDES_FIELD_DELIMITER */ 17 | /** OTHER */ 99
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SequenceResetMessage {
    MsgType: '4'
    GapFillFlag?: string
    NewSeqNo: number
  }

  interface LogoutMessage {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BusinessMessageRejectMessage {
    MsgType: 'j'
    RefSeqNum?: number
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: /** OTHER */ 0 | /** UNKOWN_ID */ 1 | /** UNKNOWN_SECURITY */ 2 | /** UNSUPPORTED_MESSAGE_TYPE */ 3 | /** APPLICATION_NOT_AVAILABLE */ 4 | /** CONDITIONALLY_REQUIRED_FIELD_MISSING */ 5 | /** NOT_AUTHORIZED */ 6 | /** DELIVERTO_FIRM_NOT_AVAILABLE_AT_THIS_TIME */ 7
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface UserRequestMessage {
    MsgType: 'BE'
    UserRequestID: string
    UserRequestType: /** LOGONUSER */ 1 | /** LOGOFFUSER */ 2 | /** CHANGEPASSWORDFORUSER */ 3 | /** REQUEST_INDIVIDUAL_USER_STATUS */ 4
    Username: string
    Password?: string
    NewPassword?: string
    RawDataLength?: number
    RawData?: string
  }

  interface UserResponseMessage {
    MsgType: 'BF'
    UserRequestID: string
    Username: string
    UserStatus?: /** LOGGED_IN */ 1 | /** NOT_LOGGED_IN */ 2 | /** USER_NOT_RECOGNISED */ 3 | /** PASSWORD_INCORRECT */ 4 | /** PASSWORD_CHANGED */ 5 | /** OTHER */ 6
    UserStatusText?: string
  }

  interface AdvertisementMessage {
    MsgType: '7'
    AdvId: string
    AdvTransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    AdvRefID?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    AdvSide: /** BUY */ 'B' | /** SELL */ 'S' | /** CROSS */ 'X' | /** TRADE */ 'T'
    Quantity: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    URLLink?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  interface IndicationOfInterestMessage {
    MsgType: '6'
    IOIID: string
    IOITransType: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R'
    IOIRefID?: string
    NoUnderlyings?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    IOIQty: string
    Currency?: string
    NoLegs?: { LegIOIQty?: string }[]
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    ValidUntilTime?: string
    IOIQltyInd?: /** LOW */ 'L' | /** MEDIUM */ 'M' | /** HIGH */ 'H'
    IOINaturalFlag?: string
    NoIOIQualifiers?: { IOIQualifier?: /** ALL_OR_NONE */ 'A' | /** MARKET_ON_CLOSE */ 'B' | /** AT_THE_CLOSE */ 'C' | /** VWAP */ 'D' | /** IN_TOUCH_WITH */ 'I' | /** LIMIT */ 'L' | /** MORE_BEHIND */ 'M' | /** AT_THE_OPEN */ 'O' | /** TAKING_A_POSITION */ 'P' | /** AT_THE_MARKET */ 'Q' | /** READY_TO_TRADE */ 'R' | /** PORTFOLIO_SHOWN */ 'S' | /** THROUGH_THE_DAY */ 'T' | /** VERSUS */ 'V' | /** INDICATION_WORKING_AWAY */ 'W' | /** CROSSING_OPPORTUNITY */ 'X' | /** AT_THE_MIDPOINT */ 'Y' | /** PRE_OPEN */ 'Z' }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
  }

  interface NewsMessage {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: /** NORMAL */ '0' | /** FLASH */ '1' | /** BACKGROUND */ '2'
    Headline: string
    EncodedHeadlineLen?: number
    EncodedHeadline?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: {}[]
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  interface EmailMessage {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: /** NEW */ '0' | /** REPLY */ '1' | /** ADMIN_REPLY */ '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: number
    EncodedSubject?: string
    NoRoutingIDs?: { RoutingType?: /** TARGET_FIRM */ 1 | /** TARGET_LIST */ 2 | /** BLOCK_FIRM */ 3 | /** BLOCK_LIST */ 4, RoutingID?: string }[]
    NoRelatedSym?: {}[]
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    OrderID?: string
    ClOrdID?: string
    LinesOfText: { Text: string, EncodedTextLen?: number, EncodedText?: string }[]
    RawDataLength?: number
    RawData?: string
  }

  interface QuoteRequestMessage {
    MsgType: 'R'
    QuoteReqID: string
    RFQReqID?: string
    ClOrdID?: string
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    NoRelatedSym: { NoUnderlyings?: {}[], PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3, TradingSessionID?: string, TradingSessionSubID?: string, TradeOriginationDate?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1, SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9', SettlDate?: string, SettlDate2?: string, OrderQty2?: number, Currency?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string, LegSettlDate?: string }[], NoQuoteQualifiers?: { QuoteQualifier?: string }[], QuotePriceType?: /** PERCENT */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD_SPREAD */ 9 | /** YIELD */ 10, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', ValidUntilTime?: string, ExpireTime?: string, TransactTime?: string, PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11, Price?: number, Price2?: number }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface QuoteResponseMessage {
    MsgType: 'AJ'
    QuoteRespID: string
    QuoteID?: string
    QuoteRespType: /** HIT_LIFT */ 1 | /** COUNTER */ 2 | /** EXPIRED */ 3 | /** COVER */ 4 | /** DONE_AWAY */ 5 | /** PASS */ 6
    ClOrdID?: string
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    IOIID?: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3
    NoQuoteQualifiers?: { QuoteQualifier?: string }[]
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: {}[]
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string, LegSettlDate?: string, LegPriceType?: number, LegBidPx?: number, LegOfferPx?: number }[]
    BidPx?: number
    OfferPx?: number
    MktBidPx?: number
    MktOfferPx?: number
    MinBidSize?: number
    BidSize?: number
    MinOfferSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    MidPx?: number
    BidYield?: string
    MidYield?: string
    OfferYield?: string
    TransactTime?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    Commission?: string
    CommType?: /** PER_UNIT */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3' | /** PERCENTAGE_WAIVED_CASH_DISCOUNT */ '4' | /** PERCENTAGE_WAIVED_ENHANCED_UNITS */ '5' | /** POINTS_PER_BOND_OR_OR_CONTRACT */ '6'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ExDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
  }

  interface QuoteRequestRejectMessage {
    MsgType: 'AG'
    QuoteReqID: string
    RFQReqID?: string
    QuoteRequestRejectReason: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** QUOTE_REQUEST_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** INVALID_PRICE */ 5 | /** NOT_AUTHORIZED_TO_REQUEST_QUOTE */ 6 | /** NO_MATCH_FOR_INQUIRY */ 7 | /** NO_MARKET_FOR_INSTRUMENT */ 8 | /** NO_INVENTORY */ 9 | /** PASS */ 10 | /** OTHER */ 99
    NoRelatedSym: { NoUnderlyings?: {}[], PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3, TradingSessionID?: string, TradingSessionSubID?: string, TradeOriginationDate?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1, SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9', SettlDate?: string, SettlDate2?: string, OrderQty2?: number, Currency?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string, LegSettlDate?: string }[] }[]
    NoQuoteQualifiers?: { QuoteQualifier?: string }[]
    QuotePriceType?: /** PERCENT */ 1 | /** PER_SHARE */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** BASIS_POINTS_RELATIVE_TO_BENCHMARK */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD_SPREAD */ 9 | /** YIELD */ 10
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    ExpireTime?: string
    TransactTime?: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    Price2?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface RFQRequestMessage {
    MsgType: 'AH'
    RFQReqID: string
    NoRelatedSym: { NoUnderlyings?: {}[], NoLegs?: {}[], PrevClosePx?: number, QuoteRequestType?: /** MANUAL */ 1 | /** AUTOMATIC */ 2, QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3, TradingSessionID?: string, TradingSessionSubID?: string }[]
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface QuoteMessage {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteRespID?: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3
    NoQuoteQualifiers?: { QuoteQualifier?: string }[]
    QuoteResponseLevel?: /** NO_ACKNOWLEDGEMENT */ 0 | /** ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES */ 1 | /** ACKNOWLEDGE_EACH_QUOTE_MESSAGES */ 2
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: {}[]
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string, LegSettlDate?: string, LegPriceType?: number, LegBidPx?: number, LegOfferPx?: number }[]
    BidPx?: number
    OfferPx?: number
    MktBidPx?: number
    MktOfferPx?: number
    MinBidSize?: number
    BidSize?: number
    MinOfferSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    MidPx?: number
    BidYield?: string
    MidYield?: string
    OfferYield?: string
    TransactTime?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    CommType?: /** PER_UNIT */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3' | /** PERCENTAGE_WAIVED_CASH_DISCOUNT */ '4' | /** PERCENTAGE_WAIVED_ENHANCED_UNITS */ '5' | /** POINTS_PER_BOND_OR_OR_CONTRACT */ '6'
    Commission?: string
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ExDestination?: string
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface QuoteCancelMessage {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: /** CANCEL_FOR_SYMBOL */ 1 | /** CANCEL_FOR_SECURITY_TYPE */ 2 | /** CANCEL_FOR_UNDERLYING_SYMBOL */ 3 | /** CANCEL_ALL_QUOTES */ 4
    QuoteResponseLevel?: /** NO_ACKNOWLEDGEMENT */ 0 | /** ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES */ 1 | /** ACKNOWLEDGE_EACH_QUOTE_MESSAGES */ 2
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoQuoteEntries?: { NoUnderlyings?: {}[], NoLegs?: {}[] }[]
  }

  interface QuoteStatusRequestMessage {
    MsgType: 'a'
    QuoteStatusReqID?: string
    QuoteID?: string
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface QuoteStatusReportMessage {
    MsgType: 'AI'
    QuoteStatusReqID?: string
    QuoteReqID?: string
    QuoteID: string
    QuoteRespID?: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: {}[]
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string, LegSettlDate?: string }[]
    NoQuoteQualifiers?: { QuoteQualifier?: string }[]
    ExpireTime?: string
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    BidPx?: number
    OfferPx?: number
    MktBidPx?: number
    MktOfferPx?: number
    MinBidSize?: number
    BidSize?: number
    MinOfferSize?: number
    OfferSize?: number
    ValidUntilTime?: string
    BidSpotRate?: number
    OfferSpotRate?: number
    BidForwardPoints?: number
    OfferForwardPoints?: number
    MidPx?: number
    BidYield?: string
    MidYield?: string
    OfferYield?: string
    TransactTime?: string
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    CommType?: /** PER_UNIT */ '1' | /** PERCENTAGE */ '2' | /** ABSOLUTE */ '3' | /** PERCENTAGE_WAIVED_CASH_DISCOUNT */ '4' | /** PERCENTAGE_WAIVED_ENHANCED_UNITS */ '5' | /** POINTS_PER_BOND_OR_OR_CONTRACT */ '6'
    Commission?: string
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ExDestination?: string
    QuoteStatus?: /** ACCEPTED */ 0 | /** CANCELED_FOR_SYMBOL */ 1 | /** CANCELED_FOR_SECURITY_TYPE */ 2 | /** CANCELED_FOR_UNDERLYING */ 3 | /** CANCELED_ALL */ 4 | /** REJECTED */ 5 | /** REMOVED_FROM_MARKET */ 6 | /** EXPIRED */ 7 | /** QUERY */ 8 | /** QUOTE_NOT_FOUND */ 9 | /** PENDING */ 10 | /** PASS */ 11 | /** LOCKED_MARKET_WARNING */ 12 | /** CROSS_MARKET_WARNING */ 13 | /** CANCELED_DUE_TO_LOCK_MARKET */ 14 | /** CANCELED_DUE_TO_CROSS_MARKET */ 15
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface MassQuoteMessage {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3
    QuoteResponseLevel?: /** NO_ACKNOWLEDGEMENT */ 0 | /** ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES */ 1 | /** ACKNOWLEDGE_EACH_QUOTE_MESSAGES */ 2
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: { QuoteSetID: string, QuoteSetValidUntilTime?: string, TotNoQuoteEntries: number, LastFragment?: string, NoQuoteEntries: { QuoteEntryID: string, NoLegs?: {}[], BidPx?: number, OfferPx?: number, BidSize?: number, OfferSize?: number, ValidUntilTime?: string, BidSpotRate?: number, OfferSpotRate?: number, BidForwardPoints?: number, OfferForwardPoints?: number, MidPx?: number, BidYield?: string, MidYield?: string, OfferYield?: string, TransactTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, SettlDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', SettlDate2?: string, OrderQty2?: number, BidForwardPoints2?: number, OfferForwardPoints2?: number, Currency?: string }[] }[]
  }

  interface MassQuoteAcknowledgementMessage {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteStatus: /** ACCEPTED */ 0 | /** CANCELED_FOR_SYMBOL */ 1 | /** CANCELED_FOR_SECURITY_TYPE */ 2 | /** CANCELED_FOR_UNDERLYING */ 3 | /** CANCELED_ALL */ 4 | /** REJECTED */ 5 | /** REMOVED_FROM_MARKET */ 6 | /** EXPIRED */ 7 | /** QUERY */ 8 | /** QUOTE_NOT_FOUND */ 9 | /** PENDING */ 10 | /** PASS */ 11 | /** LOCKED_MARKET_WARNING */ 12 | /** CROSS_MARKET_WARNING */ 13 | /** CANCELED_DUE_TO_LOCK_MARKET */ 14 | /** CANCELED_DUE_TO_CROSS_MARKET */ 15
    QuoteRejectReason?: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** QUOTE_REQUEST_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_QUOTE */ 5 | /** DUPLICATE_QUOTE */ 6 | /** INVALID_BID_ASK_SPREAD */ 7 | /** INVALID_PRICE */ 8 | /** NOT_AUTHORIZED_TO_QUOTE_SECURITY */ 9 | /** OTHER */ 99
    QuoteResponseLevel?: /** NO_ACKNOWLEDGEMENT */ 0 | /** ACKNOWLEDGE_ONLY_NEGATIVE_OR_ERRONEOUS_QUOTES */ 1 | /** ACKNOWLEDGE_EACH_QUOTE_MESSAGES */ 2
    QuoteType?: /** INDICATIVE */ 0 | /** TRADEABLE */ 1 | /** RESTRICTED_TRADEABLE */ 2 | /** COUNTER */ 3
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoQuoteSets?: { QuoteSetID?: string, TotNoQuoteEntries?: number, LastFragment?: string, NoQuoteEntries?: { QuoteEntryID?: string, NoLegs?: {}[], BidPx?: number, OfferPx?: number, BidSize?: number, OfferSize?: number, ValidUntilTime?: string, BidSpotRate?: number, OfferSpotRate?: number, BidForwardPoints?: number, OfferForwardPoints?: number, MidPx?: number, BidYield?: string, MidYield?: string, OfferYield?: string, TransactTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, SettlDate?: string, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', SettlDate2?: string, OrderQty2?: number, BidForwardPoints2?: number, OfferForwardPoints2?: number, Currency?: string, QuoteEntryRejectReason?: /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** QUOTE_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_QUOTE */ 5 | /** DUPLICATE_QUOTE */ 6 | /** INVALID_BID_ASK_SPREAD */ 7 | /** INVALID_PRICE */ 8 | /** NOT_AUTHORIZED_TO_QUOTE_SECURITY */ 9 }[] }[]
  }

  interface MarketDataRequestMessage {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    MarketDepth: number
    MDUpdateType?: /** FULL_REFRESH */ 0 | /** INCREMENTAL_REFRESH */ 1
    AggregatedBook?: string
    OpenCloseSettlFlag?: /** DAILY_OPEN_CLOSE_SETTLEMENT_ENTRY */ '0' | /** SESSION_OPEN_CLOSE_SETTLEMENT_ENTRY */ '1' | /** DELIVERY_SETTLEMENT_ENTRY */ '2' | /** EXPECTED_ENTRY */ '3' | /** ENTRY_FROM_PREVIOUS_BUSINESS_DAY */ '4' | /** THEORETICAL_PRICE_VALUE */ '5'
    Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3'
    MDImplicitDelete?: string
    NoMDEntryTypes: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A' | /** TRADE_VOLUME */ 'B' | /** OPEN_INTEREST */ 'C' }[]
    NoRelatedSym: { NoUnderlyings?: {}[], NoLegs?: {}[] }[]
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ApplQueueAction?: /** NO_ACTION_TAKEN */ 0 | /** QUEUE_FLUSHED */ 1 | /** OVERLAY_LAST */ 2 | /** END_SESSION */ 3
    ApplQueueMax?: number
  }

  interface MarketDataSnapshotFullRefreshMessage {
    MsgType: 'W'
    MDReqID?: string
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2'
    CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E'
    NetChgPrevDay?: number
    NoMDEntries: { MDEntryType: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A' | /** TRADE_VOLUME */ 'B' | /** OPEN_INTEREST */ 'C', MDEntryPx?: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZERO_PLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZERO_MINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, TradingSessionSubID?: string, QuoteCondition?: /** OPEN_ACTIVE */ 'A' | /** CLOSED_INACTIVE */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NON_FIRM */ 'I', TradeCondition?: /** CASH_MARKET */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY_MARKET */ 'D' | /** OPENING_REOPENING_TRADE_DETAIL */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE127 */ 'G' | /** RULE155 */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N' | /** IMBALANCE_MORE_BUYERS */ 'P' | /** IMBALANCE_MORE_SELLERS */ 'Q' | /** OPENING_PRICE */ 'R', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettlFlag?: /** DAILY_OPEN_CLOSE_SETTLEMENT_ENTRY */ '0' | /** SESSION_OPEN_CLOSE_SETTLEMENT_ENTRY */ '1' | /** DELIVERY_SETTLEMENT_ENTRY */ '2' | /** EXPECTED_ENTRY */ '3' | /** ENTRY_FROM_PREVIOUS_BUSINESS_DAY */ '4' | /** THEORETICAL_PRICE_VALUE */ '5', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3', PriceDelta?: number, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
    ApplQueueDepth?: number
    ApplQueueResolution?: /** NO_ACTION_TAKEN */ 0 | /** QUEUE_FLUSHED */ 1 | /** OVERLAY_LAST */ 2 | /** END_SESSION */ 3
  }

  interface MarketDataIncrementalRefreshMessage {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: { MDUpdateAction: /** NEW */ '0' | /** CHANGE */ '1' | /** DELETE */ '2', DeleteReason?: /** CANCELATION_TRADE_BUST */ '0' | /** ERROR */ '1', MDEntryType?: /** BID */ '0' | /** OFFER */ '1' | /** TRADE */ '2' | /** INDEX_VALUE */ '3' | /** OPENING_PRICE */ '4' | /** CLOSING_PRICE */ '5' | /** SETTLEMENT_PRICE */ '6' | /** TRADING_SESSION_HIGH_PRICE */ '7' | /** TRADING_SESSION_LOW_PRICE */ '8' | /** TRADING_SESSION_VWAP_PRICE */ '9' | /** IMBALANCE */ 'A' | /** TRADE_VOLUME */ 'B' | /** OPEN_INTEREST */ 'C', MDEntryID?: string, MDEntryRefID?: string, NoUnderlyings?: {}[], NoLegs?: {}[], FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2', CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E', MDEntryPx?: number, Currency?: string, MDEntrySize?: number, MDEntryDate?: string, MDEntryTime?: string, TickDirection?: /** PLUS_TICK */ '0' | /** ZERO_PLUS_TICK */ '1' | /** MINUS_TICK */ '2' | /** ZERO_MINUS_TICK */ '3', MDMkt?: string, TradingSessionID?: string, TradingSessionSubID?: string, QuoteCondition?: /** OPEN_ACTIVE */ 'A' | /** CLOSED_INACTIVE */ 'B' | /** EXCHANGE_BEST */ 'C' | /** CONSOLIDATED_BEST */ 'D' | /** LOCKED */ 'E' | /** CROSSED */ 'F' | /** DEPTH */ 'G' | /** FAST_TRADING */ 'H' | /** NON_FIRM */ 'I', TradeCondition?: /** CASH_MARKET */ 'A' | /** AVERAGE_PRICE_TRADE */ 'B' | /** CASH_TRADE */ 'C' | /** NEXT_DAY_MARKET */ 'D' | /** OPENING_REOPENING_TRADE_DETAIL */ 'E' | /** INTRADAY_TRADE_DETAIL */ 'F' | /** RULE127 */ 'G' | /** RULE155 */ 'H' | /** SOLD_LAST */ 'I' | /** NEXT_DAY_TRADE */ 'J' | /** OPENED */ 'K' | /** SELLER */ 'L' | /** SOLD */ 'M' | /** STOPPED_STOCK */ 'N' | /** IMBALANCE_MORE_BUYERS */ 'P' | /** IMBALANCE_MORE_SELLERS */ 'Q' | /** OPENING_PRICE */ 'R', MDEntryOriginator?: string, LocationID?: string, DeskID?: string, OpenCloseSettlFlag?: /** DAILY_OPEN_CLOSE_SETTLEMENT_ENTRY */ '0' | /** SESSION_OPEN_CLOSE_SETTLEMENT_ENTRY */ '1' | /** DELIVERY_SETTLEMENT_ENTRY */ '2' | /** EXPECTED_ENTRY */ '3' | /** ENTRY_FROM_PREVIOUS_BUSINESS_DAY */ '4' | /** THEORETICAL_PRICE_VALUE */ '5', TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', ExpireDate?: string, ExpireTime?: string, MinQty?: number, ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e', SellerDays?: number, OrderID?: string, QuoteEntryID?: string, MDEntryBuyer?: string, MDEntrySeller?: string, NumberOfOrders?: number, MDEntryPositionNo?: number, Scope?: /** LOCAL */ '1' | /** NATIONAL */ '2' | /** GLOBAL */ '3', PriceDelta?: number, NetChgPrevDay?: number, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
    ApplQueueDepth?: number
    ApplQueueResolution?: /** NO_ACTION_TAKEN */ 0 | /** QUEUE_FLUSHED */ 1 | /** OVERLAY_LAST */ 2 | /** END_SESSION */ 3
  }

  interface MarketDataRequestRejectMessage {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: /** UNKNOWN_SYMBOL */ '0' | /** DUPLICATE_MDREQID */ '1' | /** INSUFFICIENT_BANDWIDTH */ '2' | /** INSUFFICIENT_PERMISSIONS */ '3' | /** UNSUPPORTED_SUBSCRIPTIONREQUESTTYPE */ '4' | /** UNSUPPORTED_MARKETDEPTH */ '5' | /** UNSUPPORTED_MDUPDATETYPE */ '6' | /** UNSUPPORTED_AGGREGATEDBOOK */ '7' | /** UNSUPPORTED_MDENTRYTYPE */ '8' | /** UNSUPPORTED_TRADINGSESSIONID */ '9' | /** UNSUPPORTED_SCOPE */ 'A' | /** UNSUPPORTED_OPENCLOSESETTLEFLAG */ 'B' | /** UNSUPPORTED_MDIMPLICITDELETE */ 'C'
    NoAltMDSource?: { AltMDSourceID?: string }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SecurityDefinitionRequestMessage {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: /** REQUEST_SECURITY_IDENTITY_AND_SPECIFICATIONS */ 0 | /** REQUEST_SECURITY_IDENTITY_FOR_THE_SPECIFICATIONS_PROVIDED */ 1 | /** REQUEST_LIST_SECURITY_TYPES */ 2 | /** REQUEST_LIST_SECURITIES */ 3
    NoUnderlyings?: {}[]
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoLegs?: {}[]
    ExpirationCycle?: /** EXPIRE_ON_TRADING_SESSION_CLOSE */ 0 | /** EXPIRE_ON_TRADING_SESSION_OPEN */ 1
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityDefinitionMessage {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: /** ACCEPT_SECURITY_PROPOSAL_AS_IS */ 1 | /** ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE */ 2 | /** LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST */ 3 | /** LIST_OF_SECURITIES_RETURNED_PER_REQUEST */ 4 | /** REJECT_SECURITY_PROPOSAL */ 5 | /** CAN_NOT_MATCH_SELECTION_CRITERIA */ 6
    NoUnderlyings?: {}[]
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoLegs?: {}[]
    ExpirationCycle?: /** EXPIRE_ON_TRADING_SESSION_CLOSE */ 0 | /** EXPIRE_ON_TRADING_SESSION_OPEN */ 1
    RoundLot?: number
    MinTradeVol?: number
  }

  interface SecurityTypeRequestMessage {
    MsgType: 'v'
    SecurityReqID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13
    SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD'
    SecuritySubType?: string
  }

  interface SecurityTypesMessage {
    MsgType: 'w'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: /** ACCEPT_SECURITY_PROPOSAL_AS_IS */ 1 | /** ACCEPT_SECURITY_PROPOSAL_WITH_REVISIONS_AS_INDICATED_IN_THE_MESSAGE */ 2 | /** LIST_OF_SECURITY_TYPES_RETURNED_PER_REQUEST */ 3 | /** LIST_OF_SECURITIES_RETURNED_PER_REQUEST */ 4 | /** REJECT_SECURITY_PROPOSAL */ 5 | /** CAN_NOT_MATCH_SELECTION_CRITERIA */ 6
    TotNoSecurityTypes?: number
    LastFragment?: string
    NoSecurityTypes?: { SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD', SecuritySubType?: string, Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13, CFICode?: string }[]
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityListRequestMessage {
    MsgType: 'x'
    SecurityReqID: string
    SecurityListRequestType: /** SYMBOL */ 0 | /** SECURITYTYPE_AND_OR_CFICODE */ 1 | /** PRODUCT */ 2 | /** TRADINGSESSIONID */ 3 | /** ALL_SECURITIES */ 4
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface SecurityListMessage {
    MsgType: 'y'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA */ 3 | /** INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE */ 4 | /** REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED */ 5
    TotNoRelatedSym?: number
    LastFragment?: string
    NoRelatedSym?: { NoUnderlyings?: {}[], Currency?: string, NoLegs?: { LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegSettlType?: string }[], RoundLot?: number, MinTradeVol?: number, TradingSessionID?: string, TradingSessionSubID?: string, ExpirationCycle?: /** EXPIRE_ON_TRADING_SESSION_CLOSE */ 0 | /** EXPIRE_ON_TRADING_SESSION_OPEN */ 1, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface DerivativeSecurityListRequestMessage {
    MsgType: 'z'
    SecurityReqID: string
    SecurityListRequestType: /** SYMBOL */ 0 | /** SECURITYTYPE_AND_OR_CFICODE */ 1 | /** PRODUCT */ 2 | /** TRADINGSESSIONID */ 3 | /** ALL_SECURITIES */ 4
    SecuritySubType?: string
    Currency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface DerivativeSecurityListMessage {
    MsgType: 'AA'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_INSTRUMENTS_FOUND_THAT_MATCH_SELECTION_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_RETRIEVE_INSTRUMENT_DATA */ 3 | /** INSTRUMENT_DATA_TEMPORARILY_UNAVAILABLE */ 4 | /** REQUEST_FOR_INSTRUMENT_DATA_NOT_SUPPORTED */ 5
    TotNoRelatedSym?: number
    LastFragment?: string
    NoRelatedSym?: { Currency?: string, ExpirationCycle?: /** EXPIRE_ON_TRADING_SESSION_CLOSE */ 0 | /** EXPIRE_ON_TRADING_SESSION_OPEN */ 1, NoLegs?: {}[], TradingSessionID?: string, TradingSessionSubID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface SecurityStatusRequestMessage {
    MsgType: 'e'
    SecurityStatusReqID: string
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Currency?: string
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  interface SecurityStatusMessage {
    MsgType: 'f'
    SecurityStatusReqID?: string
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    UnsolicitedIndicator?: string
    SecurityTradingStatus?: /** OPENING_DELAY */ 1 | /** TRADING_HALT */ 2 | /** RESUME */ 3 | /** NO_OPEN_NO_RESUME */ 4 | /** PRICE_INDICATION */ 5 | /** TRADING_RANGE_INDICATION */ 6 | /** MARKET_IMBALANCE_BUY */ 7 | /** MARKET_IMBALANCE_SELL */ 8 | /** MARKET_ON_CLOSE_IMBALANCE_BUY */ 9 | /** MARKET_ON_CLOSE_IMBALANCE_SELL */ 10 | /** NOT_ASSIGNED */ 11 | /** NO_MARKET_IMBALANCE */ 12 | /** NO_MARKET_ON_CLOSE_IMBALANCE */ 13 | /** ITS_PRE_OPENING */ 14 | /** NEW_PRICE_INDICATION */ 15 | /** TRADE_DISSEMINATION_TIME */ 16 | /** READY_TO_TRADE_START_OF_SESSION */ 17 | /** NOT_AVAILABLE_FOR_TRADING_END_OF_SESSION */ 18 | /** NOT_TRADED_ON_THIS_MARKET */ 19 | /** UNKNOWN_OR_INVALID */ 20 | /** PRE_OPEN */ 21 | /** OPENING_ROTATION */ 22 | /** FAST_MARKET */ 23
    FinancialStatus?: /** BANKRUPT */ '1' | /** PENDING_DELISTING */ '2'
    CorporateAction?: /** EX_DIVIDEND */ 'A' | /** EX_DISTRIBUTION */ 'B' | /** EX_RIGHTS */ 'C' | /** NEW */ 'D' | /** EX_INTEREST */ 'E'
    HaltReason?: /** ORDER_IMBALANCE */ 'I' | /** EQUIPMENT_CHANGEOVER */ 'X' | /** NEWS_PENDING */ 'P' | /** NEWS_DISSEMINATION */ 'D' | /** ORDER_INFLUX */ 'E' | /** ADDITIONAL_INFORMATION */ 'M'
    InViewOfCommon?: string
    DueToRelated?: string
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: /** CANCEL */ 1 | /** ERROR */ 2 | /** CORRECTION */ 3
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface TradingSessionStatusRequestMessage {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    SubscriptionRequestType: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
  }

  interface TradingSessionStatusMessage {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradingSessionSubID?: string
    TradSesMethod?: /** ELECTRONIC */ 1 | /** OPEN_OUTCRY */ 2 | /** TWO_PARTY */ 3
    TradSesMode?: /** TESTING */ 1 | /** SIMULATED */ 2 | /** PRODUCTION */ 3
    UnsolicitedIndicator?: string
    TradSesStatus: /** UNKNOWN */ 0 | /** HALTED */ 1 | /** OPEN */ 2 | /** CLOSED */ 3 | /** PRE_OPEN */ 4 | /** PRE_CLOSE */ 5 | /** REQUEST_REJECTED */ 6
    TradSesStatusRejReason?: /** UNKNOWN_OR_INVALID_TRADINGSESSIONID */ 1
    TradSesStartTime?: string
    TradSesOpenTime?: string
    TradSesPreCloseTime?: string
    TradSesCloseTime?: string
    TradSesEndTime?: string
    TotalVolumeTraded?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface NewOrderSingleMessage {
    MsgType: 'D'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    TradeDate?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2'
    BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    AllocID?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    NoUnderlyings?: {}[]
    PrevClosePx?: number
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    LocateReqd?: string
    TransactTime: string
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
  }

  interface ExecutionReportMessage {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    SecondaryExecID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClOrdLinkID?: string
    QuoteRespID?: string
    OrdStatusReqID?: string
    MassStatusReqID?: string
    TotNumReports?: number
    LastRptRequested?: string
    TradeOriginationDate?: string
    NoContraBrokers?: { ContraBroker?: string, ContraTrader?: string, ContraTradeQty?: number, ContraTradeTime?: string, ContraLegRefID?: string }[]
    ListID?: string
    CrossID?: string
    OrigCrossID?: string
    CrossType?: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    ExecID: string
    ExecRefID?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    WorkingIndicator?: string
    OrdRejReason?: /** BROKER_EXCHANGE_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER */ 7 | /** STALE_ORDER */ 8 | /** TRADE_ALONG_REQUIRED */ 9 | /** INVALID_INVESTOR_ID */ 10 | /** UNSUPPORTED_ORDER_CHARACTERISTIC */ 11 | /** SURVEILLENCE_OPTION */ 12 | /** INCORRECT_QUANTITY */ 13 | /** INCORRECT_ALLOCATED_QUANTITY */ 14 | /** UNKNOWN_ACCOUNT */ 15 | /** OTHER */ 99
    ExecRestatementReason?: /** GT_CORPORATE_ACTION */ 0 | /** GT_RENEWAL_RESTATEMENT */ 1 | /** VERBAL_CHANGE */ 2 | /** REPRICING_OF_ORDER */ 3 | /** BROKER_OPTION */ 4 | /** PARTIAL_DECLINE_OF_ORDERQTY */ 5 | /** CANCEL_ON_TRADING_HALT */ 6 | /** CANCEL_ON_SYSTEM_FAILURE */ 7 | /** MARKET_OPTION */ 8 | /** CANCELED_NOT_BEST */ 9 | /** WAREHOUSE_RECAP */ 10 | /** OTHER */ 99
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2'
    BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    NoUnderlyings?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    PeggedPrice?: number
    DiscretionPrice?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    TargetStrategyPerformance?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    LastQty?: number
    UnderlyingLastQty?: number
    LastPx?: number
    UnderlyingLastPx?: number
    LastParPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TimeBracket?: string
    LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: string
    GrossTradeAmt?: string
    NumDaysInterest?: number
    ExDate?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    InterestAtMaturity?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    TradedFlatSwitch?: string
    BasisFeatureDate?: string
    BasisFeaturePrice?: number
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    SettlCurrAmt?: string
    SettlCurrency?: string
    SettlCurrFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    MinQty?: number
    MaxFloor?: number
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    MaxShow?: number
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    LastForwardPoints2?: number
    MultiLegReportingType?: /** SINGLE_SECURITY */ '1' | /** INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY */ '2' | /** MULTI_LEG_SECURITY */ '3'
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    TransBkdTime?: string
    ExecValuationPoint?: string
    ExecPriceType?: /** BID_PRICE */ 'B' | /** CREATION_PRICE */ 'C' | /** CREATION_PRICE_PLUS_ADJUSTMENT_PERCENT */ 'D' | /** CREATION_PRICE_PLUS_ADJUSTMENT_AMOUNT */ 'E' | /** OFFER_PRICE */ 'O' | /** OFFER_PRICE_MINUS_ADJUSTMENT_PERCENT */ 'P' | /** OFFER_PRICE_MINUS_ADJUSTMENT_AMOUNT */ 'Q' | /** SINGLE_PRICE */ 'S'
    ExecPriceAdjustment?: number
    PriorityIndicator?: /** PRIORITY_UNCHANGED */ 0 | /** LOST_PRIORITY_AS_RESULT_OF_ORDER_CHANGE */ 1
    PriceImprovement?: number
    LastLiquidityInd?: /** ADDED_LIQUIDITY */ 1 | /** REMOVED_LIQUIDITY */ 2 | /** LIQUIDITY_ROUTED_OUT */ 3
    NoContAmts?: { ContAmtType?: /** COMMISSION_AMOUNT */ 1 | /** COMMISSION_PERCENT */ 2 | /** INITIAL_CHARGE_AMOUNT */ 3 | /** INITIAL_CHARGE_PERCENT */ 4 | /** DISCOUNT_AMOUNT */ 5 | /** DISCOUNT_PERCENT */ 6 | /** DILUTION_LEVY_AMOUNT */ 7 | /** DILUTION_LEVY_PERCENT */ 8 | /** EXIT_CHARGE_AMOUNT */ 9, ContAmtValue?: number, ContAmtCurr?: string }[]
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlType?: string, LegSettlDate?: string, LegLastPx?: number }[]
    CopyMsgIndicator?: string
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
  }

  interface DontKnowTradeMessage {
    MsgType: 'Q'
    OrderID: string
    SecondaryOrderID?: string
    ExecID: string
    DKReason: /** UNKNOWN_SYMBOL */ 'A' | /** WRONG_SIDE */ 'B' | /** QUANTITY_EXCEEDS_ORDER */ 'C' | /** NO_MATCHING_ORDER */ 'D' | /** PRICE_EXCEEDS_LIMIT */ 'E' | /** CALCULATION_DIFFERENCE */ 'F' | /** OTHER */ 'Z'
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    LastQty?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelReplaceRequestMessage {
    MsgType: 'G'
    OrderID?: string
    TradeOriginationDate?: string
    TradeDate?: string
    OrigClOrdID: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2'
    BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    AllocID?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    NoUnderlyings?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    TransactTime: string
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    ComplianceID?: string
    SolicitedFlag?: string
    Currency?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    LocateReqd?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
  }

  interface OrderCancelRequestMessage {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    NoUnderlyings?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    TransactTime: string
    ComplianceID?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderCancelRejectMessage {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    ClOrdID: string
    ClOrdLinkID?: string
    OrigClOrdID: string
    OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    WorkingIndicator?: string
    OrigOrdModTime?: string
    ListID?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    TradeOriginationDate?: string
    TradeDate?: string
    TransactTime?: string
    CxlRejResponseTo: /** ORDER_CANCEL_REQUEST */ '1' | /** ORDER_CANCEL_REPLACE_REQUEST */ '2'
    CxlRejReason?: /** TOO_LATE_TO_CANCEL */ 0 | /** UNKNOWN_ORDER */ 1 | /** BROKER_EXCHANGE_OPTION */ 2 | /** ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS */ 3 | /** UNABLE_TO_PROCESS_ORDER_MASS_CANCEL_REQUEST */ 4 | /** ORIGORDMODTIME_DID_NOT_MATCH_LAST_TRANSACTTIME_OF_ORDER */ 5 | /** DUPLICATE_CLORDID_RECEIVED */ 6 | /** OTHER */ 99
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderStatusRequestMessage {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    OrdStatusReqID?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    NoUnderlyings?: {}[]
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
  }

  interface OrderMassCancelRequestMessage {
    MsgType: 'q'
    ClOrdID: string
    SecondaryClOrdID?: string
    MassCancelRequestType: /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderMassCancelReportMessage {
    MsgType: 'r'
    ClOrdID?: string
    SecondaryClOrdID?: string
    OrderID: string
    SecondaryOrderID?: string
    MassCancelRequestType: /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    MassCancelResponse: /** CANCEL_REQUEST_REJECTED */ '0' | /** CANCEL_ORDERS_FOR_A_SECURITY */ '1' | /** CANCEL_ORDERS_FOR_AN_UNDERLYING_SECURITY */ '2' | /** CANCEL_ORDERS_FOR_A_PRODUCT */ '3' | /** CANCEL_ORDERS_FOR_A_CFICODE */ '4' | /** CANCEL_ORDERS_FOR_A_SECURITYTYPE */ '5' | /** CANCEL_ORDERS_FOR_A_TRADING_SESSION */ '6' | /** CANCEL_ALL_ORDERS */ '7'
    MassCancelRejectReason?: /** MASS_CANCEL_NOT_SUPPORTED */ '0' | /** INVALID_OR_UNKNOWN_SECURITY */ '1' | /** INVALID_OR_UNKNOWN_UNDERLYING */ '2' | /** INVALID_OR_UNKNOWN_PRODUCT */ '3' | /** INVALID_OR_UNKNOWN_CFICODE */ '4' | /** INVALID_OR_UNKNOWN_SECURITY_TYPE */ '5' | /** INVALID_OR_UNKNOWN_TRADING_SESSION */ '6' | /** OTHER */ '99'
    TotalAffectedOrders?: number
    NoAffectedOrders?: { OrigClOrdID?: string, AffectedOrderID?: string, AffectedSecondaryOrderID?: string }[]
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    TransactTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface OrderMassStatusRequestMessage {
    MsgType: 'AF'
    MassStatusReqID: string
    MassStatusReqType: /** STATUS_FOR_ORDERS_FOR_A_SECURITY */ 1 | /** STATUS_FOR_ORDERS_FOR_AN_UNDERLYING_SECURITY */ 2 | /** STATUS_FOR_ORDERS_FOR_A_PRODUCT */ 3 | /** STATUS_FOR_ORDERS_FOR_A_CFICODE */ 4 | /** STATUS_FOR_ORDERS_FOR_A_SECURITYTYPE */ 5 | /** STATUS_FOR_ORDERS_FOR_A_TRADING_SESSION */ 6 | /** STATUS_FOR_ALL_ORDERS */ 7 | /** STATUS_FOR_ORDERS_FOR_A_PARTYID */ 8
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
  }

  interface NewOrderCrossMessage {
    MsgType: 's'
    CrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: /** NONE */ 0 | /** BUY_SIDE_IS_PRIORITIZED */ 1 | /** SELL_SIDE_IS_PRIORITIZED */ 2
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, TradeOriginationDate?: string, TradeDate?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2', BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2', PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1', AllocID?: string, NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[], QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4, ForexReq?: string, SettlCurrency?: string, BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2, Text?: string, EncodedTextLen?: number, EncodedText?: string, PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F', CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', SolicitedFlag?: string, SideComplianceID?: string }[]
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
  }

  interface CrossOrderCancelReplaceRequestMessage {
    MsgType: 't'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: /** NONE */ 0 | /** BUY_SIDE_IS_PRIORITIZED */ 1 | /** SELL_SIDE_IS_PRIORITIZED */ 2
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', OrigClOrdID: string, ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, OrigOrdModTime?: string, TradeOriginationDate?: string, TradeDate?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2', BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2', PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1', AllocID?: string, NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[], QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4, ForexReq?: string, SettlCurrency?: string, BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2, Text?: string, EncodedTextLen?: number, EncodedText?: string, PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F', CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', SolicitedFlag?: string, SideComplianceID?: string }[]
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
  }

  interface CrossOrderCancelRequestMessage {
    MsgType: 'u'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: /** CROSS_TRADE_WHICH_IS_EXECUTED_COMPLETELY_OR_NOT */ 1 | /** CROSS_TRADE_WHICH_IS_EXECUTED_PARTIALLY_AND_THE_REST_IS_CANCELLED */ 2 | /** CROSS_TRADE_WHICH_IS_PARTIALLY_EXECUTED_WITH_THE_UNFILLED_PORTIONS_REMAINING_ACTIVE */ 3 | /** CROSS_TRADE_IS_EXECUTED_WITH_EXISTING_ORDERS_WITH_THE_SAME_PRICE */ 4
    CrossPrioritization: /** NONE */ 0 | /** BUY_SIDE_IS_PRIORITIZED */ 1 | /** SELL_SIDE_IS_PRIORITIZED */ 2
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', OrigClOrdID: string, ClOrdID: string, SecondaryClOrdID?: string, ClOrdLinkID?: string, OrigOrdModTime?: string, TradeOriginationDate?: string, TradeDate?: string, ComplianceID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    TransactTime: string
  }

  interface NewOrderMultilegMessage {
    MsgType: 'AB'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    TradeDate?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2'
    BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    AllocID?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoUnderlyings?: {}[]
    PrevClosePx?: number
    NoLegs: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, NoLegAllocs?: { LegAllocAccount?: string, LegIndividualAllocID?: string, LegAllocQty?: number, LegAllocAcctIDSource?: string, LegSettlCurrency?: string }[], LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlType?: string, LegSettlDate?: string }[]
    LocateReqd?: string
    TransactTime: string
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: /** REPORT_BY_MULITLEG_SECURITY_ONLY */ 0 | /** REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY */ 1 | /** REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY */ 2
  }

  interface MultilegOrderCancelReplaceRequestMessage {
    MsgType: 'AC'
    OrderID?: string
    OrigClOrdID: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    OrigOrdModTime?: string
    TradeOriginationDate?: string
    TradeDate?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2'
    BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    AllocID?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[]
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3'
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3'
    ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e'
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoUnderlyings?: {}[]
    PrevClosePx?: number
    NoLegs: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, NoLegAllocs?: { LegAllocAccount?: string, LegIndividualAllocID?: string, LegAllocQty?: number, LegAllocAcctIDSource?: string, LegSettlCurrency?: string }[], LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlType?: string, LegSettlDate?: string }[]
    LocateReqd?: string
    TransactTime: string
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    OrdType: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P'
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: /** REPORT_BY_MULITLEG_SECURITY_ONLY */ 0 | /** REPORT_BY_MULTILEG_SECURITY_AND_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY */ 1 | /** REPORT_BY_INSTRUMENT_LEGS_BELONGING_TO_THE_MULTILEG_SECURITY_ONLY */ 2
  }

  interface BidRequestMessage {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: /** NEW */ 'N' | /** CANCEL */ 'C'
    ListName?: string
    TotNoRelatedSym: number
    BidType: /** NON_DISCLOSED */ 1 | /** DISCLOSED_STYLE */ 2 | /** NO_BIDDING_PROCESS */ 3
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: { BidDescriptorType?: /** SECTOR */ 1 | /** COUNTRY */ 2 | /** INDEX */ 3, BidDescriptor?: string, SideValueInd?: /** SIDEVALUE1 */ 1 | /** SIDEVALUE2 */ 2, LiquidityValue?: string, LiquidityNumSecurities?: number, LiquidityPctLow?: string, LiquidityPctHigh?: string, EFPTrackingError?: string, FairValue?: string, OutsideIndexPct?: string, ValueOfFutures?: string }[]
    NoBidComponents?: { ListID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', TradingSessionID?: string, TradingSessionSubID?: string, NetGrossInd?: /** NET */ 1 | /** GROSS */ 2, SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9', SettlDate?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99 }[]
    LiquidityIndType?: /** FIVEDAY_MOVING_AVERAGE */ 1 | /** TWENTYDAY_MOVING_AVERAGE */ 2 | /** NORMAL_MARKET_SIZE */ 3 | /** OTHER */ 4
    WtAverageLiquidity?: string
    ExchangeForPhysical?: string
    OutMainCntryUIndex?: string
    CrossPercent?: string
    ProgRptReqs?: /** BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST */ 1 | /** SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS */ 2 | /** REAL_TIME_EXECUTION_REPORTS */ 3
    ProgPeriodInterval?: number
    IncTaxInd?: /** NET */ 1 | /** GROSS */ 2
    ForexReq?: string
    NumBidders?: number
    TradeDate?: string
    BidTradeType: /** RISK_TRADE */ 'R' | /** VWAP_GUARANTEE */ 'G' | /** AGENCY */ 'A' | /** GUARANTEED_CLOSE */ 'J'
    BasisPxType: /** CLOSING_PRICE_AT_MORNING_SESSION */ '2' | /** CLOSING_PRICE */ '3' | /** CURRENT_PRICE */ '4' | /** SQ */ '5' | /** VWAP_THROUGH_A_DAY */ '6' | /** VWAP_THROUGH_A_MORNING_SESSION */ '7' | /** VWAP_THROUGH_AN_AFTERNOON_SESSION */ '8' | /** VWAP_THROUGH_A_DAY_EXCEPT_YORI */ '9' | /** VWAP_THROUGH_A_MORNING_SESSION_EXCEPT_YORI */ 'A' | /** VWAP_THROUGH_AN_AFTERNOON_SESSION_EXCEPT_YORI */ 'B' | /** STRIKE */ 'C' | /** OPEN */ 'D' | /** OTHERS */ 'Z'
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface BidResponseMessage {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: { ListID?: string, Country?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', Price?: number, PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11, FairValue?: string, NetGrossInd?: /** NET */ 1 | /** GROSS */ 2, SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9', SettlDate?: string, TradingSessionID?: string, TradingSessionSubID?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface NewOrderListMessage {
    MsgType: 'E'
    ListID: string
    BidID?: string
    ClientBidID?: string
    ProgRptReqs?: /** BUYSIDE_EXPLICITLY_REQUESTS_STATUS_USING_STATUSREQUEST */ 1 | /** SELLSIDE_PERIODICALLY_SENDS_STATUS_USING_LISTSTATUS */ 2 | /** REAL_TIME_EXECUTION_REPORTS */ 3
    BidType: /** NON_DISCLOSED */ 1 | /** DISCLOSED_STYLE */ 2 | /** NO_BIDDING_PROCESS */ 3
    ProgPeriodInterval?: number
    CancellationRights?: /** YES */ 'Y' | /** NO_EXECUTION_ONLY */ 'N' | /** NO_WAIVER_AGREEMENT */ 'M' | /** NO_INSTITUTIONAL */ 'O'
    MoneyLaunderingStatus?: /** PASSED */ 'Y' | /** NOT_CHECKED */ 'N' | /** EXEMPT_BELOW_THE_LIMIT */ '1' | /** EXEMPT_CLIENT_MONEY_TYPE_EXEMPTION */ '2' | /** EXEMPT_AUTHORISED_CREDIT_OR_FINANCIAL_INSTITUTION */ '3'
    RegistID?: string
    ListExecInstType?: /** IMMEDIATE */ '1' | /** WAIT_FOR_EXECUTE_INSTRUCTION */ '2' | /** EXCHANGE_SWITCH_CIV_ORDER_SELL_DRIVEN */ '3' | /** EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_TOP_UP */ '4' | /** EXCHANGE_SWITCH_CIV_ORDER_BUY_DRIVEN_CASH_WITHDRAW */ '5'
    ListExecInst?: string
    EncodedListExecInstLen?: number
    EncodedListExecInst?: string
    AllowableOneSidednessPct?: string
    AllowableOneSidednessValue?: string
    AllowableOneSidednessCurr?: string
    TotNoOrders: number
    LastFragment?: string
    NoOrders: { ClOrdID: string, SecondaryClOrdID?: string, ListSeqNo: number, ClOrdLinkID?: string, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4' | /** REQUEST_REJECT */ '5', TradeOriginationDate?: string, TradeDate?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, DayBookingInst?: /** CAN_TRIGGER_BOOKING_WITHOUT_REFERENCE_TO_THE_ORDER_INITIATOR */ '0' | /** SPEAK_WITH_ORDER_INITIATOR_BEFORE_BOOKING */ '1' | /** ACCUMULATE */ '2', BookingUnit?: /** EACH_PARTIAL_EXECUTION_IS_A_BOOKABLE_UNIT */ '0' | /** AGGREGATE_PARTIAL_EXECUTIONS_ON_THIS_ORDER_AND_BOOK_ONE_TRADE_PER_ORDER */ '1' | /** AGGREGATE_EXECUTIONS_FOR_THIS_SYMBOL_SIDE_AND_SETTLEMENT_DATE */ '2', AllocID?: string, PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1', NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[], SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9', SettlDate?: string, CashMargin?: /** CASH */ '1' | /** MARGIN_OPEN */ '2' | /** MARGIN_CLOSE */ '3', ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', HandlInst?: /** AUTOMATED_EXECUTION_ORDER_PRIVATE */ '1' | /** AUTOMATED_EXECUTION_ORDER_PUBLIC */ '2' | /** MANUAL_ORDER */ '3', ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e', MinQty?: number, MaxFloor?: number, ExDestination?: string, NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[], ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', NoUnderlyings?: {}[], PrevClosePx?: number, Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', SideValueInd?: /** SIDEVALUE1 */ 1 | /** SIDEVALUE2 */ 2, LocateReqd?: string, TransactTime?: string, QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11, Price?: number, StopPx?: number, Currency?: string, ComplianceID?: string, SolicitedFlag?: string, IOIID?: string, QuoteID?: string, TimeInForce?: /** DAY */ '0' | /** GOOD_TILL_CANCEL */ '1' | /** AT_THE_OPENING */ '2' | /** IMMEDIATE_OR_CANCEL */ '3' | /** FILL_OR_KILL */ '4' | /** GOOD_TILL_CROSSING */ '5' | /** GOOD_TILL_DATE */ '6' | /** AT_THE_CLOSE */ '7', EffectiveTime?: string, ExpireDate?: string, ExpireTime?: string, GTBookingInst?: /** BOOK_OUT_ALL_TRADES_ON_DAY_OF_EXECUTION */ 0 | /** ACCUMULATE_EXECUTIONS_UNTIL_ORDER_IS_FILLED_OR_EXPIRES */ 1 | /** ACCUMULATE_UNTIL_VERBALLY_NOTIFIED_OTHERWISE */ 2, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4, ForexReq?: string, SettlCurrency?: string, BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2, Text?: string, EncodedTextLen?: number, EncodedText?: string, SettlDate2?: string, OrderQty2?: number, Price2?: number, PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F', CoveredOrUncovered?: /** COVERED */ 0 | /** UNCOVERED */ 1, MaxShow?: number, TargetStrategy?: number, TargetStrategyParameters?: string, ParticipationRate?: string, Designation?: string }[]
  }

  interface ListStrikePriceMessage {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    LastFragment?: string
    NoStrikes: {}[]
    NoUnderlyings?: { PrevClosePx?: number, ClOrdID?: string, SecondaryClOrdID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', Price: number, Currency?: string, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface ListStatusMessage {
    MsgType: 'N'
    ListID: string
    ListStatusType: /** ACK */ 1 | /** RESPONSE */ 2 | /** TIMED */ 3 | /** EXECSTARTED */ 4 | /** ALLDONE */ 5 | /** ALERT */ 6
    NoRpts: string
    ListOrderStatus: /** INBIDDINGPROCESS */ 1 | /** RECEIVEDFOREXECUTION */ 2 | /** EXECUTING */ 3 | /** CANCELING */ 4 | /** ALERT */ 5 | /** ALL_DONE */ 6 | /** REJECT */ 7
    RptSeq: number
    ListStatusText?: string
    EncodedListStatusTextLen?: number
    EncodedListStatusText?: string
    TransactTime?: string
    TotNoOrders: number
    LastFragment?: string
    NoOrders: { ClOrdID: string, SecondaryClOrdID?: string, CumQty: number, OrdStatus: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E', WorkingIndicator?: string, LeavesQty: number, CxlQty: number, AvgPx: number, OrdRejReason?: /** BROKER_EXCHANGE_OPTION */ 0 | /** UNKNOWN_SYMBOL */ 1 | /** EXCHANGE_CLOSED */ 2 | /** ORDER_EXCEEDS_LIMIT */ 3 | /** TOO_LATE_TO_ENTER */ 4 | /** UNKNOWN_ORDER */ 5 | /** DUPLICATE_ORDER */ 6 | /** DUPLICATE_OF_A_VERBALLY_COMMUNICATED_ORDER */ 7 | /** STALE_ORDER */ 8 | /** TRADE_ALONG_REQUIRED */ 9 | /** INVALID_INVESTOR_ID */ 10 | /** UNSUPPORTED_ORDER_CHARACTERISTIC */ 11 | /** SURVEILLENCE_OPTION */ 12 | /** INCORRECT_QUANTITY */ 13 | /** INCORRECT_ALLOCATED_QUANTITY */ 14 | /** UNKNOWN_ACCOUNT */ 15 | /** OTHER */ 99, Text?: string, EncodedTextLen?: number, EncodedText?: string }[]
  }

  interface ListExecuteMessage {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListCancelRequestMessage {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    TradeOriginationDate?: string
    TradeDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ListStatusRequestMessage {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface AllocationInstructionMessage {
    MsgType: 'J'
    AllocID: string
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2' | /** PRELIMINARY */ '3' | /** CALCULATED */ '4' | /** CALCULATED_WITHOUT_PRELIMINARY */ '5'
    AllocType: /** CALCULATED */ 1 | /** PRELIMINARY */ 2 | /** READY_TO_BOOK_SINGLE_ORDER */ 5 | /** WAREHOUSE_INSTRUCTION */ 7 | /** REQUEST_TO_INTERMEDIARY */ 8
    SecondaryAllocID?: string
    RefAllocID?: string
    AllocCancReplaceReason?: /** ORIGINAL_DETAILS_INCOMPLETE_INCORRECT */ 1 | /** CHANGE_IN_UNDERLYING_ORDER_DETAILS */ 2 | /** OTHER */ 99
    AllocIntermedReqType?: /** PENDING_ACCEPT */ 1 | /** PENDING_RELEASE */ 2 | /** PENDING_REVERSAL */ 3 | /** ACCEPT */ 4 | /** BLOCK_LEVEL_REJECT */ 5 | /** ACCOUNT_LEVEL_REJECT */ 6
    AllocLinkID?: string
    AllocLinkType?: /** F_X_NETTING */ 0 | /** F_X_SWAP */ 1
    BookingRefID?: string
    AllocNoOrdersType: /** NOT_SPECIFIED */ 0 | /** EXPLICIT_LIST_PROVIDED */ 1
    NoOrders?: { ClOrdID?: string, OrderID?: string, SecondaryOrderID?: string, SecondaryClOrdID?: string, ListID?: string, OrderQty?: number, OrderAvgPx?: number, OrderBookingQty?: number }[]
    NoExecs?: { LastQty?: number, ExecID?: string, SecondaryExecID?: string, LastPx?: number, LastParPx?: number, LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4' }[]
    PreviouslyReported?: string
    ReversalIndicator?: string
    MatchType?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Quantity: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AvgPx: number
    AvgParPx?: number
    Currency?: string
    AvgPxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    AutoAcceptIndicator?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    TotalAccruedInterestAmt?: string
    InterestAtMaturity?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    LegalConfirm?: string
    TotNoAllocs?: number
    LastFragment?: string
    NoAllocs: { AllocAccount: string, AllocAcctIDSource?: number, MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2', AllocPrice?: number, AllocQty: number, IndividualAllocID?: string, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', NotifyBrokerOfCredit?: string, AllocHandlInst?: /** MATCH */ 1 | /** FORWARD */ 2 | /** FORWARD_AND_MATCH */ 3, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string, AllocAvgPx?: number, AllocNetMoney?: string, SettlCurrAmt?: string, AllocSettlCurrAmt?: string, SettlCurrency?: string, AllocSettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D', AllocAccruedInterestAmt?: string, AllocInterestAtMaturity?: string, SettlInstMode?: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4' | /** REQUEST_REJECT */ '5', NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[], NoClearingInstructions?: number, ClearingInstruction?: /** PROCESS_NORMALLY */ 0 | /** EXCLUDE_FROM_ALL_NETTING */ 1 | /** BILATERAL_NETTING_ONLY */ 2 | /** EX_CLEARING */ 3 | /** SPECIAL_TRADE */ 4 | /** MULTILATERAL_NETTING */ 5 | /** CLEAR_AGAINST_CENTRAL_COUNTERPARTY */ 6 | /** EXCLUDE_FROM_CENTRAL_COUNTERPARTY */ 7 | /** MANUAL_MODE */ 8 | /** AUTOMATIC_POSTING_MODE */ 9 | /** AUTOMATIC_GIVE_UP_MODE */ 10 | /** QUALIFIED_SERVICE_REPRESENTATIVE */ 11 | /** CUSTOMER_TRADE */ 12 | /** SELF_CLEARING */ 13, ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', AllocSettlInstType?: /** USE_DEFAULT_INSTRUCTIONS */ 0 | /** DERIVE_FROM_PARAMETERS_PROVIDED */ 1 | /** FULL_DETAILS_PROVIDED */ 2 | /** SSI_DB_IDS_PROVIDED */ 3 | /** PHONE_FOR_INSTRUCTIONS */ 4 }[]
  }

  interface AllocationInstructionAckMessage {
    MsgType: 'P'
    AllocID: string
    SecondaryAllocID?: string
    TradeDate?: string
    TransactTime: string
    AllocStatus: /** ACCEPTED */ 0 | /** BLOCK_LEVEL_REJECT */ 1 | /** ACCOUNT_LEVEL_REJECT */ 2 | /** RECEIVED */ 3 | /** INCOMPLETE */ 4 | /** REJECTED_BY_INTERMEDIARY */ 5
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7 | /** INCORRECT_ALLOCATED_QUANTITY */ 8 | /** CALCULATION_DIFFERENCE */ 9 | /** UNKNOWN_OR_STALE_EXEC_ID */ 10 | /** MISMATCHED_DATA_VALUE */ 11 | /** UNKNOWN_CLORDID */ 12 | /** WAREHOUSE_REQUEST_REJECTED */ 13
    AllocType?: /** CALCULATED */ 1 | /** PRELIMINARY */ 2 | /** READY_TO_BOOK_SINGLE_ORDER */ 5 | /** WAREHOUSE_INSTRUCTION */ 7 | /** REQUEST_TO_INTERMEDIARY */ 8
    AllocIntermedReqType?: /** PENDING_ACCEPT */ 1 | /** PENDING_RELEASE */ 2 | /** PENDING_REVERSAL */ 3 | /** ACCEPT */ 4 | /** BLOCK_LEVEL_REJECT */ 5 | /** ACCOUNT_LEVEL_REJECT */ 6
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13
    SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocPrice?: number, IndividualAllocID?: string, IndividualAllocRejCode?: number, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string }[]
  }

  interface AllocationReportMessage {
    MsgType: 'AS'
    AllocReportID: string
    AllocID?: string
    AllocTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2' | /** PRELIMINARY */ '3' | /** CALCULATED */ '4' | /** CALCULATED_WITHOUT_PRELIMINARY */ '5'
    AllocReportRefID?: string
    AllocCancReplaceReason?: /** ORIGINAL_DETAILS_INCOMPLETE_INCORRECT */ 1 | /** CHANGE_IN_UNDERLYING_ORDER_DETAILS */ 2 | /** OTHER */ 99
    SecondaryAllocID?: string
    AllocReportType: /** SELLSIDE_CALCULATED_USING_PRELIMINARY */ 3 | /** SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY */ 4 | /** WAREHOUSE_RECAP */ 5 | /** REQUEST_TO_INTERMEDIARY */ 8
    AllocStatus: /** ACCEPTED */ 0 | /** BLOCK_LEVEL_REJECT */ 1 | /** ACCOUNT_LEVEL_REJECT */ 2 | /** RECEIVED */ 3 | /** INCOMPLETE */ 4 | /** REJECTED_BY_INTERMEDIARY */ 5
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7 | /** INCORRECT_ALLOCATED_QUANTITY */ 8 | /** CALCULATION_DIFFERENCE */ 9 | /** UNKNOWN_OR_STALE_EXEC_ID */ 10 | /** MISMATCHED_DATA_VALUE */ 11 | /** UNKNOWN_CLORDID */ 12 | /** WAREHOUSE_REQUEST_REJECTED */ 13
    RefAllocID?: string
    AllocIntermedReqType?: /** PENDING_ACCEPT */ 1 | /** PENDING_RELEASE */ 2 | /** PENDING_REVERSAL */ 3 | /** ACCEPT */ 4 | /** BLOCK_LEVEL_REJECT */ 5 | /** ACCOUNT_LEVEL_REJECT */ 6
    AllocLinkID?: string
    AllocLinkType?: /** F_X_NETTING */ 0 | /** F_X_SWAP */ 1
    BookingRefID?: string
    AllocNoOrdersType: /** NOT_SPECIFIED */ 0 | /** EXPLICIT_LIST_PROVIDED */ 1
    NoOrders?: { ClOrdID?: string, OrderID?: string, SecondaryOrderID?: string, SecondaryClOrdID?: string, ListID?: string, OrderQty?: number, OrderAvgPx?: number, OrderBookingQty?: number }[]
    NoExecs?: { LastQty?: number, ExecID?: string, SecondaryExecID?: string, LastPx?: number, LastParPx?: number, LastCapacity?: /** AGENT */ '1' | /** CROSS_AS_AGENT */ '2' | /** CROSS_AS_PRINCIPAL */ '3' | /** PRINCIPAL */ '4' }[]
    PreviouslyReported?: string
    ReversalIndicator?: string
    MatchType?: string
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    Quantity: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AvgPx: number
    AvgParPx?: number
    Currency?: string
    AvgPxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    BookingType?: /** REGULAR_BOOKING */ 0 | /** CFD */ 1 | /** TOTAL_RETURN_SWAP */ 2
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    AutoAcceptIndicator?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    TotalAccruedInterestAmt?: string
    InterestAtMaturity?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    LegalConfirm?: string
    TotNoAllocs?: number
    LastFragment?: string
    NoAllocs: { AllocAccount: string, AllocAcctIDSource?: number, MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2', AllocPrice?: number, AllocQty: number, IndividualAllocID?: string, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', NotifyBrokerOfCredit?: string, AllocHandlInst?: /** MATCH */ 1 | /** FORWARD */ 2 | /** FORWARD_AND_MATCH */ 3, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string, AllocAvgPx?: number, AllocNetMoney?: string, SettlCurrAmt?: string, AllocSettlCurrAmt?: string, SettlCurrency?: string, AllocSettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D', AllocAccruedInterestAmt?: string, AllocInterestAtMaturity?: string, NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[], NoClearingInstructions?: { ClearingInstruction?: /** PROCESS_NORMALLY */ 0 | /** EXCLUDE_FROM_ALL_NETTING */ 1 | /** BILATERAL_NETTING_ONLY */ 2 | /** EX_CLEARING */ 3 | /** SPECIAL_TRADE */ 4 | /** MULTILATERAL_NETTING */ 5 | /** CLEAR_AGAINST_CENTRAL_COUNTERPARTY */ 6 | /** EXCLUDE_FROM_CENTRAL_COUNTERPARTY */ 7 | /** MANUAL_MODE */ 8 | /** AUTOMATIC_POSTING_MODE */ 9 | /** AUTOMATIC_GIVE_UP_MODE */ 10 | /** QUALIFIED_SERVICE_REPRESENTATIVE */ 11 | /** CUSTOMER_TRADE */ 12 | /** SELF_CLEARING */ 13 }[], ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', AllocSettlInstType?: /** USE_DEFAULT_INSTRUCTIONS */ 0 | /** DERIVE_FROM_PARAMETERS_PROVIDED */ 1 | /** FULL_DETAILS_PROVIDED */ 2 | /** SSI_DB_IDS_PROVIDED */ 3 | /** PHONE_FOR_INSTRUCTIONS */ 4 }[]
  }

  interface AllocationReportAckMessage {
    MsgType: 'AT'
    AllocReportID: string
    AllocID: string
    SecondaryAllocID?: string
    TradeDate?: string
    TransactTime: string
    AllocStatus: /** ACCEPTED */ 0 | /** BLOCK_LEVEL_REJECT */ 1 | /** ACCOUNT_LEVEL_REJECT */ 2 | /** RECEIVED */ 3 | /** INCOMPLETE */ 4 | /** REJECTED_BY_INTERMEDIARY */ 5
    AllocRejCode?: /** UNKNOWN_ACCOUNT */ 0 | /** INCORRECT_QUANTITY */ 1 | /** INCORRECT_AVERAGE_PRICE */ 2 | /** UNKNOWN_EXECUTING_BROKER_MNEMONIC */ 3 | /** COMMISSION_DIFFERENCE */ 4 | /** UNKNOWN_ORDERID */ 5 | /** UNKNOWN_LISTID */ 6 | /** OTHER */ 7 | /** INCORRECT_ALLOCATED_QUANTITY */ 8 | /** CALCULATION_DIFFERENCE */ 9 | /** UNKNOWN_OR_STALE_EXEC_ID */ 10 | /** MISMATCHED_DATA_VALUE */ 11 | /** UNKNOWN_CLORDID */ 12 | /** WAREHOUSE_REQUEST_REJECTED */ 13
    AllocReportType?: /** SELLSIDE_CALCULATED_USING_PRELIMINARY */ 3 | /** SELLSIDE_CALCULATED_WITHOUT_PRELIMINARY */ 4 | /** WAREHOUSE_RECAP */ 5 | /** REQUEST_TO_INTERMEDIARY */ 8
    AllocIntermedReqType?: /** PENDING_ACCEPT */ 1 | /** PENDING_RELEASE */ 2 | /** PENDING_REVERSAL */ 3 | /** ACCEPT */ 4 | /** BLOCK_LEVEL_REJECT */ 5 | /** ACCOUNT_LEVEL_REJECT */ 6
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13
    SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocPrice?: number, IndividualAllocID?: string, IndividualAllocRejCode?: number, AllocText?: string, EncodedAllocTextLen?: number, EncodedAllocText?: string }[]
  }

  interface ConfirmationMessage {
    MsgType: 'AK'
    ConfirmID: string
    ConfirmRefID?: string
    ConfirmReqID?: string
    ConfirmTransType: /** NEW */ 0 | /** REPLACE */ 1 | /** CANCEL */ 2
    ConfirmType: /** STATUS */ 1 | /** CONFIRMATION */ 2 | /** CONFIRMATION_REQUEST_REJECTED */ 3
    CopyMsgIndicator?: string
    LegalConfirm?: string
    ConfirmStatus: /** RECEIVED */ 1 | /** MISMATCHED_ACCOUNT */ 2 | /** MISSING_SETTLEMENT_INSTRUCTIONS */ 3 | /** CONFIRMED */ 4 | /** REQUEST_REJECTED */ 5
    NoOrders?: { ClOrdID?: string, OrderID?: string, SecondaryOrderID?: string, SecondaryClOrdID?: string, ListID?: string, OrderQty?: number, OrderAvgPx?: number, OrderBookingQty?: number }[]
    AllocID?: string
    SecondaryAllocID?: string
    IndividualAllocID?: string
    TransactTime: string
    TradeDate: string
    NoUnderlyings: {}[]
    NoLegs: {}[]
    AllocQty: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    Currency?: string
    LastMkt?: string
    NoCapacities: { OrderCapacity: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', OrderCapacityQty: number }[]
    AllocAccount: string
    AllocAcctIDSource?: number
    AllocAccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    AvgPx: number
    AvgPxPrecision?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AvgParPx?: number
    ReportedPx?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6'
    GrossTradeAmt: string
    NumDaysInterest?: number
    ExDate?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    InterestAtMaturity?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney: string
    MaturityNetMoney?: string
    SettlCurrAmt?: string
    SettlCurrency?: string
    SettlCurrFxRate?: number
    SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D'
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    SharedCommission?: string
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
  }

  interface ConfirmationAckMessage {
    MsgType: 'AU'
    ConfirmID: string
    TradeDate: string
    TransactTime: string
    AffirmStatus: /** RECEIVED */ 1 | /** CONFIRM_REJECTED */ 2 | /** AFFIRMED */ 3
    ConfirmRejReason?: /** MISMATCHED_ACCOUNT */ 1 | /** MISSING_SETTLEMENT_INSTRUCTIONS */ 2 | /** OTHER */ 99
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface ConfirmationRequestMessage {
    MsgType: 'BH'
    ConfirmReqID: string
    ConfirmType: /** STATUS */ 1 | /** CONFIRMATION */ 2 | /** CONFIRMATION_REQUEST_REJECTED */ 3
    NoOrders?: { ClOrdID?: string, OrderID?: string, SecondaryOrderID?: string, SecondaryClOrdID?: string, ListID?: string, OrderQty?: number, OrderAvgPx?: number, OrderBookingQty?: number }[]
    AllocID?: string
    SecondaryAllocID?: string
    IndividualAllocID?: string
    TransactTime: string
    AllocAccount?: string
    AllocAcctIDSource?: number
    AllocAccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface SettlementInstructionsMessage {
    MsgType: 'T'
    SettlInstMsgID: string
    SettlInstReqID?: string
    SettlInstMode: /** DEFAULT */ '0' | /** STANDING_INSTRUCTIONS_PROVIDED */ '1' | /** SPECIFIC_ORDER_FOR_A_SINGLE_ACCOUNT */ '4' | /** REQUEST_REJECT */ '5'
    SettlInstReqRejCode?: /** UNABLE_TO_PROCESS_REQUEST */ 0 | /** UNKNOWN_ACCOUNT */ 1 | /** NO_MATCHING_SETTLEMENT_INSTRUCTIONS_FOUND */ 2 | /** OTHER */ 99
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    ClOrdID?: string
    TransactTime: string
    NoSettlInst?: { SettlInstID?: string, SettlInstTransType?: /** NEW */ 'N' | /** CANCEL */ 'C' | /** REPLACE */ 'R' | /** RESTATE */ 'T', SettlInstRefID?: string, Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13, SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD', CFICode?: string, EffectiveTime?: string, ExpireTime?: string, LastUpdateTime?: string, PaymentMethod?: /** CREST */ 1 | /** NSCC */ 2 | /** EUROCLEAR */ 3 | /** CLEARSTREAM */ 4 | /** CHEQUE */ 5 | /** TELEGRAPHIC_TRANSFER */ 6 | /** FEDWIRE */ 7 | /** DEBIT_CARD */ 8 | /** DIRECT_DEBIT */ 9 | /** DIRECT_CREDIT */ 10 | /** CREDIT_CARD */ 11 | /** ACH_DEBIT */ 12 | /** ACH_CREDIT */ 13 | /** BPAY */ 14 | /** HIGH_VALUE_CLEARING_SYSTEM */ 15, PaymentRef?: string, CardHolderName?: string, CardNumber?: string, CardStartDate?: string, CardExpDate?: string, CardIssNum?: string, PaymentDate?: string, PaymentRemitterID?: string }[]
  }

  interface SettlementInstructionRequestMessage {
    MsgType: 'AV'
    SettlInstReqID: string
    TransactTime: string
    AllocAccount?: string
    AllocAcctIDSource?: number
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    Product?: /** AGENCY */ 1 | /** COMMODITY */ 2 | /** CORPORATE */ 3 | /** CURRENCY */ 4 | /** EQUITY */ 5 | /** GOVERNMENT */ 6 | /** INDEX */ 7 | /** LOAN */ 8 | /** MONEYMARKET */ 9 | /** MORTGAGE */ 10 | /** MUNICIPAL */ 11 | /** OTHER */ 12 | /** FINANCING */ 13
    SecurityType?: /** WILDCARD */ '?' | /** ASSET_BACKED_SECURITIES */ 'ABS' | /** AMENDED_AND_RESTATED */ 'AMENDED' | /** OTHER_ANTICIPATION_NOTES */ 'AN' | /** BANKERS_ACCEPTANCE */ 'BA' | /** BANK_NOTES */ 'BN' | /** BILL_OF_EXCHANGES */ 'BOX' | /** BRADY_BOND */ 'BRADY' | /** BRIDGE_LOAN */ 'BRIDGE' | /** BUY_SELLBACK */ 'BUYSELL' | /** CONVERTIBLE_BOND */ 'CB' | /** CERTIFICATE_OF_DEPOSIT */ 'CD' | /** CALL_LOANS */ 'CL' | /** CORP_MORTGAGE_BACKED_SECURITIES */ 'CMBS' | /** COLLATERALIZED_MORTGAGE_OBLIGATION */ 'CMO' | /** CERTIFICATE_OF_OBLIGATION */ 'COFO' | /** CERTIFICATE_OF_PARTICIPATION */ 'COFP' | /** CORPORATE_BOND */ 'CORP' | /** COMMERCIAL_PAPER */ 'CP' | /** CORPORATE_PRIVATE_PLACEMENT */ 'CPP' | /** COMMON_STOCK */ 'CS' | /** DEFAULTED */ 'DEFLTED' | /** DEBTOR_IN_POSSESSION */ 'DINP' | /** DEPOSIT_NOTES */ 'DN' | /** DUAL_CURRENCY */ 'DUAL' | /** EURO_CERTIFICATE_OF_DEPOSIT */ 'EUCD' | /** EURO_CORPORATE_BOND */ 'EUCORP' | /** EURO_COMMERCIAL_PAPER */ 'EUCP' | /** EURO_SOVEREIGNS */ 'EUSOV' | /** EURO_SUPRANATIONAL_COUPONS */ 'EUSUPRA' | /** FEDERAL_AGENCY_COUPON */ 'FAC' | /** FEDERAL_AGENCY_DISCOUNT_NOTE */ 'FADN' | /** FOREIGN_EXCHANGE_CONTRACT */ 'FOR' | /** FORWARD */ 'FORWARD' | /** FUTURE */ 'FUT' | /** GENERAL_OBLIGATION_BONDS */ 'GO' | /** IOETTE_MORTGAGE */ 'IET' | /** LETTER_OF_CREDIT */ 'LOFC' | /** LIQUIDITY_NOTE */ 'LQN' | /** MATURED */ 'MATURED' | /** MORTGAGE_BACKED_SECURITIES */ 'MBS' | /** MUTUAL_FUND */ 'MF' | /** MORTGAGE_INTEREST_ONLY */ 'MIO' | /** MULTI_LEG_INSTRUMENT */ 'MLEG' | /** MORTGAGE_PRINCIPAL_ONLY */ 'MPO' | /** MORTGAGE_PRIVATE_PLACEMENT */ 'MPP' | /** MISCELLANEOUS_PASS_THROUGH */ 'MPT' | /** MANDATORY_TENDER */ 'MT' | /** MEDIUM_TERM_NOTES */ 'MTN' | /** NO_SECURITY_TYPE */ 'NONE' | /** OVERNIGHT */ 'ONITE' | /** OPTION */ 'OPT' | /** PRIVATE_EXPORT_FUNDING */ 'PEF' | /** PFANDBRIEFE */ 'PFAND' | /** PROMISSORY_NOTE */ 'PN' | /** PREFERRED_STOCK */ 'PS' | /** PLAZOS_FIJOS */ 'PZFJ' | /** REVENUE_ANTICIPATION_NOTE */ 'RAN' | /** REPLACED */ 'REPLACD' | /** REPURCHASE */ 'REPO' | /** RETIRED */ 'RETIRED' | /** REVENUE_BONDS */ 'REV' | /** REVOLVER_LOAN */ 'RVLV' | /** REVOLVER_TERM_LOAN */ 'RVLVTRM' | /** SECURITIES_LOAN */ 'SECLOAN' | /** SECURITIES_PLEDGE */ 'SECPLEDGE' | /** SPECIAL_ASSESSMENT */ 'SPCLA' | /** SPECIAL_OBLIGATION */ 'SPCLO' | /** SPECIAL_TAX */ 'SPCLT' | /** SHORT_TERM_LOAN_NOTE */ 'STN' | /** STRUCTURED_NOTES */ 'STRUCT' | /** USD_SUPRANATIONAL_COUPONS */ 'SUPRA' | /** SWING_LINE_FACILITY */ 'SWING' | /** TAX_ANTICIPATION_NOTE */ 'TAN' | /** TAX_ALLOCATION */ 'TAXA' | /** TO_BE_ANNOUNCED */ 'TBA' | /** US_TREASURY_BILL */ 'TBILL' | /** US_TREASURY_BOND */ 'TBOND' | /** PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE */ 'TCAL' | /** TIME_DEPOSIT */ 'TD' | /** TAX_EXEMPT_COMMERCIAL_PAPER */ 'TECP' | /** TERM_LOAN */ 'TERM' | /** INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE */ 'TINT' | /** TREASURY_INFLATION_PROTECTED_SECURITIES */ 'TIPS' | /** US_TREASURY_NOTE */ 'TNOTE' | /** PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE */ 'TPRN' | /** TAX_AND_REVENUE_ANTICIPATION_NOTE */ 'TRAN' | /** VARIABLE_RATE_DEMAND_NOTE */ 'VRDN' | /** WARRANT */ 'WAR' | /** WITHDRAWN */ 'WITHDRN' | /** EXTENDED_COMM_NOTE */ 'XCN' | /** INDEXED_LINKED */ 'XLINKD' | /** YANKEE_CORPORATE_BOND */ 'YANK' | /** YANKEE_CERTIFICATE_OF_DEPOSIT */ 'YCD'
    CFICode?: string
    EffectiveTime?: string
    ExpireTime?: string
    LastUpdateTime?: string
    StandInstDbType?: /** OTHER */ 0 | /** DTC_SID */ 1 | /** THOMSON_ALERT */ 2 | /** A_GLOBAL_CUSTODIAN */ 3 | /** ACCOUNTNET */ 4
    StandInstDbName?: string
    StandInstDbID?: string
  }

  interface TradeCaptureReportRequestMessage {
    MsgType: 'AD'
    TradeRequestID: string
    TradeRequestType: /** ALL_TRADES */ 0 | /** MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST */ 1 | /** UNMATCHED_TRADES_THAT_MATCH_CRITERIA */ 2 | /** UNREPORTED_TRADES_THAT_MATCH_CRITERIA */ 3 | /** ADVISORIES_THAT_MATCH_CRITERIA */ 4
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TradeReportID?: string
    SecondaryTradeReportID?: string
    ExecID?: string
    ExecType?: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    OrderID?: string
    ClOrdID?: string
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    TrdType?: /** REGULAR_TRADE */ 0 | /** BLOCK_TRADE */ 1 | /** EFP */ 2 | /** TRANSFER */ 3 | /** LATE_TRADE */ 4 | /** T_TRADE */ 5 | /** WEIGHTED_AVERAGE_PRICE_TRADE */ 6 | /** BUNCHED_TRADE */ 7 | /** LATE_BUNCHED_TRADE */ 8 | /** PRIOR_REFERENCE_PRICE_TRADE */ 9 | /** AFTER_HOURS_TRADE */ 10
    TrdSubType?: number
    TransferReason?: string
    SecondaryTrdType?: number
    TradeLinkID?: string
    TrdMatchID?: string
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    NoDates?: { TradeDate?: string, TransactTime?: string }[]
    ClearingBusinessDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TimeBracket?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    MultiLegReportingType?: /** SINGLE_SECURITY */ '1' | /** INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY */ '2' | /** MULTI_LEG_SECURITY */ '3'
    TradeInputSource?: string
    TradeInputDevice?: string
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface TradeCaptureReportRequestAckMessage {
    MsgType: 'AQ'
    TradeRequestID: string
    TradeRequestType: /** ALL_TRADES */ 0 | /** MATCHED_TRADES_MATCHING_CRITERIA_PROVIDED_ON_REQUEST */ 1 | /** UNMATCHED_TRADES_THAT_MATCH_CRITERIA */ 2 | /** UNREPORTED_TRADES_THAT_MATCH_CRITERIA */ 3 | /** ADVISORIES_THAT_MATCH_CRITERIA */ 4
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TotNumTradeReports?: number
    TradeRequestResult: /** SUCCESSFUL */ 0 | /** INVALID_OR_UNKNOWN_INSTRUMENT */ 1 | /** INVALID_TYPE_OF_TRADE_REQUESTED */ 2 | /** INVALID_PARTIES */ 3 | /** INVALID_TRANSPORT_TYPE_REQUESTED */ 4 | /** INVALID_DESTINATION_REQUESTED */ 5 | /** TRADEREQUESTTYPE_NOT_SUPPORTED */ 8 | /** UNAUTHORIZED_FOR_TRADE_CAPTURE_REPORT_REQUEST */ 9 | /** OTHER */ 99
    TradeRequestStatus: /** ACCEPTED */ 0 | /** COMPLETED */ 1 | /** REJECTED */ 2
    NoUnderlyings?: {}[]
    NoLegs?: {}[]
    MultiLegReportingType?: /** SINGLE_SECURITY */ '1' | /** INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY */ '2' | /** MULTI_LEG_SECURITY */ '3'
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface TradeCaptureReportMessage {
    MsgType: 'AE'
    TradeReportID: string
    TradeReportTransType?: /** NEW */ 0 | /** CANCEL */ 1 | /** REPLACE */ 2 | /** RELEASE */ 3 | /** REVERSE */ 4
    TradeReportType?: /** SUBMIT */ 0 | /** ALLEGED */ 1 | /** ACCEPT */ 2 | /** DECLINE */ 3 | /** ADDENDUM */ 4 | /** NO_WAS */ 5 | /** TRADE_REPORT_CANCEL */ 6 | /** LOCKED_IN_TRADE_BREAK */ 7
    TradeRequestID?: string
    TrdType?: /** REGULAR_TRADE */ 0 | /** BLOCK_TRADE */ 1 | /** EFP */ 2 | /** TRANSFER */ 3 | /** LATE_TRADE */ 4 | /** T_TRADE */ 5 | /** WEIGHTED_AVERAGE_PRICE_TRADE */ 6 | /** BUNCHED_TRADE */ 7 | /** LATE_BUNCHED_TRADE */ 8 | /** PRIOR_REFERENCE_PRICE_TRADE */ 9 | /** AFTER_HOURS_TRADE */ 10
    TrdSubType?: number
    SecondaryTrdType?: number
    TransferReason?: string
    ExecType?: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    TotNumTradeReports?: number
    LastRptRequested?: string
    UnsolicitedIndicator?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TradeReportRefID?: string
    SecondaryTradeReportRefID?: string
    SecondaryTradeReportID?: string
    TradeLinkID?: string
    TrdMatchID?: string
    ExecID?: string
    OrdStatus?: /** NEW */ '0' | /** PARTIALLY_FILLED */ '1' | /** FILLED */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACED */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** ACCEPTED_FOR_BIDDING */ 'D' | /** PENDING_REPLACE */ 'E'
    SecondaryExecID?: string
    ExecRestatementReason?: /** GT_CORPORATE_ACTION */ 0 | /** GT_RENEWAL_RESTATEMENT */ 1 | /** VERBAL_CHANGE */ 2 | /** REPRICING_OF_ORDER */ 3 | /** BROKER_OPTION */ 4 | /** PARTIAL_DECLINE_OF_ORDERQTY */ 5 | /** CANCEL_ON_TRADING_HALT */ 6 | /** CANCEL_ON_SYSTEM_FAILURE */ 7 | /** MARKET_OPTION */ 8 | /** CANCELED_NOT_BEST */ 9 | /** WAREHOUSE_RECAP */ 10 | /** OTHER */ 99
    PreviouslyReported: string
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    NoUnderlyings?: {}[]
    UnderlyingTradingSessionID?: string
    UnderlyingTradingSessionSubID?: string
    LastQty: number
    LastPx: number
    LastParPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradeDate: string
    ClearingBusinessDate?: string
    AvgPx?: number
    AvgPxIndicator?: /** NO_AVERAGE_PRICING */ 0 | /** TRADE_IS_PART_OF_AN_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID */ 1 | /** LAST_TRADE_IN_THE_AVERAGE_PRICE_GROUP_IDENTIFIED_BY_THE_TRADELINKID */ 2
    MultiLegReportingType?: /** SINGLE_SECURITY */ '1' | /** INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY */ '2' | /** MULTI_LEG_SECURITY */ '3'
    TradeLegRefID?: string
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlType?: string, LegSettlDate?: string, LegLastPx?: number }[]
    TransactTime: string
    SettlType?: /** REGULAR */ '0' | /** CASH */ '1' | /** NEXT_DAY */ '2' | /** T_PLUS_2 */ '3' | /** T_PLUS_3 */ '4' | /** T_PLUS_4 */ '5' | /** FUTURE */ '6' | /** WHEN_AND_IF_ISSUED */ '7' | /** SELLERS_OPTION */ '8' | /** T_PLUS_5 */ '9'
    SettlDate?: string
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    MatchType?: string
    NoSides: { Side: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G', OrderID: string, SecondaryOrderID?: string, ClOrdID?: string, SecondaryClOrdID?: string, ListID?: string, Account?: string, AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99, AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8, ProcessCode?: /** REGULAR */ '0' | /** SOFT_DOLLAR */ '1' | /** STEP_IN */ '2' | /** STEP_OUT */ '3' | /** SOFT_DOLLAR_STEP_IN */ '4' | /** SOFT_DOLLAR_STEP_OUT */ '5' | /** PLAN_SPONSOR */ '6', OddLot?: string, NoClearingInstructions?: { ClearingInstruction?: /** PROCESS_NORMALLY */ 0 | /** EXCLUDE_FROM_ALL_NETTING */ 1 | /** BILATERAL_NETTING_ONLY */ 2 | /** EX_CLEARING */ 3 | /** SPECIAL_TRADE */ 4 | /** MULTILATERAL_NETTING */ 5 | /** CLEAR_AGAINST_CENTRAL_COUNTERPARTY */ 6 | /** EXCLUDE_FROM_CENTRAL_COUNTERPARTY */ 7 | /** MANUAL_MODE */ 8 | /** AUTOMATIC_POSTING_MODE */ 9 | /** AUTOMATIC_GIVE_UP_MODE */ 10 | /** QUALIFIED_SERVICE_REPRESENTATIVE */ 11 | /** CUSTOMER_TRADE */ 12 | /** SELF_CLEARING */ 13 }[], ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M', TradeInputSource?: string, TradeInputDevice?: string, OrderInputDevice?: string, Currency?: string, ComplianceID?: string, SolicitedFlag?: string, OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W', OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A', CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4, OrdType?: /** MARKET */ '1' | /** LIMIT */ '2' | /** STOP */ '3' | /** STOP_LIMIT */ '4' | /** MARKET_ON_CLOSE */ '5' | /** WITH_OR_WITHOUT */ '6' | /** LIMIT_OR_BETTER */ '7' | /** LIMIT_WITH_OR_WITHOUT */ '8' | /** ON_BASIS */ '9' | /** ON_CLOSE */ 'A' | /** LIMIT_ON_CLOSE */ 'B' | /** FOREX_MARKET */ 'C' | /** PREVIOUSLY_QUOTED */ 'D' | /** PREVIOUSLY_INDICATED */ 'E' | /** FOREX_LIMIT */ 'F' | /** FOREX_SWAP */ 'G' | /** FOREX_PREVIOUSLY_QUOTED */ 'H' | /** FUNARI */ 'I' | /** MARKET_IF_TOUCHED */ 'J' | /** MARKET_WITH_LEFTOVER_AS_LIMIT */ 'K' | /** PREVIOUS_FUND_VALUATION_POINT */ 'L' | /** NEXT_FUND_VALUATION_POINT */ 'M' | /** PEGGED */ 'P', ExecInst?: /** NOT_HELD */ '1' | /** WORK */ '2' | /** GO_ALONG */ '3' | /** OVER_THE_DAY */ '4' | /** HELD */ '5' | /** PARTICIPATE_DONT_INITIATE */ '6' | /** STRICT_SCALE */ '7' | /** TRY_TO_SCALE */ '8' | /** STAY_ON_BIDSIDE */ '9' | /** STAY_ON_OFFERSIDE */ '0' | /** NO_CROSS */ 'A' | /** OK_TO_CROSS */ 'B' | /** CALL_FIRST */ 'C' | /** PERCENT_OF_VOLUME */ 'D' | /** DO_NOT_INCREASE */ 'E' | /** DO_NOT_REDUCE */ 'F' | /** ALL_OR_NONE */ 'G' | /** REINSTATE_ON_SYSTEM_FAILURE */ 'H' | /** INSTITUTIONS_ONLY */ 'I' | /** REINSTATE_ON_TRADING_HALT */ 'J' | /** CANCEL_ON_TRADING_HALT */ 'K' | /** LAST_PEG */ 'L' | /** MID_PRICE */ 'M' | /** NON_NEGOTIABLE */ 'N' | /** OPENING_PEG */ 'O' | /** MARKET_PEG */ 'P' | /** CANCEL_ON_SYSTEM_FAILURE */ 'Q' | /** PRIMARY_PEG */ 'R' | /** SUSPEND */ 'S' | /** FIXED_PEG_TO_LOCAL_BEST_BID_OR_OFFER_AT_TIME_OF_ORDER */ 'T' | /** CUSTOMER_DISPLAY_INSTRUCTION */ 'U' | /** NETTING */ 'V' | /** PEG_TO_VWAP */ 'W' | /** TRADE_ALONG */ 'X' | /** TRY_TO_STOP */ 'Y' | /** CANCEL_IF_NOT_BEST */ 'Z' | /** TRAILING_STOP_PEG */ 'a' | /** STRICT_LIMIT */ 'b' | /** IGNORE_PRICE_VALIDITY_CHECKS */ 'c' | /** PEG_TO_LIMIT_PRICE */ 'd' | /** WORK_TO_TARGET_STRATEGY */ 'e', TransBkdTime?: string, TradingSessionID?: string, TradingSessionSubID?: string, TimeBracket?: string, GrossTradeAmt?: string, NumDaysInterest?: number, ExDate?: string, AccruedInterestRate?: string, AccruedInterestAmt?: string, InterestAtMaturity?: string, EndAccruedInterestAmt?: string, StartCash?: string, EndCash?: string, Concession?: string, TotalTakedown?: string, NetMoney?: string, SettlCurrAmt?: string, SettlCurrency?: string, SettlCurrFxRate?: number, SettlCurrFxRateCalc?: /** MULTIPLY */ 'M' | /** DIVIDE */ 'D', PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F', Text?: string, EncodedTextLen?: number, EncodedText?: string, SideMultiLegReportingType?: /** SINGLE_SECURITY */ 1 | /** INDIVIDUAL_LEG_OF_A_MULTI_LEG_SECURITY */ 2 | /** MULTI_LEG_SECURITY */ 3, NoContAmts?: { ContAmtType?: /** COMMISSION_AMOUNT */ 1 | /** COMMISSION_PERCENT */ 2 | /** INITIAL_CHARGE_AMOUNT */ 3 | /** INITIAL_CHARGE_PERCENT */ 4 | /** DISCOUNT_AMOUNT */ 5 | /** DISCOUNT_PERCENT */ 6 | /** DILUTION_LEVY_AMOUNT */ 7 | /** DILUTION_LEVY_PERCENT */ 8 | /** EXIT_CHARGE_AMOUNT */ 9, ContAmtValue?: number, ContAmtCurr?: string }[], NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[], ExchangeRule?: string, TradeAllocIndicator?: /** ALLOCATION_NOT_REQUIRED */ 0 | /** ALLOCATION_REQUIRED */ 1 | /** USE_ALLOCATION_PROVIDED_WITH_THE_TRADE */ 2, PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1', AllocID?: string, NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[] }[]
    CopyMsgIndicator?: string
    PublishTrdIndicator?: string
    ShortSaleReason?: /** DEALER_SOLD_SHORT */ 0 | /** DEALER_SOLD_SHORT_EXEMPT */ 1 | /** SELLING_CUSTOMER_SOLD_SHORT */ 2 | /** SELLING_CUSTOMER_SOLD_SHORT_EXEMPT */ 3 | /** QUALIFED_SERVICE_REPRESENTATIVE_OR_AUTOMATIC_GIVEUP_CONTRA_SIDE_SOLD_SHORT */ 4 | /** QSR_OR_AGU_CONTRA_SIDE_SOLD_SHORT_EXEMPT */ 5
  }

  interface TradeCaptureReportAckMessage {
    MsgType: 'AR'
    TradeReportID: string
    TradeReportTransType?: /** NEW */ 0 | /** CANCEL */ 1 | /** REPLACE */ 2 | /** RELEASE */ 3 | /** REVERSE */ 4
    TradeReportType?: /** SUBMIT */ 0 | /** ALLEGED */ 1 | /** ACCEPT */ 2 | /** DECLINE */ 3 | /** ADDENDUM */ 4 | /** NO_WAS */ 5 | /** TRADE_REPORT_CANCEL */ 6 | /** LOCKED_IN_TRADE_BREAK */ 7
    TrdType?: /** REGULAR_TRADE */ 0 | /** BLOCK_TRADE */ 1 | /** EFP */ 2 | /** TRANSFER */ 3 | /** LATE_TRADE */ 4 | /** T_TRADE */ 5 | /** WEIGHTED_AVERAGE_PRICE_TRADE */ 6 | /** BUNCHED_TRADE */ 7 | /** LATE_BUNCHED_TRADE */ 8 | /** PRIOR_REFERENCE_PRICE_TRADE */ 9 | /** AFTER_HOURS_TRADE */ 10
    TrdSubType?: number
    SecondaryTrdType?: number
    TransferReason?: string
    ExecType: /** NEW */ '0' | /** PARTIAL_FILL */ '1' | /** FILL */ '2' | /** DONE_FOR_DAY */ '3' | /** CANCELED */ '4' | /** REPLACE */ '5' | /** PENDING_CANCEL */ '6' | /** STOPPED */ '7' | /** REJECTED */ '8' | /** SUSPENDED */ '9' | /** PENDING_NEW */ 'A' | /** CALCULATED */ 'B' | /** EXPIRED */ 'C' | /** RESTATED */ 'D' | /** PENDING_REPLACE */ 'E' | /** TRADE */ 'F' | /** TRADE_CORRECT */ 'G' | /** TRADE_CANCEL */ 'H' | /** ORDER_STATUS */ 'I'
    TradeReportRefID?: string
    SecondaryTradeReportRefID?: string
    TrdRptStatus?: /** ACCEPTED */ 0 | /** REJECTED */ 1
    TradeReportRejectReason?: /** SUCCESSFUL */ 0 | /** INVALID_PARTY_INFORMATION */ 1 | /** UNKNOWN_INSTRUMENT */ 2 | /** UNAUTHORIZED_TO_REPORT_TRADES */ 3 | /** INVALID_TRADE_TYPE */ 4 | /** OTHER */ 99
    SecondaryTradeReportID?: string
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TradeLinkID?: string
    TrdMatchID?: string
    ExecID?: string
    SecondaryExecID?: string
    TransactTime?: string
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NoLegs?: { LegQty?: number, LegSwapType?: /** PAR_FOR_PAR */ 1 | /** MODIFIED_DURATION */ 2 | /** RISK */ 4 | /** PROCEEDS */ 5, LegPositionEffect?: string, LegCoveredOrUncovered?: number, LegRefID?: string, LegPrice?: number, LegSettlType?: string, LegSettlDate?: string, LegLastPx?: number }[]
    ClearingFeeIndicator?: /** CBOE_MEMBER */ 'B' | /** NON_MEMBER_AND_CUSTOMER */ 'C' | /** EQUITY_MEMBER_AND_CLEARING_MEMBER */ 'E' | /** FULL_AND_ASSOCIATE_MEMBER_TRADING_FOR_OWN_ACCOUNT_AND_AS_FLOOR_BROKERS */ 'F' | /** FIRMS_106H_AND_106J */ 'H' | /** GIM_IDEM_AND_COM_MEMBERSHIP_INTEREST_HOLDERS */ 'I' | /** LESSEE_AND_106F_EMPLOYEES */ 'L' | /** ALL_OTHER_OWNERSHIP_TYPES */ 'M'
    OrderCapacity?: /** AGENCY */ 'A' | /** PROPRIETARY */ 'G' | /** INDIVIDUAL */ 'I' | /** PRINCIPAL */ 'P' | /** RISKLESS_PRINCIPAL */ 'R' | /** AGENT_FOR_OTHER_MEMBER */ 'W'
    OrderRestrictions?: /** PROGRAM_TRADE */ '1' | /** INDEX_ARBITRAGE */ '2' | /** NON_INDEX_ARBITRAGE */ '3' | /** COMPETING_MARKET_MAKER */ '4' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_SECURITY */ '5' | /** ACTING_AS_MARKET_MAKER_OR_SPECIALIST_IN_THE_UNDERLYING_SECURITY_OF_A_DERIVATIVE_SECURITY */ '6' | /** FOREIGN_ENTITY */ '7' | /** EXTERNAL_MARKET_PARTICIPANT */ '8' | /** EXTERNAL_INTER_CONNECTED_MARKET_LINKAGE */ '9' | /** RISKLESS_ARBITRAGE */ 'A'
    CustOrderCapacity?: /** MEMBER_TRADING_FOR_THEIR_OWN_ACCOUNT */ 1 | /** CLEARING_FIRM_TRADING_FOR_ITS_PROPRIETARY_ACCOUNT */ 2 | /** MEMBER_TRADING_FOR_ANOTHER_MEMBER */ 3 | /** ALL_OTHER */ 4
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    PositionEffect?: /** OPEN */ 'O' | /** CLOSE */ 'C' | /** ROLLED */ 'R' | /** FIFO */ 'F'
    PreallocMethod?: /** PRO_RATA */ '0' | /** DO_NOT_PRO_RATA */ '1'
    NoAllocs?: { AllocAccount?: string, AllocAcctIDSource?: number, AllocSettlCurrency?: string, IndividualAllocID?: string, AllocQty?: number }[]
  }

  interface RegistrationInstructionsMessage {
    MsgType: 'o'
    RegistID: string
    RegistTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    RegistAcctType?: string
    TaxAdvantageType?: /** NONE */ 0 | /** MAXI_ISA */ 1 | /** TESSA */ 2 | /** MINI_CASH_ISA */ 3 | /** MINI_STOCKS_AND_SHARES_ISA */ 4 | /** MINI_INSURANCE_ISA */ 5 | /** CURRENT_YEAR_PAYMENT */ 6 | /** PRIOR_YEAR_PAYMENT */ 7 | /** ASSET_TRANSFER */ 8 | /** EMPLOYEE_PRIOR_YEAR */ 9 | /** OTHER */ 999
    OwnershipType?: /** JOINT_INVESTORS */ 'J' | /** TENANTS_IN_COMMON */ 'T' | /** JOINT_TRUSTEES */ '2'
    NoRegistDtls?: { RegistDtls?: string, RegistEmail?: string, MailingDtls?: string, MailingInst?: string, OwnerType?: /** INDIVIDUAL_INVESTOR */ 1 | /** PUBLIC_COMPANY */ 2 | /** PRIVATE_COMPANY */ 3 | /** INDIVIDUAL_TRUSTEE */ 4 | /** COMPANY_TRUSTEE */ 5 | /** PENSION_PLAN */ 6 | /** CUSTODIAN_UNDER_GIFTS_TO_MINORS_ACT */ 7 | /** TRUSTS */ 8 | /** FIDUCIARIES */ 9 | /** NETWORKING_SUB_ACCOUNT */ 10 | /** NON_PROFIT_ORGANIZATION */ 11 | /** CORPORATE_BODY */ 12 | /** NOMINEE */ 13, DateOfBirth?: string, InvestorCountryOfResidence?: string }[]
    NoDistribInsts?: { DistribPaymentMethod?: /** CREST */ 1 | /** NSCC */ 2 | /** EUROCLEAR */ 3 | /** CLEARSTREAM */ 4 | /** CHEQUE */ 5 | /** TELEGRAPHIC_TRANSFER */ 6 | /** FEDWIRE */ 7 | /** DIRECT_CREDIT */ 8 | /** ACH_CREDIT */ 9 | /** BPAY */ 10 | /** HIGH_VALUE_CLEARING_SYSTEM */ 11 | /** REINVEST_IN_FUND */ 12, DistribPercentage?: string, CashDistribCurr?: string, CashDistribAgentName?: string, CashDistribAgentCode?: string, CashDistribAgentAcctNumber?: string, CashDistribPayRef?: string, CashDistribAgentAcctName?: string }[]
  }

  interface RegistrationInstructionsResponseMessage {
    MsgType: 'p'
    RegistID: string
    RegistTransType: /** NEW */ '0' | /** REPLACE */ '1' | /** CANCEL */ '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    RegistStatus: /** ACCEPTED */ 'A' | /** REJECTED */ 'R' | /** HELD */ 'H' | /** REMINDER */ 'N'
    RegistRejReasonCode?: /** INVALID_UNACCEPTABLE_ACCOUNT_TYPE */ 1 | /** INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE */ 2 | /** INVALID_UNACCEPTABLE_OWNERSHIP_TYPE */ 3 | /** INVALID_UNACCEPTABLE_NO_REG_DETLS */ 4 | /** INVALID_UNACCEPTABLE_REG_SEQ_NO */ 5 | /** INVALID_UNACCEPTABLE_REG_DTLS */ 6 | /** INVALID_UNACCEPTABLE_MAILING_DTLS */ 7 | /** INVALID_UNACCEPTABLE_MAILING_INST */ 8 | /** INVALID_UNACCEPTABLE_INVESTOR_ID */ 9 | /** INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE */ 10 | /** INVALID_UNACCEPTABLE_DATE_OF_BIRTH */ 11 | /** INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE */ 12 | /** INVALID_UNACCEPTABLE_NODISTRIBINSTNS */ 13 | /** INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE */ 14 | /** INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD */ 15 | /** INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME */ 16 | /** INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE */ 17 | /** INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM */ 18 | /** OTHER */ 99
    RegistRejReasonText?: string
  }

  interface PositionMaintenanceRequestMessage {
    MsgType: 'AL'
    PosReqID: string
    PosTransType: /** EXERCISE */ 1 | /** DO_NOT_EXERCISE */ 2 | /** POSITION_ADJUSTMENT */ 3 | /** POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION */ 4 | /** PLEDGE */ 5
    PosMaintAction: /** NEW */ 1 | /** REPLACE */ 2 | /** CANCEL */ 3
    OrigPosReqRefID?: string
    PosMaintRptRefID?: string
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    TransactTime: string
    AdjustmentType?: /** PROCESS_REQUEST_AS_MARGIN_DISPOSITION */ 0 | /** DELTA_PLUS */ 1 | /** DELTA_MINUS */ 2 | /** FINAL */ 3
    ContraryInstructionIndicator?: string
    PriorSpreadIndicator?: string
    ThresholdAmount?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface PositionMaintenanceReportMessage {
    MsgType: 'AM'
    PosMaintRptID: string
    PosTransType: /** EXERCISE */ 1 | /** DO_NOT_EXERCISE */ 2 | /** POSITION_ADJUSTMENT */ 3 | /** POSITION_CHANGE_SUBMISSION_MARGIN_DISPOSITION */ 4 | /** PLEDGE */ 5
    PosReqID?: string
    PosMaintAction: /** NEW */ 1 | /** REPLACE */ 2 | /** CANCEL */ 3
    OrigPosReqRefID: string
    PosMaintStatus: /** ACCEPTED */ 0 | /** ACCEPTED_WITH_WARNINGS */ 1 | /** REJECTED */ 2 | /** COMPLETED */ 3 | /** COMPLETED_WITH_WARNINGS */ 4
    PosMaintResult?: /** SUCCESSFUL_COMPLETION_NO_WARNINGS_OR_ERRORS */ 0 | /** REJECTED */ 1 | /** OTHER */ 99
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    TransactTime: string
    AdjustmentType?: /** PROCESS_REQUEST_AS_MARGIN_DISPOSITION */ 0 | /** DELTA_PLUS */ 1 | /** DELTA_MINUS */ 2 | /** FINAL */ 3
    ThresholdAmount?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface RequestForPositionsMessage {
    MsgType: 'AN'
    PosReqID: string
    PosReqType: /** POSITIONS */ 0 | /** TRADES */ 1 | /** EXERCISES */ 2 | /** ASSIGNMENTS */ 3
    MatchStatus?: /** COMPARED_MATCHED_OR_AFFIRMED */ '0' | /** UNCOMPARED_UNMATCHED_OR_UNAFFIRMED */ '1' | /** ADVISORY_OR_ALERT */ '2'
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    Account: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    NoTradingSessions?: { TradingSessionID?: string, TradingSessionSubID?: string }[]
    TransactTime: string
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface RequestForPositionsAckMessage {
    MsgType: 'AO'
    PosMaintRptID: string
    PosReqID?: string
    TotalNumPosReports?: number
    UnsolicitedIndicator?: string
    PosReqResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_REQUEST_POSITIONS */ 3 | /** REQUEST_FOR_POSITION_NOT_SUPPORTED */ 4 | /** OTHER */ 99
    PosReqStatus: /** COMPLETED */ 0 | /** COMPLETED_WITH_WARNINGS */ 1 | /** REJECTED */ 2
    Account: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface PositionReportMessage {
    MsgType: 'AP'
    PosMaintRptID: string
    PosReqID?: string
    PosReqType?: /** POSITIONS */ 0 | /** TRADES */ 1 | /** EXERCISES */ 2 | /** ASSIGNMENTS */ 3
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    TotalNumPosReports?: number
    UnsolicitedIndicator?: string
    PosReqResult: /** VALID_REQUEST */ 0 | /** INVALID_OR_UNSUPPORTED_REQUEST */ 1 | /** NO_POSITIONS_FOUND_THAT_MATCH_CRITERIA */ 2 | /** NOT_AUTHORIZED_TO_REQUEST_POSITIONS */ 3 | /** REQUEST_FOR_POSITION_NOT_SUPPORTED */ 4 | /** OTHER */ 99
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: /** BIC */ 1 | /** SID_CODE */ 2 | /** TFM */ 3 | /** OMGEO */ 4 | /** DTCC_CODE */ 5 | /** OTHER */ 99
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    SettlPrice: number
    SettlPriceType: /** FINAL */ 1 | /** THEORETICAL */ 2
    PriorSettlPrice: number
    NoLegs?: {}[]
    NoUnderlyings?: { UnderlyingSettlPrice: number, UnderlyingSettlPriceType: number }[]
    RegistStatus?: /** ACCEPTED */ 'A' | /** REJECTED */ 'R' | /** HELD */ 'H' | /** REMINDER */ 'N'
    DeliveryDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface AssignmentReportMessage {
    MsgType: 'AW'
    AsgnRptID: string
    TotNumAssignmentReports?: number
    LastRptRequested?: string
    Account?: string
    AccountType: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    ThresholdAmount?: number
    SettlPrice: number
    SettlPriceType: /** FINAL */ 1 | /** THEORETICAL */ 2
    UnderlyingSettlPrice: number
    ExpireDate?: string
    AssignmentMethod: /** RANDOM */ 'R' | /** PRORATA */ 'P'
    AssignmentUnit?: number
    OpenInterest: string
    ExerciseMethod: /** AUTOMATIC */ 'A' | /** MANUAL */ 'M'
    SettlSessID: string
    SettlSessSubID: string
    ClearingBusinessDate: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface CollateralRequestMessage {
    MsgType: 'AX'
    CollReqID: string
    CollAsgnReason: /** INITIAL */ 0 | /** SCHEDULED */ 1 | /** TIME_WARNING */ 2 | /** MARGIN_DEFICIENCY */ 3 | /** MARGIN_EXCESS */ 4 | /** FORWARD_COLLATERAL_DEMAND */ 5 | /** EVENT_OF_DEFAULT */ 6 | /** ADVERSE_TAX_EVENT */ 7
    TransactTime: string
    ExpireTime?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: { CollAction?: /** RETAIN */ 0 | /** ADD */ 1 | /** REMOVE */ 2 }[]
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface CollateralAssignmentMessage {
    MsgType: 'AY'
    CollAsgnID: string
    CollReqID?: string
    CollAsgnReason: /** INITIAL */ 0 | /** SCHEDULED */ 1 | /** TIME_WARNING */ 2 | /** MARGIN_DEFICIENCY */ 3 | /** MARGIN_EXCESS */ 4 | /** FORWARD_COLLATERAL_DEMAND */ 5 | /** EVENT_OF_DEFAULT */ 6 | /** ADVERSE_TAX_EVENT */ 7
    CollAsgnTransType: /** NEW */ 0 | /** REPLACE */ 1 | /** CANCEL */ 2 | /** RELEASE */ 3 | /** REVERSE */ 4
    CollAsgnRefID?: string
    TransactTime: string
    ExpireTime?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: { CollAction?: /** RETAIN */ 0 | /** ADD */ 1 | /** REMOVE */ 2 }[]
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface CollateralResponseMessage {
    MsgType: 'AZ'
    CollRespID: string
    CollAsgnID: string
    CollReqID?: string
    CollAsgnReason: /** INITIAL */ 0 | /** SCHEDULED */ 1 | /** TIME_WARNING */ 2 | /** MARGIN_DEFICIENCY */ 3 | /** MARGIN_EXCESS */ 4 | /** FORWARD_COLLATERAL_DEMAND */ 5 | /** EVENT_OF_DEFAULT */ 6 | /** ADVERSE_TAX_EVENT */ 7
    CollAsgnTransType?: /** NEW */ 0 | /** REPLACE */ 1 | /** CANCEL */ 2 | /** RELEASE */ 3 | /** REVERSE */ 4
    CollAsgnRespType: /** RECEIVED */ 0 | /** ACCEPTED */ 1 | /** DECLINED */ 2 | /** REJECTED */ 3
    CollAsgnRejectReason?: /** UNKNOWN_DEAL */ 0 | /** UNKNOWN_OR_INVALID_INSTRUMENT */ 1 | /** UNAUTHORIZED_TRANSACTION */ 2 | /** INSUFFICIENT_COLLATERAL */ 3 | /** INVALID_TYPE_OF_COLLATERAL */ 4 | /** EXCESSIVE_SUBSTITUTION */ 5 | /** OTHER */ 99
    TransactTime: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: { CollAction?: /** RETAIN */ 0 | /** ADD */ 1 | /** REMOVE */ 2 }[]
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface CollateralReportMessage {
    MsgType: 'BA'
    CollRptID: string
    CollInquiryID?: string
    CollStatus: /** UNASSIGNED */ 0 | /** PARTIALLY_ASSIGNED */ 1 | /** ASSIGNMENT_PROPOSED */ 2 | /** ASSIGNED */ 3 | /** CHALLENGED */ 4
    TotNumReports?: number
    LastRptRequested?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    NoMiscFees?: { MiscFeeAmt?: string, MiscFeeCurr?: string, MiscFeeType?: /** REGULATORY */ '1' | /** TAX */ '2' | /** LOCAL_COMMISSION */ '3' | /** EXCHANGE_FEES */ '4' | /** STAMP */ '5' | /** LEVY */ '6' | /** OTHER */ '7' | /** MARKUP */ '8' | /** CONSUMPTION_TAX */ '9' | /** PER_TRANSACTION */ '10' | /** CONVERSION */ '11' | /** AGENT */ '12', MiscFeeBasis?: /** ABSOLUTE */ 0 | /** PER_UNIT */ 1 | /** PERCENTAGE */ 2 }[]
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface CollateralInquiryMessage {
    MsgType: 'BB'
    CollInquiryID?: string
    NoCollInquiryQualifier?: { CollInquiryQualifier?: /** TRADEDATE */ 0 | /** GC_INSTRUMENT */ 1 | /** COLLATERALINSTRUMENT */ 2 | /** SUBSTITUTION_ELIGIBLE */ 3 | /** NOT_ASSIGNED */ 4 | /** PARTIALLY_ASSIGNED */ 5 | /** FULLY_ASSIGNED */ 6 | /** OUTSTANDING_TRADES */ 7 }[]
    SubscriptionRequestType?: /** SNAPSHOT */ '0' | /** SNAPSHOT_PLUS_UPDATES */ '1' | /** DISABLE_PREVIOUS_SNAPSHOT_PLUS_UPDATE_REQUEST */ '2'
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: /** BUY */ '1' | /** SELL */ '2' | /** BUY_MINUS */ '3' | /** SELL_PLUS */ '4' | /** SELL_SHORT */ '5' | /** SELL_SHORT_EXEMPT */ '6' | /** UNDISCLOSED */ '7' | /** CROSS */ '8' | /** CROSS_SHORT */ '9' | /** CROSS_SHORT_EXEMPT */ 'A' | /** AS_DEFINED */ 'B' | /** OPPOSITE */ 'C' | /** SUBSCRIBE */ 'D' | /** REDEEM */ 'E' | /** LEND */ 'F' | /** BORROW */ 'G'
    Price?: number
    PriceType?: /** PERCENTAGE */ 1 | /** PER_UNIT */ 2 | /** FIXED_AMOUNT */ 3 | /** DISCOUNT */ 4 | /** PREMIUM */ 5 | /** SPREAD */ 6 | /** TED_PRICE */ 7 | /** TED_YIELD */ 8 | /** YIELD */ 9 | /** FIXED_CABINET_TRADE_PRICE */ 10 | /** VARIABLE_CABINET_TRADE_PRICE */ 11
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  interface NetworkStatusRequestMessage {
    MsgType: 'BC'
    NetworkRequestType: /** SNAPSHOT */ 1 | /** SUBSCRIBE */ 2 | /** STOP_SUBSCRIBING */ 4 | /** LEVEL_OF_DETAIL */ 8
    NetworkRequestID: string
    NoCompIDs?: { RefCompID?: string, RefSubID?: string, LocationID?: string, DeskID?: string }[]
  }

  interface NetworkStatusResponseMessage {
    MsgType: 'BD'
    NetworkStatusResponseType: /** FULL */ 1 | /** INCREMENTAL_UPDATE */ 2
    NetworkRequestID?: string
    NetworkResponseID?: string
    LastNetworkResponseID?: string
    NoCompIDs: { RefCompID?: string, RefSubID?: string, LocationID?: string, DeskID?: string, StatusValue?: /** CONNECTED */ 1 | /** NOT_CONNECTED_DOWN_EXPECTED_UP */ 2 | /** NOT_CONNECTED_DOWN_EXPECTED_DOWN */ 3 | /** IN_PROCESS */ 4, StatusText?: string }[]
  }

  interface CollateralInquiryAckMessage {
    MsgType: 'BG'
    CollInquiryID: string
    CollInquiryStatus: /** ACCEPTED */ 0 | /** ACCEPTED_WITH_WARNINGS */ 1 | /** COMPLETED */ 2 | /** COMPLETED_WITH_WARNINGS */ 3 | /** REJECTED */ 4
    CollInquiryResult?: /** SUCCESSFUL */ 0 | /** INVALID_OR_UNKNOWN_INSTRUMENT */ 1 | /** INVALID_OR_UNKNOWN_COLLATERAL_TYPE */ 2 | /** INVALID_PARTIES */ 3 | /** INVALID_TRANSPORT_TYPE_REQUESTED */ 4 | /** INVALID_DESTINATION_REQUESTED */ 5 | /** NO_COLLATERAL_FOUND_FOR_THE_TRADE_SPECIFIED */ 6 | /** NO_COLLATERAL_FOUND_FOR_THE_ORDER_SPECIFIED */ 7 | /** COLLATERAL_INQUIRY_TYPE_NOT_SUPPORTED */ 8 | /** UNAUTHORIZED_FOR_COLLATERAL_INQUIRY */ 9 | /** OTHER */ 99
    NoCollInquiryQualifier?: { CollInquiryQualifier?: /** TRADEDATE */ 0 | /** GC_INSTRUMENT */ 1 | /** COLLATERALINSTRUMENT */ 2 | /** SUBSTITUTION_ELIGIBLE */ 3 | /** NOT_ASSIGNED */ 4 | /** PARTIALLY_ASSIGNED */ 5 | /** FULLY_ASSIGNED */ 6 | /** OUTSTANDING_TRADES */ 7 }[]
    TotNumReports?: number
    Account?: string
    AccountType?: /** ACCOUNT_IS_CARRIED_ON_CUSTOMER_SIDE_OF_BOOKS */ 1 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS */ 2 | /** HOUSE_TRADER */ 3 | /** FLOOR_TRADER */ 4 | /** ACCOUNT_IS_CARRIED_ON_NON_CUSTOMER_SIDE_OF_BOOKS_AND_IS_CROSS_MARGINED */ 6 | /** ACCOUNT_IS_HOUSE_TRADER_AND_IS_CROSS_MARGINED */ 7 | /** JOINT_BACKOFFICE_ACCOUNT */ 8
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: { ExecID?: string }[]
    NoTrades?: { TradeReportID?: string, SecondaryTradeReportID?: string }[]
    SettlDate?: string
    Quantity?: number
    QtyType?: /** UNITS */ 0 | /** CONTRACTS */ 1
    Currency?: string
    NoLegs?: {}[]
    NoUnderlyings?: {}[]
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    ResponseTransportType?: /** INBAND */ 0 | /** OUT_OF_BAND */ 1
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface Trailer {
    SignatureLength?: number
    Signature?: string
    CheckSum: string
  }

  export type Messages =
    | HeartbeatMessage
    | LogonMessage
    | TestRequestMessage
    | ResendRequestMessage
    | RejectMessage
    | SequenceResetMessage
    | LogoutMessage
    | BusinessMessageRejectMessage
    | UserRequestMessage
    | UserResponseMessage
    | AdvertisementMessage
    | IndicationOfInterestMessage
    | NewsMessage
    | EmailMessage
    | QuoteRequestMessage
    | QuoteResponseMessage
    | QuoteRequestRejectMessage
    | RFQRequestMessage
    | QuoteMessage
    | QuoteCancelMessage
    | QuoteStatusRequestMessage
    | QuoteStatusReportMessage
    | MassQuoteMessage
    | MassQuoteAcknowledgementMessage
    | MarketDataRequestMessage
    | MarketDataSnapshotFullRefreshMessage
    | MarketDataIncrementalRefreshMessage
    | MarketDataRequestRejectMessage
    | SecurityDefinitionRequestMessage
    | SecurityDefinitionMessage
    | SecurityTypeRequestMessage
    | SecurityTypesMessage
    | SecurityListRequestMessage
    | SecurityListMessage
    | DerivativeSecurityListRequestMessage
    | DerivativeSecurityListMessage
    | SecurityStatusRequestMessage
    | SecurityStatusMessage
    | TradingSessionStatusRequestMessage
    | TradingSessionStatusMessage
    | NewOrderSingleMessage
    | ExecutionReportMessage
    | DontKnowTradeMessage
    | OrderCancelReplaceRequestMessage
    | OrderCancelRequestMessage
    | OrderCancelRejectMessage
    | OrderStatusRequestMessage
    | OrderMassCancelRequestMessage
    | OrderMassCancelReportMessage
    | OrderMassStatusRequestMessage
    | NewOrderCrossMessage
    | CrossOrderCancelReplaceRequestMessage
    | CrossOrderCancelRequestMessage
    | NewOrderMultilegMessage
    | MultilegOrderCancelReplaceRequestMessage
    | BidRequestMessage
    | BidResponseMessage
    | NewOrderListMessage
    | ListStrikePriceMessage
    | ListStatusMessage
    | ListExecuteMessage
    | ListCancelRequestMessage
    | ListStatusRequestMessage
    | AllocationInstructionMessage
    | AllocationInstructionAckMessage
    | AllocationReportMessage
    | AllocationReportAckMessage
    | ConfirmationMessage
    | ConfirmationAckMessage
    | ConfirmationRequestMessage
    | SettlementInstructionsMessage
    | SettlementInstructionRequestMessage
    | TradeCaptureReportRequestMessage
    | TradeCaptureReportRequestAckMessage
    | TradeCaptureReportMessage
    | TradeCaptureReportAckMessage
    | RegistrationInstructionsMessage
    | RegistrationInstructionsResponseMessage
    | PositionMaintenanceRequestMessage
    | PositionMaintenanceReportMessage
    | RequestForPositionsMessage
    | RequestForPositionsAckMessage
    | PositionReportMessage
    | AssignmentReportMessage
    | CollateralRequestMessage
    | CollateralAssignmentMessage
    | CollateralResponseMessage
    | CollateralReportMessage
    | CollateralInquiryMessage
    | NetworkStatusRequestMessage
    | NetworkStatusResponseMessage
    | CollateralInquiryAckMessage
}

export interface HeadersByVersion {
  'FIX.4.0': FIX40.Header
  'FIX.4.1': FIX41.Header
  'FIX.4.2': FIX42.Header
  'FIX.4.3': FIX43.Header
  'FIX.4.4': FIX44.Header
}

export interface MessagesByVersion {
  'FIX.4.0': FIX40.Messages
  'FIX.4.1': FIX41.Messages
  'FIX.4.2': FIX42.Messages
  'FIX.4.3': FIX43.Messages
  'FIX.4.4': FIX44.Messages
}

export interface TrailersByVersion {
  'FIX.4.0': FIX40.Trailer
  'FIX.4.1': FIX41.Trailer
  'FIX.4.2': FIX42.Trailer
  'FIX.4.3': FIX43.Trailer
  'FIX.4.4': FIX44.Trailer
}
