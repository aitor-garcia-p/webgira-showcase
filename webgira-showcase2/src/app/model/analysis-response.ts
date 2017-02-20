export class AnalysisResponse{

timestamp:number;
computationTime:number;
statusMsg:string;
text:AnalyzedText;
}

export class AnalyzedText{
  language:string;
  content:string;
  overallPolarity:Polarity;
  sentences:AnalyzedSentence[];
}

export class Polarity{
  value:number;
}

export class AnalyzedSentence{
  number:number;
  content:string;
  offset:number;
  length:number;
  polarity:Polarity;
  tokens:Token[];
  topics:Topic[];
}

export class Token{
  number:number;
  offset:number;
  length:number;
  form:string;
  lemma:string;
  pos:string;
  negation:boolean;
  negated:boolean;
  polarityValue:Polarity;
  topicName:string;
}

export class Topic{
  name:string;
  polarity:Polarity;
}
