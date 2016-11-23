
export class NNAnalysisResponse {
  tokensInfo: TokenInfo[];
}

export class TokenInfo {
  token: string;
  aspectTerm: boolean;
  entity: string;
  attribute: string;
  polarity: string;

}
