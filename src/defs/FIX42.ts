export namespace FIX40 {
  export interface Header {
    BeginString: 'FIX.4.0'
    BodyLength: number
    MsgType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S'
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
    PossDupFlag?: 'Y' | 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
  }

  export interface HeartbeatMessage extends Header {
    MsgType: '0'
    TestReqID?: string
  }

  export interface LogonMessage extends Header {
    MsgType: 'A'
    EncryptMethod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
  }

  export interface TestRequestMessage extends Header {
    MsgType: '1'
    TestReqID: string
  }

  export interface ResendRequestMessage extends Header {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  export interface RejectMessage extends Header {
    MsgType: '3'
    RefSeqNum: number
    Text?: string
  }

  export interface SequenceResetMessage extends Header {
    MsgType: '4'
    GapFillFlag?: 'Y' | 'N'
    NewSeqNo: number
  }

  export interface LogoutMessage extends Header {
    MsgType: '5'
    Text?: string
  }

  export interface AdvertisementMessage extends Header {
    MsgType: '7'
    AdvId: number
    AdvTransType: 'N' | 'C' | 'R'
    AdvRefID?: number
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    AdvSide: 'B' | 'S' | 'X' | 'T'
    Shares: number
    Price?: number
    Currency?: string
    TransactTime?: string
    Text?: string
  }

  export interface IndicationofInterestMessage extends Header {
    MsgType: '6'
    IOIID: number
    IOITransType: 'N' | 'C' | 'R'
    IOIRefID?: number
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: 'L' | 'M' | 'H'
    IOIOthSvc?: string
    IOINaturalFlag?: 'Y' | 'N'
    IOIQualifier?: 'X' | 'O' | 'M' | 'P' | 'V' | 'Q' | 'C' | 'S' | 'I' | 'W' | 'A' | 'L' | 'T'
    Text?: string
  }

  export interface NewsMessage extends Header {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: '0' | '1' | '2'
    RelatdSym?: string
    LinesOfText: number
    RawDataLength?: number
    RawData?: string
  }

  export interface EmailMessage extends Header {
    MsgType: 'C'
    EmailType: '0' | '1' | '2'
    OrigTime?: string
    RelatdSym?: string
    OrderID?: string
    ClOrdID?: string
    LinesOfText: number
    RawDataLength?: number
    RawData?: string
  }

  export interface QuoteRequestMessage extends Header {
    MsgType: 'R'
    QuoteReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side?: '1' | '2' | '3' | '4' | '5' | '6'
    OrderQty?: number
  }

  export interface QuoteMessage extends Header {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    BidPx: number
    OfferPx?: number
    BidSize?: number
    OfferSize?: number
    ValidUntilTime?: string
  }

  export interface NewOrderSingleMessage extends Header {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: '0' | '4'
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    LocateReqd?: 'Y' | 'N'
    OrderQty: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    IOIID?: number
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'D' | 'C' | 'I' | 'J' | 'K' | 'U' | 'Y' | 'M' | 'N' | 'W'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
  }

  export interface ExecutionReportMessage extends Header {
    MsgType: '8'
    OrderID: string
    ClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    ExecID: number
    ExecTransType: '0' | '1' | '2' | '3'
    ExecRefID?: number
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    OrdRejReason?: '0' | '1' | '2' | '3' | '4'
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    OrderQty: number
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    ExecInst?: string
    Rule80A?: 'A' | 'D' | 'C' | 'I' | 'J' | 'K' | 'U' | 'Y' | 'M' | 'N' | 'W'
    LastShares: number
    LastPx: number
    LastMkt?: string
    LastCapacity?: '1' | '2' | '3' | '4'
    CumQty: number
    AvgPx: number
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: 'Y' | 'N'
    Commission?: number
    CommType?: '1' | '2' | '3'
    NoMiscFees?: number
    NetMoney?: number
    SettlCurrAmt?: number
    SettlCurrency?: string
    Text?: string
  }

  export interface DontKnowTradeMessage extends Header {
    MsgType: 'Q'
    OrderID?: string
    ExecID?: number
    DKReason: 'A' | 'B' | 'C' | 'D' | 'E' | 'Z'
    Symbol: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    OrderQty: number
    LastShares: number
    LastPx: number
    Text?: string
  }

  export interface OrderCancelReplaceRequestMessage extends Header {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: '0' | '4'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    OrderQty: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'D' | 'C' | 'I' | 'J' | 'K' | 'U' | 'Y' | 'M' | 'N' | 'W'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
  }

  export interface OrderCancelRequestMessage extends Header {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    ListID?: string
    CxlType: 'P' | 'F'
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    OrderQty: number
    Text?: string
  }

  export interface OrderCancelRejectMessage extends Header {
    MsgType: '9'
    OrderID: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    CxlRejReason?: '0' | '1'
    Text?: string
  }

  export interface OrderStatusRequestMessage extends Header {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6'
  }

  export interface AllocationMessage extends Header {
    MsgType: 'J'
    AllocID: number
    AllocTransType: '0' | '1' | '2'
    RefAllocID?: number
    NoOrders: number
    NoExecs?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    Shares: number
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    NetMoney?: number
    NoMiscFees?: number
    SettlCurrAmt?: number
    SettlCurrency?: string
    OpenClose?: string
    Text?: string
    NoAllocs: number
  }

  export interface AllocationACKMessage extends Header {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: number
    TradeDate: string
    TransactTime?: string
    AllocStatus: '0' | '1' | '2' | '3'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
  }

  export interface NewOrderListMessage extends Header {
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
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: '0' | '4'
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5'
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6'
    LocateReqd?: 'Y' | 'N'
    OrderQty: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'D' | 'C' | 'I' | 'J' | 'K' | 'U' | 'Y' | 'M' | 'N' | 'W'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
  }

  export interface ListStatusMessage extends Header {
    MsgType: 'N'
    ListID: string
    WaveNo?: string
    NoRpts: number
    RptSeq: number
    NoOrders: number
  }

  export interface ListExecuteMessage extends Header {
    MsgType: 'L'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface ListCancelRequestMessage extends Header {
    MsgType: 'K'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface ListStatusRequestMessage extends Header {
    MsgType: 'M'
    ListID: string
    WaveNo?: string
    Text?: string
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
    MsgType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T'
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
    PossDupFlag?: 'Y' | 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
  }

  export interface HeartbeatMessage extends Header {
    MsgType: '0'
    TestReqID?: string
  }

  export interface LogonMessage extends Header {
    MsgType: 'A'
    EncryptMethod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: 'Y' | 'N'
  }

  export interface TestRequestMessage extends Header {
    MsgType: '1'
    TestReqID: string
  }

  export interface ResendRequestMessage extends Header {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  export interface RejectMessage extends Header {
    MsgType: '3'
    RefSeqNum: number
    Text?: string
  }

  export interface SequenceResetMessage extends Header {
    MsgType: '4'
    GapFillFlag?: 'Y' | 'N'
    NewSeqNo: number
  }

  export interface LogoutMessage extends Header {
    MsgType: '5'
    Text?: string
  }

  export interface AdvertisementMessage extends Header {
    MsgType: '7'
    AdvId: string
    AdvTransType: 'N' | 'C' | 'R'
    AdvRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    AdvSide: 'B' | 'S' | 'X' | 'T'
    Shares: number
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    URLLink?: string
    LastMkt?: string
  }

  export interface IndicationofInterestMessage extends Header {
    MsgType: '6'
    IOIID: string
    IOITransType: 'N' | 'C' | 'R'
    IOIRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: 'L' | 'M' | 'H'
    IOIOthSvc?: string
    IOINaturalFlag?: 'Y' | 'N'
    NoIOIQualifiers?: number
    Text?: string
    TransactTime?: string
    URLLink?: string
  }

  export interface NewsMessage extends Header {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: '0' | '1' | '2'
    Headline: string
    NoRelatedSym?: number
    LinesOfText: number
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  export interface EmailMessage extends Header {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: '0' | '1' | '2'
    OrigTime?: string
    Subject: string
    NoRelatedSym?: number
    OrderID?: string
    ClOrdID?: string
    LinesOfText: number
    RawDataLength?: number
    RawData?: string
  }

  export interface QuoteRequestMessage extends Header {
    MsgType: 'R'
    QuoteReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrderQty?: number
    FutSettDate?: string
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    FutSettDate2?: string
    OrderQty2?: number
  }

  export interface QuoteMessage extends Header {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    FutSettDate2?: string
    OrderQty2?: number
  }

  export interface NewOrderSingleMessage extends Header {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    LocateReqd?: 'Y' | 'N'
    OrderQty?: number
    CashOrderQty?: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: '0' | '1'
    CustomerOrFirm?: '0' | '1'
    MaxShow?: number
    PegDifference?: number
  }

  export interface ExecutionReportMessage extends Header {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    ExecID: string
    ExecTransType: '0' | '1' | '2' | '3'
    ExecRefID?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    OrdRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrderQty: number
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    ExecInst?: string
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    LastShares: number
    LastPx: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    LastCapacity?: '1' | '2' | '3' | '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: 'Y' | 'N'
    Commission?: number
    CommType?: '1' | '2' | '3'
    SettlCurrAmt?: number
    SettlCurrency?: string
    Text?: string
  }

  export interface DontKnowTradeMessage extends Header {
    MsgType: 'Q'
    OrderID?: string
    ExecID?: string
    DKReason: 'A' | 'B' | 'C' | 'D' | 'E' | 'Z'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrderQty?: number
    CashOrderQty?: number
    LastShares?: number
    LastPx?: number
    Text?: string
  }

  export interface OrderCancelReplaceRequestMessage extends Header {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrderQty?: number
    CashOrderQty?: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: '0' | '1'
    CustomerOrFirm?: '0' | '1'
    MaxShow?: number
    LocateReqd?: 'Y' | 'N'
  }

  export interface OrderCancelRequestMessage extends Header {
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
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrderQty?: number
    CashOrderQty?: number
    Text?: string
  }

  export interface OrderCancelRejectMessage extends Header {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID: string
    OrigClOrdID: string
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    CxlRejReason?: '0' | '1'
    Text?: string
  }

  export interface OrderStatusRequestMessage extends Header {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
  }

  export interface AllocationMessage extends Header {
    MsgType: 'J'
    AllocID: string
    AllocTransType: '0' | '1' | '2' | '3' | '4'
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: '0' | '1'
    NoOrders: number
    NoExecs?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    NetMoney?: number
    OpenClose?: string
    Text?: string
    NumDaysInterest?: number
    AccruedInterestRate?: number
    NoAllocs: number
  }

  export interface AllocationACKMessage extends Header {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: '0' | '1' | '2' | '3'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
  }

  export interface SettlementInstructionsMessage extends Header {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: 'N' | 'C' | 'R'
    SettlInstMode: '0' | '1' | '2' | '3'
    SettlInstSource: '1' | '2'
    AllocAccount: string
    SettlLocation?: 'CED' | 'DTC' | 'EUR' | 'FED' | 'PNY' | 'PTC' | 'ISO'
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    EffectiveTime?: string
    TransactTime: string
    ClientID?: string
    ExecBroker?: string
    StandInstDbType?: '0' | '1' | '2' | '3'
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

  export interface NewOrderListMessage extends Header {
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
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    SecurityType?: 'BA' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
    StrikePrice?: number
    OptAttribute?: string
    SecurityExchange?: string
    Issuer?: string
    SecurityDesc?: string
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    LocateReqd?: 'Y' | 'N'
    OrderQty: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    ExpireTime?: string
    Commission?: number
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: string
    CoveredOrUncovered?: '0' | '1'
    CustomerOrFirm?: '0' | '1'
    MaxShow?: number
  }

  export interface ListStatusMessage extends Header {
    MsgType: 'N'
    ListID: string
    WaveNo?: string
    NoRpts: number
    RptSeq: number
    NoOrders: number
  }

  export interface ListExecuteMessage extends Header {
    MsgType: 'L'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface ListCancelRequestMessage extends Header {
    MsgType: 'K'
    ListID: string
    WaveNo?: string
    Text?: string
  }

  export interface ListStatusRequestMessage extends Header {
    MsgType: 'M'
    ListID: string
    WaveNo?: string
    Text?: string
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
    MsgType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
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
    PossDupFlag?: 'Y' | 'N'
    PossResend?: string
    SendingTime: string
    OrigSendingTime?: string
    XmlDataLen?: number
    XmlData?: string
    MessageEncoding?: string
    LastMsgSeqNumProcessed?: number
    OnBehalfOfSendingTime?: string
  }

  export interface HeartbeatMessage extends Header {
    MsgType: '0'
    TestReqID?: string
  }

  export interface LogonMessage extends Header {
    MsgType: 'A'
    EncryptMethod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    HeartBtInt: number
    RawDataLength?: number
    RawData?: string
    ResetSeqNumFlag?: 'Y' | 'N'
    MaxMessageSize?: number
    NoMsgTypes?: number
  }

  export interface TestRequestMessage extends Header {
    MsgType: '1'
    TestReqID: string
  }

  export interface ResendRequestMessage extends Header {
    MsgType: '2'
    BeginSeqNo: number
    EndSeqNo: number
  }

  export interface RejectMessage extends Header {
    MsgType: '3'
    RefSeqNum: number
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface SequenceResetMessage extends Header {
    MsgType: '4'
    GapFillFlag?: 'Y' | 'N'
    NewSeqNo: number
  }

  export interface LogoutMessage extends Header {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface AdvertisementMessage extends Header {
    MsgType: '7'
    AdvId: string
    AdvTransType: 'N' | 'C' | 'R'
    AdvRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    AdvSide: 'B' | 'S' | 'X' | 'T'
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

  export interface IndicationofInterestMessage extends Header {
    MsgType: '6'
    IOIID: string
    IOITransType: 'N' | 'C' | 'R'
    IOIRefID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    IOIShares: string
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: 'L' | 'M' | 'H'
    IOINaturalFlag?: 'Y' | 'N'
    NoIOIQualifiers?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: number
    SpreadToBenchmark?: number
    Benchmark?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  }

  export interface NewsMessage extends Header {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: '0' | '1' | '2'
    Headline: string
    EncodedHeadlineLen?: number
    EncodedHeadline?: string
    NoRoutingIDs?: number
    NoRelatedSym?: number
    LinesOfText: number
    URLLink?: string
    RawDataLength?: number
    RawData?: string
  }

  export interface EmailMessage extends Header {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: '0' | '1' | '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: number
    EncodedSubject?: string
    NoRoutingIDs?: number
    NoRelatedSym?: number
    OrderID?: string
    ClOrdID?: string
    LinesOfText: number
    RawDataLength?: number
    RawData?: string
  }

  export interface QuoteRequestMessage extends Header {
    MsgType: 'R'
    QuoteReqID: string
    NoRelatedSym: number
  }

  export interface QuoteMessage extends Header {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteResponseLevel?: number
    TradingSessionID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'P'
    FutSettDate2?: string
    OrderQty2?: number
    Currency?: string
  }

  export interface MassQuoteMessage extends Header {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteResponseLevel?: number
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: number
  }

  export interface QuoteCancelMessage extends Header {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: number
    QuoteResponseLevel?: number
    TradingSessionID?: string
    NoQuoteEntries: number
  }

  export interface QuoteStatusRequestMessage extends Header {
    MsgType: 'a'
    QuoteID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    TradingSessionID?: string
  }

  export interface QuoteAcknowledgementMessage extends Header {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteAckStatus: number
    QuoteRejectReason?: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '9'
    QuoteResponseLevel?: number
    TradingSessionID?: string
    Text?: string
    NoQuoteSets?: number
  }

  export interface MarketDataRequestMessage extends Header {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: '0' | '1' | '2'
    MarketDepth: number
    MDUpdateType?: '0' | '1'
    AggregatedBook?: 'Y' | 'N'
    NoMDEntryTypes: number
    NoRelatedSym: number
  }

  export interface MarketDataSnapshotFullRefreshMessage extends Header {
    MsgType: 'W'
    MDReqID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    FinancialStatus?: '1'
    CorporateAction?: 'A' | 'B' | 'C' | 'D' | 'E'
    TotalVolumeTraded?: number
    NoMDEntries: number
  }

  export interface MarketDataIncrementalRefreshMessage extends Header {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: number
  }

  export interface MarketDataRequestRejectMessage extends Header {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface SecurityDefinitionRequestMessage extends Header {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: '0' | '1' | '2' | '3'
    Symbol?: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    NoRelatedSym?: number
  }

  export interface SecurityDefinitionMessage extends Header {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType?: '1' | '2' | '3' | '4' | '5' | '6'
    TotalNumSecurities: number
    Symbol?: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    NoRelatedSym?: number
  }

  export interface SecurityStatusRequestMessage extends Header {
    MsgType: 'e'
    SecurityStatusReqID: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    SubscriptionRequestType: '0' | '1' | '2'
    TradingSessionID?: string
  }

  export interface SecurityStatusMessage extends Header {
    MsgType: 'f'
    SecurityStatusReqID?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    UnsolicitedIndicator?: 'Y' | 'N'
    SecurityTradingStatus?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20'
    FinancialStatus?: '1'
    CorporateAction?: 'A' | 'B' | 'C' | 'D' | 'E'
    HaltReason?: 'I' | 'X' | 'P' | 'D' | 'E' | 'M'
    InViewOfCommon?: 'Y' | 'N'
    DueToRelated?: 'Y' | 'N'
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: '1' | '2' | '3'
  }

  export interface TradingSessionStatusRequestMessage extends Header {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    SubscriptionRequestType: '0' | '1' | '2'
  }

  export interface TradingSessionStatusMessage extends Header {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    UnsolicitedIndicator?: 'Y' | 'N'
    TradSesStatus: '1' | '2' | '3' | '4' | '5'
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

  export interface NewOrderSingleMessage extends Header {
    MsgType: 'D'
    ClOrdID: string
    ClientID?: string
    ExecBroker?: string
    Account?: string
    NoAllocs?: number
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: number
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    LocateReqd?: 'Y' | 'N'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'P'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: 'Y' | 'N'
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    Commission?: string
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: 'O' | 'C'
    CoveredOrUncovered?: '0' | '1'
    CustomerOrFirm?: '0' | '1'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    ClearingFirm?: string
    ClearingAccount?: string
  }

  export interface ExecutionReportMessage extends Header {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClientID?: string
    ExecBroker?: string
    NoContraBrokers?: number
    ListID?: string
    ExecID: string
    ExecTransType: '0' | '1' | '2' | '3'
    ExecRefID?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    OrdRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    ExecRestatementReason?: '0' | '1' | '2' | '3' | '4' | '5'
    Account?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    OrderQty?: number
    CashOrderQty?: number
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: 'Y' | 'N'
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: string
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    LastShares?: number
    LastPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradingSessionID?: string
    LastCapacity?: '1' | '2' | '3' | '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: '0' | '1' | '2'
    TradeDate?: string
    TransactTime?: string
    ReportToExch?: 'Y' | 'N'
    Commission?: string
    CommType?: '1' | '2' | '3'
    GrossTradeAmt?: string
    SettlCurrAmt?: string
    SettlCurrency?: string
    SettlCurrFxRate?: number
    SettlCurrFxRateCalc?: 'M' | 'D'
    HandlInst?: '1' | '2' | '3'
    MinQty?: number
    MaxFloor?: number
    OpenClose?: 'O' | 'C'
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

  export interface DontKnowTradeMessage extends Header {
    MsgType: 'Q'
    OrderID: string
    ExecID: string
    DKReason: 'A' | 'B' | 'C' | 'D' | 'E' | 'Z'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    OrderQty?: number
    CashOrderQty?: number
    LastShares?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface OrderCancelReplaceRequestMessage extends Header {
    MsgType: 'G'
    OrderID?: string
    ClientID?: string
    ExecBroker?: string
    OrigClOrdID: string
    ClOrdID: string
    ListID?: string
    Account?: string
    NoAllocs?: number
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: number
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'P'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    ComplianceID?: string
    SolicitedFlag?: 'Y' | 'N'
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    Commission?: string
    CommType?: '1' | '2' | '3'
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: 'Y' | 'N'
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    OpenClose?: 'O' | 'C'
    CoveredOrUncovered?: '0' | '1'
    CustomerOrFirm?: '0' | '1'
    MaxShow?: number
    LocateReqd?: 'Y' | 'N'
    ClearingFirm?: string
    ClearingAccount?: string
  }

  export interface OrderCancelRequestMessage extends Header {
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
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    TransactTime: string
    OrderQty?: number
    CashOrderQty?: number
    ComplianceID?: string
    SolicitedFlag?: 'Y' | 'N'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface OrderCancelRejectMessage extends Header {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    ClOrdID: string
    OrigClOrdID: string
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    ClientID?: string
    ExecBroker?: string
    ListID?: string
    Account?: string
    TransactTime?: string
    CxlRejResponseTo: string
    CxlRejReason?: '0' | '1' | '2' | '3'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface OrderStatusRequestMessage extends Header {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    ClientID?: string
    Account?: string
    ExecBroker?: string
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  }

  export interface AllocationMessage extends Header {
    MsgType: 'J'
    AllocID: string
    AllocTransType: '0' | '1' | '2' | '3' | '4' | '5'
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: '0' | '1'
    NoOrders: number
    NoExecs?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    Symbol: string
    SymbolSfx?: string
    SecurityID?: string
    IDSource?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    MaturityMonthYear?: string
    MaturityDay?: string
    PutOrCall?: '0' | '1'
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
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    FutSettDate?: string
    GrossTradeAmt?: string
    NetMoney?: string
    OpenClose?: 'O' | 'C'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: number
    NoAllocs: number
  }

  export interface AllocationACKMessage extends Header {
    MsgType: 'P'
    ClientID?: string
    ExecBroker?: string
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: '0' | '1' | '2' | '3'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface SettlementInstructionsMessage extends Header {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: 'N' | 'C' | 'R'
    SettlInstRefID: string
    SettlInstMode: '0' | '1' | '2' | '3'
    SettlInstSource: '1' | '2'
    AllocAccount: string
    SettlLocation?: 'CED' | 'DTC' | 'EUR' | 'FED' | 'PNY' | 'PTC' | 'ISO'
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    TradingSessionID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SecurityType?: 'BA' | 'CB' | 'CD' | 'CMO' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'FHA' | 'FHL' | 'FN' | 'FOR' | 'FUT' | 'GN' | 'GOVT' | 'MF' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'MUNI' | 'NONE' | 'OPT' | 'PS' | 'RP' | 'RVRP' | 'SL' | 'TD' | 'USTB' | 'WAR' | 'ZOO'
    EffectiveTime?: string
    TransactTime: string
    ClientID?: string
    ExecBroker?: string
    StandInstDbType?: '0' | '1' | '2' | '3'
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

  export interface BidRequestMessage extends Header {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: 'N' | 'C'
    ListName?: string
    TotalNumSecurities: number
    BidType: number
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: number
    NoBidComponents?: number
    LiquidityIndType?: number
    WtAverageLiquidity?: number
    ExchangeForPhysical?: 'Y' | 'N'
    OutMainCntryUIndex?: string
    CrossPercent?: number
    ProgRptReqs?: number
    ProgPeriodInterval?: number
    IncTaxInd?: number
    ForexReq?: 'Y' | 'N'
    NumBidders?: number
    TradeDate?: string
    TradeType: string
    BasisPxType: string
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface BidResponseMessage extends Header {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: number
  }

  export interface NewOrderListMessage extends Header {
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
    NoOrders: number
  }

  export interface ListStrikePriceMessage extends Header {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    NoStrikes: number
  }

  export interface ListStatusMessage extends Header {
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
    NoOrders: number
  }

  export interface ListExecuteMessage extends Header {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface ListCancelRequestMessage extends Header {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface ListStatusRequestMessage extends Header {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
  }

  export interface BusinessMessageRejectMessage extends Header {
    MsgType: 'j'
    RefSeqNum?: number
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: '0' | '1' | '2' | '3' | '4' | '5'
    Text?: string
    EncodedTextLen?: number
    EncodedText?: string
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
    BodyLength: string
    MsgType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'AA' | 'AB' | 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: string
    SecureData?: string
    MsgSeqNum: string
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
    XmlDataLen?: string
    XmlData?: string
    MessageEncoding?: string
    LastMsgSeqNumProcessed?: string
    OnBehalfOfSendingTime?: string
    NoHops?: string
  }

  export interface HeartbeatMessage extends Header {
    MsgType: '0'
    TestReqID?: string
  }

  export interface LogonMessage extends Header {
    MsgType: 'A'
    EncryptMethod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    HeartBtInt: number
    RawDataLength?: string
    RawData?: string
    ResetSeqNumFlag?: string
    MaxMessageSize?: string
    NoMsgTypes?: string
    TestMessageIndicator?: string
    Username?: string
    Password?: string
  }

  export interface TestRequestMessage extends Header {
    MsgType: '1'
    TestReqID: string
  }

  export interface ResendRequestMessage extends Header {
    MsgType: '2'
    BeginSeqNo: string
    EndSeqNo: string
  }

  export interface RejectMessage extends Header {
    MsgType: '3'
    RefSeqNum: string
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface SequenceResetMessage extends Header {
    MsgType: '4'
    GapFillFlag?: string
    NewSeqNo: string
  }

  export interface LogoutMessage extends Header {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface BusinessMessageRejectMessage extends Header {
    MsgType: 'j'
    RefSeqNum?: string
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface AdvertisementMessage extends Header {
    MsgType: '7'
    AdvId: string
    AdvTransType: 'N' | 'C' | 'R'
    AdvRefID?: string
    AdvSide: 'B' | 'S' | 'X' | 'T'
    Quantity: number
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    URLLink?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  export interface IndicationOfInterestMessage extends Header {
    MsgType: '6'
    IOIID: string
    IOITransType: 'N' | 'C' | 'R'
    IOIRefID?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    IOIQty: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    Currency?: string
    ValidUntilTime?: string
    IOIQltyInd?: 'L' | 'M' | 'H'
    IOINaturalFlag?: string
    NoIOIQualifiers?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: string
    Benchmark?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  }

  export interface NewsMessage extends Header {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: '0' | '1' | '2'
    Headline: string
    EncodedHeadlineLen?: string
    EncodedHeadline?: string
    NoRoutingIDs?: string
    NoRelatedSym?: string
    LinesOfText: string
    URLLink?: string
    RawDataLength?: string
    RawData?: string
  }

  export interface EmailMessage extends Header {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: '0' | '1' | '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: string
    EncodedSubject?: string
    NoRoutingIDs?: string
    NoRelatedSym?: string
    OrderID?: string
    ClOrdID?: string
    LinesOfText: string
    RawDataLength?: string
    RawData?: string
  }

  export interface QuoteRequestMessage extends Header {
    MsgType: 'R'
    QuoteReqID: string
    RFQReqID?: string
    NoRelatedSym: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface QuoteRequestRejectMessage extends Header {
    MsgType: 'AG'
    QuoteReqID: string
    RFQReqID?: string
    QuoteRequestRejectReason: number
    NoRelatedSym: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface RFQRequestMessage extends Header {
    MsgType: 'AH'
    RFQReqID: string
    NoRelatedSym: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface QuoteMessage extends Header {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: '0' | '1' | '2'
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
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
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    FutSettDate2?: string
    OrderQty2?: number
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    Currency?: string
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: string
    CommType?: '1' | '2' | '3' | '4' | '5' | '6'
    Commission?: string
    CustOrderCapacity?: number
    ExDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface QuoteCancelMessage extends Header {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: number
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoQuoteEntries?: string
  }

  export interface QuoteStatusRequestMessage extends Header {
    MsgType: 'a'
    QuoteStatusReqID?: string
    QuoteID?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface QuoteStatusReportMessage extends Header {
    MsgType: 'AI'
    QuoteStatusReqID?: string
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: '0' | '1' | '2'
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    FutSettDate2?: string
    OrderQty2?: number
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    Currency?: string
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: string
    CommType?: '1' | '2' | '3' | '4' | '5' | '6'
    Commission?: string
    CustOrderCapacity?: number
    ExDestination?: string
    QuoteStatus?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  }

  export interface MassQuoteMessage extends Header {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: '0' | '1' | '2'
    QuoteResponseLevel?: number
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: string
  }

  export interface MassQuoteAcknowledgementMessage extends Header {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
    QuoteRejectReason?: number
    QuoteResponseLevel?: number
    QuoteType?: '0' | '1' | '2'
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Text?: string
    NoQuoteSets?: string
  }

  export interface MarketDataRequestMessage extends Header {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: '0' | '1' | '2'
    MarketDepth: number
    MDUpdateType?: '0' | '1'
    AggregatedBook?: string
    OpenCloseSettleFlag?: string
    Scope?: string
    MDImplicitDelete?: string
    NoMDEntryTypes: string
    NoRelatedSym: string
    NoTradingSessions?: string
  }

  export interface MarketDataSnapshotFullRefreshMessage extends Header {
    MsgType: 'W'
    MDReqID?: string
    FinancialStatus?: string
    CorporateAction?: string
    TotalVolumeTraded?: number
    TotalVolumeTradedDate?: string
    TotalVolumeTradedTime?: string
    NetChgPrevDay?: number
    NoMDEntries: string
  }

  export interface MarketDataIncrementalRefreshMessage extends Header {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: string
  }

  export interface MarketDataRequestRejectMessage extends Header {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface SecurityDefinitionRequestMessage extends Header {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: '0' | '1' | '2' | '3'
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoLegs?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityDefinitionMessage extends Header {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: '1' | '2' | '3' | '4' | '5' | '6'
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoLegs?: string
    RoundLot?: number
    MinTradeVol?: number
  }

  export interface SecurityTypeRequestMessage extends Header {
    MsgType: 'v'
    SecurityReqID: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  export interface SecurityTypesMessage extends Header {
    MsgType: 'w'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: '1' | '2' | '3' | '4' | '5' | '6'
    TotalNumSecurityTypes?: number
    NoSecurityTypes?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityListRequestMessage extends Header {
    MsgType: 'x'
    SecurityReqID: string
    SecurityListRequestType: '0' | '1' | '2' | '3' | '4'
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityListMessage extends Header {
    MsgType: 'y'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: '0' | '1' | '2' | '3' | '4' | '5'
    TotalNumSecurities?: number
    NoRelatedSym?: string
  }

  export interface DerivativeSecurityListRequestMessage extends Header {
    MsgType: 'z'
    SecurityReqID: string
    SecurityListRequestType: '0' | '1' | '2' | '3' | '4'
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface DerivativeSecurityListMessage extends Header {
    MsgType: 'AA'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: '0' | '1' | '2' | '3' | '4' | '5'
    TotalNumSecurities?: number
    NoRelatedSym?: string
  }

  export interface SecurityStatusRequestMessage extends Header {
    MsgType: 'e'
    SecurityStatusReqID: string
    Currency?: string
    SubscriptionRequestType: '0' | '1' | '2'
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  export interface SecurityStatusMessage extends Header {
    MsgType: 'f'
    SecurityStatusReqID?: string
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    UnsolicitedIndicator?: string
    SecurityTradingStatus?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23'
    FinancialStatus?: string
    CorporateAction?: string
    HaltReason?: 'I' | 'X' | 'P' | 'D' | 'E' | 'M'
    InViewOfCommon?: string
    DueToRelated?: string
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: '1' | '2' | '3'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface TradingSessionStatusRequestMessage extends Header {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    SubscriptionRequestType: '0' | '1' | '2'
  }

  export interface TradingSessionStatusMessage extends Header {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradingSessionSubID?: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    UnsolicitedIndicator?: string
    TradSesStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    TradSesStatusRejReason?: '1'
    TradSesStartTime?: string
    TradSesOpenTime?: string
    TradSesPreCloseTime?: string
    TradSesCloseTime?: string
    TradSesEndTime?: string
    TotalVolumeTraded?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface NewOrderSingleMessage extends Header {
    MsgType: 'D'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    LocateReqd?: string
    TransactTime: string
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: number
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: string
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  export interface ExecutionReportMessage extends Header {
    MsgType: '8'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    SecondaryExecID?: string
    ClOrdID?: string
    OrigClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    NoContraBrokers?: string
    ListID?: string
    CrossID?: string
    OrigCrossID?: string
    CrossType?: '1' | '2' | '3' | '4'
    ExecID: string
    ExecRefID?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    WorkingIndicator?: string
    OrdRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
    ExecRestatementReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: string
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: number
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    LastQty?: number
    UnderlyingLastQty?: number
    LastPx?: number
    UnderlyingLastPx?: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    LastCapacity?: '1' | '2' | '3' | '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: '0' | '1' | '2'
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
    HandlInst?: '1' | '2' | '3'
    MinQty?: number
    MaxFloor?: number
    PositionEffect?: string
    MaxShow?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    LastForwardPoints2?: number
    MultiLegReportingType?: string
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    TransBkdTime?: string
    ExecValuationPoint?: string
    ExecPriceType?: string
    ExecPriceAdjustment?: number
    PriorityIndicator?: '0' | '1'
    PriceImprovement?: number
    NoContAmts?: string
    NoLegs?: string
  }

  export interface DontKnowTradeMessage extends Header {
    MsgType: 'Q'
    OrderID: string
    ExecID: string
    DKReason: 'A' | 'B' | 'C' | 'D' | 'E' | 'Z'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    LastQty?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderCancelReplaceRequestMessage extends Header {
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
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    TransactTime: string
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    ComplianceID?: string
    SolicitedFlag?: string
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: number
    Rule80A?: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'R' | 'S' | 'T' | 'U' | 'W' | 'X' | 'Y' | 'Z'
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    FutSettDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: string
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    LocateReqd?: string
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  export interface OrderCancelRequestMessage extends Header {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    TransactTime: string
    ComplianceID?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderCancelRejectMessage extends Header {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    ClOrdID: string
    ClOrdLinkID?: string
    OrigClOrdID: string
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    WorkingIndicator?: string
    OrigOrdModTime?: string
    ListID?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradeOriginationDate?: string
    TransactTime?: string
    CxlRejResponseTo: '1' | '2'
    CxlRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderStatusRequestMessage extends Header {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    Account?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
  }

  export interface OrderMassCancelRequestMessage extends Header {
    MsgType: 'q'
    ClOrdID: string
    SecondaryClOrdID?: string
    MassCancelRequestType: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    TransactTime: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderMassCancelReportMessage extends Header {
    MsgType: 'r'
    ClOrdID?: string
    SecondaryClOrdID?: string
    OrderID: string
    SecondaryOrderID?: string
    MassCancelRequestType: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    MassCancelResponse: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    MassCancelRejectReason?: string
    TotalAffectedOrders?: number
    NoAffectedOrders?: number
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    TransactTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderMassStatusRequestMessage extends Header {
    MsgType: 'AF'
    MassStatusReqID: string
    MassStatusReqType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Account?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
  }

  export interface NewOrderCrossMessage extends Header {
    MsgType: 's'
    CrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: number
    NoSides: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  export interface CrossOrderCancelReplaceRequestMessage extends Header {
    MsgType: 't'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: number
    NoSides: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    AccruedInterestRate?: string
    AccruedInterestAmt?: string
    NetMoney?: string
  }

  export interface CrossOrderCancelRequestMessage extends Header {
    MsgType: 'u'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: number
    NoSides: string
    TransactTime: string
  }

  export interface NewOrderMultilegMessage extends Header {
    MsgType: 'AB'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    PrevClosePx?: number
    NoLegs?: string
    LocateReqd?: string
    TransactTime: string
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: number
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    PositionEffect?: string
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: number
    NetMoney?: string
  }

  export interface MultilegOrderCancelReplaceRequestMessage extends Header {
    MsgType: 'AC'
    OrderID?: string
    OrigClOrdID: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    OrigOrdModTime?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: string
    BookingUnit?: string
    PreallocMethod?: string
    NoAllocs?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: string
    HandlInst: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    PrevClosePx?: number
    NoLegs?: string
    LocateReqd?: string
    TransactTime: string
    QuantityType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: number
    ForexReq?: string
    SettlCurrency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    PositionEffect?: string
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    PegDifference?: number
    DiscretionInst?: '0' | '1' | '2' | '3' | '4' | '5'
    DiscretionOffset?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: number
    NetMoney?: string
  }

  export interface BidRequestMessage extends Header {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: 'N' | 'C'
    ListName?: string
    TotalNumSecurities: number
    BidType: '1' | '2' | '3'
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: string
    NoBidComponents?: string
    LiquidityIndType?: '1' | '2' | '3' | '4'
    WtAverageLiquidity?: string
    ExchangeForPhysical?: string
    OutMainCntryUIndex?: string
    CrossPercent?: string
    ProgRptReqs?: '1' | '2' | '3'
    ProgPeriodInterval?: number
    IncTaxInd?: '1' | '2'
    ForexReq?: string
    NumBidders?: number
    TradeDate?: string
    TradeType: string
    BasisPxType: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'Z'
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface BidResponseMessage extends Header {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: string
  }

  export interface NewOrderListMessage extends Header {
    MsgType: 'E'
    ListID: string
    BidID?: string
    ClientBidID?: string
    ProgRptReqs?: '1' | '2' | '3'
    BidType: '1' | '2' | '3'
    ProgPeriodInterval?: number
    CancellationRights?: string
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    ListExecInstType?: '1' | '2' | '3' | '4' | '5'
    ListExecInst?: string
    EncodedListExecInstLen?: string
    EncodedListExecInst?: string
    TotNoOrders: number
    NoOrders: string
  }

  export interface ListStrikePriceMessage extends Header {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    NoStrikes: string
  }

  export interface ListExecuteMessage extends Header {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ListCancelRequestMessage extends Header {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    TradeOriginationDate?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ListStatusRequestMessage extends Header {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ListStatusMessage extends Header {
    MsgType: 'N'
    ListID: string
    ListStatusType: '1' | '2' | '3' | '4' | '5' | '6'
    NoRpts: string
    ListOrderStatus: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    RptSeq: number
    ListStatusText?: string
    EncodedListStatusTextLen?: string
    EncodedListStatusText?: string
    TransactTime?: string
    TotNoOrders: number
    NoOrders: string
  }

  export interface AllocationMessage extends Header {
    MsgType: 'J'
    AllocID: string
    AllocTransType: '0' | '1' | '2' | '3' | '4' | '5'
    AllocType: '1' | '2' | '3' | '4' | '5' | '6'
    RefAllocID?: string
    AllocLinkID?: string
    AllocLinkType?: '0' | '1'
    BookingRefID?: string
    NoOrders: string
    NoExecs?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    Quantity: number
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    AvgPx: number
    Currency?: string
    AvgPrxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NumDaysInterest?: number
    AccruedInterestRate?: string
    TotalAccruedInterestAmt?: string
    LegalConfirm?: string
    NoAllocs: string
  }

  export interface AllocationACKMessage extends Header {
    MsgType: 'P'
    AllocID: string
    TradeDate: string
    TransactTime?: string
    AllocStatus: '0' | '1' | '2' | '3'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    LegalConfirm?: string
  }

  export interface SettlementInstructionsMessage extends Header {
    MsgType: 'T'
    SettlInstID: string
    SettlInstTransType: 'N' | 'C' | 'R'
    SettlInstRefID: string
    SettlInstMode: '0' | '1' | '2' | '3' | '4'
    SettlInstSource: '1' | '2' | '3'
    AllocAccount: string
    IndividualAllocID?: string
    ClOrdID?: string
    TradeDate?: string
    AllocID?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    SecurityType?: 'CORP' | 'CPP' | 'CB' | 'DUAL' | 'XLINKD' | 'STRUCT' | 'YANK' | 'FOR' | 'CS' | 'PS' | 'BRADY' | 'TBOND' | 'TINT' | 'TIPS' | 'TCAL' | 'TPRN' | 'UST' | 'USTB' | 'TERM' | 'RVLV' | 'RVLVTRM' | 'BRIDGE' | 'LOFC' | 'SWING' | 'DINP' | 'DEFLTED' | 'WITHDRN' | 'REPLACD' | 'MATURED' | 'AMENDED' | 'RETIRED' | 'BA' | 'BN' | 'BOX' | 'CD' | 'CL' | 'CP' | 'DP' | 'LQN' | 'MTN' | 'ONITE' | 'PN' | 'PZFJ' | 'RP' | 'RVRP' | 'STN' | 'TD' | 'XCN' | 'POOL' | 'ABS' | 'CMBS' | 'CMO' | 'IET' | 'MBS' | 'MIO' | 'MPO' | 'MPP' | 'MPT' | 'AN' | 'COFO' | 'COFP' | 'GO' | 'MT' | 'RAN' | 'REV' | 'SPCLA' | 'SPCLO' | 'SPCLT' | 'TAN' | 'TAXA' | 'TECP' | 'TRAN' | 'VRDN' | 'WAR' | 'MF' | 'MLEG' | 'NONE' | '?'
    EffectiveTime?: string
    TransactTime: string
    StandInstDbType?: '0' | '1' | '2' | '3'
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

  export interface TradeCaptureReportRequestMessage extends Header {
    MsgType: 'AD'
    TradeRequestID: string
    TradeRequestType: '0' | '1' | '2' | '3' | '4'
    SubscriptionRequestType?: '0' | '1' | '2'
    ExecID?: string
    OrderID?: string
    ClOrdID?: string
    MatchStatus?: '0' | '1' | '2'
    NoDates?: number
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradeInputSource?: string
    TradeInputDevice?: string
  }

  export interface TradeCaptureReportMessage extends Header {
    MsgType: 'AE'
    TradeReportID: string
    TradeReportTransType?: 'N' | 'C' | 'R'
    TradeRequestID?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    TradeReportRefID?: string
    ExecID?: string
    SecondaryExecID?: string
    ExecRestatementReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    PreviouslyReported: string
    LastQty: number
    LastPx: number
    LastSpotRate?: number
    LastForwardPoints?: number
    LastMkt?: string
    TradeDate: string
    TransactTime: string
    SettlmntTyp?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A'
    FutSettDate?: string
    MatchStatus?: '0' | '1' | '2'
    MatchType?: 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'AQ' | 'S5' | 'M1' | 'M2' | 'MT' | 'M3' | 'M4' | 'M5' | 'M6'
    NoSides: string
  }

  export interface RegistrationInstructionsMessage extends Header {
    MsgType: 'o'
    RegistID: string
    RegistTransType: '0' | '1' | '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    RegistAcctType?: string
    TaxAdvantageType?: number
    OwnershipType?: string
    NoRegistDtls?: string
    NoDistribInsts?: string
  }

  export interface RegistrationInstructionsResponseMessage extends Header {
    MsgType: 'p'
    RegistID: string
    RegistTransType: '0' | '1' | '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    RegistStatus: string
    RegistRejReasonCode?: number
    RegistRejReasonText?: string
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
    BodyLength: string
    MsgType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'J' | 'K' | 'L' | 'M' | 'N' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'V' | 'W' | 'X' | 'Y' | 'Z' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | 'AA' | 'AB' | 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AH' | 'AI' | 'AJ' | 'AK' | 'AL' | 'AM' | 'AN' | 'AO' | 'AP' | 'AQ' | 'AR' | 'AS' | 'AT' | 'AU' | 'AV' | 'AW' | 'AX' | 'AY' | 'AZ' | 'BA' | 'BB' | 'BC' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH'
    SenderCompID: string
    TargetCompID: string
    OnBehalfOfCompID?: string
    DeliverToCompID?: string
    SecureDataLen?: string
    SecureData?: string
    MsgSeqNum: string
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
    XmlDataLen?: string
    XmlData?: string
    MessageEncoding?: 'ISO-2022-JP' | 'EUC-JP' | 'SHIFT_JIS' | 'UTF-8'
    LastMsgSeqNumProcessed?: string
    NoHops?: string
  }

  export interface HeartbeatMessage extends Header {
    MsgType: '0'
    TestReqID?: string
  }

  export interface LogonMessage extends Header {
    MsgType: 'A'
    EncryptMethod: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    HeartBtInt: number
    RawDataLength?: string
    RawData?: string
    ResetSeqNumFlag?: string
    NextExpectedMsgSeqNum?: string
    MaxMessageSize?: string
    NoMsgTypes?: string
    TestMessageIndicator?: string
    Username?: string
    Password?: string
  }

  export interface TestRequestMessage extends Header {
    MsgType: '1'
    TestReqID: string
  }

  export interface ResendRequestMessage extends Header {
    MsgType: '2'
    BeginSeqNo: string
    EndSeqNo: string
  }

  export interface RejectMessage extends Header {
    MsgType: '3'
    RefSeqNum: string
    RefTagID?: number
    RefMsgType?: string
    SessionRejectReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '99'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface SequenceResetMessage extends Header {
    MsgType: '4'
    GapFillFlag?: string
    NewSeqNo: string
  }

  export interface LogoutMessage extends Header {
    MsgType: '5'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface BusinessMessageRejectMessage extends Header {
    MsgType: 'j'
    RefSeqNum?: string
    RefMsgType: string
    BusinessRejectRefID?: string
    BusinessRejectReason: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface UserRequestMessage extends Header {
    MsgType: 'BE'
    UserRequestID: string
    UserRequestType: '1' | '2' | '3' | '4'
    Username: string
    Password?: string
    NewPassword?: string
    RawDataLength?: string
    RawData?: string
  }

  export interface UserResponseMessage extends Header {
    MsgType: 'BF'
    UserRequestID: string
    Username: string
    UserStatus?: '1' | '2' | '3' | '4' | '5' | '6'
    UserStatusText?: string
  }

  export interface AdvertisementMessage extends Header {
    MsgType: '7'
    AdvId: string
    AdvTransType: 'N' | 'C' | 'R'
    AdvRefID?: string
    NoLegs?: string
    NoUnderlyings?: string
    AdvSide: 'B' | 'S' | 'X' | 'T'
    Quantity: number
    QtyType?: '0' | '1'
    Price?: number
    Currency?: string
    TradeDate?: string
    TransactTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    URLLink?: string
    LastMkt?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  export interface IndicationOfInterestMessage extends Header {
    MsgType: '6'
    IOIID: string
    IOITransType: 'N' | 'C' | 'R'
    IOIRefID?: string
    NoUnderlyings?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    QtyType?: '0' | '1'
    IOIQty: string
    Currency?: string
    NoLegs?: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    ValidUntilTime?: string
    IOIQltyInd?: 'L' | 'M' | 'H'
    IOINaturalFlag?: string
    NoIOIQualifiers?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TransactTime?: string
    URLLink?: string
    NoRoutingIDs?: string
  }

  export interface NewsMessage extends Header {
    MsgType: 'B'
    OrigTime?: string
    Urgency?: '0' | '1' | '2'
    Headline: string
    EncodedHeadlineLen?: string
    EncodedHeadline?: string
    NoRoutingIDs?: string
    NoRelatedSym?: string
    NoLegs?: string
    NoUnderlyings?: string
    LinesOfText: string
    URLLink?: string
    RawDataLength?: string
    RawData?: string
  }

  export interface EmailMessage extends Header {
    MsgType: 'C'
    EmailThreadID: string
    EmailType: '0' | '1' | '2'
    OrigTime?: string
    Subject: string
    EncodedSubjectLen?: string
    EncodedSubject?: string
    NoRoutingIDs?: string
    NoRelatedSym?: string
    NoUnderlyings?: string
    NoLegs?: string
    OrderID?: string
    ClOrdID?: string
    LinesOfText: string
    RawDataLength?: string
    RawData?: string
  }

  export interface QuoteRequestMessage extends Header {
    MsgType: 'R'
    QuoteReqID: string
    RFQReqID?: string
    ClOrdID?: string
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    NoRelatedSym: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface QuoteResponseMessage extends Header {
    MsgType: 'AJ'
    QuoteRespID: string
    QuoteID?: string
    QuoteRespType: '1' | '2' | '3' | '4' | '5' | '6'
    ClOrdID?: string
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    IOIID?: string
    QuoteType?: '0' | '1' | '2' | '3'
    NoQuoteQualifiers?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    NoLegs?: string
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: 'M' | 'D'
    Commission?: string
    CommType?: '1' | '2' | '3' | '4' | '5' | '6'
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ExDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
  }

  export interface QuoteRequestRejectMessage extends Header {
    MsgType: 'AG'
    QuoteReqID: string
    RFQReqID?: string
    QuoteRequestRejectReason: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '99'
    NoRelatedSym: string
    NoQuoteQualifiers?: string
    QuotePriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    ExpireTime?: string
    TransactTime?: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    Price2?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface RFQRequestMessage extends Header {
    MsgType: 'AH'
    RFQReqID: string
    NoRelatedSym: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface QuoteMessage extends Header {
    MsgType: 'S'
    QuoteReqID?: string
    QuoteID: string
    QuoteRespID?: string
    QuoteType?: '0' | '1' | '2' | '3'
    NoQuoteQualifiers?: string
    QuoteResponseLevel?: '0' | '1' | '2'
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    NoLegs?: string
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: 'M' | 'D'
    CommType?: '1' | '2' | '3' | '4' | '5' | '6'
    Commission?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ExDestination?: string
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface QuoteCancelMessage extends Header {
    MsgType: 'Z'
    QuoteReqID?: string
    QuoteID: string
    QuoteCancelType: '1' | '2' | '3' | '4'
    QuoteResponseLevel?: '0' | '1' | '2'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoQuoteEntries?: string
  }

  export interface QuoteStatusRequestMessage extends Header {
    MsgType: 'a'
    QuoteStatusReqID?: string
    QuoteID?: string
    NoUnderlyings?: string
    NoLegs?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface QuoteStatusReportMessage extends Header {
    MsgType: 'AI'
    QuoteStatusReqID?: string
    QuoteReqID?: string
    QuoteID: string
    QuoteRespID?: string
    QuoteType?: '0' | '1' | '2' | '3'
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoUnderlyings?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    SettlDate2?: string
    OrderQty2?: number
    Currency?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    NoLegs?: string
    NoQuoteQualifiers?: string
    ExpireTime?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    BidForwardPoints2?: number
    OfferForwardPoints2?: number
    SettlCurrBidFxRate?: number
    SettlCurrOfferFxRate?: number
    SettlCurrFxRateCalc?: 'M' | 'D'
    CommType?: '1' | '2' | '3' | '4' | '5' | '6'
    Commission?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ExDestination?: string
    QuoteStatus?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface MassQuoteMessage extends Header {
    MsgType: 'i'
    QuoteReqID?: string
    QuoteID: string
    QuoteType?: '0' | '1' | '2' | '3'
    QuoteResponseLevel?: '0' | '1' | '2'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DefBidSize?: number
    DefOfferSize?: number
    NoQuoteSets: string
  }

  export interface MassQuoteAcknowledgementMessage extends Header {
    MsgType: 'b'
    QuoteReqID?: string
    QuoteID?: string
    QuoteStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15'
    QuoteRejectReason?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '99'
    QuoteResponseLevel?: '0' | '1' | '2'
    QuoteType?: '0' | '1' | '2' | '3'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoQuoteSets?: string
  }

  export interface MarketDataRequestMessage extends Header {
    MsgType: 'V'
    MDReqID: string
    SubscriptionRequestType: '0' | '1' | '2'
    MarketDepth: number
    MDUpdateType?: '0' | '1'
    AggregatedBook?: string
    OpenCloseSettlFlag?: string
    Scope?: string
    MDImplicitDelete?: string
    NoMDEntryTypes: string
    NoRelatedSym: string
    NoTradingSessions?: string
    ApplQueueAction?: '0' | '1' | '2' | '3'
    ApplQueueMax?: number
  }

  export interface MarketDataSnapshotFullRefreshMessage extends Header {
    MsgType: 'W'
    MDReqID?: string
    NoUnderlyings?: string
    NoLegs?: string
    FinancialStatus?: string
    CorporateAction?: string
    NetChgPrevDay?: number
    NoMDEntries: string
    ApplQueueDepth?: number
    ApplQueueResolution?: '0' | '1' | '2' | '3'
  }

  export interface MarketDataIncrementalRefreshMessage extends Header {
    MsgType: 'X'
    MDReqID?: string
    NoMDEntries: string
    ApplQueueDepth?: number
    ApplQueueResolution?: '0' | '1' | '2' | '3'
  }

  export interface MarketDataRequestRejectMessage extends Header {
    MsgType: 'Y'
    MDReqID: string
    MDReqRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C'
    NoAltMDSource?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface SecurityDefinitionRequestMessage extends Header {
    MsgType: 'c'
    SecurityReqID: string
    SecurityRequestType: '0' | '1' | '2' | '3'
    NoUnderlyings?: string
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    NoLegs?: string
    ExpirationCycle?: '0' | '1'
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityDefinitionMessage extends Header {
    MsgType: 'd'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: '1' | '2' | '3' | '4' | '5' | '6'
    NoUnderlyings?: string
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoLegs?: string
    ExpirationCycle?: '0' | '1'
    RoundLot?: number
    MinTradeVol?: number
  }

  export interface SecurityTypeRequestMessage extends Header {
    MsgType: 'v'
    SecurityReqID: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    Product?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    SecurityType?: '?' | 'ABS' | 'AMENDED' | 'AN' | 'BA' | 'BN' | 'BOX' | 'BRADY' | 'BRIDGE' | 'BUYSELL' | 'CB' | 'CD' | 'CL' | 'CMBS' | 'CMO' | 'COFO' | 'COFP' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'DEFLTED' | 'DINP' | 'DN' | 'DUAL' | 'EUCD' | 'EUCORP' | 'EUCP' | 'EUSOV' | 'EUSUPRA' | 'FAC' | 'FADN' | 'FOR' | 'FORWARD' | 'FUT' | 'GO' | 'IET' | 'LOFC' | 'LQN' | 'MATURED' | 'MBS' | 'MF' | 'MIO' | 'MLEG' | 'MPO' | 'MPP' | 'MPT' | 'MT' | 'MTN' | 'NONE' | 'ONITE' | 'OPT' | 'PEF' | 'PFAND' | 'PN' | 'PS' | 'PZFJ' | 'RAN' | 'REPLACD' | 'REPO' | 'RETIRED' | 'REV' | 'RVLV' | 'RVLVTRM' | 'SECLOAN' | 'SECPLEDGE' | 'SPCLA' | 'SPCLO' | 'SPCLT' | 'STN' | 'STRUCT' | 'SUPRA' | 'SWING' | 'TAN' | 'TAXA' | 'TBA' | 'TBILL' | 'TBOND' | 'TCAL' | 'TD' | 'TECP' | 'TERM' | 'TINT' | 'TIPS' | 'TNOTE' | 'TPRN' | 'TRAN' | 'VRDN' | 'WAR' | 'WITHDRN' | 'XCN' | 'XLINKD' | 'YANK' | 'YCD'
    SecuritySubType?: string
  }

  export interface SecurityTypesMessage extends Header {
    MsgType: 'w'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityResponseType: '1' | '2' | '3' | '4' | '5' | '6'
    TotNoSecurityTypes?: number
    LastFragment?: string
    NoSecurityTypes?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityListRequestMessage extends Header {
    MsgType: 'x'
    SecurityReqID: string
    SecurityListRequestType: '0' | '1' | '2' | '3' | '4'
    NoUnderlyings?: string
    NoLegs?: string
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface SecurityListMessage extends Header {
    MsgType: 'y'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: '0' | '1' | '2' | '3' | '4' | '5'
    TotNoRelatedSym?: number
    LastFragment?: string
    NoRelatedSym?: string
  }

  export interface DerivativeSecurityListRequestMessage extends Header {
    MsgType: 'z'
    SecurityReqID: string
    SecurityListRequestType: '0' | '1' | '2' | '3' | '4'
    SecuritySubType?: string
    Currency?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
  }

  export interface DerivativeSecurityListMessage extends Header {
    MsgType: 'AA'
    SecurityReqID: string
    SecurityResponseID: string
    SecurityRequestResult: '0' | '1' | '2' | '3' | '4' | '5'
    TotNoRelatedSym?: number
    LastFragment?: string
    NoRelatedSym?: string
  }

  export interface SecurityStatusRequestMessage extends Header {
    MsgType: 'e'
    SecurityStatusReqID: string
    NoUnderlyings?: string
    NoLegs?: string
    Currency?: string
    SubscriptionRequestType: '0' | '1' | '2'
    TradingSessionID?: string
    TradingSessionSubID?: string
  }

  export interface SecurityStatusMessage extends Header {
    MsgType: 'f'
    SecurityStatusReqID?: string
    NoUnderlyings?: string
    NoLegs?: string
    Currency?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    UnsolicitedIndicator?: string
    SecurityTradingStatus?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23'
    FinancialStatus?: string
    CorporateAction?: string
    HaltReason?: 'I' | 'X' | 'P' | 'D' | 'E' | 'M'
    InViewOfCommon?: string
    DueToRelated?: string
    BuyVolume?: number
    SellVolume?: number
    HighPx?: number
    LowPx?: number
    LastPx?: number
    TransactTime?: string
    Adjustment?: '1' | '2' | '3'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface TradingSessionStatusRequestMessage extends Header {
    MsgType: 'g'
    TradSesReqID: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    SubscriptionRequestType: '0' | '1' | '2'
  }

  export interface TradingSessionStatusMessage extends Header {
    MsgType: 'h'
    TradSesReqID?: string
    TradingSessionID: string
    TradingSessionSubID?: string
    TradSesMethod?: '1' | '2' | '3'
    TradSesMode?: '1' | '2' | '3'
    UnsolicitedIndicator?: string
    TradSesStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    TradSesStatusRejReason?: '1'
    TradSesStartTime?: string
    TradSesOpenTime?: string
    TradSesPreCloseTime?: string
    TradSesCloseTime?: string
    TradSesEndTime?: string
    TotalVolumeTraded?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface NewOrderSingleMessage extends Header {
    MsgType: 'D'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    TradeDate?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: '0' | '1' | '2'
    BookingUnit?: '0' | '1' | '2'
    PreallocMethod?: '0' | '1'
    AllocID?: string
    NoAllocs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    NoUnderlyings?: string
    PrevClosePx?: number
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    LocateReqd?: string
    TransactTime: string
    QtyType?: '0' | '1'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
  }

  export interface ExecutionReportMessage extends Header {
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
    NoContraBrokers?: string
    ListID?: string
    CrossID?: string
    OrigCrossID?: string
    CrossType?: '1' | '2' | '3' | '4'
    ExecID: string
    ExecRefID?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    WorkingIndicator?: string
    OrdRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '99'
    ExecRestatementReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '99'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: '0' | '1' | '2'
    BookingUnit?: '0' | '1' | '2'
    PreallocMethod?: '0' | '1'
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    NoUnderlyings?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    QtyType?: '0' | '1'
    OrdType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    ExecInst?: string
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
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
    LastCapacity?: '1' | '2' | '3' | '4'
    LeavesQty: number
    CumQty: number
    AvgPx: number
    DayOrderQty?: number
    DayCumQty?: number
    DayAvgPx?: number
    GTBookingInst?: '0' | '1' | '2'
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
    SettlCurrFxRateCalc?: 'M' | 'D'
    HandlInst?: '1' | '2' | '3'
    MinQty?: number
    MaxFloor?: number
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    MaxShow?: number
    BookingType?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    LastForwardPoints2?: number
    MultiLegReportingType?: '1' | '2' | '3'
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    TransBkdTime?: string
    ExecValuationPoint?: string
    ExecPriceType?: 'B' | 'C' | 'D' | 'E' | 'O' | 'P' | 'Q' | 'S'
    ExecPriceAdjustment?: number
    PriorityIndicator?: '0' | '1'
    PriceImprovement?: number
    LastLiquidityInd?: '1' | '2' | '3'
    NoContAmts?: string
    NoLegs?: string
    CopyMsgIndicator?: string
    NoMiscFees?: string
  }

  export interface DontKnowTradeMessage extends Header {
    MsgType: 'Q'
    OrderID: string
    SecondaryOrderID?: string
    ExecID: string
    DKReason: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'Z'
    NoUnderlyings?: string
    NoLegs?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    LastQty?: number
    LastPx?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderCancelReplaceRequestMessage extends Header {
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
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: '0' | '1' | '2'
    BookingUnit?: '0' | '1' | '2'
    PreallocMethod?: '0' | '1'
    AllocID?: string
    NoAllocs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    NoUnderlyings?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    TransactTime: string
    QtyType?: '0' | '1'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    ComplianceID?: string
    SolicitedFlag?: string
    Currency?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    SettlDate2?: string
    OrderQty2?: number
    Price2?: number
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    LocateReqd?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
  }

  export interface OrderCancelRequestMessage extends Header {
    MsgType: 'F'
    OrigClOrdID: string
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    ListID?: string
    OrigOrdModTime?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    NoUnderlyings?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    TransactTime: string
    ComplianceID?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderCancelRejectMessage extends Header {
    MsgType: '9'
    OrderID: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    ClOrdID: string
    ClOrdLinkID?: string
    OrigClOrdID: string
    OrdStatus: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    WorkingIndicator?: string
    OrigOrdModTime?: string
    ListID?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    TradeOriginationDate?: string
    TradeDate?: string
    TransactTime?: string
    CxlRejResponseTo: '1' | '2'
    CxlRejReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '99'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderStatusRequestMessage extends Header {
    MsgType: 'H'
    OrderID?: string
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    OrdStatusReqID?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    NoUnderlyings?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  }

  export interface OrderMassCancelRequestMessage extends Header {
    MsgType: 'q'
    ClOrdID: string
    SecondaryClOrdID?: string
    MassCancelRequestType: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    TransactTime: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderMassCancelReportMessage extends Header {
    MsgType: 'r'
    ClOrdID?: string
    SecondaryClOrdID?: string
    OrderID: string
    SecondaryOrderID?: string
    MassCancelRequestType: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    MassCancelResponse: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    MassCancelRejectReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '99'
    TotalAffectedOrders?: number
    NoAffectedOrders?: number
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    TransactTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface OrderMassStatusRequestMessage extends Header {
    MsgType: 'AF'
    MassStatusReqID: string
    MassStatusReqType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    TradingSessionID?: string
    TradingSessionSubID?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  }

  export interface NewOrderCrossMessage extends Header {
    MsgType: 's'
    CrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: '0' | '1' | '2'
    NoSides: string
    NoUnderlyings?: string
    NoLegs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
  }

  export interface CrossOrderCancelReplaceRequestMessage extends Header {
    MsgType: 't'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: '0' | '1' | '2'
    NoSides: string
    NoUnderlyings?: string
    NoLegs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    PrevClosePx?: number
    LocateReqd?: string
    TransactTime: string
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
  }

  export interface CrossOrderCancelRequestMessage extends Header {
    MsgType: 'u'
    OrderID?: string
    CrossID: string
    OrigCrossID: string
    CrossType: '1' | '2' | '3' | '4'
    CrossPrioritization: '0' | '1' | '2'
    NoSides: string
    NoUnderlyings?: string
    NoLegs?: string
    TransactTime: string
  }

  export interface NewOrderMultilegMessage extends Header {
    MsgType: 'AB'
    ClOrdID: string
    SecondaryClOrdID?: string
    ClOrdLinkID?: string
    TradeOriginationDate?: string
    TradeDate?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: '0' | '1' | '2'
    BookingUnit?: '0' | '1' | '2'
    PreallocMethod?: '0' | '1'
    AllocID?: string
    NoAllocs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoUnderlyings?: string
    PrevClosePx?: number
    NoLegs: string
    LocateReqd?: string
    TransactTime: string
    QtyType?: '0' | '1'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: '0' | '1' | '2'
  }

  export interface MultilegOrderCancelReplaceRequestMessage extends Header {
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
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    DayBookingInst?: '0' | '1' | '2'
    BookingUnit?: '0' | '1' | '2'
    PreallocMethod?: '0' | '1'
    AllocID?: string
    NoAllocs?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    CashMargin?: '1' | '2' | '3'
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    HandlInst?: '1' | '2' | '3'
    ExecInst?: string
    MinQty?: number
    MaxFloor?: number
    ExDestination?: string
    NoTradingSessions?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoUnderlyings?: string
    PrevClosePx?: number
    NoLegs: string
    LocateReqd?: string
    TransactTime: string
    QtyType?: '0' | '1'
    OrdType: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'P'
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    Price?: number
    StopPx?: number
    Currency?: string
    ComplianceID?: string
    SolicitedFlag?: string
    IOIID?: string
    QuoteID?: string
    TimeInForce?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    EffectiveTime?: string
    ExpireDate?: string
    ExpireTime?: string
    GTBookingInst?: '0' | '1' | '2'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    ForexReq?: string
    SettlCurrency?: string
    BookingType?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    CoveredOrUncovered?: '0' | '1'
    MaxShow?: number
    TargetStrategy?: number
    TargetStrategyParameters?: string
    ParticipationRate?: string
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    Designation?: string
    MultiLegRptTypeReq?: '0' | '1' | '2'
  }

  export interface BidRequestMessage extends Header {
    MsgType: 'k'
    BidID?: string
    ClientBidID: string
    BidRequestTransType: 'N' | 'C'
    ListName?: string
    TotNoRelatedSym: number
    BidType: '1' | '2' | '3'
    NumTickets?: number
    Currency?: string
    SideValue1?: string
    SideValue2?: string
    NoBidDescriptors?: string
    NoBidComponents?: string
    LiquidityIndType?: '1' | '2' | '3' | '4'
    WtAverageLiquidity?: string
    ExchangeForPhysical?: string
    OutMainCntryUIndex?: string
    CrossPercent?: string
    ProgRptReqs?: '1' | '2' | '3'
    ProgPeriodInterval?: number
    IncTaxInd?: '1' | '2'
    ForexReq?: string
    NumBidders?: number
    TradeDate?: string
    BidTradeType: 'R' | 'G' | 'A' | 'J'
    BasisPxType: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'Z'
    StrikeTime?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface BidResponseMessage extends Header {
    MsgType: 'l'
    BidID?: string
    ClientBidID?: string
    NoBidComponents: string
  }

  export interface NewOrderListMessage extends Header {
    MsgType: 'E'
    ListID: string
    BidID?: string
    ClientBidID?: string
    ProgRptReqs?: '1' | '2' | '3'
    BidType: '1' | '2' | '3'
    ProgPeriodInterval?: number
    CancellationRights?: 'Y' | 'N' | 'M' | 'O'
    MoneyLaunderingStatus?: 'Y' | 'N' | '1' | '2' | '3'
    RegistID?: string
    ListExecInstType?: '1' | '2' | '3' | '4' | '5'
    ListExecInst?: string
    EncodedListExecInstLen?: string
    EncodedListExecInst?: string
    AllowableOneSidednessPct?: string
    AllowableOneSidednessValue?: string
    AllowableOneSidednessCurr?: string
    TotNoOrders: number
    LastFragment?: string
    NoOrders: string
  }

  export interface ListStrikePriceMessage extends Header {
    MsgType: 'm'
    ListID: string
    TotNoStrikes: number
    LastFragment?: string
    NoStrikes: string
    NoUnderlyings?: string
  }

  export interface ListStatusMessage extends Header {
    MsgType: 'N'
    ListID: string
    ListStatusType: '1' | '2' | '3' | '4' | '5' | '6'
    NoRpts: string
    ListOrderStatus: '1' | '2' | '3' | '4' | '5' | '6' | '7'
    RptSeq: number
    ListStatusText?: string
    EncodedListStatusTextLen?: string
    EncodedListStatusText?: string
    TransactTime?: string
    TotNoOrders: number
    LastFragment?: string
    NoOrders: string
  }

  export interface ListExecuteMessage extends Header {
    MsgType: 'L'
    ListID: string
    ClientBidID?: string
    BidID?: string
    TransactTime: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ListCancelRequestMessage extends Header {
    MsgType: 'K'
    ListID: string
    TransactTime: string
    TradeOriginationDate?: string
    TradeDate?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ListStatusRequestMessage extends Header {
    MsgType: 'M'
    ListID: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface AllocationInstructionMessage extends Header {
    MsgType: 'J'
    AllocID: string
    AllocTransType: '0' | '1' | '2' | '3' | '4' | '5'
    AllocType: '1' | '2' | '5' | '7' | '8'
    SecondaryAllocID?: string
    RefAllocID?: string
    AllocCancReplaceReason?: '1' | '2' | '99'
    AllocIntermedReqType?: '1' | '2' | '3' | '4' | '5' | '6'
    AllocLinkID?: string
    AllocLinkType?: '0' | '1'
    BookingRefID?: string
    AllocNoOrdersType: '0' | '1'
    NoOrders?: string
    NoExecs?: string
    PreviouslyReported?: string
    ReversalIndicator?: string
    MatchType?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoUnderlyings?: string
    NoLegs?: string
    Quantity: number
    QtyType?: '0' | '1'
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    AvgPx: number
    AvgParPx?: number
    Currency?: string
    AvgPxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    BookingType?: '0' | '1' | '2'
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    AutoAcceptIndicator?: string
    Text?: string
    EncodedTextLen?: string
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
    NoAllocs: string
  }

  export interface AllocationInstructionAckMessage extends Header {
    MsgType: 'P'
    AllocID: string
    SecondaryAllocID?: string
    TradeDate?: string
    TransactTime: string
    AllocStatus: '0' | '1' | '2' | '3' | '4' | '5'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    AllocType?: '1' | '2' | '5' | '7' | '8'
    AllocIntermedReqType?: '1' | '2' | '3' | '4' | '5' | '6'
    MatchStatus?: '0' | '1' | '2'
    Product?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    SecurityType?: '?' | 'ABS' | 'AMENDED' | 'AN' | 'BA' | 'BN' | 'BOX' | 'BRADY' | 'BRIDGE' | 'BUYSELL' | 'CB' | 'CD' | 'CL' | 'CMBS' | 'CMO' | 'COFO' | 'COFP' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'DEFLTED' | 'DINP' | 'DN' | 'DUAL' | 'EUCD' | 'EUCORP' | 'EUCP' | 'EUSOV' | 'EUSUPRA' | 'FAC' | 'FADN' | 'FOR' | 'FORWARD' | 'FUT' | 'GO' | 'IET' | 'LOFC' | 'LQN' | 'MATURED' | 'MBS' | 'MF' | 'MIO' | 'MLEG' | 'MPO' | 'MPP' | 'MPT' | 'MT' | 'MTN' | 'NONE' | 'ONITE' | 'OPT' | 'PEF' | 'PFAND' | 'PN' | 'PS' | 'PZFJ' | 'RAN' | 'REPLACD' | 'REPO' | 'RETIRED' | 'REV' | 'RVLV' | 'RVLVTRM' | 'SECLOAN' | 'SECPLEDGE' | 'SPCLA' | 'SPCLO' | 'SPCLT' | 'STN' | 'STRUCT' | 'SUPRA' | 'SWING' | 'TAN' | 'TAXA' | 'TBA' | 'TBILL' | 'TBOND' | 'TCAL' | 'TD' | 'TECP' | 'TERM' | 'TINT' | 'TIPS' | 'TNOTE' | 'TPRN' | 'TRAN' | 'VRDN' | 'WAR' | 'WITHDRN' | 'XCN' | 'XLINKD' | 'YANK' | 'YCD'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoAllocs?: string
  }

  export interface AllocationReportMessage extends Header {
    MsgType: 'AS'
    AllocReportID: string
    AllocID?: string
    AllocTransType: '0' | '1' | '2' | '3' | '4' | '5'
    AllocReportRefID?: string
    AllocCancReplaceReason?: '1' | '2' | '99'
    SecondaryAllocID?: string
    AllocReportType: '3' | '4' | '5' | '8'
    AllocStatus: '0' | '1' | '2' | '3' | '4' | '5'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    RefAllocID?: string
    AllocIntermedReqType?: '1' | '2' | '3' | '4' | '5' | '6'
    AllocLinkID?: string
    AllocLinkType?: '0' | '1'
    BookingRefID?: string
    AllocNoOrdersType: '0' | '1'
    NoOrders?: string
    NoExecs?: string
    PreviouslyReported?: string
    ReversalIndicator?: string
    MatchType?: string
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoUnderlyings?: string
    NoLegs?: string
    Quantity: number
    QtyType?: '0' | '1'
    LastMkt?: string
    TradeOriginationDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    AvgPx: number
    AvgParPx?: number
    Currency?: string
    AvgPxPrecision?: number
    TradeDate: string
    TransactTime?: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    BookingType?: '0' | '1' | '2'
    GrossTradeAmt?: string
    Concession?: string
    TotalTakedown?: string
    NetMoney?: string
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    AutoAcceptIndicator?: string
    Text?: string
    EncodedTextLen?: string
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
    NoAllocs: string
  }

  export interface AllocationReportAckMessage extends Header {
    MsgType: 'AT'
    AllocReportID: string
    AllocID: string
    SecondaryAllocID?: string
    TradeDate?: string
    TransactTime: string
    AllocStatus: '0' | '1' | '2' | '3' | '4' | '5'
    AllocRejCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    AllocReportType?: '3' | '4' | '5' | '8'
    AllocIntermedReqType?: '1' | '2' | '3' | '4' | '5' | '6'
    MatchStatus?: '0' | '1' | '2'
    Product?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    SecurityType?: '?' | 'ABS' | 'AMENDED' | 'AN' | 'BA' | 'BN' | 'BOX' | 'BRADY' | 'BRIDGE' | 'BUYSELL' | 'CB' | 'CD' | 'CL' | 'CMBS' | 'CMO' | 'COFO' | 'COFP' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'DEFLTED' | 'DINP' | 'DN' | 'DUAL' | 'EUCD' | 'EUCORP' | 'EUCP' | 'EUSOV' | 'EUSUPRA' | 'FAC' | 'FADN' | 'FOR' | 'FORWARD' | 'FUT' | 'GO' | 'IET' | 'LOFC' | 'LQN' | 'MATURED' | 'MBS' | 'MF' | 'MIO' | 'MLEG' | 'MPO' | 'MPP' | 'MPT' | 'MT' | 'MTN' | 'NONE' | 'ONITE' | 'OPT' | 'PEF' | 'PFAND' | 'PN' | 'PS' | 'PZFJ' | 'RAN' | 'REPLACD' | 'REPO' | 'RETIRED' | 'REV' | 'RVLV' | 'RVLVTRM' | 'SECLOAN' | 'SECPLEDGE' | 'SPCLA' | 'SPCLO' | 'SPCLT' | 'STN' | 'STRUCT' | 'SUPRA' | 'SWING' | 'TAN' | 'TAXA' | 'TBA' | 'TBILL' | 'TBOND' | 'TCAL' | 'TD' | 'TECP' | 'TERM' | 'TINT' | 'TIPS' | 'TNOTE' | 'TPRN' | 'TRAN' | 'VRDN' | 'WAR' | 'WITHDRN' | 'XCN' | 'XLINKD' | 'YANK' | 'YCD'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoAllocs?: string
  }

  export interface ConfirmationMessage extends Header {
    MsgType: 'AK'
    ConfirmID: string
    ConfirmRefID?: string
    ConfirmReqID?: string
    ConfirmTransType: '0' | '1' | '2'
    ConfirmType: '1' | '2' | '3'
    CopyMsgIndicator?: string
    LegalConfirm?: string
    ConfirmStatus: '1' | '2' | '3' | '4' | '5'
    NoOrders?: string
    AllocID?: string
    SecondaryAllocID?: string
    IndividualAllocID?: string
    TransactTime: string
    TradeDate: string
    NoUnderlyings: string
    NoLegs: string
    AllocQty: number
    QtyType?: '0' | '1'
    Side: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    Currency?: string
    LastMkt?: string
    NoCapacities: string
    AllocAccount: string
    AllocAcctIDSource?: number
    AllocAccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    AvgPx: number
    AvgPxPrecision?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    AvgParPx?: number
    ReportedPx?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    ProcessCode?: '0' | '1' | '2' | '3' | '4' | '5' | '6'
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
    SettlCurrFxRateCalc?: 'M' | 'D'
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    SharedCommission?: string
    NoMiscFees?: string
  }

  export interface ConfirmationAckMessage extends Header {
    MsgType: 'AU'
    ConfirmID: string
    TradeDate: string
    TransactTime: string
    AffirmStatus: '1' | '2' | '3'
    ConfirmRejReason?: '1' | '2' | '99'
    MatchStatus?: '0' | '1' | '2'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface ConfirmationRequestMessage extends Header {
    MsgType: 'BH'
    ConfirmReqID: string
    ConfirmType: '1' | '2' | '3'
    NoOrders?: string
    AllocID?: string
    SecondaryAllocID?: string
    IndividualAllocID?: string
    TransactTime: string
    AllocAccount?: string
    AllocAcctIDSource?: number
    AllocAccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface SettlementInstructionsMessage extends Header {
    MsgType: 'T'
    SettlInstMsgID: string
    SettlInstReqID?: string
    SettlInstMode: '0' | '1' | '4' | '5'
    SettlInstReqRejCode?: '0' | '1' | '2' | '99'
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    ClOrdID?: string
    TransactTime: string
    NoSettlInst?: string
  }

  export interface SettlementInstructionRequestMessage extends Header {
    MsgType: 'AV'
    SettlInstReqID: string
    TransactTime: string
    AllocAccount?: string
    AllocAcctIDSource?: number
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    Product?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13'
    SecurityType?: '?' | 'ABS' | 'AMENDED' | 'AN' | 'BA' | 'BN' | 'BOX' | 'BRADY' | 'BRIDGE' | 'BUYSELL' | 'CB' | 'CD' | 'CL' | 'CMBS' | 'CMO' | 'COFO' | 'COFP' | 'CORP' | 'CP' | 'CPP' | 'CS' | 'DEFLTED' | 'DINP' | 'DN' | 'DUAL' | 'EUCD' | 'EUCORP' | 'EUCP' | 'EUSOV' | 'EUSUPRA' | 'FAC' | 'FADN' | 'FOR' | 'FORWARD' | 'FUT' | 'GO' | 'IET' | 'LOFC' | 'LQN' | 'MATURED' | 'MBS' | 'MF' | 'MIO' | 'MLEG' | 'MPO' | 'MPP' | 'MPT' | 'MT' | 'MTN' | 'NONE' | 'ONITE' | 'OPT' | 'PEF' | 'PFAND' | 'PN' | 'PS' | 'PZFJ' | 'RAN' | 'REPLACD' | 'REPO' | 'RETIRED' | 'REV' | 'RVLV' | 'RVLVTRM' | 'SECLOAN' | 'SECPLEDGE' | 'SPCLA' | 'SPCLO' | 'SPCLT' | 'STN' | 'STRUCT' | 'SUPRA' | 'SWING' | 'TAN' | 'TAXA' | 'TBA' | 'TBILL' | 'TBOND' | 'TCAL' | 'TD' | 'TECP' | 'TERM' | 'TINT' | 'TIPS' | 'TNOTE' | 'TPRN' | 'TRAN' | 'VRDN' | 'WAR' | 'WITHDRN' | 'XCN' | 'XLINKD' | 'YANK' | 'YCD'
    CFICode?: string
    EffectiveTime?: string
    ExpireTime?: string
    LastUpdateTime?: string
    StandInstDbType?: '0' | '1' | '2' | '3' | '4'
    StandInstDbName?: string
    StandInstDbID?: string
  }

  export interface TradeCaptureReportRequestMessage extends Header {
    MsgType: 'AD'
    TradeRequestID: string
    TradeRequestType: '0' | '1' | '2' | '3' | '4'
    SubscriptionRequestType?: '0' | '1' | '2'
    TradeReportID?: string
    SecondaryTradeReportID?: string
    ExecID?: string
    ExecType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    OrderID?: string
    ClOrdID?: string
    MatchStatus?: '0' | '1' | '2'
    TrdType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
    TrdSubType?: number
    TransferReason?: string
    SecondaryTrdType?: number
    TradeLinkID?: string
    TrdMatchID?: string
    NoUnderlyings?: string
    NoLegs?: string
    NoDates?: number
    ClearingBusinessDate?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    TimeBracket?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    MultiLegReportingType?: '1' | '2' | '3'
    TradeInputSource?: string
    TradeInputDevice?: string
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface TradeCaptureReportRequestAckMessage extends Header {
    MsgType: 'AQ'
    TradeRequestID: string
    TradeRequestType: '0' | '1' | '2' | '3' | '4'
    SubscriptionRequestType?: '0' | '1' | '2'
    TotNumTradeReports?: number
    TradeRequestResult: '0' | '1' | '2' | '3' | '4' | '5' | '8' | '9' | '99'
    TradeRequestStatus: '0' | '1' | '2'
    NoUnderlyings?: string
    NoLegs?: string
    MultiLegReportingType?: '1' | '2' | '3'
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface TradeCaptureReportMessage extends Header {
    MsgType: 'AE'
    TradeReportID: string
    TradeReportTransType?: '0' | '1' | '2' | '3' | '4'
    TradeReportType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    TradeRequestID?: string
    TrdType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
    TrdSubType?: number
    SecondaryTrdType?: number
    TransferReason?: string
    ExecType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    TotNumTradeReports?: number
    LastRptRequested?: string
    UnsolicitedIndicator?: string
    SubscriptionRequestType?: '0' | '1' | '2'
    TradeReportRefID?: string
    SecondaryTradeReportRefID?: string
    SecondaryTradeReportID?: string
    TradeLinkID?: string
    TrdMatchID?: string
    ExecID?: string
    OrdStatus?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E'
    SecondaryExecID?: string
    ExecRestatementReason?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '99'
    PreviouslyReported: string
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    QtyType?: '0' | '1'
    NoUnderlyings?: string
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
    AvgPxIndicator?: '0' | '1' | '2'
    MultiLegReportingType?: '1' | '2' | '3'
    TradeLegRefID?: string
    NoLegs?: string
    TransactTime: string
    SettlType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    SettlDate?: string
    MatchStatus?: '0' | '1' | '2'
    MatchType?: string
    NoSides: string
    CopyMsgIndicator?: string
    PublishTrdIndicator?: string
    ShortSaleReason?: '0' | '1' | '2' | '3' | '4' | '5'
  }

  export interface TradeCaptureReportAckMessage extends Header {
    MsgType: 'AR'
    TradeReportID: string
    TradeReportTransType?: '0' | '1' | '2' | '3' | '4'
    TradeReportType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    TrdType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
    TrdSubType?: number
    SecondaryTrdType?: number
    TransferReason?: string
    ExecType: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I'
    TradeReportRefID?: string
    SecondaryTradeReportRefID?: string
    TrdRptStatus?: '0' | '1'
    TradeReportRejectReason?: '0' | '1' | '2' | '3' | '4' | '99'
    SecondaryTradeReportID?: string
    SubscriptionRequestType?: '0' | '1' | '2'
    TradeLinkID?: string
    TrdMatchID?: string
    ExecID?: string
    SecondaryExecID?: string
    TransactTime?: string
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
    NoLegs?: string
    ClearingFeeIndicator?: 'B' | 'C' | 'E' | 'F' | 'H' | 'I' | 'L' | 'M'
    OrderCapacity?: 'A' | 'G' | 'I' | 'P' | 'R' | 'W'
    OrderRestrictions?: string
    CustOrderCapacity?: '1' | '2' | '3' | '4'
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    PositionEffect?: 'O' | 'C' | 'R' | 'F'
    PreallocMethod?: '0' | '1'
    NoAllocs?: string
  }

  export interface RegistrationInstructionsMessage extends Header {
    MsgType: 'o'
    RegistID: string
    RegistTransType: '0' | '1' | '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    RegistAcctType?: string
    TaxAdvantageType?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '999'
    OwnershipType?: 'J' | 'T' | '2'
    NoRegistDtls?: string
    NoDistribInsts?: string
  }

  export interface RegistrationInstructionsResponseMessage extends Header {
    MsgType: 'p'
    RegistID: string
    RegistTransType: '0' | '1' | '2'
    RegistRefID: string
    ClOrdID?: string
    Account?: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    RegistStatus: 'A' | 'R' | 'H' | 'N'
    RegistRejReasonCode?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '99'
    RegistRejReasonText?: string
  }

  export interface PositionMaintenanceRequestMessage extends Header {
    MsgType: 'AL'
    PosReqID: string
    PosTransType: '1' | '2' | '3' | '4' | '5'
    PosMaintAction: '1' | '2' | '3'
    OrigPosReqRefID?: string
    PosMaintRptRefID?: string
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    NoTradingSessions?: string
    TransactTime: string
    AdjustmentType?: '0' | '1' | '2' | '3'
    ContraryInstructionIndicator?: string
    PriorSpreadIndicator?: string
    ThresholdAmount?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface PositionMaintenanceReportMessage extends Header {
    MsgType: 'AM'
    PosMaintRptID: string
    PosTransType: '1' | '2' | '3' | '4' | '5'
    PosReqID?: string
    PosMaintAction: '1' | '2' | '3'
    OrigPosReqRefID: string
    PosMaintStatus: '0' | '1' | '2' | '3' | '4'
    PosMaintResult?: '0' | '1' | '99'
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    NoTradingSessions?: string
    TransactTime: string
    AdjustmentType?: '0' | '1' | '2' | '3'
    ThresholdAmount?: number
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface RequestForPositionsMessage extends Header {
    MsgType: 'AN'
    PosReqID: string
    PosReqType: '0' | '1' | '2' | '3'
    MatchStatus?: '0' | '1' | '2'
    SubscriptionRequestType?: '0' | '1' | '2'
    Account: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    NoTradingSessions?: string
    TransactTime: string
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface RequestForPositionsAckMessage extends Header {
    MsgType: 'AO'
    PosMaintRptID: string
    PosReqID?: string
    TotalNumPosReports?: number
    UnsolicitedIndicator?: string
    PosReqResult: '0' | '1' | '2' | '3' | '4' | '99'
    PosReqStatus: '0' | '1' | '2'
    Account: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface PositionReportMessage extends Header {
    MsgType: 'AP'
    PosMaintRptID: string
    PosReqID?: string
    PosReqType?: '0' | '1' | '2' | '3'
    SubscriptionRequestType?: '0' | '1' | '2'
    TotalNumPosReports?: number
    UnsolicitedIndicator?: string
    PosReqResult: '0' | '1' | '2' | '3' | '4' | '99'
    ClearingBusinessDate: string
    SettlSessID?: string
    SettlSessSubID?: string
    Account: string
    AcctIDSource?: '1' | '2' | '3' | '4' | '5' | '99'
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    SettlPrice: number
    SettlPriceType: '1' | '2'
    PriorSettlPrice: number
    NoLegs?: string
    NoUnderlyings?: string
    RegistStatus?: 'A' | 'R' | 'H' | 'N'
    DeliveryDate?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface AssignmentReportMessage extends Header {
    MsgType: 'AW'
    AsgnRptID: string
    TotNumAssignmentReports?: number
    LastRptRequested?: string
    Account?: string
    AccountType: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    ThresholdAmount?: number
    SettlPrice: number
    SettlPriceType: '1' | '2'
    UnderlyingSettlPrice: number
    ExpireDate?: string
    AssignmentMethod: 'R' | 'P'
    AssignmentUnit?: number
    OpenInterest: string
    ExerciseMethod: 'A' | 'M'
    SettlSessID: string
    SettlSessSubID: string
    ClearingBusinessDate: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface CollateralRequestMessage extends Header {
    MsgType: 'AX'
    CollReqID: string
    CollAsgnReason: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    TransactTime: string
    ExpireTime?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoMiscFees?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface CollateralAssignmentMessage extends Header {
    MsgType: 'AY'
    CollAsgnID: string
    CollReqID?: string
    CollAsgnReason: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    CollAsgnTransType: '0' | '1' | '2' | '3' | '4'
    CollAsgnRefID?: string
    TransactTime: string
    ExpireTime?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoMiscFees?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface CollateralResponseMessage extends Header {
    MsgType: 'AZ'
    CollRespID: string
    CollAsgnID: string
    CollReqID?: string
    CollAsgnReason: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7'
    CollAsgnTransType?: '0' | '1' | '2' | '3' | '4'
    CollAsgnRespType: '0' | '1' | '2' | '3'
    CollAsgnRejectReason?: '0' | '1' | '2' | '3' | '4' | '5' | '99'
    TransactTime: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoMiscFees?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
    AccruedInterestAmt?: string
    EndAccruedInterestAmt?: string
    StartCash?: string
    EndCash?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface CollateralReportMessage extends Header {
    MsgType: 'BA'
    CollRptID: string
    CollInquiryID?: string
    CollStatus: '0' | '1' | '2' | '3' | '4'
    TotNumReports?: number
    LastRptRequested?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    NoMiscFees?: string
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface CollateralInquiryMessage extends Header {
    MsgType: 'BB'
    CollInquiryID?: string
    NoCollInquiryQualifier?: string
    SubscriptionRequestType?: '0' | '1' | '2'
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    MarginExcess?: string
    TotalNetValue?: string
    CashOutstanding?: string
    Side?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
    Price?: number
    PriceType?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
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
    EncodedTextLen?: string
    EncodedText?: string
  }

  export interface NetworkStatusRequestMessage extends Header {
    MsgType: 'BC'
    NetworkRequestType: '1' | '2' | '4' | '8'
    NetworkRequestID: string
    NoCompIDs?: string
  }

  export interface NetworkStatusResponseMessage extends Header {
    MsgType: 'BD'
    NetworkStatusResponseType: '1' | '2'
    NetworkRequestID?: string
    NetworkResponseID?: string
    LastNetworkResponseID?: string
    NoCompIDs: string
  }

  export interface CollateralInquiryAckMessage extends Header {
    MsgType: 'BG'
    CollInquiryID: string
    CollInquiryStatus: '0' | '1' | '2' | '3' | '4'
    CollInquiryResult?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '99'
    NoCollInquiryQualifier?: string
    TotNumReports?: number
    Account?: string
    AccountType?: '1' | '2' | '3' | '4' | '6' | '7' | '8'
    ClOrdID?: string
    OrderID?: string
    SecondaryOrderID?: string
    SecondaryClOrdID?: string
    NoExecs?: string
    NoTrades?: string
    SettlDate?: string
    Quantity?: number
    QtyType?: '0' | '1'
    Currency?: string
    NoLegs?: string
    NoUnderlyings?: string
    TradingSessionID?: string
    TradingSessionSubID?: string
    SettlSessID?: string
    SettlSessSubID?: string
    ClearingBusinessDate?: string
    ResponseTransportType?: '0' | '1'
    ResponseDestination?: string
    Text?: string
    EncodedTextLen?: string
    EncodedText?: string
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

export type DefinitionsByBeginString =
  | FIX40.Messages
  | FIX41.Messages
  | FIX42.Messages
  | FIX43.Messages
  | FIX44.Messages
